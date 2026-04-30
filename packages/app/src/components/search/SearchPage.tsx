import { useState, useRef, useEffect, type CSSProperties } from 'react';
import { CatalogSearchResultListItem } from '@backstage/plugin-catalog';
import {
  catalogApiRef,
  CATALOG_FILTER_EXISTS,
} from '@backstage/plugin-catalog-react';
import { TechDocsSearchResultListItem } from '@backstage/plugin-techdocs';
import { SearchType } from '@backstage/plugin-search';
import {
  SearchBar,
  SearchFilter,
  SearchResult,
  SearchPagination,
  useSearch,
} from '@backstage/plugin-search-react';
import {
  CatalogIcon,
  Content,
  DocsIcon,
  Page,
} from '@backstage/core-components';
import { useApi } from '@backstage/core-plugin-api';
import { HeroHeader, contentWrapperStyle } from '../shared/HeroHeader';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';

const toolbarCardStyle: CSSProperties = {
  background: 'rgba(255,255,255,0.03)',
  borderRadius: 16,
  boxShadow: '0 4px 24px rgba(0,0,0,0.10), 0 1.5px 6px rgba(0,0,0,0.06)',
  padding: '12px 16px',
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  marginBottom: 24,
};

const tableCardStyle: CSSProperties = {
  background: 'var(--backstage-color-background-paper, #fff)',
  borderRadius: 16,
  boxShadow: '0 4px 24px rgba(0,0,0,0.10), 0 1.5px 6px rgba(0,0,0,0.06)',
  border: '1px solid rgba(0,0,0,0.06)',
  overflow: 'hidden',
  padding: '20px 24px',
};

const filterBtnBase: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  padding: '8px 16px',
  borderRadius: 20,
  border: '1px solid rgba(255,152,0,0.3)',
  background: 'transparent',
  cursor: 'pointer',
  fontSize: 14,
  fontWeight: 500,
  color: '#FF9800',
  transition: 'all 0.2s ease',
  position: 'relative' as const,
};

const filterBtnActiveStyle: CSSProperties = {
  ...filterBtnBase,
  background: 'rgba(255,152,0,0.08)',
  borderColor: 'rgba(255,152,0,0.5)',
};

const dropdownStyle: CSSProperties = {
  position: 'absolute',
  top: 'calc(100% + 8px)',
  right: 0,
  width: 280,
  background: 'var(--backstage-color-background-paper, #fff)',
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.06)',
  border: '1px solid rgba(0,0,0,0.06)',
  padding: '16px',
  zIndex: 100,
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
};

const filterSectionStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
};

const filterLabelStyle: CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  color: 'var(--backstage-color-text-secondary, #666)',
  padding: '0 4px',
};

const SearchFilterDropdown = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { types } = useSearch();
  const catalogApi = useApi(catalogApiRef);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    if (open) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        type="button"
        style={open ? filterBtnActiveStyle : filterBtnBase}
        onClick={() => setOpen(prev => !prev)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label="Toggle filters"
      >
        <FilterListIcon style={{ fontSize: 18 }} />
        Filters
      </button>
      {open && (
        <div style={dropdownStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <span style={{ fontWeight: 600, fontSize: 14 }}>Filters</span>
            <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: 'inherit' }}>
              <CloseIcon style={{ fontSize: 18 }} />
            </button>
          </div>
          <div style={filterSectionStyle}>
            <span style={filterLabelStyle}>Result Type</span>
            <SearchType.Accordion
              name="Result Type"
              defaultValue="software-catalog"
              types={[
                { value: 'software-catalog', name: 'Software Catalog', icon: <CatalogIcon /> },
                { value: 'techdocs', name: 'Documentation', icon: <DocsIcon /> },
              ]}
            />
          </div>
          {types.includes('techdocs') && (
            <div style={filterSectionStyle}>
              <span style={filterLabelStyle}>Entity</span>
              <SearchFilter.Select
                label="Entity"
                name="name"
                values={async () => {
                  const { items } = await catalogApi.getEntities({
                    fields: ['metadata.name'],
                    filter: {
                      'metadata.annotations.backstage.io/techdocs-ref': CATALOG_FILTER_EXISTS,
                    },
                  });
                  const names = items.map(entity => entity.metadata.name);
                  names.sort();
                  return names;
                }}
              />
            </div>
          )}
          <div style={filterSectionStyle}>
            <span style={filterLabelStyle}>Kind</span>
            <SearchFilter.Select label="Kind" name="kind" values={['Component', 'Template']} />
          </div>
          <div style={filterSectionStyle}>
            <span style={filterLabelStyle}>Lifecycle</span>
            <SearchFilter.Checkbox label="Lifecycle" name="lifecycle" values={['experimental', 'production']} />
          </div>
        </div>
      )}
    </div>
  );
};

const SearchPage = () => {
  return (
    <Page themeId="home">
      <Content>
        <div style={contentWrapperStyle}>
          <HeroHeader title="Search" subtitle="Search across all your software catalog and documentation" />
          <div className="cnoe-toolbar-card" style={toolbarCardStyle}>
            <div style={{ flex: 1 }}>
              <SearchBar />
            </div>
            <SearchFilterDropdown />
          </div>
          <div style={{ marginBottom: 16 }}>
            <SearchPagination />
          </div>
          <div className="cnoe-table-card" style={tableCardStyle}>
            <SearchResult>
              <CatalogSearchResultListItem icon={<CatalogIcon />} />
              <TechDocsSearchResultListItem icon={<DocsIcon />} />
            </SearchResult>
          </div>
        </div>
      </Content>
    </Page>
  );
};

export const searchPage = <SearchPage />;
