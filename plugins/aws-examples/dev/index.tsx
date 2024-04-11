import { createDevApp } from '@backstage/dev-utils';
import { awsExamplesPlugin } from '../src/plugin';

createDevApp()
  .registerPlugin(awsExamplesPlugin)
  .render();
