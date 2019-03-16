resource "heroku_app" "app" {
  name   = "${var.app_name}"
  region = "eu"
  stack  = "heroku-18"

  buildpacks = [
    "heroku/nodejs",
    "heroku/ruby",
  ]

  lifecycle {
    prevent_destroy = true
  }

  sensitive_config_vars {
    AWS_ACCESS_KEY_ID            = "${var.aws_access_key_id}"
    AWS_COGNITO_CLIENT_ID        = "${var.aws_cognito_client_id}"
    AWS_COGNITO_CLIENT_SECRET    = "${var.aws_cognito_client_secret}"
    AWS_COGNITO_DOMAIN           = "https://${var.aws_cognito_domain}.auth.${var.aws_region}.amazoncognito.com"
    AWS_COGNITO_USER_POOL_ID     = "${var.aws_cognito_id}"
    AWS_REGION                   = "${var.aws_region}"
    AWS_S3_ASSET_HOST            = "https://${var.aws_cloudfront_domain}"
    AWS_S3_BUCKET                = "${var.aws_s3_assets_bucket_name}"
    AWS_SECRET_ACCESS_KEY        = "${var.aws_secret_access_key}"
    HEROKU_APP_NAME              = "${var.app_name}"
    LANG                         = "en_GB.UTF-8"
    RACK_ENV                     = "production"
    RACK_TIMEOUT_SERVICE_TIMEOUT = "2"
    RAILS_ENV                    = "production"
    RAILS_LOG_TO_STDOUT          = "enabled"
    RAILS_SERVE_STATIC_FILES     = "enabled"
    SEED_SITE_EMAIL              = "${var.from_email}"
  }
}

resource "heroku_domain" "app" {
  app      = "${heroku_app.app.name}"
  count    = "${length(var.domains)}"
  hostname = "${element(var.domains, count.index)}"
}

resource "heroku_app_feature" "app_log_runtime_metrics" {
  app  = "${heroku_app.app.name}"
  name = "log-runtime-metrics"
}

resource "heroku_formation" "app_web" {
  app      = "${heroku_app.app.name}"
  quantity = 1
  size     = "Free"
  type     = "web"
}

resource "heroku_formation" "app_worker" {
  app      = "${heroku_app.app.name}"
  quantity = 1
  size     = "Free"
  type     = "worker"
}

resource "heroku_addon" "app_coralogix" {
  app  = "${heroku_app.app.name}"
  plan = "coralogix:dev"

  lifecycle {
    prevent_destroy = true
  }
}

resource "heroku_addon" "app_librato" {
  app  = "${heroku_app.app.name}"
  plan = "librato:development"

  lifecycle {
    prevent_destroy = true
  }
}

resource "heroku_addon" "app_postgresql" {
  app  = "${heroku_app.app.name}"
  plan = "heroku-postgresql:hobby-dev"

  lifecycle {
    prevent_destroy = true
  }
}

resource "heroku_addon" "app_rollbar" {
  app  = "${heroku_app.app.name}"
  plan = "rollbar:free"

  lifecycle {
    prevent_destroy = true
  }
}

resource "heroku_addon" "app_scheduler" {
  app  = "${heroku_app.app.name}"
  plan = "scheduler:standard"

  lifecycle {
    prevent_destroy = true
  }
}

resource "heroku_addon" "app_scout" {
  app  = "${heroku_app.app.name}"
  plan = "scout:chair"

  lifecycle {
    prevent_destroy = true
  }
}
