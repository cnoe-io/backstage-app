
import React from 'react';
import {Header, HeaderLabel, Page, Content, ContentHeader, SupportButton} from "@backstage/core-components";
import {Grid} from "@material-ui/core";
import {VersionComponent} from "../Version/Version";


export const OverviewComponent = () => (
    <Page themeId="tool">
        <Header title="Argo Workflows" subtitle="Workflows overview">
            <HeaderLabel label="Lifecycle" value="Alpha" />
        </Header>
        <Content>
            <ContentHeader title="Overview">
                <SupportButton>
                    Overview of your Argo Workflows
                </SupportButton>
            </ContentHeader>
        <Grid item>
            <VersionComponent />
        </Grid>
        </Content>
    </Page>
)
