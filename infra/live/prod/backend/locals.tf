locals {
    # Database
    visitor_count_table_name = "crc-visitor-count"
    visitor_ips_table_name = "crc-visitor-ips"
    visitor_count_read_capacity = 5
    visitor_count_write_capacity = 5
    visitor_count_partition_key = "id"
    visitor_ips_read_capacity = 2
    visitor_ips_write_capacity = 2
    visitor_ips_partition_key = "ip"

    # Lambda API
    lambda_function_name = "crc-visitor-count-ddb"
    lambda_role_name = "crc-visitor-count-ddb-role-p1f78oh2"
    api_gw_name = "crc-api"
    acm_cert_arn = "arn:aws:acm:us-east-1:438886544105:certificate/ef7b6928-7ef7-47a7-85a5-b766e002ca69"
    api_domain_name = "api.kay-cheung.com"
    hosted_zone_id = "Z064203212XZBCOE02CQK"
    region = "us-east-1"

}