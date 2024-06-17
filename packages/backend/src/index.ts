import { createBackend } from '@backstage/backend-defaults';
import { authModuleKeycloakOIDCProvider } from './plugins/auth';
import { cnoeScaffolderActions } from './plugins/scaffolder';
import { legacyPlugin } from '@backstage/backend-common';

const backend = createBackend();

// core plugins
backend.add(import('@backstage/plugin-app-backend/alpha'));
backend.add(import('@backstage/plugin-catalog-backend/alpha'));
backend.add(import('@backstage/plugin-proxy-backend/alpha'));
backend.add(import('@backstage/plugin-techdocs-backend/alpha'));
// auth plugins
backend.add(import('@backstage/plugin-auth-backend'));
backend.add(import('@backstage/plugin-auth-backend-module-guest-provider'));
// scaffolder plugins
backend.add(import('@backstage/plugin-scaffolder-backend/alpha'));
backend.add(
  import('@backstage/plugin-catalog-backend-module-scaffolder-entity-model'),
);
backend.add(import('@backstage/plugin-scaffolder-backend-module-github'));
// search plugins
backend.add(import('@backstage/plugin-search-backend/alpha'));
backend.add(import('@backstage/plugin-search-backend-module-catalog/alpha'));
backend.add(import('@backstage/plugin-search-backend-module-techdocs/alpha'));
// other @backstage plugins
backend.add(import('@backstage/plugin-kubernetes-backend/alpha'));
// non-core plugins
// roadie plugins
backend.add(import('@roadiehq/scaffolder-backend-module-utils/new-backend'));
backend.add(legacyPlugin('argocd', import('./plugins/argocd')));
// cnoe plugins
backend.add(authModuleKeycloakOIDCProvider);
backend.add(cnoeScaffolderActions);

backend.start();
