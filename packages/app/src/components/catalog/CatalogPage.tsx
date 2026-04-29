import React, { useState, useRef, useEffect } from 'react';
import {
  EntityTypePicker,
  EntityOwnerPicker,
  EntityLifecyclePicker,
  EntityTagPicker,
  UserListPicker,
} from '@backstage/plugin-catalog-react';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';

const filterBtnBase: React.CSSProperties = {
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

const filterBtnActiveStyle: React.CSSProperties = {
  ...filterBtnBase,
  background: 'rgba(255,152,0,0.08)',
  borderColor: 'rgba(255,152,0,0.5)',
  color: '#FF9800',
};

const dropdownStyle: React.CSSProperties = {
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

const filterSectionStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
};

const filterLabelStyle: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  color: 'var(--backstage-color-text-secondary, #666)',
  padding: '0 4px',
};

export const CatalogDropdownFilters = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
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
            <span style={filterLabelStyle}>Owned / All</span>
            <UserListPicker />
          </div>
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
          <div style={filterSectionStyle}>
            <span style={filterLabelStyle}>Tags</span>
            <EntityTagPicker />
          </div>
        </div>
      )}
    </div>
  );
};
