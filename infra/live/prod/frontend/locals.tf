locals {
  domain_root = "kay-cheung.com"
  domain_aliases = ["kay-cheung.com", "www.kay-cheung.com"]
  bucket_name = "kay-cheung-v1"
  hosted_zone_id = "Z064203212XZBCOE02CQK"
  acm_cert_arn = "arn:aws:acm:us-east-1:438886544105:certificate/d07c49cd-b963-43ad-8ad9-9fdaf3c8d383"
  price_class = "PriceClass_All"
  default_root_object = "index.html"
  cache_policy_id              = "658327ea-f89d-4fab-a63d-7e88639e58f6"
  response_headers_policy_id   = "67f7725c-6f97-4210-82d7-5512b31e9d03"
}