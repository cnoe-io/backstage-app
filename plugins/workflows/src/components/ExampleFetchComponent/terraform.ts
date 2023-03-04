export const tfstate = {
  "version": 4,
  "terraform_version": "1.3.9",
  "serial": 1020,
  "lineage": "51f0615f-ffe6-ac7d-b5c1-d9c12b3bea28",
  "outputs": {
    "configure_kubectl": {
      "value": "aws eks --region us-west-2 update-kubeconfig --name spark-k8s-operator",
      "type": "string"
    }
  },
  "resources": [
    {
      "mode": "data",
      "type": "aws_availability_zones",
      "name": "available",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "all_availability_zones": null,
            "exclude_names": null,
            "exclude_zone_ids": null,
            "filter": null,
            "group_names": [
              "us-west-2"
            ],
            "id": "us-west-2",
            "names": [
              "us-west-2a",
              "us-west-2b",
              "us-west-2c",
              "us-west-2d"
            ],
            "state": null,
            "timeouts": null,
            "zone_ids": [
              "usw2-az1",
              "usw2-az2",
              "usw2-az3",
              "usw2-az4"
            ]
          },
          "sensitive_attributes": []
        }
      ]
    },
    {
      "mode": "data",
      "type": "aws_caller_identity",
      "name": "current",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "account_id": "833162080385",
            "arn": "arn:aws:sts::833162080385:assumed-role/Admin/mccloman-Isengard",
            "id": "833162080385",
            "user_id": "AROA4D7CUOCA6SGFA3KA2:mccloman-Isengard"
          },
          "sensitive_attributes": []
        }
      ]
    },
    {
      "mode": "data",
      "type": "aws_eks_cluster_auth",
      "name": "this",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "id": "spark-k8s-operator",
            "name": "spark-k8s-operator",
            "token": "k8s-aws-v1.aHR0cHM6Ly9zdHMuYW1hem9uYXdzLmNvbS8_QWN0aW9uPUdldENhbGxlcklkZW50aXR5JlZlcnNpb249MjAxMS0wNi0xNSZYLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFTSUE0RDdDVU9DQVpaSDY3TzYzJTJGMjAyMzAzMDElMkZ1cy1lYXN0LTElMkZzdHMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDMwMVQwMjAwNDNaJlgtQW16LUV4cGlyZXM9MCZYLUFtei1TZWN1cml0eS1Ub2tlbj1JUW9KYjNKcFoybHVYMlZqRU5iJTJGJTJGJTJGJTJGJTJGJTJGJTJGJTJGJTJGJTJGd0VhQ1hWekxXVmhjM1F0TVNKSE1FVUNJRmQlMkJsQVRJa0JuaVZWR2NnQjFTVGJyMUhtOEc1JTJCTDFObGlub0lXd0oydXhBaUVBOXFNYXo1UVI2eDBWOXQ2VGlib2YwdWpYaHkyZmdjT3F2S0k0TGRUSyUyRnI0cW53SUlmeEFER2d3NE16TXhOakl3T0RBek9EVWlEQ05KYk1MWk5WNnBweHo1UGlyOEFZZGtENnhKNm9yakEzdEIzMUFvTFBVRlAxSzRtcm9uaDJtaGdUc0duem9LMmFSamVQU2NjRmolMkY3UTNRZWhyd3VFakolMkZQOTRxWEJhNUhNTk9SUmpoblVPOWdiN1pKRU43TXc0NUJWNWklMkIlMkJVR1RYT3ZON3JyYSUyRnNySXEyZjJrZVFqNHhGNGh1RURWUmdwaE9vNEk2aU0xNkhYaSUyRjU1QmlRcHhnQm9vODRwbU83WmIyc0xseUFJYVY4VVJkN0RkVU54NmM4OXRSTjN5RG9KVFd6MSUyQk9KNXNoUlN6UDBiaUh5TkM4WW1Kc2NpUTVPZVdZSXdSUDVaSHBJaVJackVjODRza3hSMTNHSlMlMkI3UmFIeEI1T01EJTJCJTJGaiUyRjhEclo0enhVa2gxa3RicUFNNmZaOEtUbm5maHAzVmslMkJZWUlhdWFZRUtWdiUyQm1BODZQOTg5OERVOERDVDYlMkZtZkJqcWRBZVNkc1NwaUlGazAwVWxTMFRRMCUyRlZUQmdQWkNrS0VRR1VmZjJ3aDJYZkljRDJzT05IS0cwNkcxRGMlMkZpU0lsMjglMkJrTm1ydDFmTU5HM3VCTFlnNlF4TSUyRkg0UDNSOGprUklzSDVqSlJkQzI5TjlSRjI1aXBmcXV3R29hdlVEQUR0cnhESkRDTEpsdXJ2dTNtc1ZJclNQWUF1cE9zaGloY1pYTndNaDU5d3BzaSUyRkYzd3RWT3o2SzI4MzRzOFc5OHNPNzd2YjM2a2tvRTMxdXJiWVg2SSUzRCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QlM0J4LWs4cy1hd3MtaWQmWC1BbXotU2lnbmF0dXJlPTdkMGYzZDNmZTc3ZThkNDRmMDhmZDgwNDJiZGFjZWQzMTg3ZTI2YjJmNTlmMzYyNDlhODczNDIxMDM1YWIxOTk"
          },
          "sensitive_attributes": []
        }
      ]
    },
    {
      "mode": "data",
      "type": "aws_iam_policy_document",
      "name": "fluent_bit",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "id": "1351220528",
            "json": "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Sid\": \"\",\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"s3:PutObjectAcl\",\n        \"s3:PutObject\",\n        \"s3:ListBucket\",\n        \"s3:GetObjectAcl\",\n        \"s3:GetObject\",\n        \"s3:DeleteObjectVersion\",\n        \"s3:DeleteObject\"\n      ],\n      \"Resource\": \"arn:aws:s3:::spark-83316208038520230301011541857600000001/*\"\n    }\n  ]\n}",
            "override_json": null,
            "override_policy_documents": null,
            "policy_id": null,
            "source_json": null,
            "source_policy_documents": null,
            "statement": [
              {
                "actions": [
                  "s3:DeleteObject",
                  "s3:DeleteObjectVersion",
                  "s3:GetObject",
                  "s3:GetObjectAcl",
                  "s3:ListBucket",
                  "s3:PutObject",
                  "s3:PutObjectAcl"
                ],
                "condition": [],
                "effect": "Allow",
                "not_actions": [],
                "not_principals": [],
                "not_resources": [],
                "principals": [],
                "resources": [
                  "arn:aws:s3:::spark-83316208038520230301011541857600000001/*"
                ],
                "sid": ""
              }
            ],
            "version": "2012-10-17"
          },
          "sensitive_attributes": []
        }
      ]
    },
    {
      "mode": "data",
      "type": "aws_iam_policy_document",
      "name": "spark_operator",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "id": "290308771",
            "json": "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Sid\": \"\",\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"s3:PutObject\",\n        \"s3:ListBucket\",\n        \"s3:GetObject\",\n        \"s3:DeleteObjectVersion\",\n        \"s3:DeleteObject\"\n      ],\n      \"Resource\": \"arn:aws:s3:::*\"\n    },\n    {\n      \"Sid\": \"\",\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"logs:PutLogEvents\",\n        \"logs:DescribeLogStreams\",\n        \"logs:DescribeLogGroups\",\n        \"logs:CreateLogStream\",\n        \"logs:CreateLogGroup\"\n      ],\n      \"Resource\": \"arn:aws:logs:us-west-2:833162080385:log-group:*\"\n    }\n  ]\n}",
            "override_json": null,
            "override_policy_documents": null,
            "policy_id": null,
            "source_json": null,
            "source_policy_documents": null,
            "statement": [
              {
                "actions": [
                  "s3:DeleteObject",
                  "s3:DeleteObjectVersion",
                  "s3:GetObject",
                  "s3:ListBucket",
                  "s3:PutObject"
                ],
                "condition": [],
                "effect": "Allow",
                "not_actions": [],
                "not_principals": [],
                "not_resources": [],
                "principals": [],
                "resources": [
                  "arn:aws:s3:::*"
                ],
                "sid": ""
              },
              {
                "actions": [
                  "logs:CreateLogGroup",
                  "logs:CreateLogStream",
                  "logs:DescribeLogGroups",
                  "logs:DescribeLogStreams",
                  "logs:PutLogEvents"
                ],
                "condition": [],
                "effect": "Allow",
                "not_actions": [],
                "not_principals": [],
                "not_resources": [],
                "principals": [],
                "resources": [
                  "arn:aws:logs:us-west-2:833162080385:log-group:*"
                ],
                "sid": ""
              }
            ],
            "version": "2012-10-17"
          },
          "sensitive_attributes": []
        }
      ]
    },
    {
      "mode": "data",
      "type": "aws_partition",
      "name": "current",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "dns_suffix": "amazonaws.com",
            "id": "aws",
            "partition": "aws",
            "reverse_dns_prefix": "com.amazonaws"
          },
          "sensitive_attributes": []
        }
      ]
    },
    {
      "mode": "data",
      "type": "aws_region",
      "name": "current",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "description": "US West (Oregon)",
            "endpoint": "ec2.us-west-2.amazonaws.com",
            "id": "us-west-2",
            "name": "us-west-2"
          },
          "sensitive_attributes": []
        }
      ]
    },
    {
      "mode": "data",
      "type": "aws_secretsmanager_secret_version",
      "name": "admin_password_version",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "arn": "arn:aws:secretsmanager:us-west-2:833162080385:secret:grafana-OzUaPL",
            "id": "arn:aws:secretsmanager:us-west-2:833162080385:secret:grafana-OzUaPL|AWSCURRENT",
            "secret_binary": "",
            "secret_id": "arn:aws:secretsmanager:us-west-2:833162080385:secret:grafana-OzUaPL",
            "secret_string": "fNFYio**I3hE9RC0",
            "version_id": "BC2CA00C-7737-4F63-820F-BFF1C52DC667",
            "version_stage": "AWSCURRENT",
            "version_stages": [
              "AWSCURRENT"
            ]
          },
          "sensitive_attributes": []
        }
      ]
    },
    {
      "mode": "managed",
      "type": "aws_iam_policy",
      "name": "fluentbit",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "arn": "arn:aws:iam::833162080385:policy/spark-k8s-operator-fluentbit-additional",
            "description": "IAM policy policy for FluentBit",
            "id": "arn:aws:iam::833162080385:policy/spark-k8s-operator-fluentbit-additional",
            "name": "spark-k8s-operator-fluentbit-additional",
            "name_prefix": null,
            "path": "/",
            "policy": "{\"Statement\":[{\"Action\":[\"s3:PutObjectAcl\",\"s3:PutObject\",\"s3:ListBucket\",\"s3:GetObjectAcl\",\"s3:GetObject\",\"s3:DeleteObjectVersion\",\"s3:DeleteObject\"],\"Effect\":\"Allow\",\"Resource\":\"arn:aws:s3:::spark-83316208038520230301011541857600000001/*\",\"Sid\":\"\"}],\"Version\":\"2012-10-17\"}",
            "policy_id": "ANPA4D7CUOCAUBVPGL3AJ",
            "tags": {},
            "tags_all": {}
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "aws_s3_bucket.this",
            "data.aws_caller_identity.current",
            "data.aws_iam_policy_document.fluent_bit",
            "data.aws_partition.current"
          ]
        }
      ]
    },
    {
      "mode": "managed",
      "type": "aws_iam_policy",
      "name": "spark",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "arn": "arn:aws:iam::833162080385:policy/spark-k8s-operator-spark-irsa",
            "description": "IAM role policy for Spark Job execution",
            "id": "arn:aws:iam::833162080385:policy/spark-k8s-operator-spark-irsa",
            "name": "spark-k8s-operator-spark-irsa",
            "name_prefix": null,
            "path": "/",
            "policy": "{\"Statement\":[{\"Action\":[\"s3:PutObject\",\"s3:ListBucket\",\"s3:GetObject\",\"s3:DeleteObjectVersion\",\"s3:DeleteObject\"],\"Effect\":\"Allow\",\"Resource\":\"arn:aws:s3:::*\",\"Sid\":\"\"},{\"Action\":[\"logs:PutLogEvents\",\"logs:DescribeLogStreams\",\"logs:DescribeLogGroups\",\"logs:CreateLogStream\",\"logs:CreateLogGroup\"],\"Effect\":\"Allow\",\"Resource\":\"arn:aws:logs:us-west-2:833162080385:log-group:*\",\"Sid\":\"\"}],\"Version\":\"2012-10-17\"}",
            "policy_id": "ANPA4D7CUOCAY4B4YUL4B",
            "tags": {},
            "tags_all": {}
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "data.aws_caller_identity.current",
            "data.aws_iam_policy_document.spark_operator",
            "data.aws_partition.current",
            "data.aws_region.current"
          ]
        }
      ]
    },
    {
      "mode": "managed",
      "type": "aws_s3_bucket",
      "name": "this",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "acceleration_status": "",
            "acl": null,
            "arn": "arn:aws:s3:::spark-83316208038520230301011541857600000001",
            "bucket": "spark-83316208038520230301011541857600000001",
            "bucket_domain_name": "spark-83316208038520230301011541857600000001.s3.amazonaws.com",
            "bucket_prefix": "spark-833162080385",
            "bucket_regional_domain_name": "spark-83316208038520230301011541857600000001.s3.us-west-2.amazonaws.com",
            "cors_rule": [],
            "force_destroy": false,
            "grant": [
              {
                "id": "58c9f16f81162702b856ac4e70853220e96f7aafdcf1c40b71028932f0e3ae94",
                "permissions": [
                  "FULL_CONTROL"
                ],
                "type": "CanonicalUser",
                "uri": ""
              }
            ],
            "hosted_zone_id": "Z3BJ6K6RIION7M",
            "id": "spark-83316208038520230301011541857600000001",
            "lifecycle_rule": [],
            "logging": [],
            "object_lock_configuration": [],
            "object_lock_enabled": false,
            "policy": "",
            "region": "us-west-2",
            "replication_configuration": [],
            "request_payer": "BucketOwner",
            "server_side_encryption_configuration": [
              {
                "rule": [
                  {
                    "apply_server_side_encryption_by_default": [
                      {
                        "kms_master_key_id": "",
                        "sse_algorithm": "AES256"
                      }
                    ],
                    "bucket_key_enabled": false
                  }
                ]
              }
            ],
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks"
            },
            "timeouts": null,
            "versioning": [
              {
                "enabled": false,
                "mfa_delete": false
              }
            ],
            "website": [],
            "website_domain": null,
            "website_endpoint": null
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjoxMjAwMDAwMDAwMDAwLCJkZWxldGUiOjM2MDAwMDAwMDAwMDAsInJlYWQiOjEyMDAwMDAwMDAwMDAsInVwZGF0ZSI6MTIwMDAwMDAwMDAwMH19",
          "dependencies": [
            "data.aws_caller_identity.current"
          ]
        }
      ]
    },
    {
      "mode": "managed",
      "type": "aws_s3_bucket_acl",
      "name": "this",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "access_control_policy": [
              {
                "grant": [
                  {
                    "grantee": [
                      {
                        "display_name": "mccloman+1",
                        "email_address": "",
                        "id": "58c9f16f81162702b856ac4e70853220e96f7aafdcf1c40b71028932f0e3ae94",
                        "type": "CanonicalUser",
                        "uri": ""
                      }
                    ],
                    "permission": "FULL_CONTROL"
                  }
                ],
                "owner": [
                  {
                    "display_name": "mccloman+1",
                    "id": "58c9f16f81162702b856ac4e70853220e96f7aafdcf1c40b71028932f0e3ae94"
                  }
                ]
              }
            ],
            "acl": "private",
            "bucket": "spark-83316208038520230301011541857600000001",
            "expected_bucket_owner": "",
            "id": "spark-83316208038520230301011541857600000001,private"
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "aws_s3_bucket.this",
            "data.aws_caller_identity.current"
          ]
        }
      ]
    },
    {
      "mode": "managed",
      "type": "aws_s3_bucket_public_access_block",
      "name": "this",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "block_public_acls": true,
            "block_public_policy": true,
            "bucket": "spark-83316208038520230301011541857600000001",
            "id": "spark-83316208038520230301011541857600000001",
            "ignore_public_acls": true,
            "restrict_public_buckets": true
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "aws_s3_bucket.this",
            "data.aws_caller_identity.current"
          ]
        }
      ]
    },
    {
      "mode": "managed",
      "type": "aws_s3_bucket_server_side_encryption_configuration",
      "name": "this",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "bucket": "spark-83316208038520230301011541857600000001",
            "expected_bucket_owner": "",
            "id": "spark-83316208038520230301011541857600000001",
            "rule": [
              {
                "apply_server_side_encryption_by_default": [
                  {
                    "kms_master_key_id": "",
                    "sse_algorithm": "AES256"
                  }
                ],
                "bucket_key_enabled": false
              }
            ]
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "aws_s3_bucket.this",
            "data.aws_caller_identity.current"
          ]
        }
      ]
    },
    {
      "mode": "managed",
      "type": "aws_s3_object",
      "name": "this",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "acl": "private",
            "bucket": "spark-83316208038520230301011541857600000001",
            "bucket_key_enabled": false,
            "cache_control": "",
            "content": null,
            "content_base64": null,
            "content_disposition": "",
            "content_encoding": "",
            "content_language": "",
            "content_type": "application/x-directory",
            "etag": "d41d8cd98f00b204e9800998ecf8427e",
            "force_destroy": false,
            "id": "spark-k8s-operator/event-history-logs/",
            "key": "spark-k8s-operator/event-history-logs/",
            "kms_key_id": null,
            "metadata": {},
            "object_lock_legal_hold_status": "",
            "object_lock_mode": "",
            "object_lock_retain_until_date": "",
            "server_side_encryption": "AES256",
            "source": null,
            "source_hash": null,
            "storage_class": "STANDARD",
            "tags": {},
            "tags_all": {},
            "version_id": "",
            "website_redirect": ""
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "aws_s3_bucket.this",
            "aws_s3_bucket_acl.this",
            "aws_s3_bucket_public_access_block.this",
            "aws_s3_bucket_server_side_encryption_configuration.this",
            "data.aws_availability_zones.available",
            "data.aws_caller_identity.current",
            "module.eks_blueprints.data.aws_caller_identity.current",
            "module.eks_blueprints.data.aws_iam_policy_document.eks_key",
            "module.eks_blueprints.data.aws_iam_session_context.current",
            "module.eks_blueprints.data.aws_partition.current",
            "module.eks_blueprints.data.aws_region.current",
            "module.eks_blueprints.module.aws_eks.aws_cloudwatch_log_group.this",
            "module.eks_blueprints.module.aws_eks.aws_eks_cluster.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role_policy_attachment.this",
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.node",
            "module.eks_blueprints.module.aws_eks.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.data.aws_iam_policy_document.assume_role_policy",
            "module.eks_blueprints.module.aws_eks.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_external_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_iam_policy_document.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_partition.current",
            "module.eks_blueprints.module.kms.aws_kms_key.this",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ]
        }
      ]
    },
    {
      "mode": "managed",
      "type": "aws_secretsmanager_secret",
      "name": "grafana",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "arn": "arn:aws:secretsmanager:us-west-2:833162080385:secret:grafana-OzUaPL",
            "description": "",
            "force_overwrite_replica_secret": false,
            "id": "arn:aws:secretsmanager:us-west-2:833162080385:secret:grafana-OzUaPL",
            "kms_key_id": "",
            "name": "grafana",
            "name_prefix": "",
            "policy": "",
            "recovery_window_in_days": 0,
            "replica": [],
            "rotation_enabled": false,
            "rotation_lambda_arn": "",
            "rotation_rules": [],
            "tags": {},
            "tags_all": {}
          },
          "sensitive_attributes": [],
          "private": "bnVsbA=="
        }
      ]
    },
    {
      "mode": "managed",
      "type": "aws_secretsmanager_secret_version",
      "name": "grafana",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "arn": "arn:aws:secretsmanager:us-west-2:833162080385:secret:grafana-OzUaPL",
            "id": "arn:aws:secretsmanager:us-west-2:833162080385:secret:grafana-OzUaPL|BC2CA00C-7737-4F63-820F-BFF1C52DC667",
            "secret_binary": "",
            "secret_id": "arn:aws:secretsmanager:us-west-2:833162080385:secret:grafana-OzUaPL",
            "secret_string": "fNFYio**I3hE9RC0",
            "version_id": "BC2CA00C-7737-4F63-820F-BFF1C52DC667",
            "version_stages": [
              "AWSCURRENT"
            ]
          },
          "sensitive_attributes": [
            [
              {
                "type": "get_attr",
                "value": "secret_string"
              }
            ]
          ],
          "private": "bnVsbA==",
          "dependencies": [
            "aws_secretsmanager_secret.grafana",
            "random_password.grafana"
          ]
        }
      ]
    },
    {
      "mode": "managed",
      "type": "kubernetes_cluster_role",
      "name": "spark_role",
      "provider": "provider[\"registry.terraform.io/hashicorp/kubernetes\"]",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "aggregation_rule": [],
            "id": "spark-cluster-role",
            "metadata": [
              {
                "annotations": {},
                "generate_name": "",
                "generation": 0,
                "labels": {},
                "name": "spark-cluster-role",
                "resource_version": "1103",
                "uid": "df397ae0-7dc6-4c06-802f-b2852f7e10f9"
              }
            ],
            "rule": [
              {
                "api_groups": [
                  ""
                ],
                "non_resource_urls": [],
                "resource_names": [],
                "resources": [
                  "namespaces",
                  "nodes",
                  "persistentvolumes"
                ],
                "verbs": [
                  "get",
                  "list",
                  "watch"
                ]
              },
              {
                "api_groups": [
                  "storage.k8s.io"
                ],
                "non_resource_urls": [],
                "resource_names": [],
                "resources": [
                  "storageclasses"
                ],
                "verbs": [
                  "list",
                  "watch"
                ]
              },
              {
                "api_groups": [
                  ""
                ],
                "non_resource_urls": [],
                "resource_names": [],
                "resources": [
                  "serviceaccounts",
                  "services",
                  "configmaps",
                  "events",
                  "pods",
                  "pods/log"
                ],
                "verbs": [
                  "get",
                  "list",
                  "watch",
                  "describe",
                  "create",
                  "edit",
                  "delete",
                  "deletecollection",
                  "annotate",
                  "patch",
                  "label"
                ]
              },
              {
                "api_groups": [
                  ""
                ],
                "non_resource_urls": [],
                "resource_names": [],
                "resources": [
                  "secrets"
                ],
                "verbs": [
                  "create",
                  "patch",
                  "delete",
                  "watch"
                ]
              },
              {
                "api_groups": [
                  "apps"
                ],
                "non_resource_urls": [],
                "resource_names": [],
                "resources": [
                  "statefulsets",
                  "deployments"
                ],
                "verbs": [
                  "get",
                  "list",
                  "watch",
                  "describe",
                  "create",
                  "edit",
                  "delete",
                  "annotate",
                  "patch",
                  "label"
                ]
              },
              {
                "api_groups": [
                  "batch"
                ],
                "non_resource_urls": [],
                "resource_names": [],
                "resources": [
                  "jobs"
                ],
                "verbs": [
                  "get",
                  "list",
                  "watch",
                  "describe",
                  "create",
                  "edit",
                  "delete",
                  "annotate",
                  "patch",
                  "label"
                ]
              },
              {
                "api_groups": [
                  "extensions"
                ],
                "non_resource_urls": [],
                "resource_names": [],
                "resources": [
                  "ingresses"
                ],
                "verbs": [
                  "get",
                  "list",
                  "watch",
                  "describe",
                  "create",
                  "edit",
                  "delete",
                  "annotate",
                  "patch",
                  "label"
                ]
              },
              {
                "api_groups": [
                  "rbac.authorization.k8s.io"
                ],
                "non_resource_urls": [],
                "resource_names": [],
                "resources": [
                  "roles",
                  "rolebindings"
                ],
                "verbs": [
                  "get",
                  "list",
                  "watch",
                  "describe",
                  "create",
                  "edit",
                  "delete",
                  "deletecollection",
                  "annotate",
                  "patch",
                  "label"
                ]
              }
            ]
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "aws_iam_policy.spark",
            "data.aws_availability_zones.available",
            "data.aws_caller_identity.current",
            "data.aws_eks_cluster_auth.this",
            "data.aws_iam_policy_document.spark_operator",
            "data.aws_partition.current",
            "data.aws_region.current",
            "module.eks_blueprints.data.aws_caller_identity.current",
            "module.eks_blueprints.data.aws_iam_policy_document.eks_key",
            "module.eks_blueprints.data.aws_iam_session_context.current",
            "module.eks_blueprints.data.aws_partition.current",
            "module.eks_blueprints.data.aws_region.current",
            "module.eks_blueprints.module.aws_eks.aws_cloudwatch_log_group.this",
            "module.eks_blueprints.module.aws_eks.aws_eks_cluster.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_openid_connect_provider.oidc_provider",
            "module.eks_blueprints.module.aws_eks.aws_iam_role.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role_policy_attachment.this",
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.node",
            "module.eks_blueprints.module.aws_eks.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.data.aws_iam_policy_document.assume_role_policy",
            "module.eks_blueprints.module.aws_eks.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks.data.tls_certificate.this",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_external_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_iam_policy_document.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_partition.current",
            "module.eks_blueprints.module.kms.aws_kms_key.this",
            "module.irsa.aws_iam_role.irsa",
            "module.irsa.aws_iam_role_policy_attachment.irsa",
            "module.irsa.kubernetes_namespace_v1.irsa",
            "module.irsa.kubernetes_service_account_v1.irsa",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ]
        }
      ]
    },
    {
      "mode": "managed",
      "type": "kubernetes_cluster_role_binding",
      "name": "spark_role_binding",
      "provider": "provider[\"registry.terraform.io/hashicorp/kubernetes\"]",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "id": "spark-cluster-role-bind",
            "metadata": [
              {
                "annotations": {},
                "generate_name": "",
                "generation": 0,
                "labels": {},
                "name": "spark-cluster-role-bind",
                "resource_version": "1107",
                "uid": "d6429cc2-2506-41bb-9f34-7a220d16a675"
              }
            ],
            "role_ref": [
              {
                "api_group": "rbac.authorization.k8s.io",
                "kind": "ClusterRole",
                "name": "spark-cluster-role"
              }
            ],
            "subject": [
              {
                "api_group": "",
                "kind": "ServiceAccount",
                "name": "spark-team-a",
                "namespace": "spark-team-a"
              }
            ]
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "aws_iam_policy.spark",
            "data.aws_availability_zones.available",
            "data.aws_caller_identity.current",
            "data.aws_eks_cluster_auth.this",
            "data.aws_iam_policy_document.spark_operator",
            "data.aws_partition.current",
            "data.aws_region.current",
            "kubernetes_cluster_role.spark_role",
            "module.eks_blueprints.data.aws_caller_identity.current",
            "module.eks_blueprints.data.aws_iam_policy_document.eks_key",
            "module.eks_blueprints.data.aws_iam_session_context.current",
            "module.eks_blueprints.data.aws_partition.current",
            "module.eks_blueprints.data.aws_region.current",
            "module.eks_blueprints.module.aws_eks.aws_cloudwatch_log_group.this",
            "module.eks_blueprints.module.aws_eks.aws_eks_cluster.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_openid_connect_provider.oidc_provider",
            "module.eks_blueprints.module.aws_eks.aws_iam_role.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role_policy_attachment.this",
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.node",
            "module.eks_blueprints.module.aws_eks.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.data.aws_iam_policy_document.assume_role_policy",
            "module.eks_blueprints.module.aws_eks.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks.data.tls_certificate.this",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_external_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_iam_policy_document.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_partition.current",
            "module.eks_blueprints.module.kms.aws_kms_key.this",
            "module.irsa.aws_iam_role.irsa",
            "module.irsa.aws_iam_role_policy_attachment.irsa",
            "module.irsa.kubernetes_namespace_v1.irsa",
            "module.irsa.kubernetes_service_account_v1.irsa",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ]
        }
      ]
    },
    {
      "mode": "managed",
      "type": "random_password",
      "name": "grafana",
      "provider": "provider[\"registry.terraform.io/hashicorp/random\"]",
      "instances": [
        {
          "schema_version": 2,
          "attributes": {
            "bcrypt_hash": "$2a$10$e3ektPl1kM3YdCHVVOxIZ.0kYIT7D4jMc7pKNyWWd/iFuXf22r45C",
            "id": "none",
            "keepers": null,
            "length": 16,
            "lower": true,
            "min_lower": 0,
            "min_numeric": 0,
            "min_special": 0,
            "min_upper": 0,
            "number": true,
            "numeric": true,
            "override_special": "!#$%\u0026*()-_=+[]{}\u003c\u003e:?",
            "result": "fNFYio**I3hE9RC0",
            "special": true,
            "upper": true
          },
          "sensitive_attributes": [],
          "private": "eyJzY2hlbWFfdmVyc2lvbiI6IjIifQ=="
        }
      ]
    },
    {
      "module": "module.eks_blueprints",
      "mode": "data",
      "type": "aws_caller_identity",
      "name": "current",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "account_id": "833162080385",
            "arn": "arn:aws:sts::833162080385:assumed-role/Admin/mccloman-Isengard",
            "id": "833162080385",
            "user_id": "AROA4D7CUOCA6SGFA3KA2:mccloman-Isengard"
          },
          "sensitive_attributes": []
        }
      ]
    },
    {
      "module": "module.eks_blueprints",
      "mode": "data",
      "type": "aws_eks_cluster",
      "name": "cluster",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 0,
          "attributes": {
            "arn": "arn:aws:eks:us-west-2:833162080385:cluster/spark-k8s-operator",
            "certificate_authority": [
              {
                "data": "LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUMvakNDQWVhZ0F3SUJBZ0lCQURBTkJna3Foa2lHOXcwQkFRc0ZBREFWTVJNd0VRWURWUVFERXdwcmRXSmwKY201bGRHVnpNQjRYRFRJek1ETXdNVEF4TWpJME1Gb1hEVE16TURJeU5qQXhNakkwTUZvd0ZURVRNQkVHQTFVRQpBeE1LYTNWaVpYSnVaWFJsY3pDQ0FTSXdEUVlKS29aSWh2Y05BUUVCQlFBRGdnRVBBRENDQVFvQ2dnRUJBTWYyCnJiL3d1YW5iZk95bUFxVVJrRXFVdll0R3RCbnAxRE10QVUyb0t1L3dNdXIvTlViU1NoZUQyRjNtd202RlRuODkKc0EycHVWS1RFRXpBVXBNNndNRmhVT20vOW1nTlhpdmp5WW9wL01NNjB5RWNkbmg4Tml0anRoYk1hREtub1BWSQpySWV1bEIrV1lyS3dwdG44SXUwcWZDNGtjV25TYnRLT3drMVZ5cnVKS0JYeEYzeHNpQzRycW5DTjRwMWVsNy9PCng0STM5ZmFVMXJ3a0d3WXBOMDlwZzhqTi8yYnp2dHFXeTJ4a0tJNnBqNGwxTkpkQTRHaUV3OWdBZEZadlh6QkMKRThUci9yUDZZU2E3RkEwdzRieHpSQ2c4WWVPMmJzYVRBY1p4SGNlWnNyazdZL0N0bEg0aTZCK3pLWVI3ajBUTQpaTUZKclVPRTdqNVNOekUvWnBzQ0F3RUFBYU5aTUZjd0RnWURWUjBQQVFIL0JBUURBZ0trTUE4R0ExVWRFd0VCCi93UUZNQU1CQWY4d0hRWURWUjBPQkJZRUZQRWZyM3VObkZCSHdMN2pkZFdJYlB6VTlGTStNQlVHQTFVZEVRUU8KTUF5Q0NtdDFZbVZ5Ym1WMFpYTXdEUVlKS29aSWh2Y05BUUVMQlFBRGdnRUJBRzU5OWVUYy9hV1lWbmJuS0RLcwpnY09OMWlVbWJJNWxlOFQyYWdhUEJBQWxna1Y4MmJua0NGRnNZVjI0eDcxdVE5aDNCRVpzNHFoTW1PM3psMnhJCkwvYTVKR0VRNm9SQktZdWlxNS9QL25rNkluUkY3MXErSjNFQ1Z1VjBzQnFjRVpzTVNxclNKVU5YamttT2d1cEYKRHFCa0l5VXhCT3dkWHVabFB4YmNidGtiSWZPSmpmOE0rakorSVQ2ekhEREVvcFdYZm5VUlR5KzZ4Q2JBazAvNApDTGZhOFRrNFkzcG9aYThwQnlDalBGQ0hIU01hdXdIbzZFRzVsWFZkUzYzb0thMExobU03R29FNlVqZnFmZGp3CkU0Uk1ZVEQwc3JCMytRTDcraGNoVkF0RTk2ZTNZbkh5UFFiM0JEaG9FWDlaSXF0TlRsWGpIUWxZbmR6ak5ET24KM09VPQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCg=="
              }
            ],
            "cluster_id": null,
            "created_at": "2023-03-01 01:16:44.994 +0000 UTC",
            "enabled_cluster_log_types": [
              "api",
              "audit",
              "authenticator",
              "controllerManager",
              "scheduler"
            ],
            "endpoint": "https://C22446710534ECE8BC397E6224EDBDA0.gr7.us-west-2.eks.amazonaws.com",
            "id": "spark-k8s-operator",
            "identity": [
              {
                "oidc": [
                  {
                    "issuer": "https://oidc.eks.us-west-2.amazonaws.com/id/C22446710534ECE8BC397E6224EDBDA0"
                  }
                ]
              }
            ],
            "kubernetes_network_config": [
              {
                "ip_family": "ipv4",
                "service_ipv4_cidr": "172.20.0.0/16",
                "service_ipv6_cidr": ""
              }
            ],
            "name": "spark-k8s-operator",
            "outpost_config": [],
            "platform_version": "eks.4",
            "role_arn": "arn:aws:iam::833162080385:role/spark-k8s-operator-cluster-role",
            "status": "ACTIVE",
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks"
            },
            "version": "1.24",
            "vpc_config": [
              {
                "cluster_security_group_id": "sg-01a416c53ccb8a396",
                "endpoint_private_access": true,
                "endpoint_public_access": true,
                "public_access_cidrs": [
                  "0.0.0.0/0"
                ],
                "security_group_ids": [
                  "sg-08594ac5018946ede"
                ],
                "subnet_ids": [
                  "subnet-021471d8746f8f7f7",
                  "subnet-0bf5a95565543f69f",
                  "subnet-0fefa6460af7bc584"
                ],
                "vpc_id": "vpc-06ca7bfc43c08c033"
              }
            ]
          },
          "sensitive_attributes": []
        }
      ]
    },
    {
      "module": "module.eks_blueprints",
      "mode": "data",
      "type": "aws_iam_policy_document",
      "name": "eks_key",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "id": "1452993933",
            "json": "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Sid\": \"Allow access for all principals in the account that are authorized\",\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"kms:ReEncrypt*\",\n        \"kms:GenerateDataKey*\",\n        \"kms:Encrypt\",\n        \"kms:DescribeKey\",\n        \"kms:Decrypt\",\n        \"kms:CreateGrant\"\n      ],\n      \"Resource\": \"*\",\n      \"Principal\": {\n        \"AWS\": \"arn:aws:iam::833162080385:root\"\n      },\n      \"Condition\": {\n        \"StringEquals\": {\n          \"kms:CallerAccount\": \"833162080385\",\n          \"kms:ViaService\": \"eks.us-west-2.amazonaws.com\"\n        }\n      }\n    },\n    {\n      \"Sid\": \"Allow direct access to key metadata to the account\",\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"kms:RevokeGrant\",\n        \"kms:List*\",\n        \"kms:Get*\",\n        \"kms:Describe*\"\n      ],\n      \"Resource\": \"*\",\n      \"Principal\": {\n        \"AWS\": \"arn:aws:iam::833162080385:root\"\n      }\n    },\n    {\n      \"Sid\": \"Allow access for Key Administrators\",\n      \"Effect\": \"Allow\",\n      \"Action\": \"kms:*\",\n      \"Resource\": \"*\",\n      \"Principal\": {\n        \"AWS\": \"arn:aws:iam::833162080385:role/Admin\"\n      }\n    },\n    {\n      \"Sid\": \"Allow use of the key\",\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"kms:ReEncrypt*\",\n        \"kms:GenerateDataKey*\",\n        \"kms:Encrypt\",\n        \"kms:DescribeKey\",\n        \"kms:Decrypt\"\n      ],\n      \"Resource\": \"*\",\n      \"Principal\": {\n        \"AWS\": \"arn:aws:iam::833162080385:role/spark-k8s-operator-cluster-role\"\n      }\n    },\n    {\n      \"Sid\": \"Allow attachment of persistent resources\",\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"kms:RevokeGrant\",\n        \"kms:ListGrants\",\n        \"kms:CreateGrant\"\n      ],\n      \"Resource\": \"*\",\n      \"Principal\": {\n        \"AWS\": \"arn:aws:iam::833162080385:role/spark-k8s-operator-cluster-role\"\n      },\n      \"Condition\": {\n        \"Bool\": {\n          \"kms:GrantIsForAWSResource\": \"true\"\n        }\n      }\n    }\n  ]\n}",
            "override_json": null,
            "override_policy_documents": null,
            "policy_id": null,
            "source_json": null,
            "source_policy_documents": null,
            "statement": [
              {
                "actions": [
                  "kms:CreateGrant",
                  "kms:Decrypt",
                  "kms:DescribeKey",
                  "kms:Encrypt",
                  "kms:GenerateDataKey*",
                  "kms:ReEncrypt*"
                ],
                "condition": [
                  {
                    "test": "StringEquals",
                    "values": [
                      "833162080385"
                    ],
                    "variable": "kms:CallerAccount"
                  },
                  {
                    "test": "StringEquals",
                    "values": [
                      "eks.us-west-2.amazonaws.com"
                    ],
                    "variable": "kms:ViaService"
                  }
                ],
                "effect": "Allow",
                "not_actions": [],
                "not_principals": [],
                "not_resources": [],
                "principals": [
                  {
                    "identifiers": [
                      "arn:aws:iam::833162080385:root"
                    ],
                    "type": "AWS"
                  }
                ],
                "resources": [
                  "*"
                ],
                "sid": "Allow access for all principals in the account that are authorized"
              },
              {
                "actions": [
                  "kms:Describe*",
                  "kms:Get*",
                  "kms:List*",
                  "kms:RevokeGrant"
                ],
                "condition": [],
                "effect": "Allow",
                "not_actions": [],
                "not_principals": [],
                "not_resources": [],
                "principals": [
                  {
                    "identifiers": [
                      "arn:aws:iam::833162080385:root"
                    ],
                    "type": "AWS"
                  }
                ],
                "resources": [
                  "*"
                ],
                "sid": "Allow direct access to key metadata to the account"
              },
              {
                "actions": [
                  "kms:*"
                ],
                "condition": [],
                "effect": "Allow",
                "not_actions": [],
                "not_principals": [],
                "not_resources": [],
                "principals": [
                  {
                    "identifiers": [
                      "arn:aws:iam::833162080385:role/Admin"
                    ],
                    "type": "AWS"
                  }
                ],
                "resources": [
                  "*"
                ],
                "sid": "Allow access for Key Administrators"
              },
              {
                "actions": [
                  "kms:Decrypt",
                  "kms:DescribeKey",
                  "kms:Encrypt",
                  "kms:GenerateDataKey*",
                  "kms:ReEncrypt*"
                ],
                "condition": [],
                "effect": "Allow",
                "not_actions": [],
                "not_principals": [],
                "not_resources": [],
                "principals": [
                  {
                    "identifiers": [
                      "arn:aws:iam::833162080385:role/spark-k8s-operator-cluster-role"
                    ],
                    "type": "AWS"
                  }
                ],
                "resources": [
                  "*"
                ],
                "sid": "Allow use of the key"
              },
              {
                "actions": [
                  "kms:CreateGrant",
                  "kms:ListGrants",
                  "kms:RevokeGrant"
                ],
                "condition": [
                  {
                    "test": "Bool",
                    "values": [
                      "true"
                    ],
                    "variable": "kms:GrantIsForAWSResource"
                  }
                ],
                "effect": "Allow",
                "not_actions": [],
                "not_principals": [],
                "not_resources": [],
                "principals": [
                  {
                    "identifiers": [
                      "arn:aws:iam::833162080385:role/spark-k8s-operator-cluster-role"
                    ],
                    "type": "AWS"
                  }
                ],
                "resources": [
                  "*"
                ],
                "sid": "Allow attachment of persistent resources"
              }
            ],
            "version": "2012-10-17"
          },
          "sensitive_attributes": []
        }
      ]
    },
    {
      "module": "module.eks_blueprints",
      "mode": "data",
      "type": "aws_iam_session_context",
      "name": "current",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "arn": "arn:aws:sts::833162080385:assumed-role/Admin/mccloman-Isengard",
            "id": "arn:aws:sts::833162080385:assumed-role/Admin/mccloman-Isengard",
            "issuer_arn": "arn:aws:iam::833162080385:role/Admin",
            "issuer_id": "AROA4D7CUOCA6SGFA3KA2",
            "issuer_name": "Admin",
            "session_name": "mccloman-Isengard"
          },
          "sensitive_attributes": []
        }
      ]
    },
    {
      "module": "module.eks_blueprints",
      "mode": "data",
      "type": "aws_partition",
      "name": "current",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "dns_suffix": "amazonaws.com",
            "id": "aws",
            "partition": "aws",
            "reverse_dns_prefix": "com.amazonaws"
          },
          "sensitive_attributes": []
        }
      ]
    },
    {
      "module": "module.eks_blueprints",
      "mode": "data",
      "type": "aws_region",
      "name": "current",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "description": "US West (Oregon)",
            "endpoint": "ec2.us-west-2.amazonaws.com",
            "id": "us-west-2",
            "name": "us-west-2"
          },
          "sensitive_attributes": []
        }
      ]
    },
    {
      "module": "module.eks_blueprints",
      "mode": "data",
      "type": "http",
      "name": "eks_cluster_readiness",
      "provider": "provider[\"registry.terraform.io/terraform-aws-modules/http\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 0,
          "attributes": {
            "body": "ok",
            "ca_certificate": "-----BEGIN CERTIFICATE-----\nMIIC/jCCAeagAwIBAgIBADANBgkqhkiG9w0BAQsFADAVMRMwEQYDVQQDEwprdWJl\ncm5ldGVzMB4XDTIzMDMwMTAxMjI0MFoXDTMzMDIyNjAxMjI0MFowFTETMBEGA1UE\nAxMKa3ViZXJuZXRlczCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMf2\nrb/wuanbfOymAqURkEqUvYtGtBnp1DMtAU2oKu/wMur/NUbSSheD2F3mwm6FTn89\nsA2puVKTEEzAUpM6wMFhUOm/9mgNXivjyYop/MM60yEcdnh8NitjthbMaDKnoPVI\nrIeulB+WYrKwptn8Iu0qfC4kcWnSbtKOwk1VyruJKBXxF3xsiC4rqnCN4p1el7/O\nx4I39faU1rwkGwYpN09pg8jN/2bzvtqWy2xkKI6pj4l1NJdA4GiEw9gAdFZvXzBC\nE8Tr/rP6YSa7FA0w4bxzRCg8YeO2bsaTAcZxHceZsrk7Y/CtlH4i6B+zKYR7j0TM\nZMFJrUOE7j5SNzE/ZpsCAwEAAaNZMFcwDgYDVR0PAQH/BAQDAgKkMA8GA1UdEwEB\n/wQFMAMBAf8wHQYDVR0OBBYEFPEfr3uNnFBHwL7jddWIbPzU9FM+MBUGA1UdEQQO\nMAyCCmt1YmVybmV0ZXMwDQYJKoZIhvcNAQELBQADggEBAG599eTc/aWYVnbnKDKs\ngcON1iUmbI5le8T2agaPBAAlgkV82bnkCFFsYV24x71uQ9h3BEZs4qhMmO3zl2xI\nL/a5JGEQ6oRBKYuiq5/P/nk6InRF71q+J3ECVuV0sBqcEZsMSqrSJUNXjkmOgupF\nDqBkIyUxBOwdXuZlPxbcbtkbIfOJjf8M+jJ+IT6zHDDEopWXfnURTy+6xCbAk0/4\nCLfa8Tk4Y3poZa8pByCjPFCHHSMauwHo6EG5lXVdS63oKa0LhmM7GoE6Ujfqfdjw\nE4RMYTD0srB3+QL7+hchVAtE96e3YnHyPQb3BDhoEX9ZIqtNTlXjHQlYndzjNDOn\n3OU=\n-----END CERTIFICATE-----\n",
            "id": "https://C22446710534ECE8BC397E6224EDBDA0.gr7.us-west-2.eks.amazonaws.com/healthz",
            "insecure": false,
            "request_headers": null,
            "response_headers": {
              "Audit-Id": "68d46253-7369-4906-8bd4-0af55e78e2da",
              "Cache-Control": "no-cache, private",
              "Content-Length": "2",
              "Content-Type": "text/plain; charset=utf-8",
              "Date": "Wed, 01 Mar 2023 01:45:43 GMT",
              "X-Content-Type-Options": "nosniff",
              "X-Kubernetes-Pf-Flowschema-Uid": "8c221e30-8c66-4045-ab06-adf3c9b70081",
              "X-Kubernetes-Pf-Prioritylevel-Uid": "13e47757-e6a4-45c3-98cc-1353bfdd0011"
            },
            "timeout": 600,
            "url": "https://C22446710534ECE8BC397E6224EDBDA0.gr7.us-west-2.eks.amazonaws.com/healthz"
          },
          "sensitive_attributes": []
        }
      ]
    },
    {
      "module": "module.eks_blueprints",
      "mode": "managed",
      "type": "kubernetes_config_map",
      "name": "aws_auth",
      "provider": "provider[\"registry.terraform.io/hashicorp/kubernetes\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 0,
          "attributes": {
            "binary_data": {},
            "data": {
              "mapAccounts": "[]\n",
              "mapRoles": "- \"groups\":\n  - \"system:bootstrappers\"\n  - \"system:nodes\"\n  \"rolearn\": \"arn:aws:iam::833162080385:role/spark-k8s-operator-core-node-grp\"\n  \"username\": \"system:node:{{EC2PrivateDNSName}}\"\n- \"groups\":\n  - \"system:bootstrappers\"\n  - \"system:nodes\"\n  \"rolearn\": \"arn:aws:iam::833162080385:role/spark-k8s-operator-spark-node-grp\"\n  \"username\": \"system:node:{{EC2PrivateDNSName}}\"\n",
              "mapUsers": "[]\n"
            },
            "id": "kube-system/aws-auth",
            "immutable": false,
            "metadata": [
              {
                "annotations": {},
                "generate_name": "",
                "generation": 0,
                "labels": {
                  "app.kubernetes.io/created-by": "terraform-aws-eks-blueprints",
                  "app.kubernetes.io/managed-by": "terraform-aws-eks-blueprints"
                },
                "name": "aws-auth",
                "namespace": "kube-system",
                "resource_version": "1076",
                "uid": "78ded890-14e9-4c3f-9488-d7a6c4573dd4"
              }
            ]
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "data.aws_availability_zones.available",
            "data.aws_eks_cluster_auth.this",
            "module.eks_blueprints.data.aws_caller_identity.current",
            "module.eks_blueprints.data.aws_eks_cluster.cluster",
            "module.eks_blueprints.data.aws_iam_policy_document.eks_key",
            "module.eks_blueprints.data.aws_iam_session_context.current",
            "module.eks_blueprints.data.aws_partition.current",
            "module.eks_blueprints.data.aws_region.current",
            "module.eks_blueprints.data.http.eks_cluster_readiness",
            "module.eks_blueprints.module.aws_eks.aws_cloudwatch_log_group.this",
            "module.eks_blueprints.module.aws_eks.aws_eks_cluster.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role_policy_attachment.this",
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.node",
            "module.eks_blueprints.module.aws_eks.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.data.aws_iam_policy_document.assume_role_policy",
            "module.eks_blueprints.module.aws_eks.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_external_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_iam_policy_document.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_partition.current",
            "module.eks_blueprints.module.kms.aws_kms_key.this",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ],
          "create_before_destroy": true
        }
      ]
    },
    {
      "module": "module.eks_blueprints.module.aws_eks",
      "mode": "data",
      "type": "aws_caller_identity",
      "name": "current",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "account_id": "833162080385",
            "arn": "arn:aws:sts::833162080385:assumed-role/Admin/mccloman-Isengard",
            "id": "833162080385",
            "user_id": "AROA4D7CUOCA6SGFA3KA2:mccloman-Isengard"
          },
          "sensitive_attributes": []
        }
      ]
    },
    {
      "module": "module.eks_blueprints.module.aws_eks",
      "mode": "data",
      "type": "aws_iam_policy_document",
      "name": "assume_role_policy",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 0,
          "attributes": {
            "id": "2764486067",
            "json": "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Sid\": \"EKSClusterAssumeRole\",\n      \"Effect\": \"Allow\",\n      \"Action\": \"sts:AssumeRole\",\n      \"Principal\": {\n        \"Service\": \"eks.amazonaws.com\"\n      }\n    }\n  ]\n}",
            "override_json": null,
            "override_policy_documents": null,
            "policy_id": null,
            "source_json": null,
            "source_policy_documents": null,
            "statement": [
              {
                "actions": [
                  "sts:AssumeRole"
                ],
                "condition": [],
                "effect": "Allow",
                "not_actions": [],
                "not_principals": [],
                "not_resources": [],
                "principals": [
                  {
                    "identifiers": [
                      "eks.amazonaws.com"
                    ],
                    "type": "Service"
                  }
                ],
                "resources": [],
                "sid": "EKSClusterAssumeRole"
              }
            ],
            "version": "2012-10-17"
          },
          "sensitive_attributes": []
        }
      ]
    },
    {
      "module": "module.eks_blueprints.module.aws_eks",
      "mode": "data",
      "type": "aws_partition",
      "name": "current",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "dns_suffix": "amazonaws.com",
            "id": "aws",
            "partition": "aws",
            "reverse_dns_prefix": "com.amazonaws"
          },
          "sensitive_attributes": []
        }
      ]
    },
    {
      "module": "module.eks_blueprints.module.aws_eks",
      "mode": "data",
      "type": "tls_certificate",
      "name": "this",
      "provider": "provider[\"registry.terraform.io/hashicorp/tls\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 0,
          "attributes": {
            "certificates": [
              {
                "cert_pem": "-----BEGIN CERTIFICATE-----\nMIIEdTCCA12gAwIBAgIJAKcOSkw0grd/MA0GCSqGSIb3DQEBCwUAMGgxCzAJBgNV\nBAYTAlVTMSUwIwYDVQQKExxTdGFyZmllbGQgVGVjaG5vbG9naWVzLCBJbmMuMTIw\nMAYDVQQLEylTdGFyZmllbGQgQ2xhc3MgMiBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0\neTAeFw0wOTA5MDIwMDAwMDBaFw0zNDA2MjgxNzM5MTZaMIGYMQswCQYDVQQGEwJV\nUzEQMA4GA1UECBMHQXJpem9uYTETMBEGA1UEBxMKU2NvdHRzZGFsZTElMCMGA1UE\nChMcU3RhcmZpZWxkIFRlY2hub2xvZ2llcywgSW5jLjE7MDkGA1UEAxMyU3RhcmZp\nZWxkIFNlcnZpY2VzIFJvb3QgQ2VydGlmaWNhdGUgQXV0aG9yaXR5IC0gRzIwggEi\nMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDVDDrEKvlO4vW+GZdfjohTsR8/\ny8+fIBNtKTrID30892t2OGPZNmCom15cAICyL1l/9of5JUOG52kbUpqQ4XHj2C0N\nTm/2yEnZtvMaVq4rtnQU68/7JuMauh2WLmo7WJSJR1b/JaCTcFOD2oR0FMNnngRo\nOt+OQFodSk7PQ5E751bWAHDLUu57fa4657wx+UX2wmDPE1kCK4DMNEffud6QZW0C\nzyyRpqbn3oUYSXxmTqM6bam17jQuug0DuDPfR+uxa40l2ZvOgdFFRjKWcIfeAg5J\nQ4W2bHO7ZOphQazJ1FTfhy/HIrImzJ9ZVGif/L4qL8RVHHVAYBeFAlU5i38FAgMB\nAAGjgfAwge0wDwYDVR0TAQH/BAUwAwEB/zAOBgNVHQ8BAf8EBAMCAYYwHQYDVR0O\nBBYEFJxfAN+qAdcwKziIorhtSpzyEZGDMB8GA1UdIwQYMBaAFL9ft9HO3R+G9FtV\nrNzXEMIOqYjnME8GCCsGAQUFBwEBBEMwQTAcBggrBgEFBQcwAYYQaHR0cDovL28u\nc3MyLnVzLzAhBggrBgEFBQcwAoYVaHR0cDovL3guc3MyLnVzL3guY2VyMCYGA1Ud\nHwQfMB0wG6AZoBeGFWh0dHA6Ly9zLnNzMi51cy9yLmNybDARBgNVHSAECjAIMAYG\nBFUdIAAwDQYJKoZIhvcNAQELBQADggEBACMd44pXyn3pF3lM8R5V/cxTbj5HD9/G\nVfKyBDbtgB9TxF00KGu+x1X8Z+rLP3+QsjPNG1gQggL4+C/1E2DUBc7xgQjB3ad1\nl08YuW3e95ORCLp+QCztweq7dp4zBncdDQh/U90bZKuCJ/Fp1U1ervShw3WnWEQt\n8jxwmKy6abaVd38PMV4s/KCHOkdp8Hlf9BRUpJVeEXgSYCfOn8J3/yNTd126/+pZ\n59vPr5KW7ySaNRB6nJHGDn2Z9j8Z3/VyVOEVqQdZe4O/Ui5GjLIAZHYcSNPYeehu\nVsyuLAOQ1xk4meTKCRlb/weWsKh/NEnfVqn3sF/tM+2MR7cwA130A4w=\n-----END CERTIFICATE-----\n",
                "is_ca": true,
                "issuer": "OU=Starfield Class 2 Certification Authority,O=Starfield Technologies\\, Inc.,C=US",
                "not_after": "2034-06-28T17:39:16Z",
                "not_before": "2009-09-02T00:00:00Z",
                "public_key_algorithm": "RSA",
                "serial_number": "12037640545166866303",
                "sha1_fingerprint": "9e99a48a9960b14926bb7f3b02e22da2b0ab7280",
                "signature_algorithm": "SHA256-RSA",
                "subject": "CN=Starfield Services Root Certificate Authority - G2,O=Starfield Technologies\\, Inc.,L=Scottsdale,ST=Arizona,C=US",
                "version": 3
              },
              {
                "cert_pem": "-----BEGIN CERTIFICATE-----\nMIIEkjCCA3qgAwIBAgITBn+USionzfP6wq4rAfkI7rnExjANBgkqhkiG9w0BAQsF\nADCBmDELMAkGA1UEBhMCVVMxEDAOBgNVBAgTB0FyaXpvbmExEzARBgNVBAcTClNj\nb3R0c2RhbGUxJTAjBgNVBAoTHFN0YXJmaWVsZCBUZWNobm9sb2dpZXMsIEluYy4x\nOzA5BgNVBAMTMlN0YXJmaWVsZCBTZXJ2aWNlcyBSb290IENlcnRpZmljYXRlIEF1\ndGhvcml0eSAtIEcyMB4XDTE1MDUyNTEyMDAwMFoXDTM3MTIzMTAxMDAwMFowOTEL\nMAkGA1UEBhMCVVMxDzANBgNVBAoTBkFtYXpvbjEZMBcGA1UEAxMQQW1hem9uIFJv\nb3QgQ0EgMTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALJ4gHHKeNXj\nca9HgFB0fW7Y14h29Jlo91ghYPl0hAEvrAIthtOgQ3pOsqTQNroBvo3bSMgHFzZM\n9O6II8c+6zf1tRn4SWiw3te5djgdYZ6k/oI2peVKVuRF4fn9tBb6dNqcmzU5L/qw\nIFAGbHrQgLKm+a/sRxmPUDgH3KKHOVj4utWp+UhnMJbulHheb4mjUcAwhmahRWa6\nVOujw5H5SNz/0egwLX0tdHA114gk957EWW67c4cX8jJGKLhD+rcdqsq08p8kDi1L\n93FcXmn/6pUCyziKrlA4b9v7LWIbxcceVOF34GfID5yHI9Y/QCB/IIDEgEw+OyQm\njgSubJrIqg0CAwEAAaOCATEwggEtMA8GA1UdEwEB/wQFMAMBAf8wDgYDVR0PAQH/\nBAQDAgGGMB0GA1UdDgQWBBSEGMyFNOy8DJSULghZnMeyEE4KCDAfBgNVHSMEGDAW\ngBScXwDfqgHXMCs4iKK4bUqc8hGRgzB4BggrBgEFBQcBAQRsMGowLgYIKwYBBQUH\nMAGGImh0dHA6Ly9vY3NwLnJvb3RnMi5hbWF6b250cnVzdC5jb20wOAYIKwYBBQUH\nMAKGLGh0dHA6Ly9jcnQucm9vdGcyLmFtYXpvbnRydXN0LmNvbS9yb290ZzIuY2Vy\nMD0GA1UdHwQ2MDQwMqAwoC6GLGh0dHA6Ly9jcmwucm9vdGcyLmFtYXpvbnRydXN0\nLmNvbS9yb290ZzIuY3JsMBEGA1UdIAQKMAgwBgYEVR0gADANBgkqhkiG9w0BAQsF\nAAOCAQEAYjdCXLwQtT6LLOkMm2xF4gcAevnFWAu5CIw+7bMlPLVvUOTNNWqnkzSW\nMiGpSESrnO09tKpzbeR/FoCJbM8oAxiDR3mjEH4wW6w7sGDgd9QIpuEdfF7Au/ma\neyKdpwAJfqxGF4PcnCZXmTA5YpaP7dreqsXMGz7KQ2hsVxa81Q4gLv7/wmpdLqBK\nbRRYh5TmOTFffHPLkIhqhBGWJ6bt2YFGpn6jcgAKUj6DiAdjd4lpFw85hdKrCEVN\n0FE6/V1dN2RMfjCyVSRCnTawXZwXgWHxyvkQAiSr6w10kY17RSlQOYiypok1JR4U\nakcjMS9cmvqtmg5iUaQqqcT5NJ0hGA==\n-----END CERTIFICATE-----\n",
                "is_ca": true,
                "issuer": "CN=Starfield Services Root Certificate Authority - G2,O=Starfield Technologies\\, Inc.,L=Scottsdale,ST=Arizona,C=US",
                "not_after": "2037-12-31T01:00:00Z",
                "not_before": "2015-05-25T12:00:00Z",
                "public_key_algorithm": "RSA",
                "serial_number": "144918191876577076464031512351042010504348870",
                "sha1_fingerprint": "06b25927c42a721631c1efd9431e648fa62e1e39",
                "signature_algorithm": "SHA256-RSA",
                "subject": "CN=Amazon Root CA 1,O=Amazon,C=US",
                "version": 3
              },
              {
                "cert_pem": "-----BEGIN CERTIFICATE-----\nMIIEXjCCA0agAwIBAgITB3MSSkvL1E7HtTvq8ZSELToPoTANBgkqhkiG9w0BAQsF\nADA5MQswCQYDVQQGEwJVUzEPMA0GA1UEChMGQW1hem9uMRkwFwYDVQQDExBBbWF6\nb24gUm9vdCBDQSAxMB4XDTIyMDgyMzIyMjUzMFoXDTMwMDgyMzIyMjUzMFowPDEL\nMAkGA1UEBhMCVVMxDzANBgNVBAoTBkFtYXpvbjEcMBoGA1UEAxMTQW1hem9uIFJT\nQSAyMDQ4IE0wMjCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALtDGMZa\nqHneKei1by6+pUPPLljTB143Si6VpEWPc6mSkFhZb/6qrkZyoHlQLbDYnI2D7hD0\nsdzEqfnuAjIsuXQLG3A8TvX6V3oFNBFVe8NlLJHvBseKY88saLwufxkZVwk74g4n\nWlNMXzla9Y5F3wwRHwMVH443xGz6UtGSZSqQ94eFx5X7Tlqt8whi8qCaKdZ5rNak\n+r9nUThOeClqFd4oXych//Rc7Y0eX1KNWHYSI1Nk31mYgiK3JvH063g+K9tHA63Z\neTgKgndlh+WI+zv7i44HepRZjA1FYwYZ9Vv/9UkC5Yz8/yU65fgjaE+wVHM4e/Yy\nC2osrPWE7gJ+dXMCAwEAAaOCAVowggFWMBIGA1UdEwEB/wQIMAYBAf8CAQAwDgYD\nVR0PAQH/BAQDAgGGMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAdBgNV\nHQ4EFgQUwDFSzVpQw4J8dHHOy+mc+XrrguIwHwYDVR0jBBgwFoAUhBjMhTTsvAyU\nlC4IWZzHshBOCggwewYIKwYBBQUHAQEEbzBtMC8GCCsGAQUFBzABhiNodHRwOi8v\nb2NzcC5yb290Y2ExLmFtYXpvbnRydXN0LmNvbTA6BggrBgEFBQcwAoYuaHR0cDov\nL2NydC5yb290Y2ExLmFtYXpvbnRydXN0LmNvbS9yb290Y2ExLmNlcjA/BgNVHR8E\nODA2MDSgMqAwhi5odHRwOi8vY3JsLnJvb3RjYTEuYW1hem9udHJ1c3QuY29tL3Jv\nb3RjYTEuY3JsMBMGA1UdIAQMMAowCAYGZ4EMAQIBMA0GCSqGSIb3DQEBCwUAA4IB\nAQAtTi6Fs0Azfi+iwm7jrz+CSxHH+uHl7Law3MQSXVtR8RV53PtR6r/6gNpqlzdo\nZq4FKbADi1v9Bun8RY8D51uedRfjsbeodizeBB8nXmeyD33Ep7VATj4ozcd31YFV\nfgRhvTSxNrrTlNpWkUk0m3BMPv8sg381HhA6uEYokE5q9uws/3YkKqRiEz3TsaWm\nJqIRZhMbgAfp7O7FUwFIb7UIspogZSKxPIWJpxiPo3TcBambbVtQOcNRWz5qCQdD\nslI2yayq0n2TXoHyNCLEH8rpsJRVILFsg0jc7BaFrMnF462+ajSehgj12IidNeRN\n4zl+EoNaWdpnWndvSpAEkq2P\n-----END CERTIFICATE-----\n",
                "is_ca": true,
                "issuer": "CN=Amazon Root CA 1,O=Amazon,C=US",
                "not_after": "2030-08-23T22:25:30Z",
                "not_before": "2022-08-23T22:25:30Z",
                "public_key_algorithm": "RSA",
                "serial_number": "166129353110899469622597955040406457904926625",
                "sha1_fingerprint": "414a2060b738c635cc7fc243e052615592830c53",
                "signature_algorithm": "SHA256-RSA",
                "subject": "CN=Amazon RSA 2048 M02,O=Amazon,C=US",
                "version": 3
              },
              {
                "cert_pem": "-----BEGIN CERTIFICATE-----\nMIIF6zCCBNOgAwIBAgIQC19P/uBqtbUKu5gf2lhh+TANBgkqhkiG9w0BAQsFADA8\nMQswCQYDVQQGEwJVUzEPMA0GA1UEChMGQW1hem9uMRwwGgYDVQQDExNBbWF6b24g\nUlNBIDIwNDggTTAyMB4XDTIzMDIwOTAwMDAwMFoXDTIzMDYxMTIzNTk1OVowKzEp\nMCcGA1UEAxMgb2lkYy5la3MudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20wggEiMA0G\nCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC5Ar7iX0MNOPuwQ7YiJgCcyG1sWPPm\nYCvFTUWTWzULc8TnNkVuybG/J4qAL7TVDgaV3Ipr0G9X4b+0FlJ8l8xHHiazI3Ln\nCPp34ITF7O9T6dfta6IHIt529FXwKf7X3ZgZdblO2UqXbuCMzBZptbWNrSn3po+y\njGkYs7Tqh0SYR/OIKsGCGpyGgkq8SOPUfRKbeR5glIRQuh1Dq72voTlMNkWmwdas\nPKS5dQD4NNsPLXxgfa1OwReATTnqTHvWBGYZzxutaxAs4bHGxQAvxKmxtlX64jrJ\nAp9bChJ3FlAyx3bu3hJ3Eb3F/H/QvCpDfYJtRUnl+GT2iNDtXkil2zFtAgMBAAGj\nggL4MIIC9DAfBgNVHSMEGDAWgBTAMVLNWlDDgnx0cc7L6Zz5euuC4jAdBgNVHQ4E\nFgQUXA+IvOMqoEFqbj9N7msMO6G4zYIwKwYDVR0RBCQwIoIgb2lkYy5la3MudXMt\nd2VzdC0yLmFtYXpvbmF3cy5jb20wDgYDVR0PAQH/BAQDAgWgMB0GA1UdJQQWMBQG\nCCsGAQUFBwMBBggrBgEFBQcDAjA7BgNVHR8ENDAyMDCgLqAshipodHRwOi8vY3Js\nLnIybTAyLmFtYXpvbnRydXN0LmNvbS9yMm0wMi5jcmwwEwYDVR0gBAwwCjAIBgZn\ngQwBAgEwdQYIKwYBBQUHAQEEaTBnMC0GCCsGAQUFBzABhiFodHRwOi8vb2NzcC5y\nMm0wMi5hbWF6b250cnVzdC5jb20wNgYIKwYBBQUHMAKGKmh0dHA6Ly9jcnQucjJt\nMDIuYW1hem9udHJ1c3QuY29tL3IybTAyLmNlcjAMBgNVHRMBAf8EAjAAMIIBfQYK\nKwYBBAHWeQIEAgSCAW0EggFpAWcAdgDoPtDaPvUGNTLnVyi8iWvJA9PL0RFr7Otp\n4Xd9bQa9bgAAAYY3gbZHAAAEAwBHMEUCID2pF6OP6HjuxDW1Vyg/OFg/lyppQDNM\nIfZCAxf1W4glAiEAmFVmYfpGU2K667LSF1FfX3F4I3Xab8GpfSTxx7UGfSwAdQCz\nc3cH4YRQ+GOG1gWp3BEJSnktsWcMC4fc8AMOeTalmgAAAYY3gba2AAAEAwBGMEQC\nIBYSc7rqUdLyPqPEizWj1eZJXVW5E4h0KYBG2JdTXlGDAiBLlkYABJFT9Vu9KVoD\nqJfCOXeG9S7K6ptKUBZYw6noJgB2ALc++yTfnE26dfI5xbpY9Gxd/ELPep81xJ4d\nCYEl7bSZAAABhjeBtokAAAQDAEcwRQIgFsTpM/dOzzk664HZYtW38o98puHvJnqo\nuWwfRIefy7QCIQDlhNI9zD6ABEEevsHRdkd/2QfPn7Gcy3TyxZfgSPGSxTANBgkq\nhkiG9w0BAQsFAAOCAQEALvqKpTJAcZj7ifbwWc3N/b2RU8YxI9Xz8ZWj+hrxFhcr\n4DDGCRujZP8umqkLMfJcywWd8I3WGY790wD0Etgej4MXQ7njGs7NUZzAlGXPk7cX\n1pAFYTX+cH9DWY1qbYfBMsX5bxLk1OTpwb3V5pYLetpmcS85QTUhdHIM2GpUpDiV\ncOGa19+qq1y/F3KIIV9U6YGQdjpkqdvZU7Ztb/CscVN5htSYhSLt9jS9YQbujJmN\nAnfYW9aZdzsur2v27W2dRcwPmGcIxQrZ1mRtwhdLxszrH+JC6QGiQA+FLLB3t5VC\nU47UQVhZh1TkoA/KQ6DgUcxP4zxqICe8hbT/Adq07A==\n-----END CERTIFICATE-----\n",
                "is_ca": false,
                "issuer": "CN=Amazon RSA 2048 M02,O=Amazon,C=US",
                "not_after": "2023-06-11T23:59:59Z",
                "not_before": "2023-02-09T00:00:00Z",
                "public_key_algorithm": "RSA",
                "serial_number": "15116398658960496756585417265055818233",
                "sha1_fingerprint": "223b8a29de23186d2b9c152304009cd9f3edebd3",
                "signature_algorithm": "SHA256-RSA",
                "subject": "CN=oidc.eks.us-west-2.amazonaws.com",
                "version": 3
              }
            ],
            "content": null,
            "id": "68879d4728a23aea308cb79878b46f1d64a50b04",
            "url": "https://oidc.eks.us-west-2.amazonaws.com/id/C22446710534ECE8BC397E6224EDBDA0",
            "verify_chain": true
          },
          "sensitive_attributes": []
        }
      ]
    },
    {
      "module": "module.eks_blueprints.module.aws_eks",
      "mode": "managed",
      "type": "aws_ec2_tag",
      "name": "cluster_primary_security_group",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": "Blueprint",
          "schema_version": 0,
          "attributes": {
            "id": "sg-01a416c53ccb8a396,Blueprint",
            "key": "Blueprint",
            "resource_id": "sg-01a416c53ccb8a396",
            "value": "spark-k8s-operator"
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "data.aws_availability_zones.available",
            "module.eks_blueprints.data.aws_caller_identity.current",
            "module.eks_blueprints.data.aws_iam_policy_document.eks_key",
            "module.eks_blueprints.data.aws_iam_session_context.current",
            "module.eks_blueprints.data.aws_partition.current",
            "module.eks_blueprints.data.aws_region.current",
            "module.eks_blueprints.module.aws_eks.aws_cloudwatch_log_group.this",
            "module.eks_blueprints.module.aws_eks.aws_eks_cluster.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role_policy_attachment.this",
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.node",
            "module.eks_blueprints.module.aws_eks.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.data.aws_iam_policy_document.assume_role_policy",
            "module.eks_blueprints.module.aws_eks.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_external_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_iam_policy_document.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_partition.current",
            "module.eks_blueprints.module.kms.aws_kms_key.this",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ]
        },
        {
          "index_key": "GithubRepo",
          "schema_version": 0,
          "attributes": {
            "id": "sg-01a416c53ccb8a396,GithubRepo",
            "key": "GithubRepo",
            "resource_id": "sg-01a416c53ccb8a396",
            "value": "github.com/awslabs/data-on-eks"
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "data.aws_availability_zones.available",
            "module.eks_blueprints.data.aws_caller_identity.current",
            "module.eks_blueprints.data.aws_iam_policy_document.eks_key",
            "module.eks_blueprints.data.aws_iam_session_context.current",
            "module.eks_blueprints.data.aws_partition.current",
            "module.eks_blueprints.data.aws_region.current",
            "module.eks_blueprints.module.aws_eks.aws_cloudwatch_log_group.this",
            "module.eks_blueprints.module.aws_eks.aws_eks_cluster.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role_policy_attachment.this",
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.node",
            "module.eks_blueprints.module.aws_eks.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.data.aws_iam_policy_document.assume_role_policy",
            "module.eks_blueprints.module.aws_eks.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_external_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_iam_policy_document.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_partition.current",
            "module.eks_blueprints.module.kms.aws_kms_key.this",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ]
        }
      ]
    },
    {
      "module": "module.eks_blueprints.module.aws_eks",
      "mode": "managed",
      "type": "aws_eks_cluster",
      "name": "this",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 0,
          "attributes": {
            "arn": "arn:aws:eks:us-west-2:833162080385:cluster/spark-k8s-operator",
            "certificate_authority": [
              {
                "data": "LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUMvakNDQWVhZ0F3SUJBZ0lCQURBTkJna3Foa2lHOXcwQkFRc0ZBREFWTVJNd0VRWURWUVFERXdwcmRXSmwKY201bGRHVnpNQjRYRFRJek1ETXdNVEF4TWpJME1Gb1hEVE16TURJeU5qQXhNakkwTUZvd0ZURVRNQkVHQTFVRQpBeE1LYTNWaVpYSnVaWFJsY3pDQ0FTSXdEUVlKS29aSWh2Y05BUUVCQlFBRGdnRVBBRENDQVFvQ2dnRUJBTWYyCnJiL3d1YW5iZk95bUFxVVJrRXFVdll0R3RCbnAxRE10QVUyb0t1L3dNdXIvTlViU1NoZUQyRjNtd202RlRuODkKc0EycHVWS1RFRXpBVXBNNndNRmhVT20vOW1nTlhpdmp5WW9wL01NNjB5RWNkbmg4Tml0anRoYk1hREtub1BWSQpySWV1bEIrV1lyS3dwdG44SXUwcWZDNGtjV25TYnRLT3drMVZ5cnVKS0JYeEYzeHNpQzRycW5DTjRwMWVsNy9PCng0STM5ZmFVMXJ3a0d3WXBOMDlwZzhqTi8yYnp2dHFXeTJ4a0tJNnBqNGwxTkpkQTRHaUV3OWdBZEZadlh6QkMKRThUci9yUDZZU2E3RkEwdzRieHpSQ2c4WWVPMmJzYVRBY1p4SGNlWnNyazdZL0N0bEg0aTZCK3pLWVI3ajBUTQpaTUZKclVPRTdqNVNOekUvWnBzQ0F3RUFBYU5aTUZjd0RnWURWUjBQQVFIL0JBUURBZ0trTUE4R0ExVWRFd0VCCi93UUZNQU1CQWY4d0hRWURWUjBPQkJZRUZQRWZyM3VObkZCSHdMN2pkZFdJYlB6VTlGTStNQlVHQTFVZEVRUU8KTUF5Q0NtdDFZbVZ5Ym1WMFpYTXdEUVlKS29aSWh2Y05BUUVMQlFBRGdnRUJBRzU5OWVUYy9hV1lWbmJuS0RLcwpnY09OMWlVbWJJNWxlOFQyYWdhUEJBQWxna1Y4MmJua0NGRnNZVjI0eDcxdVE5aDNCRVpzNHFoTW1PM3psMnhJCkwvYTVKR0VRNm9SQktZdWlxNS9QL25rNkluUkY3MXErSjNFQ1Z1VjBzQnFjRVpzTVNxclNKVU5YamttT2d1cEYKRHFCa0l5VXhCT3dkWHVabFB4YmNidGtiSWZPSmpmOE0rakorSVQ2ekhEREVvcFdYZm5VUlR5KzZ4Q2JBazAvNApDTGZhOFRrNFkzcG9aYThwQnlDalBGQ0hIU01hdXdIbzZFRzVsWFZkUzYzb0thMExobU03R29FNlVqZnFmZGp3CkU0Uk1ZVEQwc3JCMytRTDcraGNoVkF0RTk2ZTNZbkh5UFFiM0JEaG9FWDlaSXF0TlRsWGpIUWxZbmR6ak5ET24KM09VPQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCg=="
              }
            ],
            "cluster_id": null,
            "created_at": "2023-03-01 01:16:44.994 +0000 UTC",
            "enabled_cluster_log_types": [
              "api",
              "audit",
              "authenticator",
              "controllerManager",
              "scheduler"
            ],
            "encryption_config": [
              {
                "provider": [
                  {
                    "key_arn": "arn:aws:kms:us-west-2:833162080385:key/e1f34ad3-684c-4cef-bd9e-1145e274491e"
                  }
                ],
                "resources": [
                  "secrets"
                ]
              }
            ],
            "endpoint": "https://C22446710534ECE8BC397E6224EDBDA0.gr7.us-west-2.eks.amazonaws.com",
            "id": "spark-k8s-operator",
            "identity": [
              {
                "oidc": [
                  {
                    "issuer": "https://oidc.eks.us-west-2.amazonaws.com/id/C22446710534ECE8BC397E6224EDBDA0"
                  }
                ]
              }
            ],
            "kubernetes_network_config": [
              {
                "ip_family": "ipv4",
                "service_ipv4_cidr": "172.20.0.0/16",
                "service_ipv6_cidr": ""
              }
            ],
            "name": "spark-k8s-operator",
            "outpost_config": [],
            "platform_version": "eks.4",
            "role_arn": "arn:aws:iam::833162080385:role/spark-k8s-operator-cluster-role",
            "status": "ACTIVE",
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks"
            },
            "timeouts": {
              "create": null,
              "delete": null,
              "update": null
            },
            "version": "1.24",
            "vpc_config": [
              {
                "cluster_security_group_id": "sg-01a416c53ccb8a396",
                "endpoint_private_access": true,
                "endpoint_public_access": true,
                "public_access_cidrs": [
                  "0.0.0.0/0"
                ],
                "security_group_ids": [
                  "sg-08594ac5018946ede"
                ],
                "subnet_ids": [
                  "subnet-021471d8746f8f7f7",
                  "subnet-0bf5a95565543f69f",
                  "subnet-0fefa6460af7bc584"
                ],
                "vpc_id": "vpc-06ca7bfc43c08c033"
              }
            ]
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjoxODAwMDAwMDAwMDAwLCJkZWxldGUiOjkwMDAwMDAwMDAwMCwidXBkYXRlIjozNjAwMDAwMDAwMDAwfX0=",
          "dependencies": [
            "data.aws_availability_zones.available",
            "module.eks_blueprints.data.aws_caller_identity.current",
            "module.eks_blueprints.data.aws_iam_policy_document.eks_key",
            "module.eks_blueprints.data.aws_iam_session_context.current",
            "module.eks_blueprints.data.aws_partition.current",
            "module.eks_blueprints.data.aws_region.current",
            "module.eks_blueprints.module.aws_eks.aws_cloudwatch_log_group.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role_policy_attachment.this",
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.node",
            "module.eks_blueprints.module.aws_eks.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.data.aws_iam_policy_document.assume_role_policy",
            "module.eks_blueprints.module.aws_eks.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_external_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_iam_policy_document.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_partition.current",
            "module.eks_blueprints.module.kms.aws_kms_key.this",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ]
        }
      ]
    },
    {
      "module": "module.eks_blueprints.module.aws_eks",
      "mode": "managed",
      "type": "aws_iam_openid_connect_provider",
      "name": "oidc_provider",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 0,
          "attributes": {
            "arn": "arn:aws:iam::833162080385:oidc-provider/oidc.eks.us-west-2.amazonaws.com/id/C22446710534ECE8BC397E6224EDBDA0",
            "client_id_list": [
              "sts.amazonaws.com"
            ],
            "id": "arn:aws:iam::833162080385:oidc-provider/oidc.eks.us-west-2.amazonaws.com/id/C22446710534ECE8BC397E6224EDBDA0",
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-eks-irsa"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-eks-irsa"
            },
            "thumbprint_list": [
              "9e99a48a9960b14926bb7f3b02e22da2b0ab7280"
            ],
            "url": "oidc.eks.us-west-2.amazonaws.com/id/C22446710534ECE8BC397E6224EDBDA0"
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "data.aws_availability_zones.available",
            "module.eks_blueprints.data.aws_caller_identity.current",
            "module.eks_blueprints.data.aws_iam_policy_document.eks_key",
            "module.eks_blueprints.data.aws_iam_session_context.current",
            "module.eks_blueprints.data.aws_partition.current",
            "module.eks_blueprints.data.aws_region.current",
            "module.eks_blueprints.module.aws_eks.aws_cloudwatch_log_group.this",
            "module.eks_blueprints.module.aws_eks.aws_eks_cluster.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role_policy_attachment.this",
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.node",
            "module.eks_blueprints.module.aws_eks.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.data.aws_iam_policy_document.assume_role_policy",
            "module.eks_blueprints.module.aws_eks.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks.data.tls_certificate.this",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_external_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_iam_policy_document.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_partition.current",
            "module.eks_blueprints.module.kms.aws_kms_key.this",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ]
        }
      ]
    },
    {
      "module": "module.eks_blueprints.module.aws_eks",
      "mode": "managed",
      "type": "aws_iam_role",
      "name": "this",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 0,
          "attributes": {
            "arn": "arn:aws:iam::833162080385:role/spark-k8s-operator-cluster-role",
            "assume_role_policy": "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":\"eks.amazonaws.com\"},\"Sid\":\"EKSClusterAssumeRole\"}],\"Version\":\"2012-10-17\"}",
            "create_date": "2023-03-01T01:15:43Z",
            "description": "",
            "force_detach_policies": true,
            "id": "spark-k8s-operator-cluster-role",
            "inline_policy": [],
            "managed_policy_arns": [
              "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy",
              "arn:aws:iam::aws:policy/AmazonEKSVPCResourceController"
            ],
            "max_session_duration": 3600,
            "name": "spark-k8s-operator-cluster-role",
            "name_prefix": "",
            "path": "/",
            "permissions_boundary": null,
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks"
            },
            "unique_id": "AROA4D7CUOCAZ343M3EUA"
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "module.eks_blueprints.module.aws_eks.aws_cloudwatch_log_group.this",
            "module.eks_blueprints.module.aws_eks.data.aws_iam_policy_document.assume_role_policy",
            "module.eks_blueprints.module.aws_eks.data.aws_partition.current"
          ]
        }
      ]
    },
    {
      "module": "module.eks_blueprints.module.aws_eks",
      "mode": "managed",
      "type": "aws_iam_role_policy_attachment",
      "name": "this",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy",
          "schema_version": 0,
          "attributes": {
            "id": "spark-k8s-operator-cluster-role-20230301011544043100000003",
            "policy_arn": "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy",
            "role": "spark-k8s-operator-cluster-role"
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "module.eks_blueprints.module.aws_eks.aws_cloudwatch_log_group.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role.this",
            "module.eks_blueprints.module.aws_eks.data.aws_iam_policy_document.assume_role_policy",
            "module.eks_blueprints.module.aws_eks.data.aws_partition.current"
          ]
        },
        {
          "index_key": "arn:aws:iam::aws:policy/AmazonEKSVPCResourceController",
          "schema_version": 0,
          "attributes": {
            "id": "spark-k8s-operator-cluster-role-20230301011544012200000002",
            "policy_arn": "arn:aws:iam::aws:policy/AmazonEKSVPCResourceController",
            "role": "spark-k8s-operator-cluster-role"
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "module.eks_blueprints.module.aws_eks.aws_cloudwatch_log_group.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role.this",
            "module.eks_blueprints.module.aws_eks.data.aws_iam_policy_document.assume_role_policy",
            "module.eks_blueprints.module.aws_eks.data.aws_partition.current"
          ]
        }
      ]
    },
    {
      "module": "module.eks_blueprints.module.aws_eks",
      "mode": "managed",
      "type": "aws_security_group",
      "name": "cluster",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 1,
          "attributes": {
            "arn": "arn:aws:ec2:us-west-2:833162080385:security-group/sg-08594ac5018946ede",
            "description": "EKS cluster security group",
            "egress": [
              {
                "cidr_blocks": [],
                "description": "Cluster API to node groups",
                "from_port": 443,
                "ipv6_cidr_blocks": [],
                "prefix_list_ids": [],
                "protocol": "tcp",
                "security_groups": [
                  "sg-02bfbafdfcc2e68c7"
                ],
                "self": false,
                "to_port": 443
              },
              {
                "cidr_blocks": [],
                "description": "Cluster API to node kubelets",
                "from_port": 10250,
                "ipv6_cidr_blocks": [],
                "prefix_list_ids": [],
                "protocol": "tcp",
                "security_groups": [
                  "sg-02bfbafdfcc2e68c7"
                ],
                "self": false,
                "to_port": 10250
              }
            ],
            "id": "sg-08594ac5018946ede",
            "ingress": [
              {
                "cidr_blocks": [],
                "description": "Node groups to cluster API",
                "from_port": 443,
                "ipv6_cidr_blocks": [],
                "prefix_list_ids": [],
                "protocol": "tcp",
                "security_groups": [
                  "sg-02bfbafdfcc2e68c7"
                ],
                "self": false,
                "to_port": 443
              }
            ],
            "name": "spark-k8s-operator-cluster-20230301011556357600000006",
            "name_prefix": "spark-k8s-operator-cluster-",
            "owner_id": "833162080385",
            "revoke_rules_on_delete": false,
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-cluster"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-cluster"
            },
            "timeouts": null,
            "vpc_id": "vpc-06ca7bfc43c08c033"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjo2MDAwMDAwMDAwMDAsImRlbGV0ZSI6OTAwMDAwMDAwMDAwfSwic2NoZW1hX3ZlcnNpb24iOiIxIn0=",
          "dependencies": [
            "module.vpc.aws_vpc.this"
          ],
          "create_before_destroy": true
        }
      ]
    },
    {
      "module": "module.eks_blueprints.module.aws_eks",
      "mode": "managed",
      "type": "aws_security_group",
      "name": "node",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 1,
          "attributes": {
            "arn": "arn:aws:ec2:us-west-2:833162080385:security-group/sg-02bfbafdfcc2e68c7",
            "description": "EKS node shared security group",
            "egress": [
              {
                "cidr_blocks": [
                  "0.0.0.0/0"
                ],
                "description": "Egress NTP/TCP to internet",
                "from_port": 123,
                "ipv6_cidr_blocks": [],
                "prefix_list_ids": [],
                "protocol": "tcp",
                "security_groups": [],
                "self": false,
                "to_port": 123
              },
              {
                "cidr_blocks": [
                  "0.0.0.0/0"
                ],
                "description": "Egress NTP/UDP to internet",
                "from_port": 123,
                "ipv6_cidr_blocks": [],
                "prefix_list_ids": [],
                "protocol": "udp",
                "security_groups": [],
                "self": false,
                "to_port": 123
              },
              {
                "cidr_blocks": [
                  "0.0.0.0/0"
                ],
                "description": "Egress all HTTPS to internet",
                "from_port": 443,
                "ipv6_cidr_blocks": [],
                "prefix_list_ids": [],
                "protocol": "tcp",
                "security_groups": [],
                "self": false,
                "to_port": 443
              },
              {
                "cidr_blocks": [
                  "0.0.0.0/0"
                ],
                "description": "Node all egress",
                "from_port": 0,
                "ipv6_cidr_blocks": [
                  "::/0"
                ],
                "prefix_list_ids": [],
                "protocol": "-1",
                "security_groups": [],
                "self": false,
                "to_port": 0
              },
              {
                "cidr_blocks": [],
                "description": "Node groups to cluster API",
                "from_port": 443,
                "ipv6_cidr_blocks": [],
                "prefix_list_ids": [],
                "protocol": "tcp",
                "security_groups": [
                  "sg-08594ac5018946ede"
                ],
                "self": false,
                "to_port": 443
              },
              {
                "cidr_blocks": [],
                "description": "Node to node CoreDNS",
                "from_port": 53,
                "ipv6_cidr_blocks": [],
                "prefix_list_ids": [],
                "protocol": "tcp",
                "security_groups": [],
                "self": true,
                "to_port": 53
              },
              {
                "cidr_blocks": [],
                "description": "Node to node CoreDNS",
                "from_port": 53,
                "ipv6_cidr_blocks": [],
                "prefix_list_ids": [],
                "protocol": "udp",
                "security_groups": [],
                "self": true,
                "to_port": 53
              }
            ],
            "id": "sg-02bfbafdfcc2e68c7",
            "ingress": [
              {
                "cidr_blocks": [],
                "description": "Cluster API to Nodegroup all traffic",
                "from_port": 0,
                "ipv6_cidr_blocks": [],
                "prefix_list_ids": [],
                "protocol": "-1",
                "security_groups": [
                  "sg-08594ac5018946ede"
                ],
                "self": false,
                "to_port": 0
              },
              {
                "cidr_blocks": [],
                "description": "Cluster API to node groups",
                "from_port": 443,
                "ipv6_cidr_blocks": [],
                "prefix_list_ids": [],
                "protocol": "tcp",
                "security_groups": [
                  "sg-08594ac5018946ede"
                ],
                "self": false,
                "to_port": 443
              },
              {
                "cidr_blocks": [],
                "description": "Cluster API to node kubelets",
                "from_port": 10250,
                "ipv6_cidr_blocks": [],
                "prefix_list_ids": [],
                "protocol": "tcp",
                "security_groups": [
                  "sg-08594ac5018946ede"
                ],
                "self": false,
                "to_port": 10250
              },
              {
                "cidr_blocks": [],
                "description": "Node to node CoreDNS",
                "from_port": 53,
                "ipv6_cidr_blocks": [],
                "prefix_list_ids": [],
                "protocol": "tcp",
                "security_groups": [],
                "self": true,
                "to_port": 53
              },
              {
                "cidr_blocks": [],
                "description": "Node to node CoreDNS",
                "from_port": 53,
                "ipv6_cidr_blocks": [],
                "prefix_list_ids": [],
                "protocol": "udp",
                "security_groups": [],
                "self": true,
                "to_port": 53
              },
              {
                "cidr_blocks": [],
                "description": "Node to node all ports/protocols",
                "from_port": 0,
                "ipv6_cidr_blocks": [],
                "prefix_list_ids": [],
                "protocol": "-1",
                "security_groups": [],
                "self": true,
                "to_port": 0
              }
            ],
            "name": "spark-k8s-operator-node-20230301011556205700000005",
            "name_prefix": "spark-k8s-operator-node-",
            "owner_id": "833162080385",
            "revoke_rules_on_delete": false,
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-node",
              "kubernetes.io/cluster/spark-k8s-operator": "owned"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-node",
              "kubernetes.io/cluster/spark-k8s-operator": "owned"
            },
            "timeouts": null,
            "vpc_id": "vpc-06ca7bfc43c08c033"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjo2MDAwMDAwMDAwMDAsImRlbGV0ZSI6OTAwMDAwMDAwMDAwfSwic2NoZW1hX3ZlcnNpb24iOiIxIn0=",
          "dependencies": [
            "module.vpc.aws_vpc.this"
          ],
          "create_before_destroy": true
        }
      ]
    },
    {
      "module": "module.eks_blueprints.module.aws_eks",
      "mode": "managed",
      "type": "aws_security_group_rule",
      "name": "cluster",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": "egress_nodes_443",
          "schema_version": 2,
          "attributes": {
            "cidr_blocks": null,
            "description": "Cluster API to node groups",
            "from_port": 443,
            "id": "sgrule-3801244741",
            "ipv6_cidr_blocks": null,
            "prefix_list_ids": [],
            "protocol": "tcp",
            "security_group_id": "sg-08594ac5018946ede",
            "security_group_rule_id": "sgr-0626493f29f1536a2",
            "self": false,
            "source_security_group_id": "sg-02bfbafdfcc2e68c7",
            "timeouts": null,
            "to_port": 443,
            "type": "egress"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjozMDAwMDAwMDAwMDB9LCJzY2hlbWFfdmVyc2lvbiI6IjIifQ==",
          "dependencies": [
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.vpc.aws_vpc.this"
          ]
        },
        {
          "index_key": "egress_nodes_kubelet",
          "schema_version": 2,
          "attributes": {
            "cidr_blocks": null,
            "description": "Cluster API to node kubelets",
            "from_port": 10250,
            "id": "sgrule-727818606",
            "ipv6_cidr_blocks": null,
            "prefix_list_ids": [],
            "protocol": "tcp",
            "security_group_id": "sg-08594ac5018946ede",
            "security_group_rule_id": "sgr-0450aa05a990167b3",
            "self": false,
            "source_security_group_id": "sg-02bfbafdfcc2e68c7",
            "timeouts": null,
            "to_port": 10250,
            "type": "egress"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjozMDAwMDAwMDAwMDB9LCJzY2hlbWFfdmVyc2lvbiI6IjIifQ==",
          "dependencies": [
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.vpc.aws_vpc.this"
          ]
        },
        {
          "index_key": "ingress_nodes_443",
          "schema_version": 2,
          "attributes": {
            "cidr_blocks": null,
            "description": "Node groups to cluster API",
            "from_port": 443,
            "id": "sgrule-305047077",
            "ipv6_cidr_blocks": null,
            "prefix_list_ids": [],
            "protocol": "tcp",
            "security_group_id": "sg-08594ac5018946ede",
            "security_group_rule_id": "sgr-0ad70e9458558d81d",
            "self": false,
            "source_security_group_id": "sg-02bfbafdfcc2e68c7",
            "timeouts": null,
            "to_port": 443,
            "type": "ingress"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjozMDAwMDAwMDAwMDB9LCJzY2hlbWFfdmVyc2lvbiI6IjIifQ==",
          "dependencies": [
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.vpc.aws_vpc.this"
          ]
        }
      ]
    },
    {
      "module": "module.eks_blueprints.module.aws_eks",
      "mode": "managed",
      "type": "aws_security_group_rule",
      "name": "node",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": "egress_all",
          "schema_version": 2,
          "attributes": {
            "cidr_blocks": [
              "0.0.0.0/0"
            ],
            "description": "Node all egress",
            "from_port": 0,
            "id": "sgrule-417031891",
            "ipv6_cidr_blocks": [
              "::/0"
            ],
            "prefix_list_ids": [],
            "protocol": "-1",
            "security_group_id": "sg-02bfbafdfcc2e68c7",
            "security_group_rule_id": "",
            "self": false,
            "source_security_group_id": null,
            "timeouts": null,
            "to_port": 0,
            "type": "egress"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjozMDAwMDAwMDAwMDB9LCJzY2hlbWFfdmVyc2lvbiI6IjIifQ==",
          "dependencies": [
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.vpc.aws_vpc.this"
          ]
        },
        {
          "index_key": "egress_cluster_443",
          "schema_version": 2,
          "attributes": {
            "cidr_blocks": null,
            "description": "Node groups to cluster API",
            "from_port": 443,
            "id": "sgrule-418481970",
            "ipv6_cidr_blocks": null,
            "prefix_list_ids": [],
            "protocol": "tcp",
            "security_group_id": "sg-02bfbafdfcc2e68c7",
            "security_group_rule_id": "sgr-0117bd32b5d0cf210",
            "self": false,
            "source_security_group_id": "sg-08594ac5018946ede",
            "timeouts": null,
            "to_port": 443,
            "type": "egress"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjozMDAwMDAwMDAwMDB9LCJzY2hlbWFfdmVyc2lvbiI6IjIifQ==",
          "dependencies": [
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.vpc.aws_vpc.this"
          ]
        },
        {
          "index_key": "egress_https",
          "schema_version": 2,
          "attributes": {
            "cidr_blocks": [
              "0.0.0.0/0"
            ],
            "description": "Egress all HTTPS to internet",
            "from_port": 443,
            "id": "sgrule-1099457746",
            "ipv6_cidr_blocks": null,
            "prefix_list_ids": [],
            "protocol": "tcp",
            "security_group_id": "sg-02bfbafdfcc2e68c7",
            "security_group_rule_id": "sgr-0553045936a5de52c",
            "self": false,
            "source_security_group_id": null,
            "timeouts": null,
            "to_port": 443,
            "type": "egress"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjozMDAwMDAwMDAwMDB9LCJzY2hlbWFfdmVyc2lvbiI6IjIifQ==",
          "dependencies": [
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.vpc.aws_vpc.this"
          ]
        },
        {
          "index_key": "egress_ntp_tcp",
          "schema_version": 2,
          "attributes": {
            "cidr_blocks": [
              "0.0.0.0/0"
            ],
            "description": "Egress NTP/TCP to internet",
            "from_port": 123,
            "id": "sgrule-2656459212",
            "ipv6_cidr_blocks": null,
            "prefix_list_ids": [],
            "protocol": "tcp",
            "security_group_id": "sg-02bfbafdfcc2e68c7",
            "security_group_rule_id": "sgr-08887c3fcfecd6717",
            "self": false,
            "source_security_group_id": null,
            "timeouts": null,
            "to_port": 123,
            "type": "egress"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjozMDAwMDAwMDAwMDB9LCJzY2hlbWFfdmVyc2lvbiI6IjIifQ==",
          "dependencies": [
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.vpc.aws_vpc.this"
          ]
        },
        {
          "index_key": "egress_ntp_udp",
          "schema_version": 2,
          "attributes": {
            "cidr_blocks": [
              "0.0.0.0/0"
            ],
            "description": "Egress NTP/UDP to internet",
            "from_port": 123,
            "id": "sgrule-3771235521",
            "ipv6_cidr_blocks": null,
            "prefix_list_ids": [],
            "protocol": "udp",
            "security_group_id": "sg-02bfbafdfcc2e68c7",
            "security_group_rule_id": "sgr-0fb50852126ac649a",
            "self": false,
            "source_security_group_id": null,
            "timeouts": null,
            "to_port": 123,
            "type": "egress"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjozMDAwMDAwMDAwMDB9LCJzY2hlbWFfdmVyc2lvbiI6IjIifQ==",
          "dependencies": [
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.vpc.aws_vpc.this"
          ]
        },
        {
          "index_key": "egress_self_coredns_tcp",
          "schema_version": 2,
          "attributes": {
            "cidr_blocks": null,
            "description": "Node to node CoreDNS",
            "from_port": 53,
            "id": "sgrule-717662650",
            "ipv6_cidr_blocks": null,
            "prefix_list_ids": [],
            "protocol": "tcp",
            "security_group_id": "sg-02bfbafdfcc2e68c7",
            "security_group_rule_id": "sgr-0b448b787a3988e6e",
            "self": true,
            "source_security_group_id": null,
            "timeouts": null,
            "to_port": 53,
            "type": "egress"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjozMDAwMDAwMDAwMDB9LCJzY2hlbWFfdmVyc2lvbiI6IjIifQ==",
          "dependencies": [
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.vpc.aws_vpc.this"
          ]
        },
        {
          "index_key": "egress_self_coredns_udp",
          "schema_version": 2,
          "attributes": {
            "cidr_blocks": null,
            "description": "Node to node CoreDNS",
            "from_port": 53,
            "id": "sgrule-2762025948",
            "ipv6_cidr_blocks": null,
            "prefix_list_ids": [],
            "protocol": "udp",
            "security_group_id": "sg-02bfbafdfcc2e68c7",
            "security_group_rule_id": "sgr-0b0d65bb85c818478",
            "self": true,
            "source_security_group_id": null,
            "timeouts": null,
            "to_port": 53,
            "type": "egress"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjozMDAwMDAwMDAwMDB9LCJzY2hlbWFfdmVyc2lvbiI6IjIifQ==",
          "dependencies": [
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.vpc.aws_vpc.this"
          ]
        },
        {
          "index_key": "ingress_cluster_443",
          "schema_version": 2,
          "attributes": {
            "cidr_blocks": null,
            "description": "Cluster API to node groups",
            "from_port": 443,
            "id": "sgrule-1185394437",
            "ipv6_cidr_blocks": null,
            "prefix_list_ids": [],
            "protocol": "tcp",
            "security_group_id": "sg-02bfbafdfcc2e68c7",
            "security_group_rule_id": "sgr-0946f32fde87cd2c5",
            "self": false,
            "source_security_group_id": "sg-08594ac5018946ede",
            "timeouts": null,
            "to_port": 443,
            "type": "ingress"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjozMDAwMDAwMDAwMDB9LCJzY2hlbWFfdmVyc2lvbiI6IjIifQ==",
          "dependencies": [
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.vpc.aws_vpc.this"
          ]
        },
        {
          "index_key": "ingress_cluster_kubelet",
          "schema_version": 2,
          "attributes": {
            "cidr_blocks": null,
            "description": "Cluster API to node kubelets",
            "from_port": 10250,
            "id": "sgrule-1086011997",
            "ipv6_cidr_blocks": null,
            "prefix_list_ids": [],
            "protocol": "tcp",
            "security_group_id": "sg-02bfbafdfcc2e68c7",
            "security_group_rule_id": "sgr-068799f6368159437",
            "self": false,
            "source_security_group_id": "sg-08594ac5018946ede",
            "timeouts": null,
            "to_port": 10250,
            "type": "ingress"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjozMDAwMDAwMDAwMDB9LCJzY2hlbWFfdmVyc2lvbiI6IjIifQ==",
          "dependencies": [
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.vpc.aws_vpc.this"
          ]
        },
        {
          "index_key": "ingress_cluster_to_node_all_traffic",
          "schema_version": 2,
          "attributes": {
            "cidr_blocks": null,
            "description": "Cluster API to Nodegroup all traffic",
            "from_port": 0,
            "id": "sgrule-4157575118",
            "ipv6_cidr_blocks": null,
            "prefix_list_ids": [],
            "protocol": "-1",
            "security_group_id": "sg-02bfbafdfcc2e68c7",
            "security_group_rule_id": "sgr-0a8299354f5de2b80",
            "self": false,
            "source_security_group_id": "sg-08594ac5018946ede",
            "timeouts": null,
            "to_port": 0,
            "type": "ingress"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjozMDAwMDAwMDAwMDB9LCJzY2hlbWFfdmVyc2lvbiI6IjIifQ==",
          "dependencies": [
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.vpc.aws_vpc.this"
          ]
        },
        {
          "index_key": "ingress_self_all",
          "schema_version": 2,
          "attributes": {
            "cidr_blocks": null,
            "description": "Node to node all ports/protocols",
            "from_port": 0,
            "id": "sgrule-3903281564",
            "ipv6_cidr_blocks": null,
            "prefix_list_ids": [],
            "protocol": "-1",
            "security_group_id": "sg-02bfbafdfcc2e68c7",
            "security_group_rule_id": "sgr-0f91767f69663b62e",
            "self": true,
            "source_security_group_id": null,
            "timeouts": null,
            "to_port": 0,
            "type": "ingress"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjozMDAwMDAwMDAwMDB9LCJzY2hlbWFfdmVyc2lvbiI6IjIifQ==",
          "dependencies": [
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.vpc.aws_vpc.this"
          ]
        },
        {
          "index_key": "ingress_self_coredns_tcp",
          "schema_version": 2,
          "attributes": {
            "cidr_blocks": null,
            "description": "Node to node CoreDNS",
            "from_port": 53,
            "id": "sgrule-1071914341",
            "ipv6_cidr_blocks": null,
            "prefix_list_ids": [],
            "protocol": "tcp",
            "security_group_id": "sg-02bfbafdfcc2e68c7",
            "security_group_rule_id": "sgr-0b448b787a3988e6e",
            "self": true,
            "source_security_group_id": null,
            "timeouts": null,
            "to_port": 53,
            "type": "ingress"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjozMDAwMDAwMDAwMDB9LCJzY2hlbWFfdmVyc2lvbiI6IjIifQ==",
          "dependencies": [
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.vpc.aws_vpc.this"
          ]
        },
        {
          "index_key": "ingress_self_coredns_udp",
          "schema_version": 2,
          "attributes": {
            "cidr_blocks": null,
            "description": "Node to node CoreDNS",
            "from_port": 53,
            "id": "sgrule-2612772490",
            "ipv6_cidr_blocks": null,
            "prefix_list_ids": [],
            "protocol": "udp",
            "security_group_id": "sg-02bfbafdfcc2e68c7",
            "security_group_rule_id": "sgr-0bfc14141d37c5945",
            "self": true,
            "source_security_group_id": null,
            "timeouts": null,
            "to_port": 53,
            "type": "ingress"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjozMDAwMDAwMDAwMDB9LCJzY2hlbWFfdmVyc2lvbiI6IjIifQ==",
          "dependencies": [
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.vpc.aws_vpc.this"
          ]
        }
      ]
    },
    {
      "module": "module.eks_blueprints.module.aws_eks.module.kms",
      "mode": "data",
      "type": "aws_caller_identity",
      "name": "current",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "account_id": "833162080385",
            "arn": "arn:aws:sts::833162080385:assumed-role/Admin/mccloman-Isengard",
            "id": "833162080385",
            "user_id": "AROA4D7CUOCA6SGFA3KA2:mccloman-Isengard"
          },
          "sensitive_attributes": []
        }
      ]
    },
    {
      "module": "module.eks_blueprints.module.aws_eks.module.kms",
      "mode": "data",
      "type": "aws_partition",
      "name": "current",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "dns_suffix": "amazonaws.com",
            "id": "aws",
            "partition": "aws",
            "reverse_dns_prefix": "com.amazonaws"
          },
          "sensitive_attributes": []
        }
      ]
    },
    {
      "module": "module.eks_blueprints.module.aws_eks_managed_node_groups[\"mng1\"]",
      "mode": "data",
      "type": "aws_iam_policy_document",
      "name": "managed_ng_assume_role_policy",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "id": "3778018924",
            "json": "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Sid\": \"EKSWorkerAssumeRole\",\n      \"Effect\": \"Allow\",\n      \"Action\": \"sts:AssumeRole\",\n      \"Principal\": {\n        \"Service\": \"ec2.amazonaws.com\"\n      }\n    }\n  ]\n}",
            "override_json": null,
            "override_policy_documents": null,
            "policy_id": null,
            "source_json": null,
            "source_policy_documents": null,
            "statement": [
              {
                "actions": [
                  "sts:AssumeRole"
                ],
                "condition": [],
                "effect": "Allow",
                "not_actions": [],
                "not_principals": [],
                "not_resources": [],
                "principals": [
                  {
                    "identifiers": [
                      "ec2.amazonaws.com"
                    ],
                    "type": "Service"
                  }
                ],
                "resources": [],
                "sid": "EKSWorkerAssumeRole"
              }
            ],
            "version": "2012-10-17"
          },
          "sensitive_attributes": []
        }
      ]
    },
    {
      "module": "module.eks_blueprints.module.aws_eks_managed_node_groups[\"mng1\"]",
      "mode": "managed",
      "type": "aws_eks_node_group",
      "name": "managed_ng",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "ami_type": "AL2_x86_64",
            "arn": "arn:aws:eks:us-west-2:833162080385:nodegroup/spark-k8s-operator/core-node-grp-2023030101282248280000001f/40c34d64-72cc-9d40-bc0e-7c1c78f387b7",
            "capacity_type": "ON_DEMAND",
            "cluster_name": "spark-k8s-operator",
            "disk_size": 0,
            "force_update_version": null,
            "id": "spark-k8s-operator:core-node-grp-2023030101282248280000001f",
            "instance_types": [
              "m5.xlarge"
            ],
            "labels": {
              "Environment": "preprod",
              "NodeGroupType": "core",
              "WorkerType": "ON_DEMAND",
              "Zone": "test"
            },
            "launch_template": [
              {
                "id": "lt-02816ce6075e2356a",
                "name": "spark-k8s-operator-core-node-grp",
                "version": "1"
              }
            ],
            "node_group_name": "core-node-grp-2023030101282248280000001f",
            "node_group_name_prefix": "core-node-grp-",
            "node_role_arn": "arn:aws:iam::833162080385:role/spark-k8s-operator-core-node-grp",
            "release_version": "1.24.10-20230217",
            "remote_access": [],
            "resources": [
              {
                "autoscaling_groups": [
                  {
                    "name": "eks-core-node-grp-2023030101282248280000001f-40c34d64-72cc-9d40-bc0e-7c1c78f387b7"
                  }
                ],
                "remote_access_security_group_id": ""
              }
            ],
            "scaling_config": [
              {
                "desired_size": 3,
                "max_size": 9,
                "min_size": 3
              }
            ],
            "status": "ACTIVE",
            "subnet_ids": [
              "subnet-021471d8746f8f7f7",
              "subnet-0bf5a95565543f69f",
              "subnet-0fefa6460af7bc584"
            ],
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-core-node-grp",
              "k8s.io/cluster-autoscaler/enabled": "TRUE",
              "k8s.io/cluster-autoscaler/experiments": "owned",
              "k8s.io/cluster-autoscaler/node-template/label/arch": "x86",
              "k8s.io/cluster-autoscaler/node-template/label/kubernetes.io/os": "linux",
              "k8s.io/cluster-autoscaler/node-template/label/node-lifecycle": "on-demand",
              "k8s.io/cluster-autoscaler/node-template/label/noderole": "core",
              "k8s.io/cluster-autoscaler/spark-k8s-operator": "owned",
              "kubernetes.io/cluster/spark-k8s-operator": "owned",
              "managed-by": "terraform-aws-eks-blueprints",
              "subnet_type": "private"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-core-node-grp",
              "k8s.io/cluster-autoscaler/enabled": "TRUE",
              "k8s.io/cluster-autoscaler/experiments": "owned",
              "k8s.io/cluster-autoscaler/node-template/label/arch": "x86",
              "k8s.io/cluster-autoscaler/node-template/label/kubernetes.io/os": "linux",
              "k8s.io/cluster-autoscaler/node-template/label/node-lifecycle": "on-demand",
              "k8s.io/cluster-autoscaler/node-template/label/noderole": "core",
              "k8s.io/cluster-autoscaler/spark-k8s-operator": "owned",
              "kubernetes.io/cluster/spark-k8s-operator": "owned",
              "managed-by": "terraform-aws-eks-blueprints",
              "subnet_type": "private"
            },
            "taint": [],
            "timeouts": {
              "create": "30m",
              "delete": "30m",
              "update": "2h"
            },
            "update_config": [
              {
                "max_unavailable": 0,
                "max_unavailable_percentage": 50
              }
            ],
            "version": "1.24"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjoxODAwMDAwMDAwMDAwLCJkZWxldGUiOjE4MDAwMDAwMDAwMDAsInVwZGF0ZSI6NzIwMDAwMDAwMDAwMH19",
          "dependencies": [
            "data.aws_availability_zones.available",
            "data.aws_eks_cluster_auth.this",
            "module.eks_blueprints.data.aws_caller_identity.current",
            "module.eks_blueprints.data.aws_eks_cluster.cluster",
            "module.eks_blueprints.data.aws_iam_policy_document.eks_key",
            "module.eks_blueprints.data.aws_iam_session_context.current",
            "module.eks_blueprints.data.aws_partition.current",
            "module.eks_blueprints.data.aws_region.current",
            "module.eks_blueprints.data.http.eks_cluster_readiness",
            "module.eks_blueprints.kubernetes_config_map.aws_auth",
            "module.eks_blueprints.module.aws_eks.aws_cloudwatch_log_group.this",
            "module.eks_blueprints.module.aws_eks.aws_eks_cluster.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role_policy_attachment.this",
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.node",
            "module.eks_blueprints.module.aws_eks.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.data.aws_iam_policy_document.assume_role_policy",
            "module.eks_blueprints.module.aws_eks.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_external_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_iam_policy_document.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks_managed_node_groups.aws_iam_instance_profile.managed_ng",
            "module.eks_blueprints.module.aws_eks_managed_node_groups.aws_iam_role.managed_ng",
            "module.eks_blueprints.module.aws_eks_managed_node_groups.aws_iam_role_policy_attachment.managed_ng",
            "module.eks_blueprints.module.aws_eks_managed_node_groups.aws_launch_template.managed_node_groups",
            "module.eks_blueprints.module.aws_eks_managed_node_groups.data.aws_iam_policy_document.managed_ng_assume_role_policy",
            "module.eks_blueprints.module.kms.aws_kms_key.this",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ],
          "create_before_destroy": true
        }
      ]
    },
    {
      "module": "module.eks_blueprints.module.aws_eks_managed_node_groups[\"mng1\"]",
      "mode": "managed",
      "type": "aws_iam_instance_profile",
      "name": "managed_ng",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 0,
          "attributes": {
            "arn": "arn:aws:iam::833162080385:instance-profile/spark-k8s-operator-core-node-grp",
            "create_date": "2023-03-01T01:28:20Z",
            "id": "spark-k8s-operator-core-node-grp",
            "name": "spark-k8s-operator-core-node-grp",
            "name_prefix": null,
            "path": "/",
            "role": "spark-k8s-operator-core-node-grp",
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks"
            },
            "unique_id": "AIPA4D7CUOCA3BUMQNDD7"
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "data.aws_availability_zones.available",
            "data.aws_eks_cluster_auth.this",
            "module.eks_blueprints.data.aws_caller_identity.current",
            "module.eks_blueprints.data.aws_eks_cluster.cluster",
            "module.eks_blueprints.data.aws_iam_policy_document.eks_key",
            "module.eks_blueprints.data.aws_iam_session_context.current",
            "module.eks_blueprints.data.aws_partition.current",
            "module.eks_blueprints.data.aws_region.current",
            "module.eks_blueprints.data.http.eks_cluster_readiness",
            "module.eks_blueprints.kubernetes_config_map.aws_auth",
            "module.eks_blueprints.module.aws_eks.aws_cloudwatch_log_group.this",
            "module.eks_blueprints.module.aws_eks.aws_eks_cluster.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role_policy_attachment.this",
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.node",
            "module.eks_blueprints.module.aws_eks.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.data.aws_iam_policy_document.assume_role_policy",
            "module.eks_blueprints.module.aws_eks.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_external_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_iam_policy_document.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks_managed_node_groups.aws_iam_role.managed_ng",
            "module.eks_blueprints.module.aws_eks_managed_node_groups.data.aws_iam_policy_document.managed_ng_assume_role_policy",
            "module.eks_blueprints.module.kms.aws_kms_key.this",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ],
          "create_before_destroy": true
        }
      ]
    },
    {
      "module": "module.eks_blueprints.module.aws_eks_managed_node_groups[\"mng1\"]",
      "mode": "managed",
      "type": "aws_iam_role",
      "name": "managed_ng",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 0,
          "attributes": {
            "arn": "arn:aws:iam::833162080385:role/spark-k8s-operator-core-node-grp",
            "assume_role_policy": "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":\"ec2.amazonaws.com\"},\"Sid\":\"EKSWorkerAssumeRole\"}],\"Version\":\"2012-10-17\"}",
            "create_date": "2023-03-01T01:28:19Z",
            "description": "EKS Managed Node group IAM Role",
            "force_detach_policies": true,
            "id": "spark-k8s-operator-core-node-grp",
            "inline_policy": [],
            "managed_policy_arns": [
              "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly",
              "arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy",
              "arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy",
              "arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore"
            ],
            "max_session_duration": 3600,
            "name": "spark-k8s-operator-core-node-grp",
            "name_prefix": "",
            "path": "/",
            "permissions_boundary": null,
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks"
            },
            "unique_id": "AROA4D7CUOCAV7E3SK6GB"
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "data.aws_availability_zones.available",
            "data.aws_eks_cluster_auth.this",
            "module.eks_blueprints.data.aws_caller_identity.current",
            "module.eks_blueprints.data.aws_eks_cluster.cluster",
            "module.eks_blueprints.data.aws_iam_policy_document.eks_key",
            "module.eks_blueprints.data.aws_iam_session_context.current",
            "module.eks_blueprints.data.aws_partition.current",
            "module.eks_blueprints.data.aws_region.current",
            "module.eks_blueprints.data.http.eks_cluster_readiness",
            "module.eks_blueprints.kubernetes_config_map.aws_auth",
            "module.eks_blueprints.module.aws_eks.aws_cloudwatch_log_group.this",
            "module.eks_blueprints.module.aws_eks.aws_eks_cluster.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role_policy_attachment.this",
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.node",
            "module.eks_blueprints.module.aws_eks.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.data.aws_iam_policy_document.assume_role_policy",
            "module.eks_blueprints.module.aws_eks.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_external_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_iam_policy_document.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks_managed_node_groups.data.aws_iam_policy_document.managed_ng_assume_role_policy",
            "module.eks_blueprints.module.kms.aws_kms_key.this",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ],
          "create_before_destroy": true
        }
      ]
    },
    {
      "module": "module.eks_blueprints.module.aws_eks_managed_node_groups[\"mng1\"]",
      "mode": "managed",
      "type": "aws_iam_role_policy_attachment",
      "name": "managed_ng",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly",
          "schema_version": 0,
          "attributes": {
            "id": "spark-k8s-operator-core-node-grp-20230301012820853200000015",
            "policy_arn": "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly",
            "role": "spark-k8s-operator-core-node-grp"
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "data.aws_availability_zones.available",
            "data.aws_eks_cluster_auth.this",
            "module.eks_blueprints.data.aws_caller_identity.current",
            "module.eks_blueprints.data.aws_eks_cluster.cluster",
            "module.eks_blueprints.data.aws_iam_policy_document.eks_key",
            "module.eks_blueprints.data.aws_iam_session_context.current",
            "module.eks_blueprints.data.aws_partition.current",
            "module.eks_blueprints.data.aws_region.current",
            "module.eks_blueprints.data.http.eks_cluster_readiness",
            "module.eks_blueprints.kubernetes_config_map.aws_auth",
            "module.eks_blueprints.module.aws_eks.aws_cloudwatch_log_group.this",
            "module.eks_blueprints.module.aws_eks.aws_eks_cluster.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role_policy_attachment.this",
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.node",
            "module.eks_blueprints.module.aws_eks.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.data.aws_iam_policy_document.assume_role_policy",
            "module.eks_blueprints.module.aws_eks.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_external_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_iam_policy_document.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks_managed_node_groups.aws_iam_role.managed_ng",
            "module.eks_blueprints.module.aws_eks_managed_node_groups.data.aws_iam_policy_document.managed_ng_assume_role_policy",
            "module.eks_blueprints.module.kms.aws_kms_key.this",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ],
          "create_before_destroy": true
        },
        {
          "index_key": "arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy",
          "schema_version": 0,
          "attributes": {
            "id": "spark-k8s-operator-core-node-grp-20230301012820702000000014",
            "policy_arn": "arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy",
            "role": "spark-k8s-operator-core-node-grp"
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "data.aws_availability_zones.available",
            "data.aws_eks_cluster_auth.this",
            "module.eks_blueprints.data.aws_caller_identity.current",
            "module.eks_blueprints.data.aws_eks_cluster.cluster",
            "module.eks_blueprints.data.aws_iam_policy_document.eks_key",
            "module.eks_blueprints.data.aws_iam_session_context.current",
            "module.eks_blueprints.data.aws_partition.current",
            "module.eks_blueprints.data.aws_region.current",
            "module.eks_blueprints.data.http.eks_cluster_readiness",
            "module.eks_blueprints.kubernetes_config_map.aws_auth",
            "module.eks_blueprints.module.aws_eks.aws_cloudwatch_log_group.this",
            "module.eks_blueprints.module.aws_eks.aws_eks_cluster.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role_policy_attachment.this",
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.node",
            "module.eks_blueprints.module.aws_eks.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.data.aws_iam_policy_document.assume_role_policy",
            "module.eks_blueprints.module.aws_eks.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_external_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_iam_policy_document.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks_managed_node_groups.aws_iam_role.managed_ng",
            "module.eks_blueprints.module.aws_eks_managed_node_groups.data.aws_iam_policy_document.managed_ng_assume_role_policy",
            "module.eks_blueprints.module.kms.aws_kms_key.this",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ],
          "create_before_destroy": true
        },
        {
          "index_key": "arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy",
          "schema_version": 0,
          "attributes": {
            "id": "spark-k8s-operator-core-node-grp-20230301012821171800000017",
            "policy_arn": "arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy",
            "role": "spark-k8s-operator-core-node-grp"
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "data.aws_availability_zones.available",
            "data.aws_eks_cluster_auth.this",
            "module.eks_blueprints.data.aws_caller_identity.current",
            "module.eks_blueprints.data.aws_eks_cluster.cluster",
            "module.eks_blueprints.data.aws_iam_policy_document.eks_key",
            "module.eks_blueprints.data.aws_iam_session_context.current",
            "module.eks_blueprints.data.aws_partition.current",
            "module.eks_blueprints.data.aws_region.current",
            "module.eks_blueprints.data.http.eks_cluster_readiness",
            "module.eks_blueprints.kubernetes_config_map.aws_auth",
            "module.eks_blueprints.module.aws_eks.aws_cloudwatch_log_group.this",
            "module.eks_blueprints.module.aws_eks.aws_eks_cluster.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role_policy_attachment.this",
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.node",
            "module.eks_blueprints.module.aws_eks.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.data.aws_iam_policy_document.assume_role_policy",
            "module.eks_blueprints.module.aws_eks.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_external_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_iam_policy_document.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks_managed_node_groups.aws_iam_role.managed_ng",
            "module.eks_blueprints.module.aws_eks_managed_node_groups.data.aws_iam_policy_document.managed_ng_assume_role_policy",
            "module.eks_blueprints.module.kms.aws_kms_key.this",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ],
          "create_before_destroy": true
        },
        {
          "index_key": "arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore",
          "schema_version": 0,
          "attributes": {
            "id": "spark-k8s-operator-core-node-grp-20230301012821121500000016",
            "policy_arn": "arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore",
            "role": "spark-k8s-operator-core-node-grp"
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "data.aws_availability_zones.available",
            "data.aws_eks_cluster_auth.this",
            "module.eks_blueprints.data.aws_caller_identity.current",
            "module.eks_blueprints.data.aws_eks_cluster.cluster",
            "module.eks_blueprints.data.aws_iam_policy_document.eks_key",
            "module.eks_blueprints.data.aws_iam_session_context.current",
            "module.eks_blueprints.data.aws_partition.current",
            "module.eks_blueprints.data.aws_region.current",
            "module.eks_blueprints.data.http.eks_cluster_readiness",
            "module.eks_blueprints.kubernetes_config_map.aws_auth",
            "module.eks_blueprints.module.aws_eks.aws_cloudwatch_log_group.this",
            "module.eks_blueprints.module.aws_eks.aws_eks_cluster.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role_policy_attachment.this",
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.node",
            "module.eks_blueprints.module.aws_eks.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.data.aws_iam_policy_document.assume_role_policy",
            "module.eks_blueprints.module.aws_eks.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_external_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_iam_policy_document.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks_managed_node_groups.aws_iam_role.managed_ng",
            "module.eks_blueprints.module.aws_eks_managed_node_groups.data.aws_iam_policy_document.managed_ng_assume_role_policy",
            "module.eks_blueprints.module.kms.aws_kms_key.this",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ],
          "create_before_destroy": true
        }
      ]
    },
    {
      "module": "module.eks_blueprints.module.aws_eks_managed_node_groups[\"mng1\"]",
      "mode": "managed",
      "type": "aws_launch_template",
      "name": "managed_node_groups",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 0,
          "attributes": {
            "arn": "arn:aws:ec2:us-west-2:833162080385:launch-template/lt-02816ce6075e2356a",
            "block_device_mappings": [
              {
                "device_name": "/dev/xvda",
                "ebs": [
                  {
                    "delete_on_termination": "true",
                    "encrypted": "true",
                    "iops": 3000,
                    "kms_key_id": "",
                    "snapshot_id": "",
                    "throughput": 125,
                    "volume_size": 100,
                    "volume_type": "gp3"
                  }
                ],
                "no_device": "",
                "virtual_name": ""
              }
            ],
            "capacity_reservation_specification": [],
            "cpu_options": [],
            "credit_specification": [],
            "default_version": 1,
            "description": "Launch Template for EKS Managed Node Groups",
            "disable_api_stop": false,
            "disable_api_termination": false,
            "ebs_optimized": "true",
            "elastic_gpu_specifications": [],
            "elastic_inference_accelerator": [],
            "enclave_options": [],
            "hibernation_options": [],
            "iam_instance_profile": [],
            "id": "lt-02816ce6075e2356a",
            "image_id": "",
            "instance_initiated_shutdown_behavior": "",
            "instance_market_options": [],
            "instance_requirements": [],
            "instance_type": "",
            "kernel_id": "",
            "key_name": "",
            "latest_version": 1,
            "license_specification": [],
            "maintenance_options": [],
            "metadata_options": [
              {
                "http_endpoint": "enabled",
                "http_protocol_ipv6": "disabled",
                "http_put_response_hop_limit": 2,
                "http_tokens": "required",
                "instance_metadata_tags": "disabled"
              }
            ],
            "monitoring": [
              {
                "enabled": true
              }
            ],
            "name": "spark-k8s-operator-core-node-grp",
            "name_prefix": "",
            "network_interfaces": [
              {
                "associate_carrier_ip_address": "",
                "associate_public_ip_address": "false",
                "delete_on_termination": "",
                "description": "",
                "device_index": 0,
                "interface_type": "",
                "ipv4_address_count": 0,
                "ipv4_addresses": [],
                "ipv4_prefix_count": 0,
                "ipv4_prefixes": [],
                "ipv6_address_count": 0,
                "ipv6_addresses": [],
                "ipv6_prefix_count": 0,
                "ipv6_prefixes": [],
                "network_card_index": 0,
                "network_interface_id": "",
                "private_ip_address": "",
                "security_groups": [
                  "sg-02bfbafdfcc2e68c7"
                ],
                "subnet_id": ""
              }
            ],
            "placement": [],
            "private_dns_name_options": [],
            "ram_disk_id": "",
            "security_group_names": [],
            "tag_specifications": [
              {
                "resource_type": "instance",
                "tags": {
                  "Blueprint": "spark-k8s-operator",
                  "GithubRepo": "github.com/awslabs/data-on-eks",
                  "Name": "spark-k8s-operator-core-node-grp",
                  "k8s.io/cluster-autoscaler/enabled": "TRUE",
                  "k8s.io/cluster-autoscaler/experiments": "owned",
                  "k8s.io/cluster-autoscaler/node-template/label/arch": "x86",
                  "k8s.io/cluster-autoscaler/node-template/label/kubernetes.io/os": "linux",
                  "k8s.io/cluster-autoscaler/node-template/label/node-lifecycle": "on-demand",
                  "k8s.io/cluster-autoscaler/node-template/label/noderole": "core",
                  "k8s.io/cluster-autoscaler/spark-k8s-operator": "owned",
                  "kubernetes.io/cluster/spark-k8s-operator": "owned",
                  "managed-by": "terraform-aws-eks-blueprints",
                  "subnet_type": "private"
                }
              },
              {
                "resource_type": "network-interface",
                "tags": {
                  "Blueprint": "spark-k8s-operator",
                  "GithubRepo": "github.com/awslabs/data-on-eks",
                  "Name": "spark-k8s-operator-core-node-grp",
                  "k8s.io/cluster-autoscaler/enabled": "TRUE",
                  "k8s.io/cluster-autoscaler/experiments": "owned",
                  "k8s.io/cluster-autoscaler/node-template/label/arch": "x86",
                  "k8s.io/cluster-autoscaler/node-template/label/kubernetes.io/os": "linux",
                  "k8s.io/cluster-autoscaler/node-template/label/node-lifecycle": "on-demand",
                  "k8s.io/cluster-autoscaler/node-template/label/noderole": "core",
                  "k8s.io/cluster-autoscaler/spark-k8s-operator": "owned",
                  "kubernetes.io/cluster/spark-k8s-operator": "owned",
                  "managed-by": "terraform-aws-eks-blueprints",
                  "subnet_type": "private"
                }
              },
              {
                "resource_type": "volume",
                "tags": {
                  "Blueprint": "spark-k8s-operator",
                  "GithubRepo": "github.com/awslabs/data-on-eks",
                  "Name": "spark-k8s-operator-core-node-grp",
                  "k8s.io/cluster-autoscaler/enabled": "TRUE",
                  "k8s.io/cluster-autoscaler/experiments": "owned",
                  "k8s.io/cluster-autoscaler/node-template/label/arch": "x86",
                  "k8s.io/cluster-autoscaler/node-template/label/kubernetes.io/os": "linux",
                  "k8s.io/cluster-autoscaler/node-template/label/node-lifecycle": "on-demand",
                  "k8s.io/cluster-autoscaler/node-template/label/noderole": "core",
                  "k8s.io/cluster-autoscaler/spark-k8s-operator": "owned",
                  "kubernetes.io/cluster/spark-k8s-operator": "owned",
                  "managed-by": "terraform-aws-eks-blueprints",
                  "subnet_type": "private"
                }
              }
            ],
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks"
            },
            "update_default_version": true,
            "user_data": "TUlNRS1WZXJzaW9uOiAxLjAKQ29udGVudC1UeXBlOiBtdWx0aXBhcnQvbWl4ZWQ7IGJvdW5kYXJ5PSIvLyIKCi0tLy8KQ29udGVudC1UeXBlOiB0ZXh0L3gtc2hlbGxzY3JpcHQ7IGNoYXJzZXQ9InVzLWFzY2lpIgojIS9iaW4vYmFzaApzZXQgLWV4CgotLS8vLS0K",
            "vpc_security_group_ids": []
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "data.aws_availability_zones.available",
            "data.aws_eks_cluster_auth.this",
            "module.eks_blueprints.data.aws_caller_identity.current",
            "module.eks_blueprints.data.aws_eks_cluster.cluster",
            "module.eks_blueprints.data.aws_iam_policy_document.eks_key",
            "module.eks_blueprints.data.aws_iam_session_context.current",
            "module.eks_blueprints.data.aws_partition.current",
            "module.eks_blueprints.data.aws_region.current",
            "module.eks_blueprints.data.http.eks_cluster_readiness",
            "module.eks_blueprints.kubernetes_config_map.aws_auth",
            "module.eks_blueprints.module.aws_eks.aws_cloudwatch_log_group.this",
            "module.eks_blueprints.module.aws_eks.aws_eks_cluster.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role_policy_attachment.this",
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.node",
            "module.eks_blueprints.module.aws_eks.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.data.aws_iam_policy_document.assume_role_policy",
            "module.eks_blueprints.module.aws_eks.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_external_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_iam_policy_document.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks_managed_node_groups.aws_iam_role.managed_ng",
            "module.eks_blueprints.module.aws_eks_managed_node_groups.aws_iam_role_policy_attachment.managed_ng",
            "module.eks_blueprints.module.aws_eks_managed_node_groups.data.aws_iam_policy_document.managed_ng_assume_role_policy",
            "module.eks_blueprints.module.kms.aws_kms_key.this",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ],
          "create_before_destroy": true
        }
      ]
    },
    {
      "module": "module.eks_blueprints.module.aws_eks_managed_node_groups[\"mng2\"]",
      "mode": "data",
      "type": "aws_iam_policy_document",
      "name": "managed_ng_assume_role_policy",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "id": "3778018924",
            "json": "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Sid\": \"EKSWorkerAssumeRole\",\n      \"Effect\": \"Allow\",\n      \"Action\": \"sts:AssumeRole\",\n      \"Principal\": {\n        \"Service\": \"ec2.amazonaws.com\"\n      }\n    }\n  ]\n}",
            "override_json": null,
            "override_policy_documents": null,
            "policy_id": null,
            "source_json": null,
            "source_policy_documents": null,
            "statement": [
              {
                "actions": [
                  "sts:AssumeRole"
                ],
                "condition": [],
                "effect": "Allow",
                "not_actions": [],
                "not_principals": [],
                "not_resources": [],
                "principals": [
                  {
                    "identifiers": [
                      "ec2.amazonaws.com"
                    ],
                    "type": "Service"
                  }
                ],
                "resources": [],
                "sid": "EKSWorkerAssumeRole"
              }
            ],
            "version": "2012-10-17"
          },
          "sensitive_attributes": []
        }
      ]
    },
    {
      "module": "module.eks_blueprints.module.aws_eks_managed_node_groups[\"mng2\"]",
      "mode": "managed",
      "type": "aws_eks_node_group",
      "name": "managed_ng",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "ami_type": "AL2_x86_64",
            "arn": "arn:aws:eks:us-west-2:833162080385:nodegroup/spark-k8s-operator/spark-node-grp-20230301012822643100000021/bec34d64-7318-5814-557f-5184b59f41a2",
            "capacity_type": "ON_DEMAND",
            "cluster_name": "spark-k8s-operator",
            "disk_size": 0,
            "force_update_version": null,
            "id": "spark-k8s-operator:spark-node-grp-20230301012822643100000021",
            "instance_types": [
              "r5d.large"
            ],
            "labels": {
              "Environment": "preprod",
              "NodeGroupType": "spark",
              "WorkerType": "ON_DEMAND",
              "Zone": "test"
            },
            "launch_template": [
              {
                "id": "lt-0cad640ca19c318d7",
                "name": "spark-k8s-operator-spark-node-grp",
                "version": "1"
              }
            ],
            "node_group_name": "spark-node-grp-20230301012822643100000021",
            "node_group_name_prefix": "spark-node-grp-",
            "node_role_arn": "arn:aws:iam::833162080385:role/spark-k8s-operator-spark-node-grp",
            "release_version": "1.24.10-20230217",
            "remote_access": [],
            "resources": [
              {
                "autoscaling_groups": [
                  {
                    "name": "eks-spark-node-grp-20230301012822643100000021-bec34d64-7318-5814-557f-5184b59f41a2"
                  }
                ],
                "remote_access_security_group_id": ""
              }
            ],
            "scaling_config": [
              {
                "desired_size": 3,
                "max_size": 9,
                "min_size": 3
              }
            ],
            "status": "ACTIVE",
            "subnet_ids": [
              "subnet-0fefa6460af7bc584"
            ],
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-spark-node-grp",
              "k8s.io/cluster-autoscaler/enabled": "TRUE",
              "k8s.io/cluster-autoscaler/experiments": "owned",
              "k8s.io/cluster-autoscaler/node-template/label/arch": "x86",
              "k8s.io/cluster-autoscaler/node-template/label/disk": "nvme",
              "k8s.io/cluster-autoscaler/node-template/label/kubernetes.io/os": "linux",
              "k8s.io/cluster-autoscaler/node-template/label/node-lifecycle": "on-demand",
              "k8s.io/cluster-autoscaler/node-template/label/noderole": "spark",
              "k8s.io/cluster-autoscaler/spark-k8s-operator": "owned",
              "kubernetes.io/cluster/spark-k8s-operator": "owned",
              "managed-by": "terraform-aws-eks-blueprints",
              "subnet_type": "private"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-spark-node-grp",
              "k8s.io/cluster-autoscaler/enabled": "TRUE",
              "k8s.io/cluster-autoscaler/experiments": "owned",
              "k8s.io/cluster-autoscaler/node-template/label/arch": "x86",
              "k8s.io/cluster-autoscaler/node-template/label/disk": "nvme",
              "k8s.io/cluster-autoscaler/node-template/label/kubernetes.io/os": "linux",
              "k8s.io/cluster-autoscaler/node-template/label/node-lifecycle": "on-demand",
              "k8s.io/cluster-autoscaler/node-template/label/noderole": "spark",
              "k8s.io/cluster-autoscaler/spark-k8s-operator": "owned",
              "kubernetes.io/cluster/spark-k8s-operator": "owned",
              "managed-by": "terraform-aws-eks-blueprints",
              "subnet_type": "private"
            },
            "taint": [],
            "timeouts": {
              "create": "30m",
              "delete": "30m",
              "update": "2h"
            },
            "update_config": [
              {
                "max_unavailable": 0,
                "max_unavailable_percentage": 50
              }
            ],
            "version": "1.24"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjoxODAwMDAwMDAwMDAwLCJkZWxldGUiOjE4MDAwMDAwMDAwMDAsInVwZGF0ZSI6NzIwMDAwMDAwMDAwMH19",
          "dependencies": [
            "data.aws_availability_zones.available",
            "data.aws_eks_cluster_auth.this",
            "module.eks_blueprints.data.aws_caller_identity.current",
            "module.eks_blueprints.data.aws_eks_cluster.cluster",
            "module.eks_blueprints.data.aws_iam_policy_document.eks_key",
            "module.eks_blueprints.data.aws_iam_session_context.current",
            "module.eks_blueprints.data.aws_partition.current",
            "module.eks_blueprints.data.aws_region.current",
            "module.eks_blueprints.data.http.eks_cluster_readiness",
            "module.eks_blueprints.kubernetes_config_map.aws_auth",
            "module.eks_blueprints.module.aws_eks.aws_cloudwatch_log_group.this",
            "module.eks_blueprints.module.aws_eks.aws_eks_cluster.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role_policy_attachment.this",
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.node",
            "module.eks_blueprints.module.aws_eks.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.data.aws_iam_policy_document.assume_role_policy",
            "module.eks_blueprints.module.aws_eks.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_external_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_iam_policy_document.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks_managed_node_groups.aws_iam_instance_profile.managed_ng",
            "module.eks_blueprints.module.aws_eks_managed_node_groups.aws_iam_role.managed_ng",
            "module.eks_blueprints.module.aws_eks_managed_node_groups.aws_iam_role_policy_attachment.managed_ng",
            "module.eks_blueprints.module.aws_eks_managed_node_groups.aws_launch_template.managed_node_groups",
            "module.eks_blueprints.module.aws_eks_managed_node_groups.data.aws_iam_policy_document.managed_ng_assume_role_policy",
            "module.eks_blueprints.module.kms.aws_kms_key.this",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ],
          "create_before_destroy": true
        }
      ]
    },
    {
      "module": "module.eks_blueprints.module.aws_eks_managed_node_groups[\"mng2\"]",
      "mode": "managed",
      "type": "aws_iam_instance_profile",
      "name": "managed_ng",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 0,
          "attributes": {
            "arn": "arn:aws:iam::833162080385:instance-profile/spark-k8s-operator-spark-node-grp",
            "create_date": "2023-03-01T01:28:21Z",
            "id": "spark-k8s-operator-spark-node-grp",
            "name": "spark-k8s-operator-spark-node-grp",
            "name_prefix": null,
            "path": "/",
            "role": "spark-k8s-operator-spark-node-grp",
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks"
            },
            "unique_id": "AIPA4D7CUOCA4BUNDREJO"
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "data.aws_availability_zones.available",
            "data.aws_eks_cluster_auth.this",
            "module.eks_blueprints.data.aws_caller_identity.current",
            "module.eks_blueprints.data.aws_eks_cluster.cluster",
            "module.eks_blueprints.data.aws_iam_policy_document.eks_key",
            "module.eks_blueprints.data.aws_iam_session_context.current",
            "module.eks_blueprints.data.aws_partition.current",
            "module.eks_blueprints.data.aws_region.current",
            "module.eks_blueprints.data.http.eks_cluster_readiness",
            "module.eks_blueprints.kubernetes_config_map.aws_auth",
            "module.eks_blueprints.module.aws_eks.aws_cloudwatch_log_group.this",
            "module.eks_blueprints.module.aws_eks.aws_eks_cluster.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role_policy_attachment.this",
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.node",
            "module.eks_blueprints.module.aws_eks.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.data.aws_iam_policy_document.assume_role_policy",
            "module.eks_blueprints.module.aws_eks.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_external_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_iam_policy_document.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks_managed_node_groups.aws_iam_role.managed_ng",
            "module.eks_blueprints.module.aws_eks_managed_node_groups.data.aws_iam_policy_document.managed_ng_assume_role_policy",
            "module.eks_blueprints.module.kms.aws_kms_key.this",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ],
          "create_before_destroy": true
        }
      ]
    },
    {
      "module": "module.eks_blueprints.module.aws_eks_managed_node_groups[\"mng2\"]",
      "mode": "managed",
      "type": "aws_iam_role",
      "name": "managed_ng",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 0,
          "attributes": {
            "arn": "arn:aws:iam::833162080385:role/spark-k8s-operator-spark-node-grp",
            "assume_role_policy": "{\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":\"ec2.amazonaws.com\"},\"Sid\":\"EKSWorkerAssumeRole\"}],\"Version\":\"2012-10-17\"}",
            "create_date": "2023-03-01T01:28:19Z",
            "description": "EKS Managed Node group IAM Role",
            "force_detach_policies": true,
            "id": "spark-k8s-operator-spark-node-grp",
            "inline_policy": [],
            "managed_policy_arns": [
              "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly",
              "arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy",
              "arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy",
              "arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore"
            ],
            "max_session_duration": 3600,
            "name": "spark-k8s-operator-spark-node-grp",
            "name_prefix": "",
            "path": "/",
            "permissions_boundary": null,
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks"
            },
            "unique_id": "AROA4D7CUOCAWVH6X6TAR"
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "data.aws_availability_zones.available",
            "data.aws_eks_cluster_auth.this",
            "module.eks_blueprints.data.aws_caller_identity.current",
            "module.eks_blueprints.data.aws_eks_cluster.cluster",
            "module.eks_blueprints.data.aws_iam_policy_document.eks_key",
            "module.eks_blueprints.data.aws_iam_session_context.current",
            "module.eks_blueprints.data.aws_partition.current",
            "module.eks_blueprints.data.aws_region.current",
            "module.eks_blueprints.data.http.eks_cluster_readiness",
            "module.eks_blueprints.kubernetes_config_map.aws_auth",
            "module.eks_blueprints.module.aws_eks.aws_cloudwatch_log_group.this",
            "module.eks_blueprints.module.aws_eks.aws_eks_cluster.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role_policy_attachment.this",
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.node",
            "module.eks_blueprints.module.aws_eks.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.data.aws_iam_policy_document.assume_role_policy",
            "module.eks_blueprints.module.aws_eks.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_external_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_iam_policy_document.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks_managed_node_groups.data.aws_iam_policy_document.managed_ng_assume_role_policy",
            "module.eks_blueprints.module.kms.aws_kms_key.this",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ],
          "create_before_destroy": true
        }
      ]
    },
    {
      "module": "module.eks_blueprints.module.aws_eks_managed_node_groups[\"mng2\"]",
      "mode": "managed",
      "type": "aws_iam_role_policy_attachment",
      "name": "managed_ng",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly",
          "schema_version": 0,
          "attributes": {
            "id": "spark-k8s-operator-spark-node-grp-20230301012821273800000018",
            "policy_arn": "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly",
            "role": "spark-k8s-operator-spark-node-grp"
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "data.aws_availability_zones.available",
            "data.aws_eks_cluster_auth.this",
            "module.eks_blueprints.data.aws_caller_identity.current",
            "module.eks_blueprints.data.aws_eks_cluster.cluster",
            "module.eks_blueprints.data.aws_iam_policy_document.eks_key",
            "module.eks_blueprints.data.aws_iam_session_context.current",
            "module.eks_blueprints.data.aws_partition.current",
            "module.eks_blueprints.data.aws_region.current",
            "module.eks_blueprints.data.http.eks_cluster_readiness",
            "module.eks_blueprints.kubernetes_config_map.aws_auth",
            "module.eks_blueprints.module.aws_eks.aws_cloudwatch_log_group.this",
            "module.eks_blueprints.module.aws_eks.aws_eks_cluster.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role_policy_attachment.this",
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.node",
            "module.eks_blueprints.module.aws_eks.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.data.aws_iam_policy_document.assume_role_policy",
            "module.eks_blueprints.module.aws_eks.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_external_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_iam_policy_document.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks_managed_node_groups.aws_iam_role.managed_ng",
            "module.eks_blueprints.module.aws_eks_managed_node_groups.data.aws_iam_policy_document.managed_ng_assume_role_policy",
            "module.eks_blueprints.module.kms.aws_kms_key.this",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ],
          "create_before_destroy": true
        },
        {
          "index_key": "arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy",
          "schema_version": 0,
          "attributes": {
            "id": "spark-k8s-operator-spark-node-grp-20230301012821535300000019",
            "policy_arn": "arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy",
            "role": "spark-k8s-operator-spark-node-grp"
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "data.aws_availability_zones.available",
            "data.aws_eks_cluster_auth.this",
            "module.eks_blueprints.data.aws_caller_identity.current",
            "module.eks_blueprints.data.aws_eks_cluster.cluster",
            "module.eks_blueprints.data.aws_iam_policy_document.eks_key",
            "module.eks_blueprints.data.aws_iam_session_context.current",
            "module.eks_blueprints.data.aws_partition.current",
            "module.eks_blueprints.data.aws_region.current",
            "module.eks_blueprints.data.http.eks_cluster_readiness",
            "module.eks_blueprints.kubernetes_config_map.aws_auth",
            "module.eks_blueprints.module.aws_eks.aws_cloudwatch_log_group.this",
            "module.eks_blueprints.module.aws_eks.aws_eks_cluster.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role_policy_attachment.this",
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.node",
            "module.eks_blueprints.module.aws_eks.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.data.aws_iam_policy_document.assume_role_policy",
            "module.eks_blueprints.module.aws_eks.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_external_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_iam_policy_document.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks_managed_node_groups.aws_iam_role.managed_ng",
            "module.eks_blueprints.module.aws_eks_managed_node_groups.data.aws_iam_policy_document.managed_ng_assume_role_policy",
            "module.eks_blueprints.module.kms.aws_kms_key.this",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ],
          "create_before_destroy": true
        },
        {
          "index_key": "arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy",
          "schema_version": 0,
          "attributes": {
            "id": "spark-k8s-operator-spark-node-grp-2023030101282194480000001b",
            "policy_arn": "arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy",
            "role": "spark-k8s-operator-spark-node-grp"
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "data.aws_availability_zones.available",
            "data.aws_eks_cluster_auth.this",
            "module.eks_blueprints.data.aws_caller_identity.current",
            "module.eks_blueprints.data.aws_eks_cluster.cluster",
            "module.eks_blueprints.data.aws_iam_policy_document.eks_key",
            "module.eks_blueprints.data.aws_iam_session_context.current",
            "module.eks_blueprints.data.aws_partition.current",
            "module.eks_blueprints.data.aws_region.current",
            "module.eks_blueprints.data.http.eks_cluster_readiness",
            "module.eks_blueprints.kubernetes_config_map.aws_auth",
            "module.eks_blueprints.module.aws_eks.aws_cloudwatch_log_group.this",
            "module.eks_blueprints.module.aws_eks.aws_eks_cluster.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role_policy_attachment.this",
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.node",
            "module.eks_blueprints.module.aws_eks.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.data.aws_iam_policy_document.assume_role_policy",
            "module.eks_blueprints.module.aws_eks.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_external_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_iam_policy_document.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks_managed_node_groups.aws_iam_role.managed_ng",
            "module.eks_blueprints.module.aws_eks_managed_node_groups.data.aws_iam_policy_document.managed_ng_assume_role_policy",
            "module.eks_blueprints.module.kms.aws_kms_key.this",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ],
          "create_before_destroy": true
        },
        {
          "index_key": "arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore",
          "schema_version": 0,
          "attributes": {
            "id": "spark-k8s-operator-spark-node-grp-2023030101282157950000001a",
            "policy_arn": "arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore",
            "role": "spark-k8s-operator-spark-node-grp"
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "data.aws_availability_zones.available",
            "data.aws_eks_cluster_auth.this",
            "module.eks_blueprints.data.aws_caller_identity.current",
            "module.eks_blueprints.data.aws_eks_cluster.cluster",
            "module.eks_blueprints.data.aws_iam_policy_document.eks_key",
            "module.eks_blueprints.data.aws_iam_session_context.current",
            "module.eks_blueprints.data.aws_partition.current",
            "module.eks_blueprints.data.aws_region.current",
            "module.eks_blueprints.data.http.eks_cluster_readiness",
            "module.eks_blueprints.kubernetes_config_map.aws_auth",
            "module.eks_blueprints.module.aws_eks.aws_cloudwatch_log_group.this",
            "module.eks_blueprints.module.aws_eks.aws_eks_cluster.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role_policy_attachment.this",
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.node",
            "module.eks_blueprints.module.aws_eks.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.data.aws_iam_policy_document.assume_role_policy",
            "module.eks_blueprints.module.aws_eks.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_external_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_iam_policy_document.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks_managed_node_groups.aws_iam_role.managed_ng",
            "module.eks_blueprints.module.aws_eks_managed_node_groups.data.aws_iam_policy_document.managed_ng_assume_role_policy",
            "module.eks_blueprints.module.kms.aws_kms_key.this",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ],
          "create_before_destroy": true
        }
      ]
    },
    {
      "module": "module.eks_blueprints.module.aws_eks_managed_node_groups[\"mng2\"]",
      "mode": "managed",
      "type": "aws_launch_template",
      "name": "managed_node_groups",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 0,
          "attributes": {
            "arn": "arn:aws:ec2:us-west-2:833162080385:launch-template/lt-0cad640ca19c318d7",
            "block_device_mappings": [
              {
                "device_name": "/dev/xvda",
                "ebs": [
                  {
                    "delete_on_termination": "true",
                    "encrypted": "true",
                    "iops": 3000,
                    "kms_key_id": "",
                    "snapshot_id": "",
                    "throughput": 125,
                    "volume_size": 100,
                    "volume_type": "gp3"
                  }
                ],
                "no_device": "",
                "virtual_name": ""
              }
            ],
            "capacity_reservation_specification": [],
            "cpu_options": [],
            "credit_specification": [],
            "default_version": 1,
            "description": "Launch Template for EKS Managed Node Groups",
            "disable_api_stop": false,
            "disable_api_termination": false,
            "ebs_optimized": "true",
            "elastic_gpu_specifications": [],
            "elastic_inference_accelerator": [],
            "enclave_options": [],
            "hibernation_options": [],
            "iam_instance_profile": [],
            "id": "lt-0cad640ca19c318d7",
            "image_id": "",
            "instance_initiated_shutdown_behavior": "",
            "instance_market_options": [],
            "instance_requirements": [],
            "instance_type": "",
            "kernel_id": "",
            "key_name": "",
            "latest_version": 1,
            "license_specification": [],
            "maintenance_options": [],
            "metadata_options": [
              {
                "http_endpoint": "enabled",
                "http_protocol_ipv6": "disabled",
                "http_put_response_hop_limit": 2,
                "http_tokens": "required",
                "instance_metadata_tags": "disabled"
              }
            ],
            "monitoring": [
              {
                "enabled": true
              }
            ],
            "name": "spark-k8s-operator-spark-node-grp",
            "name_prefix": "",
            "network_interfaces": [
              {
                "associate_carrier_ip_address": "",
                "associate_public_ip_address": "false",
                "delete_on_termination": "",
                "description": "",
                "device_index": 0,
                "interface_type": "",
                "ipv4_address_count": 0,
                "ipv4_addresses": [],
                "ipv4_prefix_count": 0,
                "ipv4_prefixes": [],
                "ipv6_address_count": 0,
                "ipv6_addresses": [],
                "ipv6_prefix_count": 0,
                "ipv6_prefixes": [],
                "network_card_index": 0,
                "network_interface_id": "",
                "private_ip_address": "",
                "security_groups": [
                  "sg-02bfbafdfcc2e68c7"
                ],
                "subnet_id": ""
              }
            ],
            "placement": [],
            "private_dns_name_options": [],
            "ram_disk_id": "",
            "security_group_names": [],
            "tag_specifications": [
              {
                "resource_type": "instance",
                "tags": {
                  "Blueprint": "spark-k8s-operator",
                  "GithubRepo": "github.com/awslabs/data-on-eks",
                  "Name": "spark-k8s-operator-spark-node-grp",
                  "k8s.io/cluster-autoscaler/enabled": "TRUE",
                  "k8s.io/cluster-autoscaler/experiments": "owned",
                  "k8s.io/cluster-autoscaler/node-template/label/arch": "x86",
                  "k8s.io/cluster-autoscaler/node-template/label/disk": "nvme",
                  "k8s.io/cluster-autoscaler/node-template/label/kubernetes.io/os": "linux",
                  "k8s.io/cluster-autoscaler/node-template/label/node-lifecycle": "on-demand",
                  "k8s.io/cluster-autoscaler/node-template/label/noderole": "spark",
                  "k8s.io/cluster-autoscaler/spark-k8s-operator": "owned",
                  "kubernetes.io/cluster/spark-k8s-operator": "owned",
                  "managed-by": "terraform-aws-eks-blueprints",
                  "subnet_type": "private"
                }
              },
              {
                "resource_type": "network-interface",
                "tags": {
                  "Blueprint": "spark-k8s-operator",
                  "GithubRepo": "github.com/awslabs/data-on-eks",
                  "Name": "spark-k8s-operator-spark-node-grp",
                  "k8s.io/cluster-autoscaler/enabled": "TRUE",
                  "k8s.io/cluster-autoscaler/experiments": "owned",
                  "k8s.io/cluster-autoscaler/node-template/label/arch": "x86",
                  "k8s.io/cluster-autoscaler/node-template/label/disk": "nvme",
                  "k8s.io/cluster-autoscaler/node-template/label/kubernetes.io/os": "linux",
                  "k8s.io/cluster-autoscaler/node-template/label/node-lifecycle": "on-demand",
                  "k8s.io/cluster-autoscaler/node-template/label/noderole": "spark",
                  "k8s.io/cluster-autoscaler/spark-k8s-operator": "owned",
                  "kubernetes.io/cluster/spark-k8s-operator": "owned",
                  "managed-by": "terraform-aws-eks-blueprints",
                  "subnet_type": "private"
                }
              },
              {
                "resource_type": "volume",
                "tags": {
                  "Blueprint": "spark-k8s-operator",
                  "GithubRepo": "github.com/awslabs/data-on-eks",
                  "Name": "spark-k8s-operator-spark-node-grp",
                  "k8s.io/cluster-autoscaler/enabled": "TRUE",
                  "k8s.io/cluster-autoscaler/experiments": "owned",
                  "k8s.io/cluster-autoscaler/node-template/label/arch": "x86",
                  "k8s.io/cluster-autoscaler/node-template/label/disk": "nvme",
                  "k8s.io/cluster-autoscaler/node-template/label/kubernetes.io/os": "linux",
                  "k8s.io/cluster-autoscaler/node-template/label/node-lifecycle": "on-demand",
                  "k8s.io/cluster-autoscaler/node-template/label/noderole": "spark",
                  "k8s.io/cluster-autoscaler/spark-k8s-operator": "owned",
                  "kubernetes.io/cluster/spark-k8s-operator": "owned",
                  "managed-by": "terraform-aws-eks-blueprints",
                  "subnet_type": "private"
                }
              }
            ],
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks"
            },
            "update_default_version": true,
            "user_data": "TUlNRS1WZXJzaW9uOiAxLjAKQ29udGVudC1UeXBlOiBtdWx0aXBhcnQvbWl4ZWQ7IGJvdW5kYXJ5PSIvLyIKCi0tLy8KQ29udGVudC1UeXBlOiB0ZXh0L3gtc2hlbGxzY3JpcHQ7IGNoYXJzZXQ9InVzLWFzY2lpIgojIS9iaW4vYmFzaApzZXQgLWV4CgplY2hvICJGb3JtYXQgYW5kIE1vdW50IE5WTWUgRGlza3MgaWYgYXZhaWxhYmxlIgpJRFg9MQpERVZJQ0VTPSQobHNibGsgLW8gTkFNRSxUWVBFIC1kc24gfCBhd2sgJy9kaXNrLyB7cHJpbnQgJDF9JykKCmZvciBERVYgaW4gJERFVklDRVMKZG8KICBta2ZzLnhmcyAvZGV2LyR7REVWfQogIG1rZGlyIC1wIC9sb2NhbCR7SURYfQoKICBlY2hvIC9kZXYvJHtERVZ9IC9sb2NhbCR7SURYfSB4ZnMgZGVmYXVsdHMsbm9hdGltZSAxIDIgPj4gL2V0Yy9mc3RhYgoKICBJRFg9JCgoJHtJRFh9ICsgMSkpCmRvbmUKbW91bnQgLWEKIyBVc2VyLXN1cHBsaWVkIHBvc3QgdXNlcmRhdGEKIyEvYmluL2Jhc2gKc2V0IC1leAovdXNyL2Jpbi9jaG93biAtaFIgKzE4NTorMTAwMCAvbG9jYWwxCgotLS8vLS0K",
            "vpc_security_group_ids": []
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "data.aws_availability_zones.available",
            "data.aws_eks_cluster_auth.this",
            "module.eks_blueprints.data.aws_caller_identity.current",
            "module.eks_blueprints.data.aws_eks_cluster.cluster",
            "module.eks_blueprints.data.aws_iam_policy_document.eks_key",
            "module.eks_blueprints.data.aws_iam_session_context.current",
            "module.eks_blueprints.data.aws_partition.current",
            "module.eks_blueprints.data.aws_region.current",
            "module.eks_blueprints.data.http.eks_cluster_readiness",
            "module.eks_blueprints.kubernetes_config_map.aws_auth",
            "module.eks_blueprints.module.aws_eks.aws_cloudwatch_log_group.this",
            "module.eks_blueprints.module.aws_eks.aws_eks_cluster.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role_policy_attachment.this",
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.node",
            "module.eks_blueprints.module.aws_eks.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.data.aws_iam_policy_document.assume_role_policy",
            "module.eks_blueprints.module.aws_eks.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_external_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_iam_policy_document.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks_managed_node_groups.aws_iam_role.managed_ng",
            "module.eks_blueprints.module.aws_eks_managed_node_groups.aws_iam_role_policy_attachment.managed_ng",
            "module.eks_blueprints.module.aws_eks_managed_node_groups.data.aws_iam_policy_document.managed_ng_assume_role_policy",
            "module.eks_blueprints.module.kms.aws_kms_key.this",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ],
          "create_before_destroy": true
        }
      ]
    },
    {
      "module": "module.eks_blueprints.module.kms[0]",
      "mode": "managed",
      "type": "aws_kms_alias",
      "name": "this",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "arn": "arn:aws:kms:us-west-2:833162080385:alias/spark-k8s-operator",
            "id": "alias/spark-k8s-operator",
            "name": "alias/spark-k8s-operator",
            "name_prefix": "",
            "target_key_arn": "arn:aws:kms:us-west-2:833162080385:key/e1f34ad3-684c-4cef-bd9e-1145e274491e",
            "target_key_id": "e1f34ad3-684c-4cef-bd9e-1145e274491e"
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "module.eks_blueprints.data.aws_caller_identity.current",
            "module.eks_blueprints.data.aws_iam_policy_document.eks_key",
            "module.eks_blueprints.data.aws_iam_session_context.current",
            "module.eks_blueprints.data.aws_partition.current",
            "module.eks_blueprints.data.aws_region.current",
            "module.eks_blueprints.module.kms.aws_kms_key.this"
          ]
        }
      ]
    },
    {
      "module": "module.eks_blueprints.module.kms[0]",
      "mode": "managed",
      "type": "aws_kms_key",
      "name": "this",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "arn": "arn:aws:kms:us-west-2:833162080385:key/e1f34ad3-684c-4cef-bd9e-1145e274491e",
            "bypass_policy_lockout_safety_check": false,
            "custom_key_store_id": "",
            "customer_master_key_spec": "SYMMETRIC_DEFAULT",
            "deletion_window_in_days": 30,
            "description": "spark-k8s-operator EKS cluster secret encryption key",
            "enable_key_rotation": true,
            "id": "e1f34ad3-684c-4cef-bd9e-1145e274491e",
            "is_enabled": true,
            "key_id": "e1f34ad3-684c-4cef-bd9e-1145e274491e",
            "key_usage": "ENCRYPT_DECRYPT",
            "multi_region": false,
            "policy": "{\"Statement\":[{\"Action\":[\"kms:ReEncrypt*\",\"kms:GenerateDataKey*\",\"kms:Encrypt\",\"kms:DescribeKey\",\"kms:Decrypt\",\"kms:CreateGrant\"],\"Condition\":{\"StringEquals\":{\"kms:CallerAccount\":\"833162080385\",\"kms:ViaService\":\"eks.us-west-2.amazonaws.com\"}},\"Effect\":\"Allow\",\"Principal\":{\"AWS\":\"arn:aws:iam::833162080385:root\"},\"Resource\":\"*\",\"Sid\":\"Allow access for all principals in the account that are authorized\"},{\"Action\":[\"kms:RevokeGrant\",\"kms:List*\",\"kms:Get*\",\"kms:Describe*\"],\"Effect\":\"Allow\",\"Principal\":{\"AWS\":\"arn:aws:iam::833162080385:root\"},\"Resource\":\"*\",\"Sid\":\"Allow direct access to key metadata to the account\"},{\"Action\":\"kms:*\",\"Effect\":\"Allow\",\"Principal\":{\"AWS\":\"arn:aws:iam::833162080385:role/Admin\"},\"Resource\":\"*\",\"Sid\":\"Allow access for Key Administrators\"},{\"Action\":[\"kms:ReEncrypt*\",\"kms:GenerateDataKey*\",\"kms:Encrypt\",\"kms:DescribeKey\",\"kms:Decrypt\"],\"Effect\":\"Allow\",\"Principal\":{\"AWS\":\"arn:aws:iam::833162080385:role/spark-k8s-operator-cluster-role\"},\"Resource\":\"*\",\"Sid\":\"Allow use of the key\"},{\"Action\":[\"kms:RevokeGrant\",\"kms:ListGrants\",\"kms:CreateGrant\"],\"Condition\":{\"Bool\":{\"kms:GrantIsForAWSResource\":\"true\"}},\"Effect\":\"Allow\",\"Principal\":{\"AWS\":\"arn:aws:iam::833162080385:role/spark-k8s-operator-cluster-role\"},\"Resource\":\"*\",\"Sid\":\"Allow attachment of persistent resources\"}],\"Version\":\"2012-10-17\"}",
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks"
            }
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "module.eks_blueprints.data.aws_caller_identity.current",
            "module.eks_blueprints.data.aws_iam_policy_document.eks_key",
            "module.eks_blueprints.data.aws_iam_session_context.current",
            "module.eks_blueprints.data.aws_partition.current",
            "module.eks_blueprints.data.aws_region.current"
          ]
        }
      ]
    },
    {
      "module": "module.eks_blueprints_kubernetes_addons",
      "mode": "data",
      "type": "aws_caller_identity",
      "name": "current",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "account_id": "833162080385",
            "arn": "arn:aws:sts::833162080385:assumed-role/Admin/mccloman-Isengard",
            "id": "833162080385",
            "user_id": "AROA4D7CUOCA6SGFA3KA2:mccloman-Isengard"
          },
          "sensitive_attributes": []
        }
      ]
    },
    {
      "module": "module.eks_blueprints_kubernetes_addons",
      "mode": "data",
      "type": "aws_eks_cluster",
      "name": "eks_cluster",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "arn": "arn:aws:eks:us-west-2:833162080385:cluster/spark-k8s-operator",
            "certificate_authority": [
              {
                "data": "LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUMvakNDQWVhZ0F3SUJBZ0lCQURBTkJna3Foa2lHOXcwQkFRc0ZBREFWTVJNd0VRWURWUVFERXdwcmRXSmwKY201bGRHVnpNQjRYRFRJek1ETXdNVEF4TWpJME1Gb1hEVE16TURJeU5qQXhNakkwTUZvd0ZURVRNQkVHQTFVRQpBeE1LYTNWaVpYSnVaWFJsY3pDQ0FTSXdEUVlKS29aSWh2Y05BUUVCQlFBRGdnRVBBRENDQVFvQ2dnRUJBTWYyCnJiL3d1YW5iZk95bUFxVVJrRXFVdll0R3RCbnAxRE10QVUyb0t1L3dNdXIvTlViU1NoZUQyRjNtd202RlRuODkKc0EycHVWS1RFRXpBVXBNNndNRmhVT20vOW1nTlhpdmp5WW9wL01NNjB5RWNkbmg4Tml0anRoYk1hREtub1BWSQpySWV1bEIrV1lyS3dwdG44SXUwcWZDNGtjV25TYnRLT3drMVZ5cnVKS0JYeEYzeHNpQzRycW5DTjRwMWVsNy9PCng0STM5ZmFVMXJ3a0d3WXBOMDlwZzhqTi8yYnp2dHFXeTJ4a0tJNnBqNGwxTkpkQTRHaUV3OWdBZEZadlh6QkMKRThUci9yUDZZU2E3RkEwdzRieHpSQ2c4WWVPMmJzYVRBY1p4SGNlWnNyazdZL0N0bEg0aTZCK3pLWVI3ajBUTQpaTUZKclVPRTdqNVNOekUvWnBzQ0F3RUFBYU5aTUZjd0RnWURWUjBQQVFIL0JBUURBZ0trTUE4R0ExVWRFd0VCCi93UUZNQU1CQWY4d0hRWURWUjBPQkJZRUZQRWZyM3VObkZCSHdMN2pkZFdJYlB6VTlGTStNQlVHQTFVZEVRUU8KTUF5Q0NtdDFZbVZ5Ym1WMFpYTXdEUVlKS29aSWh2Y05BUUVMQlFBRGdnRUJBRzU5OWVUYy9hV1lWbmJuS0RLcwpnY09OMWlVbWJJNWxlOFQyYWdhUEJBQWxna1Y4MmJua0NGRnNZVjI0eDcxdVE5aDNCRVpzNHFoTW1PM3psMnhJCkwvYTVKR0VRNm9SQktZdWlxNS9QL25rNkluUkY3MXErSjNFQ1Z1VjBzQnFjRVpzTVNxclNKVU5YamttT2d1cEYKRHFCa0l5VXhCT3dkWHVabFB4YmNidGtiSWZPSmpmOE0rakorSVQ2ekhEREVvcFdYZm5VUlR5KzZ4Q2JBazAvNApDTGZhOFRrNFkzcG9aYThwQnlDalBGQ0hIU01hdXdIbzZFRzVsWFZkUzYzb0thMExobU03R29FNlVqZnFmZGp3CkU0Uk1ZVEQwc3JCMytRTDcraGNoVkF0RTk2ZTNZbkh5UFFiM0JEaG9FWDlaSXF0TlRsWGpIUWxZbmR6ak5ET24KM09VPQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCg=="
              }
            ],
            "cluster_id": null,
            "created_at": "2023-03-01 01:16:44.994 +0000 UTC",
            "enabled_cluster_log_types": [
              "api",
              "audit",
              "authenticator",
              "controllerManager",
              "scheduler"
            ],
            "endpoint": "https://C22446710534ECE8BC397E6224EDBDA0.gr7.us-west-2.eks.amazonaws.com",
            "id": "spark-k8s-operator",
            "identity": [
              {
                "oidc": [
                  {
                    "issuer": "https://oidc.eks.us-west-2.amazonaws.com/id/C22446710534ECE8BC397E6224EDBDA0"
                  }
                ]
              }
            ],
            "kubernetes_network_config": [
              {
                "ip_family": "ipv4",
                "service_ipv4_cidr": "172.20.0.0/16",
                "service_ipv6_cidr": ""
              }
            ],
            "name": "spark-k8s-operator",
            "outpost_config": [],
            "platform_version": "eks.4",
            "role_arn": "arn:aws:iam::833162080385:role/spark-k8s-operator-cluster-role",
            "status": "ACTIVE",
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks"
            },
            "version": "1.24",
            "vpc_config": [
              {
                "cluster_security_group_id": "sg-01a416c53ccb8a396",
                "endpoint_private_access": true,
                "endpoint_public_access": true,
                "public_access_cidrs": [
                  "0.0.0.0/0"
                ],
                "security_group_ids": [
                  "sg-08594ac5018946ede"
                ],
                "subnet_ids": [
                  "subnet-021471d8746f8f7f7",
                  "subnet-0bf5a95565543f69f",
                  "subnet-0fefa6460af7bc584"
                ],
                "vpc_id": "vpc-06ca7bfc43c08c033"
              }
            ]
          },
          "sensitive_attributes": []
        }
      ]
    },
    {
      "module": "module.eks_blueprints_kubernetes_addons",
      "mode": "data",
      "type": "aws_partition",
      "name": "current",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "dns_suffix": "amazonaws.com",
            "id": "aws",
            "partition": "aws",
            "reverse_dns_prefix": "com.amazonaws"
          },
          "sensitive_attributes": []
        }
      ]
    },
    {
      "module": "module.eks_blueprints_kubernetes_addons",
      "mode": "data",
      "type": "aws_region",
      "name": "current",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "description": "US West (Oregon)",
            "endpoint": "ec2.us-west-2.amazonaws.com",
            "id": "us-west-2",
            "name": "us-west-2"
          },
          "sensitive_attributes": []
        }
      ]
    },
    {
      "module": "module.eks_blueprints_kubernetes_addons",
      "mode": "managed",
      "type": "time_sleep",
      "name": "dataplane",
      "provider": "provider[\"registry.terraform.io/hashicorp/time\"]",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "create_duration": "10s",
            "destroy_duration": null,
            "id": "2023-03-01T01:28:28Z",
            "triggers": {
              "data_plane_wait_arn": "",
              "eks_cluster_id": "spark-k8s-operator"
            }
          },
          "sensitive_attributes": [],
          "dependencies": [
            "aws_s3_bucket.this",
            "aws_s3_bucket_acl.this",
            "aws_s3_bucket_public_access_block.this",
            "aws_s3_bucket_server_side_encryption_configuration.this",
            "aws_s3_object.this",
            "data.aws_availability_zones.available",
            "data.aws_caller_identity.current",
            "module.eks_blueprints.data.aws_caller_identity.current",
            "module.eks_blueprints.data.aws_iam_policy_document.eks_key",
            "module.eks_blueprints.data.aws_iam_session_context.current",
            "module.eks_blueprints.data.aws_partition.current",
            "module.eks_blueprints.data.aws_region.current",
            "module.eks_blueprints.module.aws_eks.aws_cloudwatch_log_group.this",
            "module.eks_blueprints.module.aws_eks.aws_eks_cluster.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role_policy_attachment.this",
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.node",
            "module.eks_blueprints.module.aws_eks.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.data.aws_iam_policy_document.assume_role_policy",
            "module.eks_blueprints.module.aws_eks.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_external_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_iam_policy_document.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_partition.current",
            "module.eks_blueprints.module.kms.aws_kms_key.this",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ]
        }
      ]
    },
    {
      "module": "module.eks_blueprints_kubernetes_addons.module.spark_k8s_operator[0]",
      "mode": "managed",
      "type": "kubernetes_namespace_v1",
      "name": "this",
      "provider": "provider[\"registry.terraform.io/hashicorp/kubernetes\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 0,
          "attributes": {
            "id": "spark-operator",
            "metadata": [
              {
                "annotations": {},
                "generate_name": "",
                "generation": 0,
                "labels": {},
                "name": "spark-operator",
                "resource_version": "1075",
                "uid": "2fa81378-a67c-4ee4-ac84-40f4f04c14a1"
              }
            ],
            "timeouts": null
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiZGVsZXRlIjozMDAwMDAwMDAwMDB9fQ==",
          "dependencies": [
            "aws_s3_bucket.this",
            "aws_s3_bucket_acl.this",
            "aws_s3_bucket_public_access_block.this",
            "aws_s3_bucket_server_side_encryption_configuration.this",
            "aws_s3_object.this",
            "data.aws_availability_zones.available",
            "data.aws_caller_identity.current",
            "data.aws_eks_cluster_auth.this",
            "module.eks_blueprints.data.aws_caller_identity.current",
            "module.eks_blueprints.data.aws_iam_policy_document.eks_key",
            "module.eks_blueprints.data.aws_iam_session_context.current",
            "module.eks_blueprints.data.aws_partition.current",
            "module.eks_blueprints.data.aws_region.current",
            "module.eks_blueprints.module.aws_eks.aws_cloudwatch_log_group.this",
            "module.eks_blueprints.module.aws_eks.aws_eks_cluster.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role_policy_attachment.this",
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.node",
            "module.eks_blueprints.module.aws_eks.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.data.aws_iam_policy_document.assume_role_policy",
            "module.eks_blueprints.module.aws_eks.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_external_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_iam_policy_document.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_partition.current",
            "module.eks_blueprints.module.kms.aws_kms_key.this",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ]
        }
      ]
    },
    {
      "module": "module.eks_blueprints_kubernetes_addons.module.spark_k8s_operator[0].module.helm_addon",
      "mode": "managed",
      "type": "helm_release",
      "name": "addon",
      "provider": "provider[\"registry.terraform.io/hashicorp/helm\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 1,
          "attributes": {
            "atomic": false,
            "chart": "spark-operator",
            "cleanup_on_fail": false,
            "create_namespace": true,
            "dependency_update": false,
            "description": "The spark_k8s_operator HelmChart Ingress Controller deployment configuration",
            "devel": null,
            "disable_crd_hooks": false,
            "disable_openapi_validation": false,
            "disable_webhooks": false,
            "force_update": false,
            "id": "spark-operator",
            "keyring": "",
            "lint": false,
            "manifest": null,
            "max_history": 0,
            "metadata": [
              {
                "app_version": "v1beta2-1.3.8-3.1.1",
                "chart": "spark-operator",
                "name": "spark-operator",
                "namespace": "spark-operator",
                "revision": 1,
                "values": "{\"batchScheduler\":{\"enable\":true},\"nodeSelector\":{\"NodeGroupType\":\"core\",\"kubernetes.io/os\":\"linux\"},\"replicaCount\":1,\"resources\":{\"limits\":{\"cpu\":\"200m\",\"memory\":\"1Gi\"},\"requests\":{\"cpu\":\"100m\",\"memory\":\"512Mi\"}},\"uiService\":{\"enable\":true},\"webhook\":{\"enable\":true,\"port\":8080}}",
                "version": "1.1.26"
              }
            ],
            "name": "spark-operator",
            "namespace": "spark-operator",
            "pass_credentials": false,
            "postrender": [
              {
                "args": [],
                "binary_path": ""
              }
            ],
            "recreate_pods": false,
            "render_subchart_notes": true,
            "replace": false,
            "repository": "https://googlecloudplatform.github.io/spark-on-k8s-operator",
            "repository_ca_file": null,
            "repository_cert_file": "",
            "repository_key_file": "",
            "repository_password": "",
            "repository_username": "",
            "reset_values": false,
            "reuse_values": false,
            "set": [],
            "set_sensitive": [],
            "skip_crds": false,
            "status": "uninstalling",
            "timeout": 300,
            "values": [
              "replicaCount: 1\n\n# nodeSelector -- Node labels for pod assignment\nnodeSelector:\n  NodeGroupType: core\n  kubernetes.io/os: linux\n\nwebhook:\n  # -- Enable webhook server\n  enable: true\n  # -- Webhook service port\n  port: 8080\n\n# resources -- Pod resource requests and limits\n# Note, that each job submission will spawn a JVM within the Spark Operator Pod using \"/usr/local/openjdk-11/bin/java -Xmx128m\".\n# Kubernetes may kill these Java processes at will to enforce resource limits. When that happens, you will see the following error:\n# 'failed to run spark-submit for SparkApplication [...]: signal: killed' - when this happens, you may want to increase memory limits.\nresources:\n   limits:\n     cpu: 200m\n     memory: 1Gi\n   requests:\n     cpu: 100m\n     memory: 512Mi\n\nbatchScheduler:\n  # -- Enable batch scheduler for spark jobs scheduling. If enabled, users can specify batch scheduler name in spark application\n  enable: true\n\n#------------------------------------\n# THIS WILL CREATE SERVICE AND INGRESS OBJECT FOR EACH SPARK APPLICATION\n#------------------------------------\nuiService:\n  # -- Enable UI service creation for Spark application\n  enable: true\n# -- Ingress URL format.\n# Requires the UI service to be enabled by setting `uiService.enable` to true.\n# 1/ Enable ingressUrlFormat to create an Ingress object for each Spark Job submitted using Spark Operator\n# 2/ This setup also requires ingres-nginx to be deployed with NLB as LB with IP based routing.\n# 3. Enter the NLB DNS name or enter Custom Domain name from route53 below which points to the NLB\n#ingressUrlFormat: '\u003cENTER_NLB_DNS_NAME/CUSTOM_DOMAIN_NAME\u003e/{{$appName}}'\n"
            ],
            "verify": false,
            "version": "1.1.26",
            "wait": true,
            "wait_for_jobs": false
          },
          "sensitive_attributes": [],
          "private": "eyJzY2hlbWFfdmVyc2lvbiI6IjEifQ==",
          "dependencies": [
            "aws_s3_bucket.this",
            "aws_s3_bucket_acl.this",
            "aws_s3_bucket_public_access_block.this",
            "aws_s3_bucket_server_side_encryption_configuration.this",
            "aws_s3_object.this",
            "data.aws_availability_zones.available",
            "data.aws_caller_identity.current",
            "data.aws_eks_cluster_auth.this",
            "module.eks_blueprints.data.aws_caller_identity.current",
            "module.eks_blueprints.data.aws_iam_policy_document.eks_key",
            "module.eks_blueprints.data.aws_iam_session_context.current",
            "module.eks_blueprints.data.aws_partition.current",
            "module.eks_blueprints.data.aws_region.current",
            "module.eks_blueprints.module.aws_eks.aws_cloudwatch_log_group.this",
            "module.eks_blueprints.module.aws_eks.aws_eks_cluster.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role_policy_attachment.this",
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.node",
            "module.eks_blueprints.module.aws_eks.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.data.aws_iam_policy_document.assume_role_policy",
            "module.eks_blueprints.module.aws_eks.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_external_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_iam_policy_document.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_partition.current",
            "module.eks_blueprints.module.kms.aws_kms_key.this",
            "module.eks_blueprints_kubernetes_addons.data.aws_caller_identity.current",
            "module.eks_blueprints_kubernetes_addons.data.aws_eks_cluster.eks_cluster",
            "module.eks_blueprints_kubernetes_addons.data.aws_partition.current",
            "module.eks_blueprints_kubernetes_addons.data.aws_region.current",
            "module.eks_blueprints_kubernetes_addons.module.spark_k8s_operator.kubernetes_namespace_v1.this",
            "module.eks_blueprints_kubernetes_addons.module.spark_k8s_operator.module.helm_addon.module.irsa.aws_iam_role.irsa",
            "module.eks_blueprints_kubernetes_addons.module.spark_k8s_operator.module.helm_addon.module.irsa.aws_iam_role_policy_attachment.irsa",
            "module.eks_blueprints_kubernetes_addons.module.spark_k8s_operator.module.helm_addon.module.irsa.kubernetes_namespace_v1.irsa",
            "module.eks_blueprints_kubernetes_addons.module.spark_k8s_operator.module.helm_addon.module.irsa.kubernetes_service_account_v1.irsa",
            "module.eks_blueprints_kubernetes_addons.time_sleep.dataplane",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ]
        }
      ]
    },
    {
      "module": "module.irsa",
      "mode": "managed",
      "type": "aws_iam_role",
      "name": "irsa",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 0,
          "attributes": {
            "arn": "arn:aws:iam::833162080385:role/spark-k8s-operator-spark-team-a-irsa",
            "assume_role_policy": "{\"Statement\":[{\"Action\":\"sts:AssumeRoleWithWebIdentity\",\"Condition\":{\"StringLike\":{\"oidc.eks.us-west-2.amazonaws.com/id/C22446710534ECE8BC397E6224EDBDA0:aud\":\"sts.amazonaws.com\",\"oidc.eks.us-west-2.amazonaws.com/id/C22446710534ECE8BC397E6224EDBDA0:sub\":\"system:serviceaccount:spark-team-a:spark-team-a\"}},\"Effect\":\"Allow\",\"Principal\":{\"Federated\":\"arn:aws:iam::833162080385:oidc-provider/oidc.eks.us-west-2.amazonaws.com/id/C22446710534ECE8BC397E6224EDBDA0\"}}],\"Version\":\"2012-10-17\"}",
            "create_date": "2023-03-01T01:28:19Z",
            "description": "AWS IAM Role for the Kubernetes service account spark-team-a.",
            "force_detach_policies": true,
            "id": "spark-k8s-operator-spark-team-a-irsa",
            "inline_policy": [],
            "managed_policy_arns": [
              "arn:aws:iam::833162080385:policy/spark-k8s-operator-spark-irsa"
            ],
            "max_session_duration": 3600,
            "name": "spark-k8s-operator-spark-team-a-irsa",
            "name_prefix": "",
            "path": "/",
            "permissions_boundary": "",
            "tags": {},
            "tags_all": {},
            "unique_id": "AROA4D7CUOCAQ7QYYOEWO"
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "aws_iam_policy.spark",
            "data.aws_availability_zones.available",
            "data.aws_caller_identity.current",
            "data.aws_iam_policy_document.spark_operator",
            "data.aws_partition.current",
            "data.aws_region.current",
            "module.eks_blueprints.data.aws_caller_identity.current",
            "module.eks_blueprints.data.aws_iam_policy_document.eks_key",
            "module.eks_blueprints.data.aws_iam_session_context.current",
            "module.eks_blueprints.data.aws_partition.current",
            "module.eks_blueprints.data.aws_region.current",
            "module.eks_blueprints.module.aws_eks.aws_cloudwatch_log_group.this",
            "module.eks_blueprints.module.aws_eks.aws_eks_cluster.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_openid_connect_provider.oidc_provider",
            "module.eks_blueprints.module.aws_eks.aws_iam_role.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role_policy_attachment.this",
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.node",
            "module.eks_blueprints.module.aws_eks.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.data.aws_iam_policy_document.assume_role_policy",
            "module.eks_blueprints.module.aws_eks.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks.data.tls_certificate.this",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_external_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_iam_policy_document.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_partition.current",
            "module.eks_blueprints.module.kms.aws_kms_key.this",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ]
        }
      ]
    },
    {
      "module": "module.irsa",
      "mode": "managed",
      "type": "aws_iam_role_policy_attachment",
      "name": "irsa",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 0,
          "attributes": {
            "id": "spark-k8s-operator-spark-team-a-irsa-2023030101282218420000001d",
            "policy_arn": "arn:aws:iam::833162080385:policy/spark-k8s-operator-spark-irsa",
            "role": "spark-k8s-operator-spark-team-a-irsa"
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "aws_iam_policy.spark",
            "data.aws_availability_zones.available",
            "data.aws_caller_identity.current",
            "data.aws_iam_policy_document.spark_operator",
            "data.aws_partition.current",
            "data.aws_region.current",
            "module.eks_blueprints.data.aws_caller_identity.current",
            "module.eks_blueprints.data.aws_iam_policy_document.eks_key",
            "module.eks_blueprints.data.aws_iam_session_context.current",
            "module.eks_blueprints.data.aws_partition.current",
            "module.eks_blueprints.data.aws_region.current",
            "module.eks_blueprints.module.aws_eks.aws_cloudwatch_log_group.this",
            "module.eks_blueprints.module.aws_eks.aws_eks_cluster.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_openid_connect_provider.oidc_provider",
            "module.eks_blueprints.module.aws_eks.aws_iam_role.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role_policy_attachment.this",
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.node",
            "module.eks_blueprints.module.aws_eks.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.data.aws_iam_policy_document.assume_role_policy",
            "module.eks_blueprints.module.aws_eks.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks.data.tls_certificate.this",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_external_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_iam_policy_document.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_partition.current",
            "module.eks_blueprints.module.kms.aws_kms_key.this",
            "module.irsa.aws_iam_role.irsa",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ]
        }
      ]
    },
    {
      "module": "module.irsa",
      "mode": "managed",
      "type": "kubernetes_namespace_v1",
      "name": "irsa",
      "provider": "provider[\"registry.terraform.io/hashicorp/kubernetes\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 0,
          "attributes": {
            "id": "spark-team-a",
            "metadata": [
              {
                "annotations": {},
                "generate_name": "",
                "generation": 0,
                "labels": {},
                "name": "spark-team-a",
                "resource_version": "1079",
                "uid": "ee9b4eab-f6d1-4283-9cdb-79953fb4c84b"
              }
            ],
            "timeouts": {
              "delete": "15m"
            }
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiZGVsZXRlIjo5MDAwMDAwMDAwMDB9fQ==",
          "dependencies": [
            "data.aws_availability_zones.available",
            "data.aws_eks_cluster_auth.this",
            "module.eks_blueprints.data.aws_caller_identity.current",
            "module.eks_blueprints.data.aws_iam_policy_document.eks_key",
            "module.eks_blueprints.data.aws_iam_session_context.current",
            "module.eks_blueprints.data.aws_partition.current",
            "module.eks_blueprints.data.aws_region.current",
            "module.eks_blueprints.module.aws_eks.aws_cloudwatch_log_group.this",
            "module.eks_blueprints.module.aws_eks.aws_eks_cluster.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role_policy_attachment.this",
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.node",
            "module.eks_blueprints.module.aws_eks.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.data.aws_iam_policy_document.assume_role_policy",
            "module.eks_blueprints.module.aws_eks.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_external_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_iam_policy_document.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_partition.current",
            "module.eks_blueprints.module.kms.aws_kms_key.this",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ]
        }
      ]
    },
    {
      "module": "module.irsa",
      "mode": "managed",
      "type": "kubernetes_service_account_v1",
      "name": "irsa",
      "provider": "provider[\"registry.terraform.io/hashicorp/kubernetes\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 0,
          "attributes": {
            "automount_service_account_token": true,
            "default_secret_name": "",
            "id": "spark-team-a/spark-team-a",
            "image_pull_secret": [],
            "metadata": [
              {
                "annotations": {
                  "eks.amazonaws.com/role-arn": "arn:aws:iam::833162080385:role/spark-k8s-operator-spark-team-a-irsa"
                },
                "generate_name": "",
                "generation": 0,
                "labels": {},
                "name": "spark-team-a",
                "namespace": "spark-team-a",
                "resource_version": "1102",
                "uid": "377a9c19-e4a6-407b-b43a-ea1989091b12"
              }
            ],
            "secret": [],
            "timeouts": null
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjozMDAwMDAwMDAwMH19",
          "dependencies": [
            "aws_iam_policy.spark",
            "data.aws_availability_zones.available",
            "data.aws_caller_identity.current",
            "data.aws_eks_cluster_auth.this",
            "data.aws_iam_policy_document.spark_operator",
            "data.aws_partition.current",
            "data.aws_region.current",
            "module.eks_blueprints.data.aws_caller_identity.current",
            "module.eks_blueprints.data.aws_iam_policy_document.eks_key",
            "module.eks_blueprints.data.aws_iam_session_context.current",
            "module.eks_blueprints.data.aws_partition.current",
            "module.eks_blueprints.data.aws_region.current",
            "module.eks_blueprints.module.aws_eks.aws_cloudwatch_log_group.this",
            "module.eks_blueprints.module.aws_eks.aws_eks_cluster.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_openid_connect_provider.oidc_provider",
            "module.eks_blueprints.module.aws_eks.aws_iam_role.this",
            "module.eks_blueprints.module.aws_eks.aws_iam_role_policy_attachment.this",
            "module.eks_blueprints.module.aws_eks.aws_security_group.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group.node",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.cluster",
            "module.eks_blueprints.module.aws_eks.aws_security_group_rule.node",
            "module.eks_blueprints.module.aws_eks.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.data.aws_iam_policy_document.assume_role_policy",
            "module.eks_blueprints.module.aws_eks.data.aws_partition.current",
            "module.eks_blueprints.module.aws_eks.data.tls_certificate.this",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_external_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.aws_kms_key.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_caller_identity.current",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_iam_policy_document.this",
            "module.eks_blueprints.module.aws_eks.module.kms.data.aws_partition.current",
            "module.eks_blueprints.module.kms.aws_kms_key.this",
            "module.irsa.aws_iam_role.irsa",
            "module.irsa.kubernetes_namespace_v1.irsa",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ]
        }
      ]
    },
    {
      "module": "module.managed_prometheus",
      "mode": "managed",
      "type": "aws_prometheus_alert_manager_definition",
      "name": "this",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 0,
          "attributes": {
            "definition": "alertmanager_config: |\n  route:\n    receiver: 'default'\n  receivers:\n    - name: 'default'\n",
            "id": "ws-2fbbabea-4091-4c9d-b29a-66dd60208b90",
            "workspace_id": "ws-2fbbabea-4091-4c9d-b29a-66dd60208b90"
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "module.managed_prometheus.aws_prometheus_workspace.this"
          ]
        }
      ]
    },
    {
      "module": "module.managed_prometheus",
      "mode": "managed",
      "type": "aws_prometheus_workspace",
      "name": "this",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 0,
          "attributes": {
            "alias": "spark-k8s-operator",
            "arn": "arn:aws:aps:us-west-2:833162080385:workspace/ws-2fbbabea-4091-4c9d-b29a-66dd60208b90",
            "id": "ws-2fbbabea-4091-4c9d-b29a-66dd60208b90",
            "logging_configuration": [],
            "prometheus_endpoint": "https://aps-workspaces.us-west-2.amazonaws.com/workspaces/ws-2fbbabea-4091-4c9d-b29a-66dd60208b90/",
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks"
            }
          },
          "sensitive_attributes": [],
          "private": "bnVsbA=="
        }
      ]
    },
    {
      "module": "module.vpc",
      "mode": "managed",
      "type": "aws_default_network_acl",
      "name": "this",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 0,
          "attributes": {
            "arn": "arn:aws:ec2:us-west-2:833162080385:network-acl/acl-0e9cc42bfbd16ea32",
            "default_network_acl_id": "acl-0e9cc42bfbd16ea32",
            "egress": [
              {
                "action": "allow",
                "cidr_block": "",
                "from_port": 0,
                "icmp_code": 0,
                "icmp_type": 0,
                "ipv6_cidr_block": "::/0",
                "protocol": "-1",
                "rule_no": 101,
                "to_port": 0
              },
              {
                "action": "allow",
                "cidr_block": "0.0.0.0/0",
                "from_port": 0,
                "icmp_code": 0,
                "icmp_type": 0,
                "ipv6_cidr_block": "",
                "protocol": "-1",
                "rule_no": 100,
                "to_port": 0
              }
            ],
            "id": "acl-0e9cc42bfbd16ea32",
            "ingress": [
              {
                "action": "allow",
                "cidr_block": "",
                "from_port": 0,
                "icmp_code": 0,
                "icmp_type": 0,
                "ipv6_cidr_block": "::/0",
                "protocol": "-1",
                "rule_no": 101,
                "to_port": 0
              },
              {
                "action": "allow",
                "cidr_block": "0.0.0.0/0",
                "from_port": 0,
                "icmp_code": 0,
                "icmp_type": 0,
                "ipv6_cidr_block": "",
                "protocol": "-1",
                "rule_no": 100,
                "to_port": 0
              }
            ],
            "owner_id": "833162080385",
            "subnet_ids": [
              "subnet-021471d8746f8f7f7",
              "subnet-06a8b01c90a3f2e47",
              "subnet-08df7f1867faf7d03",
              "subnet-0a261cceaa9e07a5a",
              "subnet-0bf5a95565543f69f",
              "subnet-0fefa6460af7bc584"
            ],
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-default"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-default"
            },
            "vpc_id": "vpc-06ca7bfc43c08c033"
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "module.vpc.aws_vpc.this"
          ]
        }
      ]
    },
    {
      "module": "module.vpc",
      "mode": "managed",
      "type": "aws_default_route_table",
      "name": "default",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 0,
          "attributes": {
            "arn": "arn:aws:ec2:us-west-2:833162080385:route-table/rtb-07828efbd3d9b6153",
            "default_route_table_id": "rtb-07828efbd3d9b6153",
            "id": "rtb-07828efbd3d9b6153",
            "owner_id": "833162080385",
            "propagating_vgws": [],
            "route": [],
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-default"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-default"
            },
            "timeouts": {
              "create": "5m",
              "update": "5m"
            },
            "vpc_id": "vpc-06ca7bfc43c08c033"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjozMDAwMDAwMDAwMDAsInVwZGF0ZSI6MzAwMDAwMDAwMDAwfX0=",
          "dependencies": [
            "module.vpc.aws_vpc.this"
          ]
        }
      ]
    },
    {
      "module": "module.vpc",
      "mode": "managed",
      "type": "aws_default_security_group",
      "name": "this",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 1,
          "attributes": {
            "arn": "arn:aws:ec2:us-west-2:833162080385:security-group/sg-08e0f0496d630598a",
            "description": "default VPC security group",
            "egress": [
              {
                "cidr_blocks": [
                  "0.0.0.0/0"
                ],
                "description": "",
                "from_port": 0,
                "ipv6_cidr_blocks": [],
                "prefix_list_ids": [],
                "protocol": "-1",
                "security_groups": [],
                "self": false,
                "to_port": 0
              }
            ],
            "id": "sg-08e0f0496d630598a",
            "ingress": [
              {
                "cidr_blocks": [
                  "10.1.0.0/16"
                ],
                "description": "",
                "from_port": 0,
                "ipv6_cidr_blocks": [],
                "prefix_list_ids": [],
                "protocol": "-1",
                "security_groups": [],
                "self": false,
                "to_port": 0
              }
            ],
            "name": "default",
            "name_prefix": "",
            "owner_id": "833162080385",
            "revoke_rules_on_delete": false,
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-default"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-default"
            },
            "vpc_id": "vpc-06ca7bfc43c08c033"
          },
          "sensitive_attributes": [],
          "private": "eyJzY2hlbWFfdmVyc2lvbiI6IjEifQ==",
          "dependencies": [
            "module.vpc.aws_vpc.this"
          ]
        }
      ]
    },
    {
      "module": "module.vpc",
      "mode": "managed",
      "type": "aws_eip",
      "name": "nat",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 0,
          "attributes": {
            "address": null,
            "allocation_id": "eipalloc-0736e51c85ba21eea",
            "associate_with_private_ip": null,
            "association_id": "eipassoc-02a8faf87aef4015c",
            "carrier_ip": "",
            "customer_owned_ip": "",
            "customer_owned_ipv4_pool": "",
            "domain": "vpc",
            "id": "eipalloc-0736e51c85ba21eea",
            "instance": "",
            "network_border_group": "us-west-2",
            "network_interface": "eni-0dd395fc59d96f792",
            "private_dns": "ip-10-1-197-14.us-west-2.compute.internal",
            "private_ip": "10.1.197.14",
            "public_dns": "ec2-35-86-23-191.us-west-2.compute.amazonaws.com",
            "public_ip": "35.86.23.191",
            "public_ipv4_pool": "amazon",
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-us-west-2a"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-us-west-2a"
            },
            "timeouts": null,
            "vpc": true
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiZGVsZXRlIjoxODAwMDAwMDAwMDAsInJlYWQiOjkwMDAwMDAwMDAwMCwidXBkYXRlIjozMDAwMDAwMDAwMDB9fQ==",
          "dependencies": [
            "data.aws_availability_zones.available"
          ]
        }
      ]
    },
    {
      "module": "module.vpc",
      "mode": "managed",
      "type": "aws_internet_gateway",
      "name": "this",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 0,
          "attributes": {
            "arn": "arn:aws:ec2:us-west-2:833162080385:internet-gateway/igw-0d110dac396fd61bb",
            "id": "igw-0d110dac396fd61bb",
            "owner_id": "833162080385",
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator"
            },
            "timeouts": null,
            "vpc_id": "vpc-06ca7bfc43c08c033"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjoxMjAwMDAwMDAwMDAwLCJkZWxldGUiOjEyMDAwMDAwMDAwMDAsInVwZGF0ZSI6MTIwMDAwMDAwMDAwMH19",
          "dependencies": [
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ]
        }
      ]
    },
    {
      "module": "module.vpc",
      "mode": "managed",
      "type": "aws_nat_gateway",
      "name": "this",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 0,
          "attributes": {
            "allocation_id": "eipalloc-0736e51c85ba21eea",
            "connectivity_type": "public",
            "id": "nat-04e4e96a234947041",
            "network_interface_id": "eni-0dd395fc59d96f792",
            "private_ip": "10.1.197.14",
            "public_ip": "35.86.23.191",
            "subnet_id": "subnet-08df7f1867faf7d03",
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-us-west-2a"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-us-west-2a"
            }
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "data.aws_availability_zones.available",
            "module.vpc.aws_eip.nat",
            "module.vpc.aws_internet_gateway.this",
            "module.vpc.aws_subnet.public",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ]
        }
      ]
    },
    {
      "module": "module.vpc",
      "mode": "managed",
      "type": "aws_route",
      "name": "private_nat_gateway",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 0,
          "attributes": {
            "carrier_gateway_id": "",
            "core_network_arn": "",
            "destination_cidr_block": "0.0.0.0/0",
            "destination_ipv6_cidr_block": "",
            "destination_prefix_list_id": "",
            "egress_only_gateway_id": "",
            "gateway_id": "",
            "id": "r-rtb-02a566dee501b4ba71080289494",
            "instance_id": "",
            "instance_owner_id": "",
            "local_gateway_id": "",
            "nat_gateway_id": "nat-04e4e96a234947041",
            "network_interface_id": "",
            "origin": "CreateRoute",
            "route_table_id": "rtb-02a566dee501b4ba7",
            "state": "active",
            "timeouts": {
              "create": "5m",
              "delete": null,
              "update": null
            },
            "transit_gateway_id": "",
            "vpc_endpoint_id": "",
            "vpc_peering_connection_id": ""
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjozMDAwMDAwMDAwMDAsImRlbGV0ZSI6MzAwMDAwMDAwMDAwLCJ1cGRhdGUiOjEyMDAwMDAwMDAwMH19",
          "dependencies": [
            "data.aws_availability_zones.available",
            "module.vpc.aws_eip.nat",
            "module.vpc.aws_internet_gateway.this",
            "module.vpc.aws_nat_gateway.this",
            "module.vpc.aws_route_table.private",
            "module.vpc.aws_subnet.public",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ]
        }
      ]
    },
    {
      "module": "module.vpc",
      "mode": "managed",
      "type": "aws_route",
      "name": "public_internet_gateway",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 0,
          "attributes": {
            "carrier_gateway_id": "",
            "core_network_arn": "",
            "destination_cidr_block": "0.0.0.0/0",
            "destination_ipv6_cidr_block": "",
            "destination_prefix_list_id": "",
            "egress_only_gateway_id": "",
            "gateway_id": "igw-0d110dac396fd61bb",
            "id": "r-rtb-087ad61dbeefdc1381080289494",
            "instance_id": "",
            "instance_owner_id": "",
            "local_gateway_id": "",
            "nat_gateway_id": "",
            "network_interface_id": "",
            "origin": "CreateRoute",
            "route_table_id": "rtb-087ad61dbeefdc138",
            "state": "active",
            "timeouts": {
              "create": "5m",
              "delete": null,
              "update": null
            },
            "transit_gateway_id": "",
            "vpc_endpoint_id": "",
            "vpc_peering_connection_id": ""
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjozMDAwMDAwMDAwMDAsImRlbGV0ZSI6MzAwMDAwMDAwMDAwLCJ1cGRhdGUiOjEyMDAwMDAwMDAwMH19",
          "dependencies": [
            "module.vpc.aws_internet_gateway.this",
            "module.vpc.aws_route_table.public",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ]
        }
      ]
    },
    {
      "module": "module.vpc",
      "mode": "managed",
      "type": "aws_route_table",
      "name": "private",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 0,
          "attributes": {
            "arn": "arn:aws:ec2:us-west-2:833162080385:route-table/rtb-02a566dee501b4ba7",
            "id": "rtb-02a566dee501b4ba7",
            "owner_id": "833162080385",
            "propagating_vgws": [],
            "route": [
              {
                "carrier_gateway_id": "",
                "cidr_block": "0.0.0.0/0",
                "core_network_arn": "",
                "destination_prefix_list_id": "",
                "egress_only_gateway_id": "",
                "gateway_id": "",
                "instance_id": "",
                "ipv6_cidr_block": "",
                "local_gateway_id": "",
                "nat_gateway_id": "nat-04e4e96a234947041",
                "network_interface_id": "",
                "transit_gateway_id": "",
                "vpc_endpoint_id": "",
                "vpc_peering_connection_id": ""
              }
            ],
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-private"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-private"
            },
            "timeouts": null,
            "vpc_id": "vpc-06ca7bfc43c08c033"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjozMDAwMDAwMDAwMDAsImRlbGV0ZSI6MzAwMDAwMDAwMDAwLCJ1cGRhdGUiOjEyMDAwMDAwMDAwMH19",
          "dependencies": [
            "data.aws_availability_zones.available",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ]
        }
      ]
    },
    {
      "module": "module.vpc",
      "mode": "managed",
      "type": "aws_route_table",
      "name": "public",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 0,
          "attributes": {
            "arn": "arn:aws:ec2:us-west-2:833162080385:route-table/rtb-087ad61dbeefdc138",
            "id": "rtb-087ad61dbeefdc138",
            "owner_id": "833162080385",
            "propagating_vgws": [],
            "route": [
              {
                "carrier_gateway_id": "",
                "cidr_block": "0.0.0.0/0",
                "core_network_arn": "",
                "destination_prefix_list_id": "",
                "egress_only_gateway_id": "",
                "gateway_id": "igw-0d110dac396fd61bb",
                "instance_id": "",
                "ipv6_cidr_block": "",
                "local_gateway_id": "",
                "nat_gateway_id": "",
                "network_interface_id": "",
                "transit_gateway_id": "",
                "vpc_endpoint_id": "",
                "vpc_peering_connection_id": ""
              }
            ],
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-public"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-public"
            },
            "timeouts": null,
            "vpc_id": "vpc-06ca7bfc43c08c033"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjozMDAwMDAwMDAwMDAsImRlbGV0ZSI6MzAwMDAwMDAwMDAwLCJ1cGRhdGUiOjEyMDAwMDAwMDAwMH19",
          "dependencies": [
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ]
        }
      ]
    },
    {
      "module": "module.vpc",
      "mode": "managed",
      "type": "aws_route_table_association",
      "name": "private",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 0,
          "attributes": {
            "gateway_id": "",
            "id": "rtbassoc-06a56c0a431e74f15",
            "route_table_id": "rtb-02a566dee501b4ba7",
            "subnet_id": "subnet-0fefa6460af7bc584"
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "data.aws_availability_zones.available",
            "module.vpc.aws_route_table.private",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ]
        },
        {
          "index_key": 1,
          "schema_version": 0,
          "attributes": {
            "gateway_id": "",
            "id": "rtbassoc-0de28b9debe3163a3",
            "route_table_id": "rtb-02a566dee501b4ba7",
            "subnet_id": "subnet-021471d8746f8f7f7"
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "data.aws_availability_zones.available",
            "module.vpc.aws_route_table.private",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ]
        },
        {
          "index_key": 2,
          "schema_version": 0,
          "attributes": {
            "gateway_id": "",
            "id": "rtbassoc-0fc876c0bc644ff60",
            "route_table_id": "rtb-02a566dee501b4ba7",
            "subnet_id": "subnet-0bf5a95565543f69f"
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "data.aws_availability_zones.available",
            "module.vpc.aws_route_table.private",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ]
        }
      ]
    },
    {
      "module": "module.vpc",
      "mode": "managed",
      "type": "aws_route_table_association",
      "name": "public",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 0,
          "attributes": {
            "gateway_id": "",
            "id": "rtbassoc-0621b5d9e54864d48",
            "route_table_id": "rtb-087ad61dbeefdc138",
            "subnet_id": "subnet-08df7f1867faf7d03"
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "data.aws_availability_zones.available",
            "module.vpc.aws_route_table.public",
            "module.vpc.aws_subnet.public",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ]
        },
        {
          "index_key": 1,
          "schema_version": 0,
          "attributes": {
            "gateway_id": "",
            "id": "rtbassoc-006b4714d64a8fb23",
            "route_table_id": "rtb-087ad61dbeefdc138",
            "subnet_id": "subnet-0a261cceaa9e07a5a"
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "data.aws_availability_zones.available",
            "module.vpc.aws_route_table.public",
            "module.vpc.aws_subnet.public",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ]
        },
        {
          "index_key": 2,
          "schema_version": 0,
          "attributes": {
            "gateway_id": "",
            "id": "rtbassoc-0cf2016898cca325d",
            "route_table_id": "rtb-087ad61dbeefdc138",
            "subnet_id": "subnet-06a8b01c90a3f2e47"
          },
          "sensitive_attributes": [],
          "private": "bnVsbA==",
          "dependencies": [
            "data.aws_availability_zones.available",
            "module.vpc.aws_route_table.public",
            "module.vpc.aws_subnet.public",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ]
        }
      ]
    },
    {
      "module": "module.vpc",
      "mode": "managed",
      "type": "aws_subnet",
      "name": "private",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 1,
          "attributes": {
            "arn": "arn:aws:ec2:us-west-2:833162080385:subnet/subnet-0fefa6460af7bc584",
            "assign_ipv6_address_on_creation": false,
            "availability_zone": "us-west-2a",
            "availability_zone_id": "usw2-az1",
            "cidr_block": "10.1.0.0/18",
            "customer_owned_ipv4_pool": "",
            "enable_dns64": false,
            "enable_resource_name_dns_a_record_on_launch": false,
            "enable_resource_name_dns_aaaa_record_on_launch": false,
            "id": "subnet-0fefa6460af7bc584",
            "ipv6_cidr_block": "",
            "ipv6_cidr_block_association_id": "",
            "ipv6_native": false,
            "map_customer_owned_ip_on_launch": false,
            "map_public_ip_on_launch": false,
            "outpost_arn": "",
            "owner_id": "833162080385",
            "private_dns_hostname_type_on_launch": "ip-name",
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-private-us-west-2a",
              "kubernetes.io/cluster/spark-k8s-operator": "shared",
              "kubernetes.io/role/internal-elb": "1"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-private-us-west-2a",
              "kubernetes.io/cluster/spark-k8s-operator": "shared",
              "kubernetes.io/role/internal-elb": "1"
            },
            "timeouts": null,
            "vpc_id": "vpc-06ca7bfc43c08c033"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjo2MDAwMDAwMDAwMDAsImRlbGV0ZSI6MTIwMDAwMDAwMDAwMH0sInNjaGVtYV92ZXJzaW9uIjoiMSJ9",
          "dependencies": [
            "data.aws_availability_zones.available",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ]
        },
        {
          "index_key": 1,
          "schema_version": 1,
          "attributes": {
            "arn": "arn:aws:ec2:us-west-2:833162080385:subnet/subnet-021471d8746f8f7f7",
            "assign_ipv6_address_on_creation": false,
            "availability_zone": "us-west-2b",
            "availability_zone_id": "usw2-az2",
            "cidr_block": "10.1.64.0/18",
            "customer_owned_ipv4_pool": "",
            "enable_dns64": false,
            "enable_resource_name_dns_a_record_on_launch": false,
            "enable_resource_name_dns_aaaa_record_on_launch": false,
            "id": "subnet-021471d8746f8f7f7",
            "ipv6_cidr_block": "",
            "ipv6_cidr_block_association_id": "",
            "ipv6_native": false,
            "map_customer_owned_ip_on_launch": false,
            "map_public_ip_on_launch": false,
            "outpost_arn": "",
            "owner_id": "833162080385",
            "private_dns_hostname_type_on_launch": "ip-name",
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-private-us-west-2b",
              "kubernetes.io/cluster/spark-k8s-operator": "shared",
              "kubernetes.io/role/internal-elb": "1"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-private-us-west-2b",
              "kubernetes.io/cluster/spark-k8s-operator": "shared",
              "kubernetes.io/role/internal-elb": "1"
            },
            "timeouts": null,
            "vpc_id": "vpc-06ca7bfc43c08c033"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjo2MDAwMDAwMDAwMDAsImRlbGV0ZSI6MTIwMDAwMDAwMDAwMH0sInNjaGVtYV92ZXJzaW9uIjoiMSJ9",
          "dependencies": [
            "data.aws_availability_zones.available",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ]
        },
        {
          "index_key": 2,
          "schema_version": 1,
          "attributes": {
            "arn": "arn:aws:ec2:us-west-2:833162080385:subnet/subnet-0bf5a95565543f69f",
            "assign_ipv6_address_on_creation": false,
            "availability_zone": "us-west-2c",
            "availability_zone_id": "usw2-az3",
            "cidr_block": "10.1.128.0/18",
            "customer_owned_ipv4_pool": "",
            "enable_dns64": false,
            "enable_resource_name_dns_a_record_on_launch": false,
            "enable_resource_name_dns_aaaa_record_on_launch": false,
            "id": "subnet-0bf5a95565543f69f",
            "ipv6_cidr_block": "",
            "ipv6_cidr_block_association_id": "",
            "ipv6_native": false,
            "map_customer_owned_ip_on_launch": false,
            "map_public_ip_on_launch": false,
            "outpost_arn": "",
            "owner_id": "833162080385",
            "private_dns_hostname_type_on_launch": "ip-name",
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-private-us-west-2c",
              "kubernetes.io/cluster/spark-k8s-operator": "shared",
              "kubernetes.io/role/internal-elb": "1"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-private-us-west-2c",
              "kubernetes.io/cluster/spark-k8s-operator": "shared",
              "kubernetes.io/role/internal-elb": "1"
            },
            "timeouts": null,
            "vpc_id": "vpc-06ca7bfc43c08c033"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjo2MDAwMDAwMDAwMDAsImRlbGV0ZSI6MTIwMDAwMDAwMDAwMH0sInNjaGVtYV92ZXJzaW9uIjoiMSJ9",
          "dependencies": [
            "data.aws_availability_zones.available",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ]
        }
      ]
    },
    {
      "module": "module.vpc",
      "mode": "managed",
      "type": "aws_subnet",
      "name": "public",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 1,
          "attributes": {
            "arn": "arn:aws:ec2:us-west-2:833162080385:subnet/subnet-08df7f1867faf7d03",
            "assign_ipv6_address_on_creation": false,
            "availability_zone": "us-west-2a",
            "availability_zone_id": "usw2-az1",
            "cidr_block": "10.1.192.0/20",
            "customer_owned_ipv4_pool": "",
            "enable_dns64": false,
            "enable_resource_name_dns_a_record_on_launch": false,
            "enable_resource_name_dns_aaaa_record_on_launch": false,
            "id": "subnet-08df7f1867faf7d03",
            "ipv6_cidr_block": "",
            "ipv6_cidr_block_association_id": "",
            "ipv6_native": false,
            "map_customer_owned_ip_on_launch": false,
            "map_public_ip_on_launch": true,
            "outpost_arn": "",
            "owner_id": "833162080385",
            "private_dns_hostname_type_on_launch": "ip-name",
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-public-us-west-2a",
              "kubernetes.io/cluster/spark-k8s-operator": "shared",
              "kubernetes.io/role/elb": "1"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-public-us-west-2a",
              "kubernetes.io/cluster/spark-k8s-operator": "shared",
              "kubernetes.io/role/elb": "1"
            },
            "timeouts": null,
            "vpc_id": "vpc-06ca7bfc43c08c033"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjo2MDAwMDAwMDAwMDAsImRlbGV0ZSI6MTIwMDAwMDAwMDAwMH0sInNjaGVtYV92ZXJzaW9uIjoiMSJ9",
          "dependencies": [
            "data.aws_availability_zones.available",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ]
        },
        {
          "index_key": 1,
          "schema_version": 1,
          "attributes": {
            "arn": "arn:aws:ec2:us-west-2:833162080385:subnet/subnet-0a261cceaa9e07a5a",
            "assign_ipv6_address_on_creation": false,
            "availability_zone": "us-west-2b",
            "availability_zone_id": "usw2-az2",
            "cidr_block": "10.1.208.0/20",
            "customer_owned_ipv4_pool": "",
            "enable_dns64": false,
            "enable_resource_name_dns_a_record_on_launch": false,
            "enable_resource_name_dns_aaaa_record_on_launch": false,
            "id": "subnet-0a261cceaa9e07a5a",
            "ipv6_cidr_block": "",
            "ipv6_cidr_block_association_id": "",
            "ipv6_native": false,
            "map_customer_owned_ip_on_launch": false,
            "map_public_ip_on_launch": true,
            "outpost_arn": "",
            "owner_id": "833162080385",
            "private_dns_hostname_type_on_launch": "ip-name",
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-public-us-west-2b",
              "kubernetes.io/cluster/spark-k8s-operator": "shared",
              "kubernetes.io/role/elb": "1"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-public-us-west-2b",
              "kubernetes.io/cluster/spark-k8s-operator": "shared",
              "kubernetes.io/role/elb": "1"
            },
            "timeouts": null,
            "vpc_id": "vpc-06ca7bfc43c08c033"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjo2MDAwMDAwMDAwMDAsImRlbGV0ZSI6MTIwMDAwMDAwMDAwMH0sInNjaGVtYV92ZXJzaW9uIjoiMSJ9",
          "dependencies": [
            "data.aws_availability_zones.available",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ]
        },
        {
          "index_key": 2,
          "schema_version": 1,
          "attributes": {
            "arn": "arn:aws:ec2:us-west-2:833162080385:subnet/subnet-06a8b01c90a3f2e47",
            "assign_ipv6_address_on_creation": false,
            "availability_zone": "us-west-2c",
            "availability_zone_id": "usw2-az3",
            "cidr_block": "10.1.224.0/20",
            "customer_owned_ipv4_pool": "",
            "enable_dns64": false,
            "enable_resource_name_dns_a_record_on_launch": false,
            "enable_resource_name_dns_aaaa_record_on_launch": false,
            "id": "subnet-06a8b01c90a3f2e47",
            "ipv6_cidr_block": "",
            "ipv6_cidr_block_association_id": "",
            "ipv6_native": false,
            "map_customer_owned_ip_on_launch": false,
            "map_public_ip_on_launch": true,
            "outpost_arn": "",
            "owner_id": "833162080385",
            "private_dns_hostname_type_on_launch": "ip-name",
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-public-us-west-2c",
              "kubernetes.io/cluster/spark-k8s-operator": "shared",
              "kubernetes.io/role/elb": "1"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-public-us-west-2c",
              "kubernetes.io/cluster/spark-k8s-operator": "shared",
              "kubernetes.io/role/elb": "1"
            },
            "timeouts": null,
            "vpc_id": "vpc-06ca7bfc43c08c033"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjo2MDAwMDAwMDAwMDAsImRlbGV0ZSI6MTIwMDAwMDAwMDAwMH0sInNjaGVtYV92ZXJzaW9uIjoiMSJ9",
          "dependencies": [
            "data.aws_availability_zones.available",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this"
          ]
        }
      ]
    },
    {
      "module": "module.vpc",
      "mode": "managed",
      "type": "aws_vpc",
      "name": "this",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 1,
          "attributes": {
            "arn": "arn:aws:ec2:us-west-2:833162080385:vpc/vpc-06ca7bfc43c08c033",
            "assign_generated_ipv6_cidr_block": false,
            "cidr_block": "10.1.0.0/16",
            "default_network_acl_id": "acl-0e9cc42bfbd16ea32",
            "default_route_table_id": "rtb-07828efbd3d9b6153",
            "default_security_group_id": "sg-08e0f0496d630598a",
            "dhcp_options_id": "dopt-459d163d",
            "enable_classiclink": false,
            "enable_classiclink_dns_support": false,
            "enable_dns_hostnames": true,
            "enable_dns_support": true,
            "enable_network_address_usage_metrics": false,
            "id": "vpc-06ca7bfc43c08c033",
            "instance_tenancy": "default",
            "ipv4_ipam_pool_id": null,
            "ipv4_netmask_length": null,
            "ipv6_association_id": "",
            "ipv6_cidr_block": "",
            "ipv6_cidr_block_network_border_group": "",
            "ipv6_ipam_pool_id": "",
            "ipv6_netmask_length": 0,
            "main_route_table_id": "rtb-07828efbd3d9b6153",
            "owner_id": "833162080385",
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator"
            }
          },
          "sensitive_attributes": [],
          "private": "eyJzY2hlbWFfdmVyc2lvbiI6IjEifQ==",
          "create_before_destroy": true
        }
      ]
    },
    {
      "module": "module.vpc_endpoints",
      "mode": "data",
      "type": "aws_vpc_endpoint_service",
      "name": "this",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": "autoscaling",
          "schema_version": 0,
          "attributes": {
            "acceptance_required": false,
            "arn": "arn:aws:ec2:us-west-2:833162080385:vpc-endpoint-service/vpce-svc-00fbaf2c04f5f8508",
            "availability_zones": [
              "us-west-2a",
              "us-west-2b",
              "us-west-2c",
              "us-west-2d"
            ],
            "base_endpoint_dns_names": [
              "autoscaling.us-west-2.vpce.amazonaws.com"
            ],
            "filter": [
              {
                "name": "service-type",
                "values": [
                  "Interface"
                ]
              }
            ],
            "id": "238145577",
            "manages_vpc_endpoints": false,
            "owner": "amazon",
            "private_dns_name": "autoscaling.us-west-2.amazonaws.com",
            "service": "autoscaling",
            "service_id": "vpce-svc-00fbaf2c04f5f8508",
            "service_name": "com.amazonaws.us-west-2.autoscaling",
            "service_type": "Interface",
            "supported_ip_address_types": [
              "ipv4"
            ],
            "tags": {},
            "timeouts": null,
            "vpc_endpoint_policy_supported": true
          },
          "sensitive_attributes": []
        },
        {
          "index_key": "ec2",
          "schema_version": 0,
          "attributes": {
            "acceptance_required": false,
            "arn": "arn:aws:ec2:us-west-2:833162080385:vpc-endpoint-service/vpce-svc-0ee6723c76642b3d8",
            "availability_zones": [
              "us-west-2a",
              "us-west-2b",
              "us-west-2c",
              "us-west-2d"
            ],
            "base_endpoint_dns_names": [
              "ec2.us-west-2.vpce.amazonaws.com"
            ],
            "filter": [
              {
                "name": "service-type",
                "values": [
                  "Interface"
                ]
              }
            ],
            "id": "2763407252",
            "manages_vpc_endpoints": false,
            "owner": "amazon",
            "private_dns_name": "ec2.us-west-2.amazonaws.com",
            "service": "ec2",
            "service_id": "vpce-svc-0ee6723c76642b3d8",
            "service_name": "com.amazonaws.us-west-2.ec2",
            "service_type": "Interface",
            "supported_ip_address_types": [
              "ipv4"
            ],
            "tags": {},
            "timeouts": null,
            "vpc_endpoint_policy_supported": true
          },
          "sensitive_attributes": []
        },
        {
          "index_key": "ec2messages",
          "schema_version": 0,
          "attributes": {
            "acceptance_required": false,
            "arn": "arn:aws:ec2:us-west-2:833162080385:vpc-endpoint-service/vpce-svc-0f70e5d200f09304f",
            "availability_zones": [
              "us-west-2a",
              "us-west-2b",
              "us-west-2c",
              "us-west-2d"
            ],
            "base_endpoint_dns_names": [
              "ec2messages.us-west-2.vpce.amazonaws.com"
            ],
            "filter": [
              {
                "name": "service-type",
                "values": [
                  "Interface"
                ]
              }
            ],
            "id": "1742190616",
            "manages_vpc_endpoints": false,
            "owner": "amazon",
            "private_dns_name": "ec2messages.us-west-2.amazonaws.com",
            "service": "ec2messages",
            "service_id": "vpce-svc-0f70e5d200f09304f",
            "service_name": "com.amazonaws.us-west-2.ec2messages",
            "service_type": "Interface",
            "supported_ip_address_types": [
              "ipv4"
            ],
            "tags": {},
            "timeouts": null,
            "vpc_endpoint_policy_supported": true
          },
          "sensitive_attributes": []
        },
        {
          "index_key": "ecr_api",
          "schema_version": 0,
          "attributes": {
            "acceptance_required": false,
            "arn": "arn:aws:ec2:us-west-2:833162080385:vpc-endpoint-service/vpce-svc-07d1f428f072fd172",
            "availability_zones": [
              "us-west-2a",
              "us-west-2b",
              "us-west-2c",
              "us-west-2d"
            ],
            "base_endpoint_dns_names": [
              "api.ecr.us-west-2.vpce.amazonaws.com"
            ],
            "filter": [
              {
                "name": "service-type",
                "values": [
                  "Interface"
                ]
              }
            ],
            "id": "355460308",
            "manages_vpc_endpoints": false,
            "owner": "amazon",
            "private_dns_name": "api.ecr.us-west-2.amazonaws.com",
            "service": "ecr.api",
            "service_id": "vpce-svc-07d1f428f072fd172",
            "service_name": "com.amazonaws.us-west-2.ecr.api",
            "service_type": "Interface",
            "supported_ip_address_types": [
              "ipv4"
            ],
            "tags": {},
            "timeouts": null,
            "vpc_endpoint_policy_supported": true
          },
          "sensitive_attributes": []
        },
        {
          "index_key": "ecr_dkr",
          "schema_version": 0,
          "attributes": {
            "acceptance_required": false,
            "arn": "arn:aws:ec2:us-west-2:833162080385:vpc-endpoint-service/vpce-svc-09d74a28015a69002",
            "availability_zones": [
              "us-west-2a",
              "us-west-2b",
              "us-west-2c",
              "us-west-2d"
            ],
            "base_endpoint_dns_names": [
              "dkr.ecr.us-west-2.vpce.amazonaws.com"
            ],
            "filter": [
              {
                "name": "service-type",
                "values": [
                  "Interface"
                ]
              }
            ],
            "id": "817308745",
            "manages_vpc_endpoints": false,
            "owner": "amazon",
            "private_dns_name": "*.dkr.ecr.us-west-2.amazonaws.com",
            "service": "ecr.dkr",
            "service_id": "vpce-svc-09d74a28015a69002",
            "service_name": "com.amazonaws.us-west-2.ecr.dkr",
            "service_type": "Interface",
            "supported_ip_address_types": [
              "ipv4"
            ],
            "tags": {},
            "timeouts": null,
            "vpc_endpoint_policy_supported": true
          },
          "sensitive_attributes": []
        },
        {
          "index_key": "elasticloadbalancing",
          "schema_version": 0,
          "attributes": {
            "acceptance_required": false,
            "arn": "arn:aws:ec2:us-west-2:833162080385:vpc-endpoint-service/vpce-svc-061cdcc9c29aedd6d",
            "availability_zones": [
              "us-west-2a",
              "us-west-2b",
              "us-west-2c",
              "us-west-2d"
            ],
            "base_endpoint_dns_names": [
              "elasticloadbalancing.us-west-2.vpce.amazonaws.com"
            ],
            "filter": [
              {
                "name": "service-type",
                "values": [
                  "Interface"
                ]
              }
            ],
            "id": "1553699775",
            "manages_vpc_endpoints": false,
            "owner": "amazon",
            "private_dns_name": "elasticloadbalancing.us-west-2.amazonaws.com",
            "service": "elasticloadbalancing",
            "service_id": "vpce-svc-061cdcc9c29aedd6d",
            "service_name": "com.amazonaws.us-west-2.elasticloadbalancing",
            "service_type": "Interface",
            "supported_ip_address_types": [
              "ipv4"
            ],
            "tags": {},
            "timeouts": null,
            "vpc_endpoint_policy_supported": true
          },
          "sensitive_attributes": []
        },
        {
          "index_key": "kms",
          "schema_version": 0,
          "attributes": {
            "acceptance_required": false,
            "arn": "arn:aws:ec2:us-west-2:833162080385:vpc-endpoint-service/vpce-svc-0596e4991e17a31c4",
            "availability_zones": [
              "us-west-2a",
              "us-west-2b",
              "us-west-2c",
              "us-west-2d"
            ],
            "base_endpoint_dns_names": [
              "kms.us-west-2.vpce.amazonaws.com"
            ],
            "filter": [
              {
                "name": "service-type",
                "values": [
                  "Interface"
                ]
              }
            ],
            "id": "829443606",
            "manages_vpc_endpoints": false,
            "owner": "amazon",
            "private_dns_name": "kms.us-west-2.amazonaws.com",
            "service": "kms",
            "service_id": "vpce-svc-0596e4991e17a31c4",
            "service_name": "com.amazonaws.us-west-2.kms",
            "service_type": "Interface",
            "supported_ip_address_types": [
              "ipv4"
            ],
            "tags": {},
            "timeouts": null,
            "vpc_endpoint_policy_supported": true
          },
          "sensitive_attributes": []
        },
        {
          "index_key": "logs",
          "schema_version": 0,
          "attributes": {
            "acceptance_required": false,
            "arn": "arn:aws:ec2:us-west-2:833162080385:vpc-endpoint-service/vpce-svc-06f816fad0803d466",
            "availability_zones": [
              "us-west-2a",
              "us-west-2b",
              "us-west-2c",
              "us-west-2d"
            ],
            "base_endpoint_dns_names": [
              "logs.us-west-2.vpce.amazonaws.com"
            ],
            "filter": [
              {
                "name": "service-type",
                "values": [
                  "Interface"
                ]
              }
            ],
            "id": "1595290006",
            "manages_vpc_endpoints": false,
            "owner": "amazon",
            "private_dns_name": "logs.us-west-2.amazonaws.com",
            "service": "logs",
            "service_id": "vpce-svc-06f816fad0803d466",
            "service_name": "com.amazonaws.us-west-2.logs",
            "service_type": "Interface",
            "supported_ip_address_types": [
              "ipv4"
            ],
            "tags": {},
            "timeouts": null,
            "vpc_endpoint_policy_supported": true
          },
          "sensitive_attributes": []
        },
        {
          "index_key": "s3",
          "schema_version": 0,
          "attributes": {
            "acceptance_required": false,
            "arn": "arn:aws:ec2:us-west-2:833162080385:vpc-endpoint-service/vpce-svc-0001be97e1865c74e",
            "availability_zones": [
              "us-west-2a",
              "us-west-2b",
              "us-west-2c",
              "us-west-2d"
            ],
            "base_endpoint_dns_names": [
              "s3.us-west-2.amazonaws.com"
            ],
            "filter": [
              {
                "name": "service-type",
                "values": [
                  "Gateway"
                ]
              }
            ],
            "id": "526544209",
            "manages_vpc_endpoints": false,
            "owner": "amazon",
            "private_dns_name": "",
            "service": "s3",
            "service_id": "vpce-svc-0001be97e1865c74e",
            "service_name": "com.amazonaws.us-west-2.s3",
            "service_type": "Gateway",
            "supported_ip_address_types": [
              "ipv4"
            ],
            "tags": {},
            "timeouts": null,
            "vpc_endpoint_policy_supported": true
          },
          "sensitive_attributes": []
        },
        {
          "index_key": "ssm",
          "schema_version": 0,
          "attributes": {
            "acceptance_required": false,
            "arn": "arn:aws:ec2:us-west-2:833162080385:vpc-endpoint-service/vpce-svc-0039038d504694533",
            "availability_zones": [
              "us-west-2a",
              "us-west-2b",
              "us-west-2c",
              "us-west-2d"
            ],
            "base_endpoint_dns_names": [
              "ssm.us-west-2.vpce.amazonaws.com"
            ],
            "filter": [
              {
                "name": "service-type",
                "values": [
                  "Interface"
                ]
              }
            ],
            "id": "218873442",
            "manages_vpc_endpoints": false,
            "owner": "amazon",
            "private_dns_name": "ssm.us-west-2.amazonaws.com",
            "service": "ssm",
            "service_id": "vpce-svc-0039038d504694533",
            "service_name": "com.amazonaws.us-west-2.ssm",
            "service_type": "Interface",
            "supported_ip_address_types": [
              "ipv4"
            ],
            "tags": {},
            "timeouts": null,
            "vpc_endpoint_policy_supported": true
          },
          "sensitive_attributes": []
        },
        {
          "index_key": "ssmmessages",
          "schema_version": 0,
          "attributes": {
            "acceptance_required": false,
            "arn": "arn:aws:ec2:us-west-2:833162080385:vpc-endpoint-service/vpce-svc-05531521310252ac3",
            "availability_zones": [
              "us-west-2a",
              "us-west-2b",
              "us-west-2c",
              "us-west-2d"
            ],
            "base_endpoint_dns_names": [
              "ssmmessages.us-west-2.vpce.amazonaws.com"
            ],
            "filter": [
              {
                "name": "service-type",
                "values": [
                  "Interface"
                ]
              }
            ],
            "id": "2882648543",
            "manages_vpc_endpoints": false,
            "owner": "amazon",
            "private_dns_name": "ssmmessages.us-west-2.amazonaws.com",
            "service": "ssmmessages",
            "service_id": "vpce-svc-05531521310252ac3",
            "service_name": "com.amazonaws.us-west-2.ssmmessages",
            "service_type": "Interface",
            "supported_ip_address_types": [
              "ipv4"
            ],
            "tags": {},
            "timeouts": null,
            "vpc_endpoint_policy_supported": true
          },
          "sensitive_attributes": []
        },
        {
          "index_key": "sts",
          "schema_version": 0,
          "attributes": {
            "acceptance_required": false,
            "arn": "arn:aws:ec2:us-west-2:833162080385:vpc-endpoint-service/vpce-svc-06681ce20e9a3e8c4",
            "availability_zones": [
              "us-west-2a",
              "us-west-2b",
              "us-west-2c",
              "us-west-2d"
            ],
            "base_endpoint_dns_names": [
              "sts.us-west-2.vpce.amazonaws.com"
            ],
            "filter": [
              {
                "name": "service-type",
                "values": [
                  "Interface"
                ]
              }
            ],
            "id": "3091535302",
            "manages_vpc_endpoints": false,
            "owner": "amazon",
            "private_dns_name": "sts.us-west-2.amazonaws.com",
            "service": "sts",
            "service_id": "vpce-svc-06681ce20e9a3e8c4",
            "service_name": "com.amazonaws.us-west-2.sts",
            "service_type": "Interface",
            "supported_ip_address_types": [
              "ipv4"
            ],
            "tags": {},
            "timeouts": null,
            "vpc_endpoint_policy_supported": true
          },
          "sensitive_attributes": []
        }
      ]
    },
    {
      "module": "module.vpc_endpoints",
      "mode": "managed",
      "type": "aws_vpc_endpoint",
      "name": "this",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": "autoscaling",
          "schema_version": 0,
          "attributes": {
            "arn": "arn:aws:ec2:us-west-2:833162080385:vpc-endpoint/vpce-025515029cdc5e340",
            "auto_accept": null,
            "cidr_blocks": [],
            "dns_entry": [
              {
                "dns_name": "vpce-025515029cdc5e340-gywrm2y2.autoscaling.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "vpce-025515029cdc5e340-gywrm2y2-us-west-2a.autoscaling.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "vpce-025515029cdc5e340-gywrm2y2-us-west-2b.autoscaling.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "vpce-025515029cdc5e340-gywrm2y2-us-west-2c.autoscaling.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "autoscaling.us-west-2.amazonaws.com",
                "hosted_zone_id": "Z0800755ZOYXADQ5U7JY"
              }
            ],
            "dns_options": [
              {
                "dns_record_ip_type": "ipv4"
              }
            ],
            "id": "vpce-025515029cdc5e340",
            "ip_address_type": "ipv4",
            "network_interface_ids": [
              "eni-06792db50c5501852",
              "eni-0738a7d7f789c41d1",
              "eni-0d8a5fc5ec962bccb"
            ],
            "owner_id": "833162080385",
            "policy": "{\"Statement\":[{\"Action\":\"*\",\"Effect\":\"Allow\",\"Principal\":\"*\",\"Resource\":\"*\"}]}",
            "prefix_list_id": null,
            "private_dns_enabled": true,
            "requester_managed": false,
            "route_table_ids": [],
            "security_group_ids": [
              "sg-0eae295258deca7cb"
            ],
            "service_name": "com.amazonaws.us-west-2.autoscaling",
            "state": "available",
            "subnet_ids": [
              "subnet-021471d8746f8f7f7",
              "subnet-0bf5a95565543f69f",
              "subnet-0fefa6460af7bc584"
            ],
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-autoscaling"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-autoscaling"
            },
            "timeouts": {
              "create": "10m",
              "delete": "10m",
              "update": "10m"
            },
            "vpc_endpoint_type": "Interface",
            "vpc_id": "vpc-06ca7bfc43c08c033"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjo2MDAwMDAwMDAwMDAsImRlbGV0ZSI6NjAwMDAwMDAwMDAwLCJ1cGRhdGUiOjYwMDAwMDAwMDAwMH19",
          "dependencies": [
            "data.aws_availability_zones.available",
            "module.vpc.aws_route_table.private",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this",
            "module.vpc_endpoints.data.aws_vpc_endpoint_service.this",
            "module.vpc_endpoints_sg.aws_security_group.this",
            "module.vpc_endpoints_sg.aws_security_group.this_name_prefix"
          ]
        },
        {
          "index_key": "ec2",
          "schema_version": 0,
          "attributes": {
            "arn": "arn:aws:ec2:us-west-2:833162080385:vpc-endpoint/vpce-06cc3d30909e38b93",
            "auto_accept": null,
            "cidr_blocks": [],
            "dns_entry": [
              {
                "dns_name": "vpce-06cc3d30909e38b93-b09smxek.ec2.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "vpce-06cc3d30909e38b93-b09smxek-us-west-2c.ec2.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "vpce-06cc3d30909e38b93-b09smxek-us-west-2b.ec2.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "vpce-06cc3d30909e38b93-b09smxek-us-west-2a.ec2.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "ec2.us-west-2.amazonaws.com",
                "hosted_zone_id": "Z08815983J1O8ERKOVQ8Y"
              },
              {
                "dns_name": "ec2.us-west-2.api.aws",
                "hosted_zone_id": "Z04524341SHCJ0Z95PRXP"
              }
            ],
            "dns_options": [
              {
                "dns_record_ip_type": "ipv4"
              }
            ],
            "id": "vpce-06cc3d30909e38b93",
            "ip_address_type": "ipv4",
            "network_interface_ids": [
              "eni-05a4ea19a860108b7",
              "eni-0685b644ede2a4874",
              "eni-0e2fba2587aadcc9b"
            ],
            "owner_id": "833162080385",
            "policy": "{\"Statement\":[{\"Action\":\"*\",\"Effect\":\"Allow\",\"Principal\":\"*\",\"Resource\":\"*\"}]}",
            "prefix_list_id": null,
            "private_dns_enabled": true,
            "requester_managed": false,
            "route_table_ids": [],
            "security_group_ids": [
              "sg-0eae295258deca7cb"
            ],
            "service_name": "com.amazonaws.us-west-2.ec2",
            "state": "available",
            "subnet_ids": [
              "subnet-021471d8746f8f7f7",
              "subnet-0bf5a95565543f69f",
              "subnet-0fefa6460af7bc584"
            ],
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-ec2"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-ec2"
            },
            "timeouts": {
              "create": "10m",
              "delete": "10m",
              "update": "10m"
            },
            "vpc_endpoint_type": "Interface",
            "vpc_id": "vpc-06ca7bfc43c08c033"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjo2MDAwMDAwMDAwMDAsImRlbGV0ZSI6NjAwMDAwMDAwMDAwLCJ1cGRhdGUiOjYwMDAwMDAwMDAwMH19",
          "dependencies": [
            "data.aws_availability_zones.available",
            "module.vpc.aws_route_table.private",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this",
            "module.vpc_endpoints.data.aws_vpc_endpoint_service.this",
            "module.vpc_endpoints_sg.aws_security_group.this",
            "module.vpc_endpoints_sg.aws_security_group.this_name_prefix"
          ]
        },
        {
          "index_key": "ec2messages",
          "schema_version": 0,
          "attributes": {
            "arn": "arn:aws:ec2:us-west-2:833162080385:vpc-endpoint/vpce-09be294ff02e8fc5e",
            "auto_accept": null,
            "cidr_blocks": [],
            "dns_entry": [
              {
                "dns_name": "vpce-09be294ff02e8fc5e-bwqz3z4j.ec2messages.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "vpce-09be294ff02e8fc5e-bwqz3z4j-us-west-2a.ec2messages.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "vpce-09be294ff02e8fc5e-bwqz3z4j-us-west-2b.ec2messages.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "vpce-09be294ff02e8fc5e-bwqz3z4j-us-west-2c.ec2messages.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "ec2messages.us-west-2.amazonaws.com",
                "hosted_zone_id": "Z08809212EMSN1MMEED79"
              }
            ],
            "dns_options": [
              {
                "dns_record_ip_type": "ipv4"
              }
            ],
            "id": "vpce-09be294ff02e8fc5e",
            "ip_address_type": "ipv4",
            "network_interface_ids": [
              "eni-0156fe14bd5647062",
              "eni-064993610858f0843",
              "eni-09b7d7782fbfbb6b6"
            ],
            "owner_id": "833162080385",
            "policy": "{\"Statement\":[{\"Action\":\"*\",\"Effect\":\"Allow\",\"Principal\":\"*\",\"Resource\":\"*\"}]}",
            "prefix_list_id": null,
            "private_dns_enabled": true,
            "requester_managed": false,
            "route_table_ids": [],
            "security_group_ids": [
              "sg-0eae295258deca7cb"
            ],
            "service_name": "com.amazonaws.us-west-2.ec2messages",
            "state": "available",
            "subnet_ids": [
              "subnet-021471d8746f8f7f7",
              "subnet-0bf5a95565543f69f",
              "subnet-0fefa6460af7bc584"
            ],
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-ec2messages"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-ec2messages"
            },
            "timeouts": {
              "create": "10m",
              "delete": "10m",
              "update": "10m"
            },
            "vpc_endpoint_type": "Interface",
            "vpc_id": "vpc-06ca7bfc43c08c033"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjo2MDAwMDAwMDAwMDAsImRlbGV0ZSI6NjAwMDAwMDAwMDAwLCJ1cGRhdGUiOjYwMDAwMDAwMDAwMH19",
          "dependencies": [
            "data.aws_availability_zones.available",
            "module.vpc.aws_route_table.private",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this",
            "module.vpc_endpoints.data.aws_vpc_endpoint_service.this",
            "module.vpc_endpoints_sg.aws_security_group.this",
            "module.vpc_endpoints_sg.aws_security_group.this_name_prefix"
          ]
        },
        {
          "index_key": "ecr_api",
          "schema_version": 0,
          "attributes": {
            "arn": "arn:aws:ec2:us-west-2:833162080385:vpc-endpoint/vpce-0fd1a7e43b9d05bd6",
            "auto_accept": null,
            "cidr_blocks": [],
            "dns_entry": [
              {
                "dns_name": "vpce-0fd1a7e43b9d05bd6-gjqtqnlw.api.ecr.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "vpce-0fd1a7e43b9d05bd6-gjqtqnlw-us-west-2b.api.ecr.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "vpce-0fd1a7e43b9d05bd6-gjqtqnlw-us-west-2c.api.ecr.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "vpce-0fd1a7e43b9d05bd6-gjqtqnlw-us-west-2a.api.ecr.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "api.ecr.us-west-2.amazonaws.com",
                "hosted_zone_id": "Z08402873HY9YGSO7SFI2"
              }
            ],
            "dns_options": [
              {
                "dns_record_ip_type": "ipv4"
              }
            ],
            "id": "vpce-0fd1a7e43b9d05bd6",
            "ip_address_type": "ipv4",
            "network_interface_ids": [
              "eni-00a785eafabfc6f24",
              "eni-042877f61c794d2de",
              "eni-07ab4eaa63aaeb144"
            ],
            "owner_id": "833162080385",
            "policy": "{\"Statement\":[{\"Action\":\"*\",\"Effect\":\"Allow\",\"Principal\":\"*\",\"Resource\":\"*\"}]}",
            "prefix_list_id": null,
            "private_dns_enabled": true,
            "requester_managed": false,
            "route_table_ids": [],
            "security_group_ids": [
              "sg-0eae295258deca7cb"
            ],
            "service_name": "com.amazonaws.us-west-2.ecr.api",
            "state": "available",
            "subnet_ids": [
              "subnet-021471d8746f8f7f7",
              "subnet-0bf5a95565543f69f",
              "subnet-0fefa6460af7bc584"
            ],
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-ecr.api"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-ecr.api"
            },
            "timeouts": {
              "create": "10m",
              "delete": "10m",
              "update": "10m"
            },
            "vpc_endpoint_type": "Interface",
            "vpc_id": "vpc-06ca7bfc43c08c033"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjo2MDAwMDAwMDAwMDAsImRlbGV0ZSI6NjAwMDAwMDAwMDAwLCJ1cGRhdGUiOjYwMDAwMDAwMDAwMH19",
          "dependencies": [
            "data.aws_availability_zones.available",
            "module.vpc.aws_route_table.private",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this",
            "module.vpc_endpoints.data.aws_vpc_endpoint_service.this",
            "module.vpc_endpoints_sg.aws_security_group.this",
            "module.vpc_endpoints_sg.aws_security_group.this_name_prefix"
          ]
        },
        {
          "index_key": "ecr_dkr",
          "schema_version": 0,
          "attributes": {
            "arn": "arn:aws:ec2:us-west-2:833162080385:vpc-endpoint/vpce-01ab9e2d3e26e0ec0",
            "auto_accept": null,
            "cidr_blocks": [],
            "dns_entry": [
              {
                "dns_name": "vpce-01ab9e2d3e26e0ec0-h3uwtvli.dkr.ecr.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "vpce-01ab9e2d3e26e0ec0-h3uwtvli-us-west-2a.dkr.ecr.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "vpce-01ab9e2d3e26e0ec0-h3uwtvli-us-west-2c.dkr.ecr.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "vpce-01ab9e2d3e26e0ec0-h3uwtvli-us-west-2b.dkr.ecr.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "dkr.ecr.us-west-2.amazonaws.com",
                "hosted_zone_id": "Z08820843P8NEKQB79BWN"
              },
              {
                "dns_name": "*.dkr.ecr.us-west-2.amazonaws.com",
                "hosted_zone_id": "Z08820843P8NEKQB79BWN"
              }
            ],
            "dns_options": [
              {
                "dns_record_ip_type": "ipv4"
              }
            ],
            "id": "vpce-01ab9e2d3e26e0ec0",
            "ip_address_type": "ipv4",
            "network_interface_ids": [
              "eni-055d45af2b564e81c",
              "eni-07937a863dbd37cbe",
              "eni-0e293a43db85a66f8"
            ],
            "owner_id": "833162080385",
            "policy": "{\"Statement\":[{\"Action\":\"*\",\"Effect\":\"Allow\",\"Principal\":\"*\",\"Resource\":\"*\"}]}",
            "prefix_list_id": null,
            "private_dns_enabled": true,
            "requester_managed": false,
            "route_table_ids": [],
            "security_group_ids": [
              "sg-0eae295258deca7cb"
            ],
            "service_name": "com.amazonaws.us-west-2.ecr.dkr",
            "state": "available",
            "subnet_ids": [
              "subnet-021471d8746f8f7f7",
              "subnet-0bf5a95565543f69f",
              "subnet-0fefa6460af7bc584"
            ],
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-ecr.dkr"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-ecr.dkr"
            },
            "timeouts": {
              "create": "10m",
              "delete": "10m",
              "update": "10m"
            },
            "vpc_endpoint_type": "Interface",
            "vpc_id": "vpc-06ca7bfc43c08c033"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjo2MDAwMDAwMDAwMDAsImRlbGV0ZSI6NjAwMDAwMDAwMDAwLCJ1cGRhdGUiOjYwMDAwMDAwMDAwMH19",
          "dependencies": [
            "data.aws_availability_zones.available",
            "module.vpc.aws_route_table.private",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this",
            "module.vpc_endpoints.data.aws_vpc_endpoint_service.this",
            "module.vpc_endpoints_sg.aws_security_group.this",
            "module.vpc_endpoints_sg.aws_security_group.this_name_prefix"
          ]
        },
        {
          "index_key": "elasticloadbalancing",
          "schema_version": 0,
          "attributes": {
            "arn": "arn:aws:ec2:us-west-2:833162080385:vpc-endpoint/vpce-0012e350ceb2caf40",
            "auto_accept": null,
            "cidr_blocks": [],
            "dns_entry": [
              {
                "dns_name": "vpce-0012e350ceb2caf40-40sw96sw.elasticloadbalancing.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "vpce-0012e350ceb2caf40-40sw96sw-us-west-2a.elasticloadbalancing.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "vpce-0012e350ceb2caf40-40sw96sw-us-west-2b.elasticloadbalancing.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "vpce-0012e350ceb2caf40-40sw96sw-us-west-2c.elasticloadbalancing.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "elasticloadbalancing.us-west-2.amazonaws.com",
                "hosted_zone_id": "Z08631132D7ST3UIBQ3Y4"
              }
            ],
            "dns_options": [
              {
                "dns_record_ip_type": "ipv4"
              }
            ],
            "id": "vpce-0012e350ceb2caf40",
            "ip_address_type": "ipv4",
            "network_interface_ids": [
              "eni-0071c404aea07ecb8",
              "eni-03fe25a2e0afb4419",
              "eni-0d42c7e6be8ccf357"
            ],
            "owner_id": "833162080385",
            "policy": "{\"Statement\":[{\"Action\":\"*\",\"Effect\":\"Allow\",\"Principal\":\"*\",\"Resource\":\"*\"}]}",
            "prefix_list_id": null,
            "private_dns_enabled": true,
            "requester_managed": false,
            "route_table_ids": [],
            "security_group_ids": [
              "sg-0eae295258deca7cb"
            ],
            "service_name": "com.amazonaws.us-west-2.elasticloadbalancing",
            "state": "available",
            "subnet_ids": [
              "subnet-021471d8746f8f7f7",
              "subnet-0bf5a95565543f69f",
              "subnet-0fefa6460af7bc584"
            ],
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-elasticloadbalancing"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-elasticloadbalancing"
            },
            "timeouts": {
              "create": "10m",
              "delete": "10m",
              "update": "10m"
            },
            "vpc_endpoint_type": "Interface",
            "vpc_id": "vpc-06ca7bfc43c08c033"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjo2MDAwMDAwMDAwMDAsImRlbGV0ZSI6NjAwMDAwMDAwMDAwLCJ1cGRhdGUiOjYwMDAwMDAwMDAwMH19",
          "dependencies": [
            "data.aws_availability_zones.available",
            "module.vpc.aws_route_table.private",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this",
            "module.vpc_endpoints.data.aws_vpc_endpoint_service.this",
            "module.vpc_endpoints_sg.aws_security_group.this",
            "module.vpc_endpoints_sg.aws_security_group.this_name_prefix"
          ]
        },
        {
          "index_key": "kms",
          "schema_version": 0,
          "attributes": {
            "arn": "arn:aws:ec2:us-west-2:833162080385:vpc-endpoint/vpce-03b4d6d05f038a7db",
            "auto_accept": null,
            "cidr_blocks": [],
            "dns_entry": [
              {
                "dns_name": "vpce-03b4d6d05f038a7db-av1zu8as.kms.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "vpce-03b4d6d05f038a7db-av1zu8as-us-west-2a.kms.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "vpce-03b4d6d05f038a7db-av1zu8as-us-west-2b.kms.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "vpce-03b4d6d05f038a7db-av1zu8as-us-west-2c.kms.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "kms.us-west-2.amazonaws.com",
                "hosted_zone_id": "Z08622433OJOO5RRW2AN7"
              }
            ],
            "dns_options": [
              {
                "dns_record_ip_type": "ipv4"
              }
            ],
            "id": "vpce-03b4d6d05f038a7db",
            "ip_address_type": "ipv4",
            "network_interface_ids": [
              "eni-027fad9864073f4b7",
              "eni-02eab238697e6b54a",
              "eni-07e5e28012928f044"
            ],
            "owner_id": "833162080385",
            "policy": "{\"Statement\":[{\"Action\":\"*\",\"Effect\":\"Allow\",\"Principal\":\"*\",\"Resource\":\"*\"}]}",
            "prefix_list_id": null,
            "private_dns_enabled": true,
            "requester_managed": false,
            "route_table_ids": [],
            "security_group_ids": [
              "sg-0eae295258deca7cb"
            ],
            "service_name": "com.amazonaws.us-west-2.kms",
            "state": "available",
            "subnet_ids": [
              "subnet-021471d8746f8f7f7",
              "subnet-0bf5a95565543f69f",
              "subnet-0fefa6460af7bc584"
            ],
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-kms"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-kms"
            },
            "timeouts": {
              "create": "10m",
              "delete": "10m",
              "update": "10m"
            },
            "vpc_endpoint_type": "Interface",
            "vpc_id": "vpc-06ca7bfc43c08c033"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjo2MDAwMDAwMDAwMDAsImRlbGV0ZSI6NjAwMDAwMDAwMDAwLCJ1cGRhdGUiOjYwMDAwMDAwMDAwMH19",
          "dependencies": [
            "data.aws_availability_zones.available",
            "module.vpc.aws_route_table.private",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this",
            "module.vpc_endpoints.data.aws_vpc_endpoint_service.this",
            "module.vpc_endpoints_sg.aws_security_group.this",
            "module.vpc_endpoints_sg.aws_security_group.this_name_prefix"
          ]
        },
        {
          "index_key": "logs",
          "schema_version": 0,
          "attributes": {
            "arn": "arn:aws:ec2:us-west-2:833162080385:vpc-endpoint/vpce-0ddbc95562a17db5a",
            "auto_accept": null,
            "cidr_blocks": [],
            "dns_entry": [
              {
                "dns_name": "vpce-0ddbc95562a17db5a-1d9hey7j.logs.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "vpce-0ddbc95562a17db5a-1d9hey7j-us-west-2a.logs.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "vpce-0ddbc95562a17db5a-1d9hey7j-us-west-2b.logs.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "vpce-0ddbc95562a17db5a-1d9hey7j-us-west-2c.logs.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "logs.us-west-2.amazonaws.com",
                "hosted_zone_id": "Z080076212RCOW4BGQXE9"
              }
            ],
            "dns_options": [
              {
                "dns_record_ip_type": "ipv4"
              }
            ],
            "id": "vpce-0ddbc95562a17db5a",
            "ip_address_type": "ipv4",
            "network_interface_ids": [
              "eni-030309b87c46a1a1a",
              "eni-063ab9d52a965fa8e",
              "eni-0d73fc458cc2d4d60"
            ],
            "owner_id": "833162080385",
            "policy": "{\"Statement\":[{\"Action\":\"*\",\"Effect\":\"Allow\",\"Principal\":\"*\",\"Resource\":\"*\"}]}",
            "prefix_list_id": null,
            "private_dns_enabled": true,
            "requester_managed": false,
            "route_table_ids": [],
            "security_group_ids": [
              "sg-0eae295258deca7cb"
            ],
            "service_name": "com.amazonaws.us-west-2.logs",
            "state": "available",
            "subnet_ids": [
              "subnet-021471d8746f8f7f7",
              "subnet-0bf5a95565543f69f",
              "subnet-0fefa6460af7bc584"
            ],
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-logs"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-logs"
            },
            "timeouts": {
              "create": "10m",
              "delete": "10m",
              "update": "10m"
            },
            "vpc_endpoint_type": "Interface",
            "vpc_id": "vpc-06ca7bfc43c08c033"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjo2MDAwMDAwMDAwMDAsImRlbGV0ZSI6NjAwMDAwMDAwMDAwLCJ1cGRhdGUiOjYwMDAwMDAwMDAwMH19",
          "dependencies": [
            "data.aws_availability_zones.available",
            "module.vpc.aws_route_table.private",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this",
            "module.vpc_endpoints.data.aws_vpc_endpoint_service.this",
            "module.vpc_endpoints_sg.aws_security_group.this",
            "module.vpc_endpoints_sg.aws_security_group.this_name_prefix"
          ]
        },
        {
          "index_key": "s3",
          "schema_version": 0,
          "attributes": {
            "arn": "arn:aws:ec2:us-west-2:833162080385:vpc-endpoint/vpce-0b16831edef68f944",
            "auto_accept": null,
            "cidr_blocks": [
              "3.5.76.0/22",
              "3.5.80.0/21",
              "18.34.48.0/20",
              "18.34.244.0/22",
              "52.92.128.0/17",
              "52.218.128.0/17"
            ],
            "dns_entry": [],
            "dns_options": [],
            "id": "vpce-0b16831edef68f944",
            "ip_address_type": "",
            "network_interface_ids": [],
            "owner_id": "833162080385",
            "policy": "{\"Statement\":[{\"Action\":\"*\",\"Effect\":\"Allow\",\"Principal\":\"*\",\"Resource\":\"*\"}],\"Version\":\"2008-10-17\"}",
            "prefix_list_id": "pl-68a54001",
            "private_dns_enabled": false,
            "requester_managed": false,
            "route_table_ids": [
              "rtb-02a566dee501b4ba7"
            ],
            "security_group_ids": [],
            "service_name": "com.amazonaws.us-west-2.s3",
            "state": "available",
            "subnet_ids": [],
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-s3"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-s3"
            },
            "timeouts": {
              "create": "10m",
              "delete": "10m",
              "update": "10m"
            },
            "vpc_endpoint_type": "Gateway",
            "vpc_id": "vpc-06ca7bfc43c08c033"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjo2MDAwMDAwMDAwMDAsImRlbGV0ZSI6NjAwMDAwMDAwMDAwLCJ1cGRhdGUiOjYwMDAwMDAwMDAwMH19",
          "dependencies": [
            "data.aws_availability_zones.available",
            "module.vpc.aws_route_table.private",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this",
            "module.vpc_endpoints.data.aws_vpc_endpoint_service.this",
            "module.vpc_endpoints_sg.aws_security_group.this",
            "module.vpc_endpoints_sg.aws_security_group.this_name_prefix"
          ]
        },
        {
          "index_key": "ssm",
          "schema_version": 0,
          "attributes": {
            "arn": "arn:aws:ec2:us-west-2:833162080385:vpc-endpoint/vpce-012b4fd3657af21fa",
            "auto_accept": null,
            "cidr_blocks": [],
            "dns_entry": [
              {
                "dns_name": "vpce-012b4fd3657af21fa-y2djdtny.ssm.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "vpce-012b4fd3657af21fa-y2djdtny-us-west-2c.ssm.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "vpce-012b4fd3657af21fa-y2djdtny-us-west-2b.ssm.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "vpce-012b4fd3657af21fa-y2djdtny-us-west-2a.ssm.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "ssm.us-west-2.amazonaws.com",
                "hosted_zone_id": "Z0863156B92C7T1XW2CU"
              }
            ],
            "dns_options": [
              {
                "dns_record_ip_type": "ipv4"
              }
            ],
            "id": "vpce-012b4fd3657af21fa",
            "ip_address_type": "ipv4",
            "network_interface_ids": [
              "eni-010cc54999ff852fd",
              "eni-0561728e745eb9a25",
              "eni-0894b0242f856a779"
            ],
            "owner_id": "833162080385",
            "policy": "{\"Statement\":[{\"Action\":\"*\",\"Effect\":\"Allow\",\"Principal\":\"*\",\"Resource\":\"*\"}]}",
            "prefix_list_id": null,
            "private_dns_enabled": true,
            "requester_managed": false,
            "route_table_ids": [],
            "security_group_ids": [
              "sg-0eae295258deca7cb"
            ],
            "service_name": "com.amazonaws.us-west-2.ssm",
            "state": "available",
            "subnet_ids": [
              "subnet-021471d8746f8f7f7",
              "subnet-0bf5a95565543f69f",
              "subnet-0fefa6460af7bc584"
            ],
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-ssm"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-ssm"
            },
            "timeouts": {
              "create": "10m",
              "delete": "10m",
              "update": "10m"
            },
            "vpc_endpoint_type": "Interface",
            "vpc_id": "vpc-06ca7bfc43c08c033"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjo2MDAwMDAwMDAwMDAsImRlbGV0ZSI6NjAwMDAwMDAwMDAwLCJ1cGRhdGUiOjYwMDAwMDAwMDAwMH19",
          "dependencies": [
            "data.aws_availability_zones.available",
            "module.vpc.aws_route_table.private",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this",
            "module.vpc_endpoints.data.aws_vpc_endpoint_service.this",
            "module.vpc_endpoints_sg.aws_security_group.this",
            "module.vpc_endpoints_sg.aws_security_group.this_name_prefix"
          ]
        },
        {
          "index_key": "ssmmessages",
          "schema_version": 0,
          "attributes": {
            "arn": "arn:aws:ec2:us-west-2:833162080385:vpc-endpoint/vpce-08ac879babf430de9",
            "auto_accept": null,
            "cidr_blocks": [],
            "dns_entry": [
              {
                "dns_name": "vpce-08ac879babf430de9-2et10ihn.ssmmessages.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "vpce-08ac879babf430de9-2et10ihn-us-west-2b.ssmmessages.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "vpce-08ac879babf430de9-2et10ihn-us-west-2a.ssmmessages.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "vpce-08ac879babf430de9-2et10ihn-us-west-2c.ssmmessages.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "ssmmessages.us-west-2.amazonaws.com",
                "hosted_zone_id": "Z0871603IFJF0GXSHYZ2"
              }
            ],
            "dns_options": [
              {
                "dns_record_ip_type": "ipv4"
              }
            ],
            "id": "vpce-08ac879babf430de9",
            "ip_address_type": "ipv4",
            "network_interface_ids": [
              "eni-07d42897cc325003e",
              "eni-08baa3e4d7b559717",
              "eni-0b5e50da8b11e9e3b"
            ],
            "owner_id": "833162080385",
            "policy": "{\"Statement\":[{\"Action\":\"*\",\"Effect\":\"Allow\",\"Principal\":\"*\",\"Resource\":\"*\"}]}",
            "prefix_list_id": null,
            "private_dns_enabled": true,
            "requester_managed": false,
            "route_table_ids": [],
            "security_group_ids": [
              "sg-0eae295258deca7cb"
            ],
            "service_name": "com.amazonaws.us-west-2.ssmmessages",
            "state": "available",
            "subnet_ids": [
              "subnet-021471d8746f8f7f7",
              "subnet-0bf5a95565543f69f",
              "subnet-0fefa6460af7bc584"
            ],
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-ssmmessages"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-ssmmessages"
            },
            "timeouts": {
              "create": "10m",
              "delete": "10m",
              "update": "10m"
            },
            "vpc_endpoint_type": "Interface",
            "vpc_id": "vpc-06ca7bfc43c08c033"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjo2MDAwMDAwMDAwMDAsImRlbGV0ZSI6NjAwMDAwMDAwMDAwLCJ1cGRhdGUiOjYwMDAwMDAwMDAwMH19",
          "dependencies": [
            "data.aws_availability_zones.available",
            "module.vpc.aws_route_table.private",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this",
            "module.vpc_endpoints.data.aws_vpc_endpoint_service.this",
            "module.vpc_endpoints_sg.aws_security_group.this",
            "module.vpc_endpoints_sg.aws_security_group.this_name_prefix"
          ]
        },
        {
          "index_key": "sts",
          "schema_version": 0,
          "attributes": {
            "arn": "arn:aws:ec2:us-west-2:833162080385:vpc-endpoint/vpce-0c6dc49f7f801929b",
            "auto_accept": null,
            "cidr_blocks": [],
            "dns_entry": [
              {
                "dns_name": "vpce-0c6dc49f7f801929b-6r1xkea8.sts.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "vpce-0c6dc49f7f801929b-6r1xkea8-us-west-2a.sts.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "vpce-0c6dc49f7f801929b-6r1xkea8-us-west-2b.sts.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "vpce-0c6dc49f7f801929b-6r1xkea8-us-west-2c.sts.us-west-2.vpce.amazonaws.com",
                "hosted_zone_id": "Z1YSA3EXCYUU9Z"
              },
              {
                "dns_name": "sts.us-west-2.amazonaws.com",
                "hosted_zone_id": "Z08807703P3ZLJK7STQG"
              }
            ],
            "dns_options": [
              {
                "dns_record_ip_type": "ipv4"
              }
            ],
            "id": "vpce-0c6dc49f7f801929b",
            "ip_address_type": "ipv4",
            "network_interface_ids": [
              "eni-02dbc2fb37df49ab2",
              "eni-0ef78241b82b9ad64",
              "eni-0f246fb3faaab0134"
            ],
            "owner_id": "833162080385",
            "policy": "{\"Statement\":[{\"Action\":\"*\",\"Effect\":\"Allow\",\"Principal\":\"*\",\"Resource\":\"*\"}]}",
            "prefix_list_id": null,
            "private_dns_enabled": true,
            "requester_managed": false,
            "route_table_ids": [],
            "security_group_ids": [
              "sg-0eae295258deca7cb"
            ],
            "service_name": "com.amazonaws.us-west-2.sts",
            "state": "available",
            "subnet_ids": [
              "subnet-021471d8746f8f7f7",
              "subnet-0bf5a95565543f69f",
              "subnet-0fefa6460af7bc584"
            ],
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-sts"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-sts"
            },
            "timeouts": {
              "create": "10m",
              "delete": "10m",
              "update": "10m"
            },
            "vpc_endpoint_type": "Interface",
            "vpc_id": "vpc-06ca7bfc43c08c033"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjo2MDAwMDAwMDAwMDAsImRlbGV0ZSI6NjAwMDAwMDAwMDAwLCJ1cGRhdGUiOjYwMDAwMDAwMDAwMH19",
          "dependencies": [
            "data.aws_availability_zones.available",
            "module.vpc.aws_route_table.private",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this",
            "module.vpc_endpoints.data.aws_vpc_endpoint_service.this",
            "module.vpc_endpoints_sg.aws_security_group.this",
            "module.vpc_endpoints_sg.aws_security_group.this_name_prefix"
          ]
        }
      ]
    },
    {
      "module": "module.vpc_endpoints_sg",
      "mode": "managed",
      "type": "aws_security_group",
      "name": "this_name_prefix",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 1,
          "attributes": {
            "arn": "arn:aws:ec2:us-west-2:833162080385:security-group/sg-0eae295258deca7cb",
            "description": "Security group for VPC endpoint access",
            "egress": [
              {
                "cidr_blocks": [
                  "0.0.0.0/0"
                ],
                "description": "All egress HTTPS",
                "from_port": 443,
                "ipv6_cidr_blocks": [],
                "prefix_list_ids": [],
                "protocol": "tcp",
                "security_groups": [],
                "self": false,
                "to_port": 443
              }
            ],
            "id": "sg-0eae295258deca7cb",
            "ingress": [
              {
                "cidr_blocks": [
                  "10.1.0.0/18",
                  "10.1.64.0/18",
                  "10.1.128.0/18"
                ],
                "description": "VPC CIDR HTTPS",
                "from_port": 443,
                "ipv6_cidr_blocks": [],
                "prefix_list_ids": [],
                "protocol": "tcp",
                "security_groups": [],
                "self": false,
                "to_port": 443
              }
            ],
            "name": "spark-k8s-operator-vpc-endpoints-20230301011555953100000004",
            "name_prefix": "spark-k8s-operator-vpc-endpoints-",
            "owner_id": "833162080385",
            "revoke_rules_on_delete": false,
            "tags": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-vpc-endpoints"
            },
            "tags_all": {
              "Blueprint": "spark-k8s-operator",
              "GithubRepo": "github.com/awslabs/data-on-eks",
              "Name": "spark-k8s-operator-vpc-endpoints"
            },
            "timeouts": {
              "create": "10m",
              "delete": "15m"
            },
            "vpc_id": "vpc-06ca7bfc43c08c033"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjo2MDAwMDAwMDAwMDAsImRlbGV0ZSI6OTAwMDAwMDAwMDAwfSwic2NoZW1hX3ZlcnNpb24iOiIxIn0=",
          "dependencies": [
            "module.vpc.aws_vpc.this"
          ],
          "create_before_destroy": true
        }
      ]
    },
    {
      "module": "module.vpc_endpoints_sg",
      "mode": "managed",
      "type": "aws_security_group_rule",
      "name": "egress_with_cidr_blocks",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 2,
          "attributes": {
            "cidr_blocks": [
              "0.0.0.0/0"
            ],
            "description": "All egress HTTPS",
            "from_port": 443,
            "id": "sgrule-827885538",
            "ipv6_cidr_blocks": null,
            "prefix_list_ids": [],
            "protocol": "tcp",
            "security_group_id": "sg-0eae295258deca7cb",
            "security_group_rule_id": "sgr-0175b0a83acf324b6",
            "self": false,
            "source_security_group_id": null,
            "timeouts": null,
            "to_port": 443,
            "type": "egress"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjozMDAwMDAwMDAwMDB9LCJzY2hlbWFfdmVyc2lvbiI6IjIifQ==",
          "dependencies": [
            "module.vpc.aws_vpc.this",
            "module.vpc_endpoints_sg.aws_security_group.this",
            "module.vpc_endpoints_sg.aws_security_group.this_name_prefix"
          ]
        }
      ]
    },
    {
      "module": "module.vpc_endpoints_sg",
      "mode": "managed",
      "type": "aws_security_group_rule",
      "name": "ingress_with_cidr_blocks",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "index_key": 0,
          "schema_version": 2,
          "attributes": {
            "cidr_blocks": [
              "10.1.0.0/18",
              "10.1.64.0/18",
              "10.1.128.0/18"
            ],
            "description": "VPC CIDR HTTPS",
            "from_port": 443,
            "id": "sgrule-2176494076",
            "ipv6_cidr_blocks": null,
            "prefix_list_ids": [],
            "protocol": "tcp",
            "security_group_id": "sg-0eae295258deca7cb",
            "security_group_rule_id": "",
            "self": false,
            "source_security_group_id": null,
            "timeouts": null,
            "to_port": 443,
            "type": "ingress"
          },
          "sensitive_attributes": [],
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjozMDAwMDAwMDAwMDB9LCJzY2hlbWFfdmVyc2lvbiI6IjIifQ==",
          "dependencies": [
            "data.aws_availability_zones.available",
            "module.vpc.aws_subnet.private",
            "module.vpc.aws_vpc.this",
            "module.vpc.aws_vpc_ipv4_cidr_block_association.this",
            "module.vpc_endpoints_sg.aws_security_group.this",
            "module.vpc_endpoints_sg.aws_security_group.this_name_prefix"
          ]
        }
      ]
    }
  ],
  "check_results": null
}