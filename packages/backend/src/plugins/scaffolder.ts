import { CatalogClient } from '@backstage/catalog-client';
import {createBuiltinActions, createRouter} from '@backstage/plugin-scaffolder-backend';
import { Router } from 'express';
import type { PluginEnvironment } from '../types';
import { ScmIntegrations } from '@backstage/integration';
import {createPublishGiteaAction} from "./gitea-actions";
import {createArgoCDApp} from "./argocd";

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
  createReplaceInFileAction
} from '@roadiehq/scaffolder-backend-module-utils';
import {createKubernetesApply} from "./k8s-apply";
import {createSanitizeResource} from "./sanitize";
import {createVerifyDependency} from "./verify";

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

  const options = {
    integrations: integrations,
    config: env.config,
  }
  const argocdOptions = {
    config: env.config,
    logger: env.logger
  }

  const cnoeActions = [
    createPublishGiteaAction(options),
    createArgoCDApp(argocdOptions),
    createKubernetesApply(env.config),
    createSanitizeResource(),
    createVerifyDependency()
  ]

  const roadieUtilActions = [
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
    createReplaceInFileAction()
  ]

  const actions = [
    ...builtInActions,
    ...cnoeActions,
    ...roadieUtilActions
  ];

  return await createRouter({
    actions: actions,
    logger: env.logger,
    config: env.config,
    database: env.database,
    reader: env.reader,
    catalogClient,
    identity: env.identity,
    permissions: env.permissions,
  });
}
