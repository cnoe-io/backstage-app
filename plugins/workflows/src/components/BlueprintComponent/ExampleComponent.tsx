import React from 'react';
import {Typography, Grid, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import ClearIcon from '@material-ui/icons/Clear'
import LinkOffRounded from "@material-ui/icons/LinkOffRounded";
import {
  InfoCard,
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton,
} from '@backstage/core-components';
import {FetchTFState} from "./FetchTFState";

export const BlueprintsComponent = () => (
  <Page themeId="tool">
    <Header title="Blueprint information">
      <HeaderLabel label="Owner" value="Team X" />
      <HeaderLabel label="Lifecycle" value="Alpha" />
    </Header>
    <Content>
      {/*<ContentHeader title="Blueprint information">*/}
      {/*  <SupportButton>A description of your plugin goes here.</SupportButton>*/}
      {/*</ContentHeader>*/}
      <Grid container spacing={3} direction="column">
        <Grid item>
          <InfoCard title="Blueprint management">
            <Typography color="textSecondary">
              Manage this blueprint deployment
            </Typography>
            <IconButton aria-label="delete" size="medium">
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="clear" size="medium">
              <ClearIcon />
            </IconButton>
            <IconButton aria-label="link" size="medium">
              <LinkOffRounded />
            </IconButton>
          </InfoCard>
        </Grid>
        <Grid item>
          <FetchTFState />
        </Grid>
      </Grid>
    </Content>
  </Page>
);
