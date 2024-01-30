import {createPlugin, createComponentExtension} from '@backstage/core-plugin-api';

import {rootRouteRef} from './routes';

export const cnoeFrontendPlugin = createPlugin({
  id: 'cnoe-ui-plugin',
  routes: {
    root: rootRouteRef,
  },
});

export const AWSLogoFull = cnoeFrontendPlugin
  .provide(
    createComponentExtension({
      name: 'LogoFull',
      component: {lazy: () => import('./components/logos/LogoFull').then(m => m.LogoFull)},
    }),
  );

export const AWSLogoIcon = cnoeFrontendPlugin
  .provide(
    createComponentExtension({
      name: 'LogoIcon',
      component: {lazy: () => import('./components/logos/LogoIcon').then(m => m.LogoIcon)},
    }),
  );

export const CNOEHomepage = cnoeFrontendPlugin
  .provide(
    createComponentExtension({
      name: 'Homepage',
      component: {
        lazy: () => import('./components/Homepage').then(m => m.CNOEHomepage),
      },
    }),
  );
