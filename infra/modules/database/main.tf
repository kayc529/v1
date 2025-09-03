# VISITOR COUNT TABLE
resource "aws_dynamodb_table" "visitor_count" {
  name           = var.visitor_count_table_name
  billing_mode   = "PROVISIONED"
  read_capacity  = var.visitor_count_read_capacity
  write_capacity = var.visitor_count_write_capacity
  hash_key       = var.visitor_count_partition_key

  attribute {
    name = var.visitor_count_partition_key
    type = "S"
  }

  server_side_encryption {
    enabled = true
  }

  point_in_time_recovery {
    enabled = true
  }

  lifecycle {
    prevent_destroy = true
  }
}

# VISITOR IPS TABLE
resource "aws_dynamodb_table" "visitor_ips" {
  name           = var.visitor_ips_table_name
  billing_mode   = "PROVISIONED"
  read_capacity  = var.visitor_ips_read_capacity
  write_capacity = var.visitor_ips_write_capacity
  hash_key       = var.visitor_ips_partition_key

  attribute {
    name = var.visitor_ips_partition_key
    type = "S"
  }

  server_side_encryption {
    enabled = true
  }

  point_in_time_recovery {
    enabled = true
  }

  ttl {
    attribute_name = "expired_on"
    enabled        = true
  }

  lifecycle {
    prevent_destroy = true
  }
}