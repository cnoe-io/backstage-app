import { TaskScheduleDefinition } from '@backstage/backend-tasks';

export type AwsInfrastructureConfig = {
  id: string;
  accountId?: string;
  schedule?: TaskScheduleDefinition;
  filterTag?: string;
  spec?: SpecDefinition;
  aggregator?: string;
  exclude?: string[];
};

export type TagMapping = {
  owner?: string;
  component?: string;
}

export interface AwsConfigResource {
  resourceId: string;
  resourceName?: string;
  resourceType: string;
  arn: string;
  tags: AwsTagValue[];
  awsRegion?: string;
  accountId: string;
}

export interface AwsTagValue {
  tag: string;
  key: string;
  value: string;
}

export interface SpecDefinition {
  owner?: string;
  dependencyOf?: string;
  system?: string;
  lifecycle?: string;
}