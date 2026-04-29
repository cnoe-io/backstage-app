import React from 'react';
import { Content, Page } from '@backstage/core-components';
import {
  CatalogIndexPage as StockCatalogIndexPage,
  CatalogTable,
} from '@backstage/plugin-catalog';
import {
  EntityKindPicker,
  EntityListProvider,
  EntitySearchBar,
} from '@backstage/plugin-catalog-react';
import { HeroHeader, contentWrapperStyle } from '../shared/HeroHeader';
import { CatalogDropdownFilters } from './CatalogPage';

const toolbarCardStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.03)',
  borderRadius: 16,
  boxShadow: '0 4px 24px rgba(0,0,0,0.10), 0 1.5px 6px rgba(0,0,0,0.06)',
  padding: '12px 16px',
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  marginBottom: 24,
};

const tableCardStyle: React.CSSProperties = {
  background: 'var(--backstage-color-background-paper, #fff)',
  borderRadius: 16,
  boxShadow: '0 4px 24px rgba(0,0,0,0.10), 0 1.5px 6px rgba(0,0,0,0.06)',
  border: '1px solid rgba(0,0,0,0.06)',
  overflow: 'hidden',
};

export const CustomCatalogPage = () => (
  <EntityListProvider>
    <EntityKindPicker initialFilter="component" hidden />
    <Page themeId="home">
      <Content>
        <div style={contentWrapperStyle}>
          <HeroHeader title="CNOE Catalog" subtitle="Discover and manage all your software components" />
          <div className="cnoe-toolbar-card" style={toolbarCardStyle}>
            <div style={{ flex: 1 }}>
              <EntitySearchBar />
            </div>
            <CatalogDropdownFilters />
          </div>
          <div className="cnoe-table-card" style={tableCardStyle}>
            <CatalogTable tableOptions={{ search: false, paging: true }} />
          </div>
        </div>
      </Content>
    </Page>
  </EntityListProvider>
);
