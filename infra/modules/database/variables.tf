variable "visitor_count_table_name" {
  description = "Name of visitor count table"
  type        = string
}

variable "visitor_ips_table_name" {
  description = "Name of visitor IPs table"
  type        = string
}

variable "visitor_count_read_capacity" {
  description = "Visitor Count table read capacity"
  type        = number
  default     = 1
}

variable "visitor_count_write_capacity" {
  description = "Visitor Count table write capacity"
  type        = number
  default     = 1
}

variable "visitor_count_partition_key" {
  description = "Partition key of Visitor IPs table"
  type        = string
}

variable "visitor_ips_read_capacity" {
  description = "Visitor IPs table read capacity"
  type        = number
  default     = 1
}

variable "visitor_ips_write_capacity" {
  description = "Visitor IPs table write capacity"
  type        = number
  default     = 1
}

variable "visitor_ips_partition_key" {
  description = "Partition key of Visitor IPs table"
  type        = string
}

