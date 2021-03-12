resource "aws_route53_zone" "primary" {
  name = var.DOMAIN_NAME
}

resource "aws_route53_record" "www" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = var.DOMAIN_NAME
  type    = "A"
  alias {
    name                   = aws_s3_bucket.portfolio_bucket.website_domain
    zone_id                = aws_s3_bucket.portfolio_bucket.hosted_zone_id
    evaluate_target_health = false
  }
}
