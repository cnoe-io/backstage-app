import React from 'react';
import { createFrontendPlugin, PageBlueprint } from '@backstage/frontend-plugin-api';

/**
 * PageBlueprint extension for the CNOE UI plugin.
 * Registers the CNOE homepage under /home.
 */
const CnoeUiPage = PageBlueprint.make({
  params: {
    path: '/home',
    loader: () =>
      import('./components/Homepage').then(m => <m.CNOEHomepage />),
  },
});

/**
 * New frontend system plugin entry point for @internal/plugin-cnoe-ui.
 * Import via the "/alpha" sub-path export.
 */
export default createFrontendPlugin({
  pluginId: 'cnoe-ui-plugin',
  extensions: [CnoeUiPage],
});
