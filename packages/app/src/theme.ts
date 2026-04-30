import { createElement } from 'react';
import {
  createUnifiedTheme,
  UnifiedThemeProvider,
  defaultTypography,
  palettes,
  genPageTheme,
  shapes,
} from '@backstage/theme';
import type { AppTheme } from '@backstage/core-plugin-api';

const fontFamily =
  '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

const cnoeTypography = {
  ...defaultTypography,
  fontFamily,
};

// All page types use the same CNOE blue gradient
const cnoePageThemeLight = {
  home: genPageTheme({ colors: ['#003D7A', '#1A8DFF'], shape: shapes.wave }),
  documentation: genPageTheme({ colors: ['#003D7A', '#1A8DFF'], shape: shapes.wave2 }),
  tool: genPageTheme({ colors: ['#003D7A', '#1A8DFF'], shape: shapes.round }),
  service: genPageTheme({ colors: ['#003D7A', '#1A8DFF'], shape: shapes.wave }),
  website: genPageTheme({ colors: ['#003D7A', '#1A8DFF'], shape: shapes.wave }),
  library: genPageTheme({ colors: ['#003D7A', '#1A8DFF'], shape: shapes.wave }),
  other: genPageTheme({ colors: ['#003D7A', '#1A8DFF'], shape: shapes.wave }),
  app: genPageTheme({ colors: ['#003D7A', '#1A8DFF'], shape: shapes.wave }),
  apis: genPageTheme({ colors: ['#003D7A', '#1A8DFF'], shape: shapes.wave }),
  component: genPageTheme({ colors: ['#003D7A', '#1A8DFF'], shape: shapes.wave }),
  resource: genPageTheme({ colors: ['#003D7A', '#1A8DFF'], shape: shapes.wave }),
  system: genPageTheme({ colors: ['#003D7A', '#1A8DFF'], shape: shapes.wave }),
  domain: genPageTheme({ colors: ['#003D7A', '#1A8DFF'], shape: shapes.wave }),
  group: genPageTheme({ colors: ['#003D7A', '#1A8DFF'], shape: shapes.wave }),
  user: genPageTheme({ colors: ['#003D7A', '#1A8DFF'], shape: shapes.wave }),
  template: genPageTheme({ colors: ['#003D7A', '#1A8DFF'], shape: shapes.wave }),
  card: genPageTheme({ colors: ['#003D7A', '#1A8DFF'], shape: shapes.wave }),
};

const cnoePageThemeDark = {
  home: genPageTheme({ colors: ['#0D1117', '#003D68'], shape: shapes.wave }),
  documentation: genPageTheme({ colors: ['#0D1117', '#003D68'], shape: shapes.wave2 }),
  tool: genPageTheme({ colors: ['#0D1117', '#003D68'], shape: shapes.round }),
  service: genPageTheme({ colors: ['#0D1117', '#003D68'], shape: shapes.wave }),
  website: genPageTheme({ colors: ['#0D1117', '#003D68'], shape: shapes.wave }),
  library: genPageTheme({ colors: ['#0D1117', '#003D68'], shape: shapes.wave }),
  other: genPageTheme({ colors: ['#0D1117', '#003D68'], shape: shapes.wave }),
  app: genPageTheme({ colors: ['#0D1117', '#003D68'], shape: shapes.wave }),
  apis: genPageTheme({ colors: ['#0D1117', '#003D68'], shape: shapes.wave }),
  component: genPageTheme({ colors: ['#0D1117', '#003D68'], shape: shapes.wave }),
  resource: genPageTheme({ colors: ['#0D1117', '#003D68'], shape: shapes.wave }),
  system: genPageTheme({ colors: ['#0D1117', '#003D68'], shape: shapes.wave }),
  domain: genPageTheme({ colors: ['#0D1117', '#003D68'], shape: shapes.wave }),
  group: genPageTheme({ colors: ['#0D1117', '#003D68'], shape: shapes.wave }),
  user: genPageTheme({ colors: ['#0D1117', '#003D68'], shape: shapes.wave }),
  template: genPageTheme({ colors: ['#0D1117', '#003D68'], shape: shapes.wave }),
  card: genPageTheme({ colors: ['#0D1117', '#003D68'], shape: shapes.wave }),
};

