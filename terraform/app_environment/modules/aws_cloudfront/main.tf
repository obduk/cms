resource "aws_cloudfront_distribution" "assets" {
  comment         = "${var.app_name}"
  enabled         = true
  is_ipv6_enabled = true

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    compress               = true
    target_origin_id       = "S3"
    viewer_protocol_policy = "redirect-to-https"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }
  }

  lifecycle {
    prevent_destroy = true
  }

  logging_config {
    bucket = "${var.aws_s3_logs_bucket_domain}"
    prefix = "AWSLogs/${var.aws_account_id}/cloudfront/${var.app_name}/"
  }

  origin {
    domain_name = "${var.aws_s3_assets_bucket_domain}"
    origin_id   = "S3"

    s3_origin_config {
      origin_access_identity = "${aws_cloudfront_origin_access_identity.assets.cloudfront_access_identity_path}"
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}

resource "aws_cloudfront_origin_access_identity" "assets" {
  comment = "${var.app_name}"
}
