import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { cnoeUiPlugin, CnoeUiPage } from '../src/plugin';

createDevApp()
  .registerPlugin(cnoeUiPlugin)
  .addPage({
    element: <CnoeUiPage />,
    title: 'Root Page',
    path: '/cnoe-ui'
  })
  .render();