// Shadow tokens
const shadows = {
  card: '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)',
  cardHover: '0 10px 25px rgba(0,0,0,0.1), 0 6px 10px rgba(0,0,0,0.08)',
  elevated: '0 20px 40px rgba(0,0,0,0.12)',
  cardHoverDark: '0 10px 25px rgba(0,0,0,0.25), 0 6px 10px rgba(0,0,0,0.2)',
  elevatedDark: '0 20px 40px rgba(0,0,0,0.3)',
};

// Option B: Vibrant — Light theme
const lightTheme = createUnifiedTheme({
  palette: {
    ...palettes.light,
    primary: { main: '#00568C' },
    secondary: { main: '#FF9800' },
    background: { default: '#F5F7FA', paper: '#FFFFFF' },
    text: { primary: '#212121', secondary: '#757575' },
    divider: '#EEEEEE',
    navigation: {
      background: '#00568C',
      indicator: '#FF9800',
      color: 'rgba(255,255,255,0.5)',
      selectedColor: '#FFFFFF',
      navItem: { hoverBackground: 'rgba(255,255,255,0.15)' },
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          border: '1px solid #EEEEEE',
          boxShadow: shadows.card,
          transition: 'box-shadow 0.2s ease, transform 0.2s ease',
          '&:hover': {
            boxShadow: shadows.cardHover,
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 600,
          transition: 'all 0.2s ease',
        },
        containedPrimary: {
          backgroundColor: '#00568C',
          backgroundImage: 'linear-gradient(180deg, #006AA8 0%, #00568C 100%)',
          '&:hover': {
            backgroundColor: '#004070',
            backgroundImage: 'linear-gradient(180deg, #00568C 0%, #004070 100%)',
            boxShadow: '0 4px 12px rgba(0,86,140,0.3)',
          },
        },
        containedSecondary: {
          backgroundColor: '#FF9800',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#F57C00',
            boxShadow: '0 4px 12px rgba(255,152,0,0.3)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '6px',
          fontWeight: 500,
          fontSize: '12px',
          borderLeft: '3px solid transparent',
        },
        colorPrimary: {
          backgroundColor: '#E6F2FF',
          color: '#00568C',
          borderLeftColor: '#00568C',
        },
        colorSecondary: {
          backgroundColor: '#FFF3E0',
          color: '#F57C00',
          borderLeftColor: '#F57C00',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '13px',
          letterSpacing: '0.5px',
          transition: 'color 0.2s ease',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:nth-of-type(even)': {
            backgroundColor: 'rgba(0,86,140,0.02)',
          },
          '&:hover': {
            backgroundColor: 'rgba(0,86,140,0.05)',
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-head': {
            fontWeight: 700,
            backgroundColor: 'rgba(0,86,140,0.04)',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          '&.Mui-focused': {
            boxShadow: '0 0 0 3px rgba(0,86,140,0.15)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          border: '1px solid #EEEEEE',
          boxShadow: shadows.card,
          transition: 'box-shadow 0.2s ease',
        },
        elevation0: { border: 'none', boxShadow: 'none' },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          transition: 'color 0.15s ease',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'background-color 0.15s ease',
        },
      },
    },
    BackstageHeader: {
      styleOverrides: {
        header: {
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        },
      },
    },
    BackstageHeaderLabel: {
      styleOverrides: {
        root: {
          fontSize: '14px',
        },
      },
    },
    BackstageInfoCard: {
      styleOverrides: {
        header: {
          borderBottom: '1px solid #EEEEEE',
        },
      },
    },
    BackstageSidebarItem: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          transition: 'background-color 0.2s ease',
        },
      },
    },
    BackstagePage: {
      styleOverrides: {
        root: { backgroundColor: '#F5F7FA' },
      },
    },
    BackstageContent: {
      styleOverrides: {
        root: { backgroundColor: '#F5F7FA' },
      },
    },
  },
  defaultPageTheme: 'home',
  pageTheme: cnoePageThemeLight,
  typography: cnoeTypography,
});

