import React from 'react';
import { Content, Page } from '@backstage/core-components';
import { HomePageSearchBar } from '@backstage/plugin-search';
import { SearchContextProvider } from '@backstage/plugin-search-react';
import { useApi, configApiRef } from '@backstage/core-plugin-api';
import {
  HomePageStarredEntities,
} from '@backstage/plugin-home';

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

/* ------------------------------------------------------------------ */
/*  Styles                                                            */
/* ------------------------------------------------------------------ */

const waveSvg = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='1368' height='400' fill='none'%3e%3cmask id='a' width='1368' height='401' x='0' y='0' maskUnits='userSpaceOnUse'%3e%3cpath fill='url(%23paint0_linear)' d='M437 116C223 116 112 0 112 0h1256v400c-82 0-225-21-282-109-112-175-436-175-649-175z'/%3e%3cpath fill='url(%23paint1_linear)' d='M1368 400V282C891-29 788 40 711 161 608 324 121 372 0 361v39h1368z'/%3e%3cpath fill='url(%23paint2_linear)' d='M1368 244v156H0V94c92-24 198-46 375 0l135 41c176 51 195 109 858 109z'/%3e%3cpath fill='url(%23paint3_linear)' d='M1252 400h116c-14-7-35-14-116-16-663-14-837-128-1013-258l-85-61C98 28 46 8 0 0v400h1252z'/%3e%3c/mask%3e%3cg mask='url(%23a)'%3e%3cpath fill='white' d='M-172-98h1671v601H-172z'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient id='paint0_linear' x1='602' x2='1093.5' y1='-960.5' y2='272' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='white'/%3e%3cstop offset='1' stop-color='white' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint1_linear' x1='482' x2='480' y1='1058.5' y2='70.5' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='white'/%3e%3cstop offset='1' stop-color='white' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint2_linear' x1='424' x2='446.1' y1='-587.5' y2='274.6' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='white'/%3e%3cstop offset='1' stop-color='white' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint3_linear' x1='587' x2='349' y1='-1120.5' y2='341' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='white'/%3e%3cstop offset='1' stop-color='white' stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")`;

const heroStyle: React.CSSProperties = {
  width: 'calc(100% - 56px)',
  margin: '24px auto 0',
  padding: '40px 24px 32px',
  background: 'linear-gradient(135deg, #003D7A 0%, #00568C 50%, #1A8DFF 100%)',
  backgroundImage: `${waveSvg}, linear-gradient(135deg, #003D7A 0%, #00568C 50%, #1A8DFF 100%)`,
  backgroundSize: 'cover, cover',
  backgroundPosition: 'center',
  borderRadius: 16,
  textAlign: 'center',
  color: '#fff',
  boxShadow: '0 4px 24px rgba(0,0,0,0.10), 0 1.5px 6px rgba(0,0,0,0.06)',
  overflow: 'hidden',
  minHeight: 135,
};

const heroTitleStyle: React.CSSProperties = {
  margin: 0,
  fontSize: '2.25rem',
  fontWeight: 700,
  letterSpacing: '-0.5px',
  lineHeight: 1.2,
};

const heroSubtitleStyle: React.CSSProperties = {
  margin: '12px 0 0',
  fontSize: '1.1rem',
  fontWeight: 400,
  opacity: 0.85,
};

const searchWrapperStyle: React.CSSProperties = {
  maxWidth: 700,
  width: '100%',
  margin: '-28px auto 0',
  padding: '0 24px',
  position: 'relative',
  zIndex: 1,
};

const searchCardStyle: React.CSSProperties = {
  background: 'var(--backstage-color-background-paper, #fff)',
  borderRadius: 16,
  boxShadow: '0 4px 24px rgba(0,0,0,0.10), 0 1.5px 6px rgba(0,0,0,0.06)',
  padding: '10px 8px',
};

const searchBarInnerStyle: React.CSSProperties = {
  display: 'flex',
  width: '100%',
  border: 'none',
  outline: 'none',
  background: 'transparent',
  borderRadius: 12,
};

const columnsStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 24,
  width: '100%',
  maxWidth: 1200,
  margin: '36px auto 0',
  padding: '0 24px',
  alignItems: 'start',
};

const cardStyle: React.CSSProperties = {
  background: 'var(--backstage-color-background-paper, #f8f9fb)',
  borderRadius: 16,
  boxShadow: '0 4px 20px rgba(0,0,0,0.08), 0 1.5px 6px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.6)',
  border: '1px solid rgba(0,0,0,0.04)',
  overflow: 'hidden',
};

const cardHeaderStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  padding: '18px 20px 12px',
  fontSize: '1rem',
  fontWeight: 600,
  color: 'inherit',
};

const quickLinksGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
  gap: 14,
  padding: '8px 20px 20px',
  maxHeight: 400,
  overflowY: 'auto',
};

const toolCardBase: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  padding: '20px 8px',
  borderRadius: 12,
  background: 'rgba(25, 118, 210, 0.04)',
  cursor: 'pointer',
  textDecoration: 'none',
  color: 'var(--backstage-color-text-primary, #333)',
  transition: 'all 0.2s ease',
  border: '1px solid transparent',
};

