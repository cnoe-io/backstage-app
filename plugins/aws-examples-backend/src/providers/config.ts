import { readTaskScheduleDefinitionFromConfig } from '@backstage/backend-tasks';
import { Config } from '@backstage/config';
import { AwsInfrastructureConfig, SpecDefinition } from './types';

const DEFAULT_PROVIDER_ID = 'default';

export function readAwsInfrastructureConfigs(config: Config): AwsInfrastructureConfig[] {
  const configs: AwsInfrastructureConfig[] = [];

  const providerConfigs = config.getOptionalConfig('catalog.providers.awsInfrastructure');
  if (!providerConfigs) {
    return configs;
  }

  if (providerConfigs.has('bucketName')) {
    // simple/single config variant
    configs.push(readAwsInfrastructureConfig(DEFAULT_PROVIDER_ID, providerConfigs));

    return configs;
  }

  for (const id of providerConfigs.keys()) {
    configs.push(readAwsInfrastructureConfig(id, providerConfigs.getConfig(id)));
  }

  return configs;
}

function readAwsInfrastructureConfig(id: string, config: Config): AwsInfrastructureConfig {
  const spec = config.has('spec') ? readSpecFromConfig(config.getConfig('spec')) : undefined;

  const filterTag = config.getOptionalString('filterTag');
  const aggregator = config.getOptionalString('aggregator');
  const accountId = config.getOptionalString('accountId');

  const exclude = config.getOptionalStringArray('exclude');

  const schedule = config.has('schedule')
    ? readTaskScheduleDefinitionFromConfig(config.getConfig('schedule'))
    : undefined;

  return {
    id,
    accountId,
    filterTag,
    spec,
    schedule,
    aggregator,
    exclude,
  };
}

function readSpecFromConfig(config: Config): SpecDefinition {
  const owner = config.getOptionalString('owner');
  const lifecycle = config.getOptionalString('lifecycle');
  const dependencyOf = config.getOptionalString('dependencyOf');

  return {
    owner,
    lifecycle,
    dependencyOf
  };
}