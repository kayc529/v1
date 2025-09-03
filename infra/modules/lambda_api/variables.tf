variable "lambda_function_name" {
  description = "Name of lambda function"
  type        = string
}

variable "lambda_role_name" {
  description = "Name of lambda function"
  type        = string
}

variable "api_gw_name" {
  description = "Name of API Gateway"
  type        = string
}

variable "acm_cert_arn" {
  description = "ACM Cert Arn for API Domain name"
  type        = string
}

variable "api_domain_name" {
  description = "Domain name for API"
  type        = string
}

variable "hosted_zone_id" {
  description = "Route53 Hosted Zone Id"
  type        = string
}

variable "region" {
  description = "Region"
  type        = string
} 
