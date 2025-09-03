output "dynamodb_table_visitor_count_arn" {
  value = aws_dynamodb_table.visitor_count.arn
}

output "dynamodb_table_visitor_count_name" {
  value = aws_dynamodb_table.visitor_count.name
}

output "dynamodb_table_visitor_ips_arn" {
  value = aws_dynamodb_table.visitor_ips.arn
}

output "dynamodb_table_visitor_ips_name" {
  value = aws_dynamodb_table.visitor_ips.name
}