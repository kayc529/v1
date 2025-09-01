module "static_site" {
  source = "../../../modules/static_site"

  domain_root = local.domain_root
  domain_aliases = local.domain_aliases
  bucket_name = local.bucket_name
  hosted_zone_id = local.hosted_zone_id
  acm_cert_arn = local.acm_cert_arn
  price_class = local.price_class
  default_root_object = local.default_root_object
  cache_policy_id = local.cache_policy_id
  response_headers_policy_id = local.response_headers_policy_id
}