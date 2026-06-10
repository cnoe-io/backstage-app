import { useState, useRef, useEffect, type CSSProperties } from 'react';
import { Content, Page, Header } from '@backstage/core-components';
import {
  EntityListProvider,
  EntityLifecyclePicker,
  EntityOwnerPicker,
  EntityTypePicker,
  EntityTagPicker,
  EntitySearchBar,
  EntityKindPicker,
  useEntityList,
} from '@backstage/plugin-catalog-react';
import { Entity } from '@backstage/catalog-model';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';
import FilterListIcon from '@mui/icons-material/FilterList';

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
  background: 'var(--backstage-color-background-paper, #1e1e1e)',
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.06)',
  border: '1px solid rgba(255,255,255,0.1)',
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
  color: 'var(--backstage-color-text-secondary, #999)',
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
          <div style={filterSectionStyle}>
            <span style={filterLabelStyle}>Tags</span>
            <EntityTagPicker />
          </div>
        </div>
      )}
    </div>
  );
};

const TemplateGrid = () => {
  const { entities, loading } = useEntityList();
  const navigate = useNavigate();

  if (loading) {
    return (
      <Typography variant="body1" color="textSecondary" align="center" sx={{ py: 6 }}>
        Loading templates...
      </Typography>
    );
  }

  const templates = entities as Entity[];

  if (!templates || templates.length === 0) {
    return (
      <Typography variant="body1" color="textSecondary" align="center" sx={{ py: 6 }}>
        No templates found matching your filters.
      </Typography>
    );
  }

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 3 }}>
      {templates.map(template => {
        const name = template.metadata.name;
        const namespace = template.metadata.namespace ?? 'default';
        const title = template.metadata.title || name;
        const description = template.metadata.description || '';
        const tags = template.metadata.tags || [];
        const type = (template.spec as any)?.type || 'service';
        const owner = (template.spec as any)?.owner || 'unknown';

        return (
          <Card
            key={`${namespace}/${name}`}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              minHeight: 230,
              border: '1px solid',
              borderColor: 'divider',
              transition: 'transform 0.15s ease, box-shadow 0.15s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: 6,
              },
            }}
          >
            <CardHeader
              title={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Chip label={type} size="small" color="primary" variant="outlined" sx={{ fontSize: 11 }} />
                  <Box sx={{ flex: 1 }} />
                  <IconButton size="small" aria-label="documentation">
                    <DescriptionIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" aria-label="favorite">
                    <StarBorderIcon fontSize="small" />
                  </IconButton>
                </Box>
              }
              sx={{ pb: 0 }}
            />
            <CardContent sx={{ flex: 1, pt: 1, px: 2.5 }}>
              <Typography variant="h6" component="h3" gutterBottom sx={{ fontSize: '1rem', fontWeight: 700, lineHeight: 1.3 }}>
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 2, lineHeight: 1.6 }}>
                {description}
              </Typography>
              {tags.length > 0 && (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {tags.map(tag => (
                    <Chip key={tag} label={tag} size="small" variant="outlined" sx={{ fontSize: 11 }} />
                  ))}
                </Box>
              )}
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between', px: 2.5, pb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <PersonIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                <Typography variant="caption" color="textSecondary">
                  {owner}
                </Typography>
              </Box>
              <Button
                variant="contained"
                size="small"
                color="primary"
                onClick={() => navigate(`/create/templates/${namespace}/${name}`)}
                sx={{ borderRadius: 4, textTransform: 'none', fontWeight: 600 }}
              >
                Choose
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </Box>
  );
};

export const CustomScaffolderPage = () => {
  return (
    <Page themeId="tool">
      <Header title="Create a new component" subtitle="Create new software components using standard templates in your organization" />
      <Content>
        <EntityListProvider>
          <EntityKindPicker initialFilter="template" hidden />
          <div style={toolbarCardStyle}>
            <div style={{ flex: 1 }}>
              <EntitySearchBar />
            </div>
            <FilterDropdown />
          </div>
          <TemplateGrid />
        </EntityListProvider>
      </Content>
    </Page>
  );
};
