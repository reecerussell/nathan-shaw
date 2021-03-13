provider "aws" {
  region     = "eu-west-2"
  access_key = var.AWS_ACCESS_KEY
  secret_key = var.AWS_SECRET_KEY
}

terraform {
  backend "s3" {
    bucket                  = "portfolio-terraform-state"
    key                     = "portfolio.tfstate"
    region                  = "eu-west-2"
  }
}