// Option B: Vibrant — Dark theme
const darkTheme = createUnifiedTheme({
  palette: {
    ...palettes.dark,
    primary: { main: '#4DA6FF' },
    secondary: { main: '#FFB74D' },
    background: { default: '#0D1117', paper: '#161B22' },
    text: { primary: '#E6E6E6', secondary: '#8B949E' },
    divider: '#30363D',
    navigation: {
      background: '#0D1117',
      indicator: '#FFB74D',
      color: '#6B778C',
      selectedColor: '#4DA6FF',
      navItem: { hoverBackground: 'rgba(77,166,255,0.1)' },
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { backgroundColor: '#0D1117' },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          border: '1px solid #30363D',
          backgroundColor: '#161B22',
          boxShadow: shadows.card,
          transition: 'box-shadow 0.2s ease, transform 0.2s ease',
          '&:hover': {
            boxShadow: shadows.cardHoverDark,
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 600,
          transition: 'all 0.2s ease',
        },
        containedPrimary: {
          backgroundColor: '#4DA6FF',
          backgroundImage: 'linear-gradient(180deg, #5DB3FF 0%, #4DA6FF 100%)',
          color: '#0D1117',
          '&:hover': {
            backgroundColor: '#3A8FE0',
            backgroundImage: 'linear-gradient(180deg, #4DA6FF 0%, #3A8FE0 100%)',
            boxShadow: '0 4px 12px rgba(77,166,255,0.3)',
          },
        },
        containedSecondary: {
          backgroundColor: '#FFB74D',
          color: '#212121',
          '&:hover': {
            backgroundColor: '#FFA726',
            boxShadow: '0 4px 12px rgba(255,183,77,0.3)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '6px',
          fontWeight: 500,
          fontSize: '12px',
          borderLeft: '3px solid transparent',
        },
        colorPrimary: {
          backgroundColor: 'rgba(77,166,255,0.15)',
          color: '#4DA6FF',
          borderLeftColor: '#4DA6FF',
        },
        colorSecondary: {
          backgroundColor: 'rgba(255,152,0,0.15)',
          color: '#FFB74D',
          borderLeftColor: '#FFB74D',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '13px',
          letterSpacing: '0.5px',
          transition: 'color 0.2s ease',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:nth-of-type(even)': {
            backgroundColor: 'rgba(255,255,255,0.02)',
          },
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.05)',
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-head': {
            fontWeight: 700,
            backgroundColor: 'rgba(255,255,255,0.04)',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          backgroundColor: '#161B22',
          border: '1px solid #30363D',
          color: '#C9D1D9',
          '&.Mui-focused': {
            boxShadow: '0 0 0 3px rgba(77,166,255,0.2)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#161B22',
          backgroundImage: 'none',
          borderRadius: '12px',
          border: '1px solid #30363D',
          boxShadow: shadows.card,
          transition: 'box-shadow 0.2s ease',
        },
        elevation0: { border: 'none', boxShadow: 'none' },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          transition: 'color 0.15s ease',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'background-color 0.15s ease',
        },
      },
    },
    BackstageHeader: {
      styleOverrides: {
        header: {
          boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
        },
      },
    },
    BackstageHeaderLabel: {
      styleOverrides: {
        root: {
          fontSize: '14px',
        },
      },
    },
    BackstageInfoCard: {
      styleOverrides: {
        header: {
          borderBottom: '1px solid #30363D',
        },
      },
    },
    BackstageSidebarItem: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          transition: 'background-color 0.2s ease',
        },
      },
    },
    BackstagePage: {
      styleOverrides: {
        root: { backgroundColor: '#0D1117' },
      },
    },
    BackstageContent: {
      styleOverrides: {
        root: { backgroundColor: '#0D1117' },
      },
    },
  },
  defaultPageTheme: 'home',
  pageTheme: cnoePageThemeDark,
  typography: cnoeTypography,
});

// AppTheme exports for legacy createApp from @backstage/app-defaults
export const cnoeVibrantLightAppTheme: AppTheme = {
  id: 'cnoe-light',
  title: 'CNOE Light',
  variant: 'light',
  Provider: ({ children }) =>
    createElement(UnifiedThemeProvider, { theme: lightTheme, children }),
};

export const cnoeVibrantDarkAppTheme: AppTheme = {
  id: 'cnoe-dark',
  title: 'CNOE Dark',
  variant: 'dark',
  Provider: ({ children }) =>
    createElement(UnifiedThemeProvider, { theme: darkTheme, children }),
};
