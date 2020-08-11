terraform {
  required_version = "= 0.13.0"

  backend "remote" {
    organization = "owenbendavies"

    workspaces {
      prefix = "cms-"
    }
  }
}
