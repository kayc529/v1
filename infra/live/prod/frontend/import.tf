import {
    to = module.static_site.aws_s3_bucket.site
    id = "kay-cheung-v1"
}

import {
    to = module.static_site.aws_cloudfront_distribution.this
    id = "ELXO928R2VG96"
}

import {
    to = module.static_site.aws_route53_record.apex
    id = "Z064203212XZBCOE02CQK_kay-cheung.com_A"
}

import {
    to = module.static_site.aws_route53_record.www[0]
    id = "Z064203212XZBCOE02CQK_www.kay-cheung.com_A"
}

import {
    to = module.static_site.aws_cloudfront_origin_access_control.oac
    id = "EF5AATEBDM3D5"
}

import {
    to = module.static_site.aws_s3_bucket_policy.site
    id = "kay-cheung-v1"
}