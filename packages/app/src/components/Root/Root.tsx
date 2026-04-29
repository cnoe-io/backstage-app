import React, { PropsWithChildren } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ExtensionIcon from '@mui/icons-material/Extension';
import MapIcon from '@mui/icons-material/MyLocation';
import LibraryBooks from '@mui/icons-material/LibraryBooks';
import CreateComponentIcon from '@mui/icons-material/AddCircleOutline';
import CategoryIcon from '@mui/icons-material/Category';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import GroupIcon from '@mui/icons-material/People';
import { LogoFull, LogoIcon } from '../logos';
import {
  Settings as SidebarSettings,
  UserSettingsSignInAvatar,
} from '@backstage/plugin-user-settings';
import { SidebarSearchModal } from '@backstage/plugin-search';
import {
  Sidebar,
  sidebarConfig,
  SidebarDivider,
  SidebarGroup,
  SidebarItem,
  SidebarPage,
  SidebarScrollWrapper,
  SidebarSpace,
  useSidebarOpenState,
  Link,
  SidebarExpandButton,
} from '@backstage/core-components';
import { MyGroupsSidebarItem } from '@backstage/plugin-org';

const sidebarLogoStyles = {
  root: {
    width: sidebarConfig.drawerWidthClosed,
    height: 3 * sidebarConfig.logoHeight,
    display: 'flex',
    flexFlow: 'row nowrap' as const,
    alignItems: 'center',
    marginBottom: 8,
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    paddingBottom: 16,
  },
  link: {
    width: sidebarConfig.drawerWidthClosed,
    marginLeft: 24,
  },
};

const SidebarLogo = () => {
  const { isOpen } = useSidebarOpenState();

  return (
    <div style={sidebarLogoStyles.root}>
      <Link
        to="/"
        underline="none"
        style={sidebarLogoStyles.link}
        aria-label="Home"
      >
        {isOpen ? <LogoFull /> : <LogoIcon />}
      </Link>
    </div>
  );
};

export const Root = ({ children }: PropsWithChildren<{}>) => (
  <SidebarPage>
    <Sidebar>
      {/* Logo */}
      <SidebarLogo />

      {/* Search — uses SidebarGroup so it aligns with other items */}
      <SidebarGroup label="Search" icon={<SearchIcon />} to="/search">
        <SidebarSearchModal />
      </SidebarGroup>

      <SidebarDivider />

      {/* Main navigation */}
      <SidebarGroup label="Menu" icon={<MenuIcon />}>
        <SidebarItem icon={HomeIcon} to="catalog" text="Catalog" />
        <MyGroupsSidebarItem
          singularTitle="My Group"
          pluralTitle="My Groups"
          icon={GroupIcon}
        />
        <SidebarItem icon={ExtensionIcon} to="api-docs" text="APIs" />
        <SidebarItem icon={LibraryBooks} to="docs" text="Docs" />
        <SidebarItem icon={CreateComponentIcon} to="create" text="Create..." />
        <SidebarDivider />
        <span
          style={{
            fontSize: 10,
            textTransform: 'uppercase',
            letterSpacing: 1.5,
            opacity: 0.5,
            padding: '16px 24px 4px',
            display: 'block',
          }}
        >
          Tools
        </span>
        <SidebarScrollWrapper>
          <SidebarItem icon={MapIcon} to="tech-radar" text="Tech Radar" />
          <SidebarItem icon={CategoryIcon} to="catalog-graph" text="Graph" />
        </SidebarScrollWrapper>
      </SidebarGroup>

      <SidebarSpace />
      <SidebarDivider />

      {/* Collapse toggle */}
      <div
        style={{ opacity: 0.6, transition: 'opacity 0.2s' }}
        onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.opacity = '1'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.opacity = '0.6'; }}
      >
        <SidebarExpandButton />
      </div>

      {/* Settings at bottom */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <SidebarGroup
          label="Settings"
          icon={<UserSettingsSignInAvatar />}
          to="/settings"
        >
          <SidebarSettings />
        </SidebarGroup>
      </div>
    </Sidebar>
    {children}
  </SidebarPage>
);