const toolCardLabelStyle: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 500,
  textAlign: 'center',
  lineHeight: 1.3,
};

/* ------------------------------------------------------------------ */
/*  ToolCard component                                                */
/* ------------------------------------------------------------------ */

interface ToolCardProps {
  url: string;
  label: string;
  iconSrc?: string;
  iconAlt?: string;
  isCatalog?: boolean;
}

const ToolCard = ({ url, label, iconSrc, iconAlt, isCatalog }: ToolCardProps) => {
  const [hovered, setHovered] = React.useState(false);

  const style: React.CSSProperties = {
    ...toolCardBase,
    ...(hovered
      ? {
          transform: 'translateY(-3px) scale(1.03)',
          boxShadow: '0 6px 20px rgba(0,0,0,0.10)',
          background: 'rgba(25, 118, 210, 0.08)',
          borderColor: 'rgba(25, 118, 210, 0.15)',
        }
      : {}),
  };

  const iconElement = isCatalog ? (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      style={{ color: '#1976d2' }}
    >
      <path
        d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"
        fill="currentColor"
      />
    </svg>
  ) : (
    <img
      src={iconSrc}
      alt={iconAlt || label}
      style={{ width: 40, height: 40, objectFit: 'contain' }}
    />
  );

  const isExternal =
    url.startsWith('http://') || url.startsWith('https://');

  return (
    <a
      href={url}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {iconElement}
      <span style={toolCardLabelStyle}>{label}</span>
    </a>
  );
};

/* ------------------------------------------------------------------ */
/*  Star SVG icon                                                     */
/* ------------------------------------------------------------------ */

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#f9a825">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
  </svg>
);

const LinkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#1976d2">
    <path d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8v-2z" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Homepage                                                          */
/* ------------------------------------------------------------------ */

export const Homepage = () => {
  const config = useApi(configApiRef);

  const tools: ToolCardProps[] = (() => {
    try {
      const links = config.getOptionalConfigArray('homepage.quickLinks');
      if (links && links.length > 0) {
        return links.map(link => ({
          url: link.getString('url'),
          label: link.getString('label'),
          iconSrc: link.getOptionalString('iconUrl'),
          iconAlt: link.getOptionalString('label'),
          isCatalog: link.getOptionalString('icon') === 'catalog',
        }));
      }
    } catch (e) {
      // fall through to defaults
    }

    const getGitLabUrl = () => {
      try {
        const gitlabIntegrations = config.getOptionalConfigArray('integrations.gitlab');
        if (gitlabIntegrations && gitlabIntegrations.length > 0) {
          const baseUrl = gitlabIntegrations[0].getOptionalString('baseUrl');
          if (baseUrl) return baseUrl;
        }
      } catch { /* fallback */ }
      return 'https://gitlab.com';
    };

    return [
      { url: '/catalog', label: 'Catalog', isCatalog: true },
      { url: getGitLabUrl(), label: 'GitLab', iconSrc: `${basePath}/img/gitlab.png`, iconAlt: 'GitLab' },
      { url: `${domainUrl}/argocd`, label: 'ArgoCD', iconSrc: `${basePath}/img/argocd.png`, iconAlt: 'ArgoCD' },
      { url: `${domainUrl}/argo-workflows`, label: 'Argo Workflows', iconSrc: `${basePath}/img/argo-workflows.png`, iconAlt: 'Argo Workflows' },
      { url: domainUrl, label: 'Kargo', iconSrc: `${basePath}/img/kargo.png`, iconAlt: 'Kargo' },
      { url: `${domainUrl}/keycloak`, label: 'Keycloak', iconSrc: `${basePath}/img/keycloak.png`, iconAlt: 'Keycloak' },
    ];
  })();

  return (
    <SearchContextProvider>
      <Page themeId="home">
        <Content>
          {/* Hero */}
          <div className="cnoe-hero-header" style={heroStyle}>
            <h1 style={heroTitleStyle}>Internal Developer Platform</h1>
            <p style={heroSubtitleStyle}>
              Discover, manage, and deploy your services
            </p>
          </div>

          {/* Elevated search bar */}
          <div style={searchWrapperStyle}>
            <div className="cnoe-toolbar-card" style={searchCardStyle}>
              <HomePageSearchBar
                style={searchBarInnerStyle}
                placeholder="Search"
              />
            </div>
          </div>

          {/* Two-column layout */}
          <div style={columnsStyle}>
            {/* Starred entities */}
            <div className="cnoe-card" style={cardStyle}>
              <div style={cardHeaderStyle}>
                <StarIcon />
                Starred Entities
              </div>
              <div style={{ padding: '0 4px 4px' }}>
                <HomePageStarredEntities />
              </div>
            </div>

            {/* Quick links */}
            <div className="cnoe-card" style={cardStyle}>
              <div style={cardHeaderStyle}>
                <LinkIcon />
                Quick Links
              </div>
              <div style={quickLinksGridStyle}>
                {tools.map((tool) => (
                  <ToolCard key={tool.label} {...tool} />
                ))}
              </div>
            </div>
          </div>
        </Content>
      </Page>
    </SearchContextProvider>
  );
};
