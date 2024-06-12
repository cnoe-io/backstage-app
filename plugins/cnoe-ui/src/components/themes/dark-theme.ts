
import {
  genPageTheme,
  shapes,
  createUnifiedTheme,
  createBaseThemeOptions, palettes,
} from '@backstage/theme';

export const cnoeDarkTheme = createUnifiedTheme({
  ...createBaseThemeOptions({
    palette: {
      ...palettes.dark,
      primary: {
        main: '#25a0c2',
      },
      secondary: {
        main: '#00568c',
      },
    },
  }),
  defaultPageTheme: 'home',
  pageTheme: {
    home: genPageTheme({colors: ['#25a0c2', '#00568c'], shape: shapes.wave}),
    documentation: genPageTheme({
      colors: ['#25a0c2', '#00568c'],
      shape: shapes.wave2,
    }),
    tool: genPageTheme({colors: ['#25a0c2', '#00568c'], shape: shapes.round}),
    service: genPageTheme({
      colors: ['#25a0c2', '#00568c'],
      shape: shapes.wave,
    }),
    website: genPageTheme({
      colors: ['#25a0c2', '#00568c'],
      shape: shapes.wave,
    }),
    library: genPageTheme({
      colors: ['#25a0c2', '#00568c'],
      shape: shapes.wave,
    }),
    other: genPageTheme({colors: ['#25a0c2', '#00568c'], shape: shapes.wave}),
    app: genPageTheme({colors: ['#25a0c2', '#00568c'], shape: shapes.wave}),
    apis: genPageTheme({colors: ['#25a0c2', '#00568c'], shape: shapes.wave}),
  },
});
