import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { apacheSparkPlugin, ApacheSparkPage } from '../src/plugin';

createDevApp()
  .registerPlugin(apacheSparkPlugin)
  .addPage({
    element: <ApacheSparkPage />,
    title: 'Root Page',
    path: '/apache-spark'
  })
  .render();
