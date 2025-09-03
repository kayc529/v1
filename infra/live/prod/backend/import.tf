# visitor count table
import {
    to = module.database.aws_dynamodb_table.visitor_count
    id = "crc-visitor-count"
}

# visitor ips table
import {
    to = module.database.aws_dynamodb_table.visitor_ips
    id = "crc-visitor-ips"
}

# lambda role
import {
    to = module.lambda_api.aws_iam_role.role
    id = "crc-visitor-count-ddb-role-p1f78oh2"
}

import {
  to = module.lambda_api.aws_iam_role_policy_attachment.basic
  id = "crc-visitor-count-ddb-role-p1f78oh2/arn:aws:iam::438886544105:policy/service-role/AWSLambdaVPCAccessExecutionRole-4f1b1f71-b465-4a95-9a22-3042cfaa3dea"
}

import {
  to = module.lambda_api.aws_iam_role_policy_attachment.vpc
  id = "crc-visitor-count-ddb-role-p1f78oh2/arn:aws:iam::438886544105:policy/service-role/AWSLambdaBasicExecutionRole-6b2a036a-3b8a-42c7-be2a-e1dba3bfc90a"
}

import {
  to = module.lambda_api.aws_iam_role_policy.ddb_inline
  id = "crc-visitor-count-ddb-role-p1f78oh2:crc-lambda-ddb"
}

# lambda function
import {
    to = module.lambda_api.aws_lambda_function.api
    id = "crc-visitor-count-ddb"
}

# dev alias
import {
    to = module.lambda_api.aws_lambda_alias.lambda_dev_alias
    id = "crc-visitor-count-ddb/dev"
}

# prod alias
import {
    to = module.lambda_api.aws_lambda_alias.lambda_prod_alias
    id = "crc-visitor-count-ddb/prod"
}

# lambda permission
import { 
    to = module.lambda_api.aws_lambda_permission.lambda_permission
    id = "crc-visitor-count-ddb/AllowExecutionFromAPIGateway"
}

# api gateway
import {
    to = module.lambda_api.aws_api_gateway_rest_api.api_gw
    id = "4gktk6uc0i"
}

# v1 resource
import {
    to = module.lambda_api.aws_api_gateway_resource.v1
    id = "4gktk6uc0i/mxglcq"
}

# vitiors resource
import {
    to = module.lambda_api.aws_api_gateway_resource.visitors
    id = "4gktk6uc0i/pjzbpc"
}

# get_visitors method
import {
    to = module.lambda_api.aws_api_gateway_method.get_visitors
    id = "4gktk6uc0i/pjzbpc/GET"
}

# integration
import {
    to = module.lambda_api.aws_api_gateway_integration.integration
    id = "4gktk6uc0i/pjzbpc/GET"
}

# prod & dev deployment
import {
    to = module.lambda_api.aws_api_gateway_deployment.api_deployment_prod
    id = "4gktk6uc0i/xyqerv"
}

import {
    to = module.lambda_api.aws_api_gateway_deployment.api_deployment_dev
    id = "4gktk6uc0i/lg15ln"
}

# prod & dev stage
import {
    to = module.lambda_api.aws_api_gateway_stage.prod_stage
    id = "4gktk6uc0i/prod"
}

import {
    to = module.lambda_api.aws_api_gateway_stage.dev_stage
    id = "4gktk6uc0i/dev"
}


# api gw domain name
import {
    to = module.lambda_api.aws_api_gateway_domain_name.domain_name
    id = "api.kay-cheung.com"
}

# base path mapping
import {
    to = module.lambda_api.aws_api_gateway_base_path_mapping.this
    id = "api.kay-cheung.com/(none)"
}

# route53 record
import {
    to = module.lambda_api.aws_route53_record.record
    id = "Z064203212XZBCOE02CQK_api.kay-cheung.com_A"
}

# api gateway response 4xx & 5xx
import {
  to = module.lambda_api.aws_api_gateway_gateway_response.default_4xx
  id = "4gktk6uc0i/DEFAULT_4XX"
}

import {
  to = module.lambda_api.aws_api_gateway_gateway_response.default_5xx
  id = "4gktk6uc0i/DEFAULT_5XX"
}