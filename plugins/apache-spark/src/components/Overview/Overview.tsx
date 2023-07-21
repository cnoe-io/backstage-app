import { Content, Header, HeaderLabel, Page } from '@backstage/core-components';
import { ApacheSparkOverviewTable } from '../ApacheSparkOverviewTable/ApacheSparkOverviewTable';
import React from 'react';

export const ApacheSparkOverviewPage = () => (
  <Page themeId="tool">
    <Header title="Apache Spark">
      <HeaderLabel label="Lifecycle" value="Alpha" />
    </Header>
    <Content>
      <ApacheSparkOverviewTable />
    </Content>
  </Page>
);
