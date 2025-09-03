module "database" {
    source = "../../../modules/database"

    visitor_count_table_name = local.visitor_count_table_name
    visitor_ips_table_name = local.visitor_ips_table_name
    visitor_count_read_capacity = local.visitor_count_read_capacity
    visitor_count_write_capacity = local.visitor_count_write_capacity
    visitor_count_partition_key = local.visitor_count_partition_key
    visitor_ips_read_capacity = local.visitor_ips_read_capacity
    visitor_ips_write_capacity = local.visitor_ips_write_capacity
    visitor_ips_partition_key = local.visitor_ips_partition_key
}

module "lambda_api" {
    source = "../../../modules/lambda_api"

    lambda_function_name = local.lambda_function_name
    lambda_role_name = local.lambda_role_name
    api_gw_name = local.api_gw_name
    acm_cert_arn = local.acm_cert_arn
    api_domain_name = local.api_domain_name
    hosted_zone_id = local.hosted_zone_id
    region = local.region
}