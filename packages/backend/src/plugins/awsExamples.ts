import { createRouter } from '@internal/plugin-aws-examples-backend';
import { PluginEnvironment } from '../types';
import { CatalogClient } from '@backstage/catalog-client';

export default async function createPlugin(env: PluginEnvironment) {
  const catalogApi = new CatalogClient({ discoveryApi: env.discovery });
  return await createRouter({
    logger: env.logger,
    catalogApi: catalogApi,
    config: env.config,
  });
}