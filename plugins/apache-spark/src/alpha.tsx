import React from 'react';
import { createFrontendPlugin, PageBlueprint } from '@backstage/frontend-plugin-api';

/**
 * PageBlueprint extension for the Apache Spark plugin.
 * Registers the main overview page under /apache-spark.
 */
const ApacheSparkPage = PageBlueprint.make({
  params: {
    path: '/apache-spark',
    loader: () =>
      import('./components/Overview').then(m => <m.ApacheSparkOverviewPage />),
  },
});

/**
 * New frontend system plugin entry point for @internal/plugin-apache-spark.
 * Import via the "/alpha" sub-path export.
 */
export default createFrontendPlugin({
  pluginId: 'apache-spark',
  extensions: [ApacheSparkPage],
});
