import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { terraformPlugin, TerraformPage } from '../src/plugin';

createDevApp()
  .registerPlugin(terraformPlugin)
  .addPage({
    element: <TerraformPage />,
    title: 'Root Page',
    path: '/terraform'
  })
  .render();
