# AWS managed policies
resource "aws_iam_role_policy_attachment" "basic" {
  role       = aws_iam_role.role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

resource "aws_iam_role_policy_attachment" "vpc" {
  role       = aws_iam_role.role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaVPCAccessExecutionRole"
}

# IAM role for Lambda execution
data "aws_iam_policy_document" "ddb_inline" {
  statement {
    effect = "Allow"

    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }

    actions = [
      "dynamodb:PutItem",
      "dynamodb:DeleteItem",
      "dynamodb:GetItem",
      "dynamodb:UpdateItem",
    ]

     resources = [
        "arn:aws:dynamodb:us-east-1:438886544105:table/crc-visitor-count",
        "arn:aws:dynamodb:us-east-1:438886544105:table/crc-visitor-ips"
     ]
  }
}

resource "aws_iam_role_policy" "ddb_inline" {
  name   = "crc-lambda-ddb"
  role   = aws_iam_role.role.id
  policy = data.aws_iam_policy_document.ddb_inline.json
}

data "aws_iam_policy_document" "assume_role" {
  statement { 
    effect = "Allow"

    principals { 
      type = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }

    actions = ["sts:AssumeRole"] 
  } 
}

resource "aws_iam_role" "role" {
  name               = var.lambda_role_name
  assume_role_policy = data.aws_iam_policy_document.assume_role.json

  # lifecycle {
  #   prevent_destroy = true
  # }
}

# Package the Lambda function code
data "archive_file" "zip" {
  type        = "zip"
  source_dir = "${path.module}/../../../backend"
  output_path = "${path.module}/function.zip"
}

# Lambda function
resource "aws_lambda_function" "api" {
  filename         = data.archive_file.zip.output_path
  function_name    = var.lambda_function_name
  role             = aws_iam_role.role.arn
  handler          = "index.handler"
  source_code_hash = data.archive_file.zip.output_base64sha256
  publish = true

  runtime = "nodejs22.x"

  environment {
    variables = {
      CORS_ORIGINS = "https://kay-cheung.com"
      IP_SALT = "ReigenArataka<3"
      IP_TTL_DAYS = "30"
      VISITOR_COUNT_TABLE = "crc-visitor-count"
      VISITOR_IP_TABLE = "crc-visitor-ips"
    }
  }
}

# dev alias
resource "aws_lambda_alias" "lambda_dev_alias" {
  name             = "dev"
  description      = "dev alias"
  function_name    = aws_lambda_function.api.arn
  function_version = "$LATEST"
}

#prod alias
resource "aws_lambda_alias" "lambda_prod_alias" {
  name             = "prod"
  description      = "stable release"
  function_name    = aws_lambda_function.api.arn
  function_version = "4"

  #function version will be updated in Github Action CI
  lifecycle {
    ignore_changes = [ function_version ]
  }
}

#API Gateway
resource "aws_api_gateway_rest_api" "api_gw" {
  name = var.api_gw_name
}

# Resources
# /v1
resource "aws_api_gateway_resource" "v1" {
  parent_id   = aws_api_gateway_rest_api.api_gw.root_resource_id
  path_part   = "v1"
  rest_api_id = aws_api_gateway_rest_api.api_gw.id
}

# /v1/visitors
resource "aws_api_gateway_resource" "visitors" {
  parent_id   = aws_api_gateway_resource.v1.id
  path_part   = "visitors"
  rest_api_id = aws_api_gateway_rest_api.api_gw.id
}

# Method
# GET /v1/visitors
resource "aws_api_gateway_method" "get_visitors" {
  authorization = "NONE"
  http_method   = "GET"
  resource_id   = aws_api_gateway_resource.visitors.id
  rest_api_id   = aws_api_gateway_rest_api.api_gw.id
}

# Integration (Lambda proxy)
resource "aws_api_gateway_integration" "integration" {
  rest_api_id             = aws_api_gateway_rest_api.api_gw.id
  resource_id             = aws_api_gateway_resource.visitors.id
  http_method             = aws_api_gateway_method.get_visitors.http_method
  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri = "arn:aws:apigateway:${var.region}:lambda:path/2015-03-31/functions/${aws_lambda_function.api.arn}:$${stageVariables.lambdaAlias}/invocations"
}


# Deployment
locals {
    apigw_fingerprint = sha1(jsonencode({
        resources = [
            aws_api_gateway_resource.v1.path,
            aws_api_gateway_resource.visitors.path
        ]

        methods = {
            get_visitors = {
                http_method = aws_api_gateway_method.get_visitors.http_method
                authorization = aws_api_gateway_method.get_visitors.authorization
                api_key_required = aws_api_gateway_method.get_visitors.api_key_required
            }
        }

        integrations = {
            visitors_get = {
                type                    = aws_api_gateway_integration.integration.type
                uri                     = aws_api_gateway_integration.integration.uri
                integration_http_method = aws_api_gateway_integration.integration.integration_http_method
            }
        }

        gateway_responses = [
            aws_api_gateway_gateway_response.default_4xx.response_templates,
            aws_api_gateway_gateway_response.default_5xx.response_templates,
        ]
    }))
}

