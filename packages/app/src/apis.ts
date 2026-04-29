import {
  ScmIntegrationsApi,
  scmIntegrationsApiRef,
  ScmAuth,
} from '@backstage/integration-react';
import {
  AnyApiFactory,
  ApiRef,
  BackstageIdentityApi,
  configApiRef,
  createApiFactory,
  createApiRef,
  discoveryApiRef,
  identityApiRef,
  oauthRequestApiRef,
  OpenIdConnectApi,
  ProfileInfoApi,
  SessionApi,
} from '@backstage/core-plugin-api';
import { OAuth2 } from '@backstage/core-app-api';
import {
  kubernetesApiRef,
  kubernetesAuthProvidersApiRef,
  KubernetesBackendClient,
  KubernetesAuthProviders,
} from '@backstage/plugin-kubernetes-react';
import {
  argoCDApiRef,
  ArgoCDApiClient,
} from '@roadiehq/backstage-plugin-argo-cd';

export const keycloakOIDCAuthApiRef: ApiRef<
  OpenIdConnectApi & ProfileInfoApi & BackstageIdentityApi & SessionApi
> = createApiRef({
  id: 'auth.keycloak-oidc',
});

export const apis: AnyApiFactory[] = [
  createApiFactory({
    api: scmIntegrationsApiRef,
    deps: { configApi: configApiRef },
    factory: ({ configApi }) => ScmIntegrationsApi.fromConfig(configApi),
  }),
  ScmAuth.createDefaultApiFactory(),
  createApiFactory({
    api: kubernetesAuthProvidersApiRef,
    deps: {},
    factory: () => new KubernetesAuthProviders({
      microsoftAuthApi: undefined as any,
      googleAuthApi: undefined as any,
    }),
  }),
  createApiFactory({
    api: kubernetesApiRef,
    deps: {
      discoveryApi: discoveryApiRef,
      fetchApi: { id: 'core.fetch', T: {} as any },
      kubernetesAuthProvidersApi: kubernetesAuthProvidersApiRef,
    } as any,
    factory: ({ discoveryApi, fetchApi, kubernetesAuthProvidersApi }: any) =>
      new KubernetesBackendClient({ discoveryApi, fetchApi, kubernetesAuthProvidersApi }),
  }),
  createApiFactory({
    api: argoCDApiRef,
    deps: {
      discoveryApi: discoveryApiRef,
      identityApi: identityApiRef,
      configApi: configApiRef,
    },
    factory: ({ discoveryApi, identityApi, configApi }) =>
      new ArgoCDApiClient({
        discoveryApi,
        identityApi,
        backendBaseUrl: configApi.getString('backend.baseUrl'),
        searchInstances: true,
        useNamespacedApps: false,
      }),
  }),
  createApiFactory({
    api: keycloakOIDCAuthApiRef,
    deps: {
      discoveryApi: discoveryApiRef,
      oauthRequestApi: oauthRequestApiRef,
      configApi: configApiRef,
    },
    factory: ({ discoveryApi, oauthRequestApi, configApi }) =>
      OAuth2.create({
        discoveryApi,
        oauthRequestApi,
        provider: {
          id: 'keycloak-oidc',
          title: 'Keycloak OIDC',
          icon: () => null,
        },
        environment: configApi.getOptionalString('auth.environment'),
        defaultScopes: ['openid', 'profile', 'email', 'groups'],
      }),
  }),
];
