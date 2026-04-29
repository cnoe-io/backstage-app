import React from 'react';
import { Page, Header, Content } from '@backstage/core-components';
import { MainPageFetchComponent } from '../MainPageFetchComponent';

export const MainPageComponent = () => (
  <Page themeId="tool">
    <Header title="Terraform" />
    <Content>
      <MainPageFetchComponent/>
    </Content>
  </Page>
);