import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { apiDocsPlugin, ApiExplorerPage } from '@backstage/plugin-api-docs';
import {
  CatalogEntityPage,
  CatalogIndexPage,
  catalogPlugin,
} from '@backstage/plugin-catalog';
import {
  CatalogImportPage,
  catalogImportPlugin,
} from '@backstage/plugin-catalog-import';
import { ScaffolderPage, scaffolderPlugin } from '@backstage/plugin-scaffolder';
import { orgPlugin } from '@backstage/plugin-org';
import { SearchPage } from '@backstage/plugin-search';
import { TechRadarPage } from '@backstage/plugin-tech-radar';
import {
  TechDocsIndexPage,
  techdocsPlugin,
  TechDocsReaderPage,
} from '@backstage/plugin-techdocs';
import { TechDocsAddons } from '@backstage/plugin-techdocs-react';
import { ReportIssue } from '@backstage/plugin-techdocs-module-addons-contrib';
import { UserSettingsPage } from '@backstage/plugin-user-settings';
import {apis} from './apis';
import {keycloakOIDCAuthApiRef} from "@internal/plugin-workflows"
import { entityPage } from './components/catalog/EntityPage';
import { searchPage } from './components/search/SearchPage';
import { Root } from './components/Root';

import {AlertDisplay, OAuthRequestDialog, SignInPage} from '@backstage/core-components';
import { createApp } from '@backstage/app-defaults';
import { AppRouter, FlatRoutes } from '@backstage/core-app-api';
import { CatalogGraphPage } from '@backstage/plugin-catalog-graph';
import { RequirePermission } from '@backstage/plugin-permission-react';
import { catalogEntityCreatePermission } from '@backstage/plugin-catalog-common/alpha';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import LightIcon from '@material-ui/icons/WbSunny';
import {CNOEHomepage, cnoeLightTheme, cnoeDarkTheme} from '@internal/cnoe-ui-plugin'

const app = createApp({
  apis,
  components: {
    // SignInPage: (props) => <ProxiedSignInPage {...props} provider="oauth2Proxy" />,
      SignInPage: props => (
          <SignInPage
              {...props}
              auto
              provider={{
                  id: 'keycloak-oidc',
                  title: 'Keycloak',
                  message: 'Sign in using Keycloak',
                  apiRef: keycloakOIDCAuthApiRef,
              }}
          />
      ),
  },
  bindRoutes({ bind }) {
    bind(catalogPlugin.externalRoutes, {
      createComponent: scaffolderPlugin.routes.root,
      viewTechDoc: techdocsPlugin.routes.docRoot,
    });
    bind(apiDocsPlugin.externalRoutes, {
      registerApi: catalogImportPlugin.routes.importPage,
    });
    bind(scaffolderPlugin.externalRoutes, {
      registerComponent: catalogImportPlugin.routes.importPage,
    });
    bind(orgPlugin.externalRoutes, {
      catalogIndex: catalogPlugin.routes.catalogIndex,
    });
  },
  themes: [
    {
      id: 'cnoe-light-theme',
      title: 'Light Theme',
      variant: 'light',
      icon: <LightIcon />,
      Provider: ({ children }) => (
        <ThemeProvider theme={cnoeLightTheme}>
          <CssBaseline>{children}</CssBaseline>
        </ThemeProvider>
      ),
    },
    {
      id: 'cnoe-dark-theme',
      title: 'Dark Theme',
      variant: 'dark',
      icon: <LightIcon />,
      Provider: ({ children }) => (
        <ThemeProvider theme={cnoeDarkTheme}>
          <CssBaseline>{children}</CssBaseline>
        </ThemeProvider>
      ),
    },
  ]
});

const routes = (
  <FlatRoutes>
    <Route path="/" element={<Navigate to="home" />} />
    <Route path="/home" element={<CNOEHomepage/>} />
    <Route path="/catalog" element={<CatalogIndexPage />} />
    <Route
      path="/catalog/:namespace/:kind/:name"
      element={<CatalogEntityPage />}
    >
      {entityPage}
    </Route>
    <Route path="/docs" element={<TechDocsIndexPage />} />
    <Route
      path="/docs/:namespace/:kind/:name/*"
      element={<TechDocsReaderPage />}
    >
      <TechDocsAddons>
        <ReportIssue />
      </TechDocsAddons>
    </Route>
    <Route path="/create" element={<ScaffolderPage />} />
    <Route path="/api-docs" element={<ApiExplorerPage />} />
    <Route
      path="/tech-radar"
      element={<TechRadarPage width={1500} height={800} />}
    />
    <Route
      path="/catalog-import"
      element={
        <RequirePermission permission={catalogEntityCreatePermission}>
          <CatalogImportPage />
        </RequirePermission>
      }
    />
    <Route path="/search" element={<SearchPage />}>
      {searchPage}
    </Route>
    <Route path="/settings" element={<UserSettingsPage />} />
    <Route path="/catalog-graph" element={<CatalogGraphPage />} />
  </FlatRoutes>
);

export default app.createRoot(
  <>
    <AlertDisplay />
    <OAuthRequestDialog />
    <AppRouter>
      <Root>{routes}</Root>
    </AppRouter>
  </>,
);
