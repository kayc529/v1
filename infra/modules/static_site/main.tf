data "aws_caller_identity" "me" {
  
}

# S3 bucket (adopt existing)
resource "aws_s3_bucket" "site" {
    bucket = var.bucket_name
    
    lifecycle {
      prevent_destroy = true
    }
}

resource "aws_s3_bucket_public_access_block" "site" {
  bucket = aws_s3_bucket.site.id
  block_public_acls = true
  block_public_policy = true
  ignore_public_acls = true
  restrict_public_buckets = true
}

# CloudFront
resource "aws_cloudfront_origin_access_control" "oac" {
  name = "oac-${var.bucket_name}"
  origin_access_control_origin_type = "s3"
  signing_behavior = "always"
  signing_protocol = "sigv4"

  lifecycle {
    ignore_changes = [ name ]
  }
}

locals {
  origin_id = "s3-${var.bucket_name}"
  aliases   = length(var.domain_aliases) > 0 ? var.domain_aliases : [var.domain_root]
}

resource "aws_cloudfront_distribution" "this" {
  enabled = true
  is_ipv6_enabled = true
  # comment = "Static site for ${var.domain_root}"
  default_root_object = var.default_root_object
  aliases = local.aliases
  price_class = var.price_class

  origin {
    domain_name = aws_s3_bucket.site.bucket_regional_domain_name
    origin_id = local.origin_id
    origin_access_control_id = aws_cloudfront_origin_access_control.oac.id
  }

  custom_error_response {
    error_caching_min_ttl = 0
    error_code = 403
    response_code = 200
    response_page_path = "/index.html"
  }

  custom_error_response {
    error_caching_min_ttl = 0
    error_code = 404
    response_code = 200
    response_page_path = "/index.html"
  }

  default_cache_behavior {
    target_origin_id = local.origin_id
    allowed_methods = ["GET", "HEAD","OPTIONS"]
    cached_methods = ["GET","HEAD"]
    viewer_protocol_policy = "redirect-to-https"
    compress = true
    cache_policy_id = var.cache_policy_id
    response_headers_policy_id = var.response_headers_policy_id

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn = var.acm_cert_arn
    ssl_support_method = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  lifecycle {
    prevent_destroy = true
    ignore_changes = [ 
        default_cache_behavior[0].lambda_function_association,
        default_cache_behavior[0].function_association,
        ordered_cache_behavior,
        viewer_certificate[0].acm_certificate_arn,
        tags
     ]
  }
}

# Bucket policy allowing CloudFront to read via OAC
data "aws_iam_policy_document" "site_policy" {
  statement {
    sid = "AllowCloudFrontRead"
    effect = "Allow"
    actions = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.site.arn}/*"]

    principals {
      type = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    condition {
      test = "StringEquals"
      variable = "AWS:SourceArn"
      values = [aws_cloudfront_distribution.this.arn]
    }
  }
}

resource "aws_s3_bucket_policy" "site" {
    bucket = aws_s3_bucket.site.id
    policy = data.aws_iam_policy_document.site_policy.json
}

# DNS
data "aws_route53_zone" "root" {
    zone_id = var.hosted_zone_id
    # name = "kay-cheung.com."
}

resource "aws_route53_record" "apex" {
  zone_id = data.aws_route53_zone.root.zone_id
  name = var.domain_root
  type = "A"

  alias {
    name                   = aws_cloudfront_distribution.this.domain_name
    zone_id                = aws_cloudfront_distribution.this.hosted_zone_id
    evaluate_target_health = false
  }

  lifecycle {
    prevent_destroy = true
  }
}

resource "aws_route53_record" "www" {
  count = contains(local.aliases, "www.${var.domain_root}")? 1: 0
  zone_id = data.aws_route53_zone.root.zone_id
  name = "www.${var.domain_root}"
  type = "A"

  alias {
    name                   = aws_cloudfront_distribution.this.domain_name
    zone_id                = aws_cloudfront_distribution.this.hosted_zone_id
    evaluate_target_health = false
  }

  lifecycle {
    prevent_destroy = true
  }
}

