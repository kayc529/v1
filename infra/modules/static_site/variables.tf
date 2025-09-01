variable "domain_root" {
    description = "Apex domain"
    type        = string
}

variable "domain_aliases" {
  description   = "CloudFront alternate domain names"
  type          = list(string)
  default       = []
}

variable "bucket_name" {
    description = "Existing S3 bucket that stores file of the static site"
    type        = string
}

variable "hosted_zone_id" {
  description = "Route53 hosted zone ID for domain_root"
  type        = string
}

variable "acm_cert_arn" {
  description = "ACM certificate ARN in us-east-1 for CloudFront"
  type        = string
}

variable "price_class" {
  description = "CloudFront price class"
  type        = string
  default     = "PriceClass_All"
}

variable "default_root_object" {
  description = "Default root object"
  type        = string
  default     = "index.html"
}

variable "cache_policy_id" {
  description = "CloudFront Distribution Cache Policy in default cache behavior"
  type        = string
}

variable "response_headers_policy_id" {
  description = "CloudFront Distribution Response Headers Policy in default cache behavior"
  type        = string
}