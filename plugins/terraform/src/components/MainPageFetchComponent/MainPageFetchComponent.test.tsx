import React, {Dispatch, SetStateAction} from 'react';
import { screen } from '@testing-library/react';
import { OutputTable, ResourceTable } from './MainPageFetchComponent';
import {
  renderInTestApp,
} from "@backstage/test-utils";

describe('MainPageFetchComponent', () => {
  it('renders the outputs table', async () => {
    let fakeOutputs = [{
      "type": "string",
      "value": "Hello World!"
    }];

    renderInTestApp(<OutputTable outputs={fakeOutputs}/>);

    // Wait for the table to render
    const table = await screen.findByRole('table');
    // Assert that the table contains the expected output data
    expect(table).toBeInTheDocument();
    expect(screen.getByText('Hello World!')).toBeInTheDocument();
  });

  it('renders the resources table', async () => {
    let fakeResources = [
      {
        "module": "module.eks",
        "mode": "managed",
        "type": "aws_cloudwatch_log_group",
        "name": "this",
        "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
        "instances": [
            {
                "index_key": 0,
                "schema_version": 0,
                "attributes": {
                    "arn": "arn:aws:logs:us-west-2:833162080385:log-group:/aws/eks/emr-eks-fargate/cluster",
                    "id": "/aws/eks/emr-eks-fargate/cluster",
                    "kms_key_id": "",
                    "name": "/aws/eks/emr-eks-fargate/cluster",
                    "name_prefix": "",
                    "retention_in_days": 90,
                    "skip_destroy": false,
                    "tags": {
                        "Blueprint": "emr-eks-fargate",
                        "GithubRepo": "github.com/awslabs/data-on-eks",
                        "Name": "/aws/eks/emr-eks-fargate/cluster"
                    },
                    "tags_all": {
                        "Blueprint": "emr-eks-fargate",
                        "GithubRepo": "github.com/awslabs/data-on-eks",
                        "Name": "/aws/eks/emr-eks-fargate/cluster"
                    }
                },
                "sensitive_attributes": [],
                "private": "bnVsbA==",
                "create_before_destroy": true
            }
        ]
    }
  ];

    const noop: Dispatch<SetStateAction<any>> = () => {};
    renderInTestApp(
      <ResourceTable resources={fakeResources} setResourceDetail={noop}/>
    );

    // Wait for the table to render
    const table = await screen.getAllByRole('table');
    // Assert that the table contains the expected resource data
    expect(table[0]).toBeInTheDocument();
    expect(screen.getByText('/aws/eks/emr-eks-fargate/cluster')).toBeInTheDocument();
  });
});