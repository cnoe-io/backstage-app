import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { terraformPlugin, TerraformPluginPage } from '../src/plugin';

createDevApp()
  .registerPlugin(terraformPlugin)
  .addPage({
    element: <TerraformPluginPage />,
    title: 'Root Page',
    path: '/terraform'
  })
  .render();
