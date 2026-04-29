import { createBackend } from '@backstage/backend-defaults';
import { authModuleKeycloakOIDCProvider } from './plugins/auth';
import { cnoeScaffolderActions } from './modules/scaffolder';

const backend = createBackend();

// Detect if running inside a Kubernetes cluster
const isInCluster = require('fs').existsSync('/var/run/secrets/kubernetes.io/serviceaccount/token');
const k8sEnabled = process.env.K8S_CLUSTER_URL || isInCluster;

// Core plugins
backend.add(import('@backstage/plugin-app-backend'));
if (process.env.MOCK_MODE === 'true') {
  backend.add(import('./plugins/mock-proxy'));
} else {
  backend.add(import('@backstage/plugin-proxy-backend'));
}
backend.add(import('@backstage/plugin-techdocs-backend'));

// Scaffolder
backend.add(import('@backstage/plugin-scaffolder-backend'));
backend.add(
  import('@backstage/plugin-catalog-backend-module-scaffolder-entity-model'),
);

// Scaffolder modules that require external services — skip if not configured
if (process.env.GITHUB_TOKEN) {
  backend.add(import('@backstage/plugin-scaffolder-backend-module-github'));
}

// CNOE custom scaffolder actions (gitea publish, argocd, k8s-apply, sanitize, verify)
backend.add(cnoeScaffolderActions);

// Roadie scaffolder modules
backend.add(import('@roadiehq/scaffolder-backend-module-utils'));
backend.add(import('@roadiehq/scaffolder-backend-module-http-request'));
if (k8sEnabled) {
  backend.add(import('@roadiehq/scaffolder-backend-argocd'));
}

// Auth
backend.add(import('@backstage/plugin-auth-backend'));
backend.add(import('@backstage/plugin-auth-backend-module-guest-provider'));

// Catalog
backend.add(import('@backstage/plugin-catalog-backend'));

// Add GitLab integration for catalog processing
if (process.env.GIT_HOSTNAME) {
  backend.add(import('@backstage/plugin-catalog-backend-module-gitlab'));
}

// Permission
backend.add(import('@backstage/plugin-permission-backend'));
backend.add(
  import('@backstage/plugin-permission-backend-module-allow-all-policy'),
);

// Search
backend.add(import('@backstage/plugin-search-backend'));
backend.add(import('@backstage/plugin-search-backend-module-catalog'));
backend.add(import('@backstage/plugin-search-backend-module-techdocs/alpha'));

// Kubernetes
if (process.env.MOCK_MODE === 'true') {
  backend.add(import('./plugins/mock-kubernetes'));
} else if (k8sEnabled) {
  backend.add(import('@backstage/plugin-kubernetes-backend'));
  backend.add(import('@terasky/backstage-plugin-kubernetes-ingestor'));
  backend.add(import('@terasky/backstage-plugin-kro-resources-backend'));
}

// Keycloak OIDC auth
if (process.env.KEYCLOAK_URL) {
  backend.add(authModuleKeycloakOIDCProvider);
}

// Terraform backend
if (process.env.MOCK_MODE !== 'true') {
  backend.add(import('@internal/backstage-plugin-terraform-backend'));
} else {
  backend.add(import('./plugins/mock-terraform'));
  backend.add(import('./plugins/mock-argocd'));
}

backend.start();
