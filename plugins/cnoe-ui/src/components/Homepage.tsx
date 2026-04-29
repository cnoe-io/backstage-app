import { Content, Page } from '@backstage/core-components';
import { HomePageSearchBar } from '@backstage/plugin-search';
import { SearchContextProvider } from '@backstage/plugin-search-react';
import { useApi, configApiRef } from '@backstage/core-plugin-api';
import React from 'react';

import {
  HomePageToolkit,
  HomePageCompanyLogo,
  HomePageStarredEntities,
  TemplateBackstageLogoIcon,
} from '@backstage/plugin-home';

import {
  LogoBig,
} from './logos';

const getBasePath = () => {
  if (typeof window !== 'undefined') {
    const baseTag = document.querySelector('base');
    if (baseTag?.href) {
      try {
        const base = new URL(baseTag.href);
        return base.pathname.replace(/\/$/, '');
      } catch {
        // fallback
      }
    }
  }
  return '';
};

const basePath = getBasePath();

const getDomainUrl = () => {
  if (typeof window !== 'undefined') {
    return `${window.location.protocol}//${window.location.host}`;
  }
  return 'http://localhost:3000';
};

const domainUrl = getDomainUrl();

// Inline styles replace former makeStyles usage (MUI removed per BUI migration)
const searchBarStyle: React.CSSProperties = {
  display: 'flex',
  maxWidth: '60vw',
  backgroundColor: 'var(--backstage-color-background-paper, #fff)',
  boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
  padding: '8px 0',
  borderRadius: '50px',
  margin: 'auto',
};

const logoContainerStyle: React.CSSProperties = {
  margin: '40px 0',
};

export const CNOEHomepage = () => {
  const config = useApi(configApiRef);

  const getGitLabUrl = () => {
    try {
      const gitlabIntegrations = config.getOptionalConfigArray(
        'integrations.gitlab',
      );
      if (gitlabIntegrations && gitlabIntegrations.length > 0) {
        const baseUrl = gitlabIntegrations[0].getOptionalString('baseUrl');
        if (baseUrl) return baseUrl;
      }
    } catch (e) {
      console.log('Could not read GitLab config:', e);
    }
    return 'https://gitlab.com';
  };

  const gitUrl = getGitLabUrl();

  return (
    <SearchContextProvider>
      <Page themeId="home">
        <Content>
          {/* CSS grid replaces MUI Grid (MUI removed per BUI migration) */}
          <div style={{ display: 'grid', justifyItems: 'center', gap: '48px' }}>
            <HomePageCompanyLogo style={logoContainerStyle} logo={<LogoBig />} />
            <div style={{ display: 'grid', width: '100%', alignItems: 'center' }}>
              <HomePageSearchBar style={searchBarStyle} placeholder="Search" />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', width: '100%', gap: '16px' }}>
              <div>
                <HomePageStarredEntities />
              </div>
              <div>
                <HomePageToolkit
                  title="Quick Links"
                  tools={[
                    {
                      url: '/catalog',
                      label: 'Catalog',
                      icon: <TemplateBackstageLogoIcon />,
                    },
                    {
                      url: gitUrl,
                      label: 'GitLab',
                      icon: (
                        <img
                          src={`${basePath}/img/gitlab.png`}
                          alt="GitLab"
                          style={{ width: 24, height: 24 }}
                        />
                      ),
                    },
                    {
                      url: `${domainUrl}/argocd`,
                      label: 'ArgoCD',
                      icon: (
                        <img
                          src={`${basePath}/img/argocd.png`}
                          alt="ArgoCD"
                          style={{ width: 24, height: 24 }}
                        />
                      ),
                    },
                    {
                      url: `${domainUrl}/argo-workflows`,
                      label: 'Argo Workflows',
                      icon: (
                        <img
                          src={`${basePath}/img/argo-workflows.png`}
                          alt="Argo Workflows"
                          style={{ width: 24, height: 24 }}
                        />
                      ),
                    },
                    {
                      url: domainUrl,
                      label: 'Kargo',
                      icon: (
                        <img
                          src={`${basePath}/img/kargo.png`}
                          alt="Kargo"
                          style={{ width: 24, height: 24 }}
                        />
                      ),
                    },
                    {
                      url: `${domainUrl}/keycloak`,
                      label: 'Keycloak',
                      icon: (
                        <img
                          src={`${basePath}/img/keycloak.png`}
                          alt="Keycloak"
                          style={{ width: 24, height: 24 }}
                        />
                      ),
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </Content>
      </Page>
    </SearchContextProvider>
  );
};
