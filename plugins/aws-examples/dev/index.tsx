import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { awsExamplesPlugin, AwsExamplesPage } from '../src/plugin';

createDevApp()
  .registerPlugin(awsExamplesPlugin)
  .addPage({
    element: <AwsExamplesPage />,
    title: 'Root Page',
    path: '/aws-examples'
  })
  .render();
