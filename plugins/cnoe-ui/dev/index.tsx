import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { cnoeFrontendPlugin, CNOEHomepage } from '../src/plugin';

createDevApp()
  .registerPlugin(cnoeFrontendPlugin)
  .addPage({
    element: <CNOEHomepage />,
    title: 'Root Page',
    path: '/cnoe-ui'
  })
  .render();
