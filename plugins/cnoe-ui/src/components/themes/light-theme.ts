import {createTheme, lightTheme, genPageTheme, shapes} from '@backstage/theme';

export const cnoeLightTheme = createTheme({
  palette: {
    ...lightTheme.palette,
    primary: {
      main: '#00568c',
    },
    secondary: {
      main: '#00adee',
    },
  },
  defaultPageTheme: 'home',
  pageTheme: {
    home: genPageTheme({colors: ['#00568c', '#00adee'], shape: shapes.wave}),
    documentation: genPageTheme({
      colors: ['#00568c', '#00adee'],
      shape: shapes.wave2,
    }),
    tool: genPageTheme({colors: ['#00568c', '#00adee'], shape: shapes.round}),
    service: genPageTheme({
      colors: ['#00568c', '#00adee'],
      shape: shapes.wave,
    }),
    website: genPageTheme({
      colors: ['#00568c', '#00adee'],
      shape: shapes.wave,
    }),
    library: genPageTheme({
      colors: ['#00568c', '#00adee'],
      shape: shapes.wave,
    }),
    other: genPageTheme({colors: ['#00568c', '#00adee'], shape: shapes.wave}),
    app: genPageTheme({colors: ['#00568c', '#00adee'], shape: shapes.wave}),
    apis: genPageTheme({colors: ['#00568c', '#00adee'], shape: shapes.wave}),
  },
});


