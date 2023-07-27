import { CatalogClient } from '@backstage/catalog-client';
import {
  createBuiltinActions,
  createRouter,
} from '@backstage/plugin-scaffolder-backend';
import { Router } from 'express';
import type { PluginEnvironment } from '../types';
import { ScmIntegrations } from '@backstage/integration';
import { createInvokeArgoAction } from './workflow-argo';
import {
  createZipAction,
  createSleepAction,
  createWriteFileAction,
  createAppendFileAction,
  createMergeJSONAction,
  createMergeAction,
  createParseFileAction,
  createSerializeYamlAction,
  createSerializeJsonAction,
  createJSONataAction,
  createYamlJSONataTransformAction,
  createJsonJSONataTransformAction,
} from '@roadiehq/scaffolder-backend-module-utils';
import {
  createKubernetesApply,
  createSanitizeResource,
  createVerifyDependency,
} from '@cnoe-io/plugin-scaffolder-actions';

export default async function createPlugin(
  env: PluginEnvironment,
): Promise<Router> {
  const catalogClient = new CatalogClient({
    discoveryApi: env.discovery,
  });
  const integrations = ScmIntegrations.fromConfig(env.config);

  const builtInActions = createBuiltinActions({
    integrations,
    catalogClient,
    config: env.config,
    reader: env.reader,
  });

  const scaffolderBackendModuleUtils = [
    createZipAction(),
    createSleepAction(),
    createWriteFileAction(),
    createAppendFileAction(),
    createMergeJSONAction({}),
    createMergeAction(),
    createParseFileAction(),
    createSerializeYamlAction(),
    createSerializeJsonAction(),
    createJSONataAction(),
    createYamlJSONataTransformAction(),
    createJsonJSONataTransformAction(),
  ];

  const cnoeActions = [
    createSanitizeResource(),
    createVerifyDependency(),
    createKubernetesApply(env.config),
  ];

  const actions = [
    ...builtInActions,
    ...scaffolderBackendModuleUtils,
    ...cnoeActions,
    createInvokeArgoAction(env.config, env.logger),
  ];

  return await createRouter({
    actions: actions,
    logger: env.logger,
    config: env.config,
    database: env.database,
    reader: env.reader,
    catalogClient: catalogClient,
    identity: env.identity,
  });
}
