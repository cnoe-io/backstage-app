import React from 'react';
import { createFrontendPlugin, PageBlueprint } from '@backstage/frontend-plugin-api';

/**
 * PageBlueprint extension for the Terraform plugin.
 * Registers the main page under /terraform.
 */
const TerraformPage = PageBlueprint.make({
  params: {
    path: '/terraform',
    loader: () =>
      import('./components/RootComponent').then(m => <m.RootComponent />),
  },
});

/**
 * New frontend system plugin entry point for @internal/plugin-terraform.
 * Import via the "/alpha" sub-path export.
 */
export default createFrontendPlugin({
  pluginId: 'terraform',
  extensions: [TerraformPage],
});
