terraform {
  backend "s3" {
    bucket               = "obduk-cms-terraform-states"
    dynamodb_table       = "obduk-cms-terraform-locks"
    key                  = "app_environment.tfstate"
    region               = "eu-west-1"
    workspace_key_prefix = "workspaces"
  }
}

module "aws_cloudfront" {
  source = "./modules/aws_cloudfront"

  app_name      = local.app_name
  assets_domain = module.aws_s3.assets_domain
  logs_domain   = module.aws_s3.logs_domain
}

module "aws_cognito" {
  source = "./modules/aws_cognito"

  app_name = local.app_name
  domains  = local.www_domains
}

module "aws_iam" {
  source = "./modules/aws_iam"

  app_name                 = local.app_name
  aws_cognito_arn          = module.aws_cognito.arn
  aws_s3_assets_bucket_arn = module.aws_s3.assets_bucket_arn
}

module "aws_s3" {
  source = "./modules/aws_s3"

  app_name               = local.app_name
  aws_cloudfront_iam_arn = module.aws_cloudfront.iam_arn
}

module "aws_ses" {
  source = "./modules/aws_ses"

  domains = local.workspace["root_domains"]
}

module "cloudflare" {
  source = "./modules/cloudflare"

  aws_region              = local.aws_region
  dmarc_record            = local.dmarc_record
  gsuite_domainkeys       = local.workspace["gsuite_domainkeys"]
  gsuite_domains          = local.workspace["gsuite_domains"]
  heroku_domain           = module.heroku.domain
  mailchip_domains        = local.workspace["mailchip_domains"]
  root_domains            = local.workspace["root_domains"]
  ses_dkim_tokens         = module.aws_ses.dkim_tokens
  ses_mail_from_domains   = module.aws_ses.mail_from_domains
  ses_verification_tokens = module.aws_ses.verification_tokens
}

module "heroku" {
  source = "./modules/heroku"

  app_name                  = local.app_name
  aws_access_key_id         = module.aws_iam.access_key_id
  aws_cloudfront_domain     = module.aws_cloudfront.domain
  aws_cognito_client_id     = module.aws_cognito.client_id
  aws_cognito_client_secret = module.aws_cognito.client_secret
  aws_cognito_domain        = module.aws_cognito.domain
  aws_cognito_id            = module.aws_cognito.id
  aws_region                = local.aws_region
  aws_s3_assets_bucket_name = module.aws_s3.assets_bucket_name
  aws_secret_access_key     = module.aws_iam.secret_access_key
  domains                   = local.www_domains
  from_email                = local.from_email
}

module "statuscake" {
  source = "./modules/statuscake"

  domains = local.www_domains
}