resource "aws_api_gateway_deployment" "api_deployment_prod" {
  rest_api_id = aws_api_gateway_rest_api.api_gw.id  

  triggers = {
    redeployment = local.apigw_fingerprint
  }

  lifecycle {
    create_before_destroy = true
  }

  depends_on = [
    aws_api_gateway_integration.integration,
    aws_api_gateway_gateway_response.default_4xx,
    aws_api_gateway_gateway_response.default_5xx
  ]
}

resource "aws_api_gateway_deployment" "api_deployment_dev" {
  rest_api_id = aws_api_gateway_rest_api.api_gw.id  

  triggers = {
    redeployment = local.apigw_fingerprint
  }

  lifecycle {
    create_before_destroy = true
  }

  depends_on = [
    aws_api_gateway_integration.integration,
    aws_api_gateway_gateway_response.default_4xx,
    aws_api_gateway_gateway_response.default_5xx
  ]
}

# Stage
# prod
resource "aws_api_gateway_stage" "prod_stage" {
  deployment_id = aws_api_gateway_deployment.api_deployment_prod.id
  rest_api_id   = aws_api_gateway_rest_api.api_gw.id
  stage_name    = "prod"
  variables = { lambdaAlias = "prod" }
}

#dev
resource "aws_api_gateway_stage" "dev_stage" {
  deployment_id = aws_api_gateway_deployment.api_deployment_dev.id
  rest_api_id   = aws_api_gateway_rest_api.api_gw.id
  stage_name    = "dev"
  variables = { lambdaAlias = "dev" }
}

# lambda resource-based policy
resource "aws_lambda_permission" "lambda_permission" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.api.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_api_gateway_rest_api.api_gw.execution_arn}/*/GET/v1/visitors"
}

# DNS
resource "aws_api_gateway_domain_name" "domain_name" {
  certificate_arn = var.acm_cert_arn
  domain_name     = var.api_domain_name
}

resource "aws_route53_record" "record" {
  zone_id = var.hosted_zone_id
  type    = "A"
  name = aws_api_gateway_domain_name.domain_name.domain_name

  alias {
    evaluate_target_health = false
    name                   = aws_api_gateway_domain_name.domain_name.cloudfront_domain_name
    zone_id                = aws_api_gateway_domain_name.domain_name.cloudfront_zone_id
  }

  lifecycle {
    prevent_destroy = true
  }
}

resource "aws_api_gateway_base_path_mapping" "this" {
  api_id      = aws_api_gateway_rest_api.api_gw.id
  stage_name  = aws_api_gateway_stage.prod_stage.stage_name
  domain_name = aws_api_gateway_domain_name.domain_name.domain_name
}

# Gateway Responses
# Default 4XX responses
resource "aws_api_gateway_gateway_response" "default_4xx" {
  rest_api_id   = aws_api_gateway_rest_api.api_gw.id
  response_type = "DEFAULT_4XX"

  response_parameters = {
    "gatewayresponse.header.Access-Control-Allow-Origin"  = "'https://kay-cheung.com'"
    "gatewayresponse.header.Access-Control-Allow-Methods" = "'GET,OPTIONS'"
    "gatewayresponse.header.Access-Control-Allow-Headers" = "'Content-Type'"
  }

  response_templates = {
    "application/json" = "{\"message\":$context.error.messageString}"
  }
}

# Default 5XX responses
resource "aws_api_gateway_gateway_response" "default_5xx" {
  rest_api_id   = aws_api_gateway_rest_api.api_gw.id
  response_type = "DEFAULT_5XX"

  response_parameters = {
    "gatewayresponse.header.Access-Control-Allow-Origin"  = "'https://kay-cheung.com'"
    "gatewayresponse.header.Access-Control-Allow-Methods" = "'GET,OPTIONS'"
    "gatewayresponse.header.Access-Control-Allow-Headers" = "'Content-Type'"
  }

  response_templates = {
    "application/json" = "{\"message\":$context.error.messageString}"
  }
}



# lambda function itself:
# - aws_iam_role (execution role for the lambda function)
# - aws_lambda_function
# - aws_lambda_alias x2 (dev, prod)

# API Gateway:
# - aws_api_gateway_rest_api
# - aws_api_gateway_resource x2 (v1, visitors)
# - aws_api_gateway_method
# - aws_api_gateway_integration x2 (dev, prod)
# - aws_lambda_permission
# - aws_api_gateway_deployment x2 (dev, prod)
# - aws_api_gateway_stage x2 (dev, prod)
# - aws_api_gateway_domain_name
# - aws_route53_record
# - aws_api_gateway_base_path_mapping
# - aws_api_gateway_gateway_response x2 (4xx & 5xx)

