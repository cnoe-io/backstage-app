
import { createFrontendPlugin, PageBlueprint } from '@backstage/frontend-plugin-api';

/**
 * PageBlueprint extension for the Argo Workflows plugin.
 * Registers the main overview page under /argo-workflows.
 */
const ArgoWorkflowsPage = PageBlueprint.make({
  params: {
    path: '/argo-workflows',
    loader: () =>
      import('./components/Overview').then(m => <m.ArgoWorkflowsOverviewPage />),
  },
});

/**
 * New frontend system plugin entry point for @internal/plugin-argo-workflows.
 * Import via the "/alpha" sub-path export.
 */
export default createFrontendPlugin({
  pluginId: 'argo-workflows',
  extensions: [ArgoWorkflowsPage],
});
