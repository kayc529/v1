output "cloudfront_id" {
  value = aws_cloudfront_distribution.this.id
}

output "cloudfront_domain" {
  value = aws_cloudfront_distribution.this.domain_name
}

output "bucket_name" {
  value = aws_s3_bucket.site.bucket
}