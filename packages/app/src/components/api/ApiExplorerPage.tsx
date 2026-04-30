import { useState, useRef, useEffect, type CSSProperties } from 'react';
import { Content, Page } from '@backstage/core-components';
import {
  EntityListProvider,
  EntityLifecyclePicker,
  EntityOwnerPicker,
  EntityTypePicker,
  EntityKindPicker,
  EntitySearchBar,
} from '@backstage/plugin-catalog-react';
import { CatalogTable } from '@backstage/plugin-catalog';
import FilterListIcon from '@mui/icons-material/FilterList';

const contentWrapperStyle: CSSProperties = {
  width: '100%',
  padding: '0 0.3vw 24px',
};

const waveSvg = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='1368' height='400' fill='none'%3e%3cmask id='a' width='1368' height='401' x='0' y='0' maskUnits='userSpaceOnUse'%3e%3cpath fill='url(%23paint0_linear)' d='M437 116C223 116 112 0 112 0h1256v400c-82 0-225-21-282-109-112-175-436-175-649-175z'/%3e%3cpath fill='url(%23paint1_linear)' d='M1368 400V282C891-29 788 40 711 161 608 324 121 372 0 361v39h1368z'/%3e%3cpath fill='url(%23paint2_linear)' d='M1368 244v156H0V94c92-24 198-46 375 0l135 41c176 51 195 109 858 109z'/%3e%3cpath fill='url(%23paint3_linear)' d='M1252 400h116c-14-7-35-14-116-16-663-14-837-128-1013-258l-85-61C98 28 46 8 0 0v400h1252z'/%3e%3c/mask%3e%3cg mask='url(%23a)'%3e%3cpath fill='white' d='M-172-98h1671v601H-172z'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient id='paint0_linear' x1='602' x2='1093.5' y1='-960.5' y2='272' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='white'/%3e%3cstop offset='1' stop-color='white' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint1_linear' x1='482' x2='480' y1='1058.5' y2='70.5' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='white'/%3e%3cstop offset='1' stop-color='white' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint2_linear' x1='424' x2='446.1' y1='-587.5' y2='274.6' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='white'/%3e%3cstop offset='1' stop-color='white' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint3_linear' x1='587' x2='349' y1='-1120.5' y2='341' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='white'/%3e%3cstop offset='1' stop-color='white' stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")`;

const headerCardStyle: CSSProperties = {
  background: `linear-gradient(135deg, #003D7A 0%, #00568C 50%, #1A8DFF 100%)`,
  backgroundImage: `${waveSvg}, linear-gradient(135deg, #003D7A 0%, #00568C 50%, #1A8DFF 100%)`,
  backgroundSize: 'cover, cover',
  backgroundPosition: 'center',
  borderRadius: 16,
  padding: '40px 24px 32px',
  textAlign: 'center',
  color: '#fff',
  marginBottom: 24,
  boxShadow: '0 4px 24px rgba(0,0,0,0.10), 0 1.5px 6px rgba(0,0,0,0.06)',
  overflow: 'hidden',
};

const titleStyle: CSSProperties = {
  margin: 0,
  fontSize: '2rem',
  fontWeight: 700,
  letterSpacing: '-0.5px',
};

const subtitleStyle: CSSProperties = {
  margin: '8px 0 0',
  fontSize: '1rem',
  fontWeight: 400,
  opacity: 0.85,
};

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
  color: '#FF9800',
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
  zIndex: 10,
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

const FilterDropdown = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
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
          <div style={filterSectionStyle}>
            <span style={filterLabelStyle}>Type</span>
            <EntityTypePicker />
          </div>
          <div style={filterSectionStyle}>
            <span style={filterLabelStyle}>Owner</span>
            <EntityOwnerPicker />
          </div>
          <div style={filterSectionStyle}>
            <span style={filterLabelStyle}>Lifecycle</span>
            <EntityLifecyclePicker />
          </div>
        </div>
      )}
    </div>
  );
};

export const CustomApiExplorerPage = () => {
  return (
    <EntityListProvider>
      <EntityKindPicker initialFilter="api" hidden />
      <Page themeId="apis">
        <Content>
          <div style={contentWrapperStyle}>
            <div className="cnoe-hero-header" style={headerCardStyle}>
              <h1 style={titleStyle}>APIs</h1>
              <p style={subtitleStyle}>Explore and discover APIs across your organization</p>
            </div>
            <div className="cnoe-toolbar-card" style={toolbarCardStyle}>
              <div style={{ flex: 1 }}>
                <EntitySearchBar />
              </div>
              <FilterDropdown />
            </div>
            <div className="cnoe-table-card" style={tableCardStyle}>
              <CatalogTable tableOptions={{ search: false, paging: true }} />
            </div>
          </div>
        </Content>
      </Page>
    </EntityListProvider>
  );
};
