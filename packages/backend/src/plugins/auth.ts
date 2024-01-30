import {
  createRouter,
  providers,
  defaultAuthProviderFactories,
} from '@backstage/plugin-auth-backend';
import { Router } from 'express';
import { PluginEnvironment } from '../types';
import {
  DEFAULT_NAMESPACE,
  stringifyEntityRef,
} from '@backstage/catalog-model';
import { JsonArray } from '@backstage/types';

export default async function createPlugin(
  env: PluginEnvironment,
): Promise<Router> {
  const opts = {
    logger: env.logger,
    config: env.config,
    database: env.database,
    discovery: env.discovery,
    tokenManager: env.tokenManager,
    providerFactories: {
      ...defaultAuthProviderFactories,
    },
  };

  const envName = env.config
    .getOptionalConfig('auth')
    ?.getOptionalString('auth');
  if (envName === 'local') {
    return await createRouter(opts);
  }

  const keycloakAuth = (opts.providerFactories['keycloak-oidc'] =
    providers.oidc.create({
      signIn: {
        resolver(info, ctx) {
          const userRef = stringifyEntityRef({
            kind: 'User',
            name: info.result.userinfo.sub,
            namespace: DEFAULT_NAMESPACE,
          });
          return ctx.issueToken({
            claims: {
              sub: userRef,
              ent: [userRef],
              groups: (info.result.userinfo.groups as JsonArray) || [],
            },
          });
        },
      },
    }));
  opts.providerFactories['keycloak-oidc'] = keycloakAuth;

  return await createRouter(opts);
}
