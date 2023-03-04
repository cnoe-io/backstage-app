import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { workflowsPlugin, WorkflowsPage } from '../src/plugin';

createDevApp()
  .registerPlugin(workflowsPlugin)
  .addPage({
    element: <WorkflowsPage />,
    title: 'Root Page',
    path: '/workflows'
  })
  .render();
