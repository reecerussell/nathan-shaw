resource "aws_s3_bucket" "portfolio_bucket" {
  bucket = "portfolio"
  acl    = "public-read"
  policy = data.aws_iam_policy_document.portfolio_policy.json
  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}
