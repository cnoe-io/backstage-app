import { Content, Page } from '@backstage/core-components';
import { HomePageSearchBar } from '@backstage/plugin-search';
import { SearchContextProvider } from '@backstage/plugin-search-react';
import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';

import {
  HomePageToolkit,
  HomePageCompanyLogo,
  HomePageStarredEntities,
  TemplateBackstageLogoIcon,
} from '@backstage/plugin-home';

import {
  LogoBig,
} from './logos';

const useStyles = makeStyles(theme => ({
  searchBar: {
    display: 'flex',
    maxWidth: '60vw',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
    padding: '8px 0',
    borderRadius: '50px',
    margin: 'auto',
  },
}));

const useLogoStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(5, 0),
  },
  svg: {
    width: 'auto',
    height: 100,
  },
  path: {
    fill: '#00568c',
  },
}));

export const CNOEHomepage = () => {
  const classes = useStyles();
  const { container } = useLogoStyles();

  return (
    <SearchContextProvider>
      <Page themeId="home">
        <Content>
          <Grid container justifyContent="center" spacing={6}>
            <HomePageCompanyLogo className={container} logo={<LogoBig />} />
            <Grid container item xs={12} alignItems="center" direction="row">
              <HomePageSearchBar classes={{ root: classes.searchBar }} placeholder="Search" />
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={12} md={6}>
                <HomePageStarredEntities />
              </Grid>
              <Grid item xs={12} md={6}>
                <HomePageToolkit
                  title="Quick Links"
                  tools={[
                    {
                      url: '/catalog',
                      label: 'Catalog',
                      icon: <TemplateBackstageLogoIcon/>,
                    },
                    {
                      url: '/docs',
                      label: 'Tech Docs',
                      icon: <TemplateBackstageLogoIcon />,
                    },
                  ]}
                />
              </Grid>
            </Grid>
          </Grid>
        </Content>
      </Page>
    </SearchContextProvider>
  );
};
