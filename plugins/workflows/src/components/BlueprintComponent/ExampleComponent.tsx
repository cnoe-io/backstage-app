import React from 'react';
import {Grid} from '@material-ui/core';
import {
  Page,
  Content,
} from '@backstage/core-components';
import {FetchTFState, ManageBlueprint} from "./FetchTFState";

export const BlueprintsComponent = () => (
  <Page themeId="tool">
    <Content>
      {/* <ContentHeader title="Blueprint information">*/}
      {/*  <SupportButton>A description of your plugin goes here.</SupportButton>*/}
      {/* </ContentHeader>*/}
      <Grid container spacing={3} direction="column">
        <Grid item>
          <ManageBlueprint />
          {/* <InfoCard title="Blueprint management">*/}
          {/*  <Typography color="textSecondary">*/}
          {/*    Manage this blueprint deployment*/}
          {/*  </Typography>*/}
          {/*  <IconButton aria-label="delete" size="medium">*/}
          {/*    <DeleteIcon />*/}
          {/*  </IconButton>*/}
          {/*  <IconButton aria-label="clear" size="medium">*/}
          {/*    <ClearIcon />*/}
          {/*  </IconButton>*/}
          {/*  <IconButton aria-label="link" size="medium">*/}
          {/*    <LinkOffRounded />*/}
          {/*  </IconButton>*/}
          {/* </InfoCard>*/}
        </Grid>
        <Grid item>
          <FetchTFState />
        </Grid>
      </Grid>
    </Content>
  </Page>
);
