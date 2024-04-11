/**
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react";
import { Box, Grid, LinearProgress, Typography, Link, makeStyles } from "@material-ui/core";
import { useEntity } from "@backstage/plugin-catalog-react";
import { useSecurityHubFindings } from "../../hooks/useSecurityHubFindings";
import { Entity, stringifyEntityRef } from "@backstage/catalog-model";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { InfoCard, ResponseErrorPanel } from "@backstage/core-components";
import { AwsSecurityFinding } from "@aws-sdk/client-securityhub";
import { Table } from "@backstage/core-components";

const useStyles = makeStyles(() => ({
  severityInformational: {
    color: '#879596'
  },
  severityCritical: {
    color: '#7d2105'
  },
  severityHigh: {
    color: '#ba2e0f'
  },
  severityMedium: {
    color: '#cc5f21'
  },
  severityLow: {
    color: '#b49116'
  },
  mainTitle: {
    paddingBottom: '15px'
  }
}));

const generateChartData = (data: AwsSecurityFinding[], retriever: (f: AwsSecurityFinding) => string) => {
  var obj: Record<string,number> = {};

  let aggregate = data.reduce((previousValue, currentValue) => {
    let fieldValue = retriever(currentValue);

    if(!(fieldValue in previousValue)) {
      previousValue[fieldValue] = 1;
    }
    else {
      previousValue[fieldValue]++;
    }

    return previousValue;
  }, obj);

  return Object.keys(aggregate).map((key) => {return {name: key, value: obj[key]}});
};

const SummaryChart = ({
  data,
  title,
  retriever
}: {
  data: AwsSecurityFinding[];
  title: string;
  retriever: (f: AwsSecurityFinding) => string;
}) => {
  return (<InfoCard title={title} titleTypographyProps={{variant: 'h6'}} noPadding>
    <ResponsiveContainer width = '95%' height={200} >
        <PieChart>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={generateChartData(data, retriever)}
            cx="50%"
            cy="50%"
            outerRadius={80}
            innerRadius={40}
            fill="#8884d8"
          >
            <Cell key={`cell-1`} fill={'#0088FE'} />
            <Cell key={`cell-2`} fill={'#00C49F'} />
            <Cell key={`cell-3`} fill={'#FFBB28'} />
            <Cell key={`cell-4`} fill={'#FF8042'} />
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
  </InfoCard>)
};

const generatedColumns = () => {
  const classes = useStyles();

  return [
    {
      title: "Severity",
      field: "AwsAccountId",

      render: (row: Partial<AwsSecurityFinding>) => {
        let severity = row.Severity?.Original!;
        let className = classes.severityInformational;
        
        switch(severity) {
          case "CRITICAL":
            className = classes.severityCritical;
            break;
          case "HIGH":
            className = classes.severityHigh;
            break;
          case "MEDIUM":
            className = classes.severityMedium;
            break;
          case "LOW":
            className = classes.severityLow;
            break;
        }

        return (<div className={className}>{severity}</div>);
      }
    },
    {
      title: "Title",
      field: "Pipeline",

      render: (row: Partial<AwsSecurityFinding>) => {
        return (
          <>
            <Link
              href={`https://console.aws.amazon.com/codesuite/codepipeline/pipelines/`}
              target="_blank"
            >
              {row.Title!}
            </Link>
          </>
        );
        }
    },
    {
      title: "Region",
      field: "Region"
    },
    {
      title: "Account ID",
      field: "AwsAccountId"
    },
  ];
};

const AWSSecurityHubContent = ({
    entity,
  }: {
    entity: Entity;
  }) => {
  let columns = generatedColumns();
  let [findingsData] = useSecurityHubFindings({entityRef: stringifyEntityRef(entity)});

  if(!findingsData.findings) {
    return(<div>
      {findingsData.error && <ResponseErrorPanel error={findingsData.error} />}

      {findingsData.loading && <LinearProgress />}
    </div>);
  }

  return (
    <div>
      <Grid container>
        <Grid item md={4}>
          <SummaryChart data={findingsData.findings} title='Severity' retriever={(e) => e.Severity!.Original!}/>
        </Grid>
        <Grid item md={4}>
          <SummaryChart data={findingsData.findings} title='AWS Account' retriever={(e) => e.AwsAccountId!}/>
        </Grid>
        <Grid item md={4}>
          <SummaryChart data={findingsData.findings} title='AWS Region' retriever={(e) => e.Region!}/>
        </Grid>
        <Grid item md={12}>
          <Table
            data={findingsData.findings ?? []}
            title={
              <Box display="flex" alignItems="center">
                <Box mr={2} />
                <Typography variant="h6">Findings</Typography>
              </Box>
            }
            columns={columns}
          />
        </Grid>
      </Grid>
      
    </div>
  );
};

export const AWSSecurityHubPage = () => {
  const { entity } = useEntity();
  const classes = useStyles();

  return(
    <Box sx={{ m: 2 }}>
      <Typography variant="h4" className={classes.mainTitle}>AWS Security Hub</Typography>
      <AWSSecurityHubContent entity={entity} />
    </Box>);
};