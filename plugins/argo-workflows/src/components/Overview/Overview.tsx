
import React from 'react';
import {Header, HeaderLabel, Page, Content, ContentHeader, SupportButton} from "@backstage/core-components";
import {Grid} from "@material-ui/core";
import {WorkflowOverviewComponent} from "../WorkflowOverview/WorkflowOverview";


export const OverviewComponent = () => (
    <Page themeId="tool">
        <Header title="Argo Workflows">
            <HeaderLabel label="Lifecycle" value="Alpha" />
        </Header>
        <Content>
            <ContentHeader title="Overview">
                <SupportButton>
                    Overview of your Argo Workflows
                </SupportButton>
            </ContentHeader>
        <Grid item>
            <WorkflowOverviewComponent />
        </Grid>
        </Content>
    </Page>
)
