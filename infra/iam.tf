data "aws_iam_policy_document" "portfolio_policy" {
  statement {
    actions = ["s3:GetObject"]
    principals {
      identifiers = ["*"]
      type        = "AWS"
    }
    resources = ["arn:aws:s3:::${var.DOMAIN_NAME}/*"]
  }
}
