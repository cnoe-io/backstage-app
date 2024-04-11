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

import { Logger } from 'winston';
import { 
  AthenaClient, 
  GetQueryExecutionCommand, 
  StartQueryExecutionCommand,
  paginateGetQueryResults, 
} from "@aws-sdk/client-athena";
import { CatalogApi } from '@backstage/catalog-client';
import { ChangeStatistic, Cost, DateAggregation, Trendline } from '@backstage/plugin-cost-insights-common';
import { Duration, parse } from 'tinyduration';
import regression, { DataPoint } from 'regression';
import { AwsCredentialIdentityProvider } from '@aws-sdk/types';
import { Config } from '@backstage/config';
import {
  DefaultAwsCredentialsManager,
} from '@backstage/integration-aws-node';

const ENTITY_COST_QUERY = `SELECT 
DATE_FORMAT((line_item_usage_start_date),'%Y-%m-%d') AS month_line_item_usage_start_date,
SUM(line_item_unblended_cost) AS sum_line_item_unblended_cost,
resource_tags_user_component
FROM 
%TABLE%
where resource_tags_user_component = '%entity%' AND 
line_item_usage_start_date >= now() - INTERVAL '%days%' day 
GROUP BY 
1,
resource_tags_user_component
HAVING SUM(line_item_usage_amount) > 0
ORDER BY 
month_line_item_usage_start_date;`;

const ENTITY_SERVICE_COST_QUERY = `SELECT 
DATE_FORMAT((line_item_usage_start_date),'%Y-%m-%d') AS day_line_item_usage_start_date,
SUM(line_item_unblended_cost) AS sum_line_item_unblended_cost,
CASE
  WHEN (product_product_family = 'Data Transfer') THEN 'Data Transfer' 
  ELSE replace(replace(replace(product_product_name, 'Amazon '),'Amazon'),'AWS ') 
END AS product_product_name,
bill_bill_type,
SUM(line_item_usage_amount) AS sum_line_item_usage_amount
FROM 
%TABLE%
WHERE resource_tags_user_component = '%entity%' AND 
line_item_usage_start_date >= now() - INTERVAL '%days%' day 
GROUP BY 
1,
bill_bill_type,
3
HAVING SUM(line_item_usage_amount) > 0
ORDER BY 
day_line_item_usage_start_date,
bill_bill_type,
product_product_name;`;

export class AwsCostAndUsageInsightsApi {
  public constructor(
    private readonly logger: Logger,
    private readonly catalogApi: CatalogApi,
    private readonly tableName: string,
    private readonly client: AthenaClient,
    private readonly database: string,
    private readonly outputBucket: string,
  ) {
    
  }

  static async fromConfig(
    config: Config,
    catalogApi: CatalogApi,
    logger: Logger,
  ) {
    let region, accountId : string | undefined;

    const conf = config.getConfig('awsPlugins.costInsights.costAndUsageReport');

    let tableName = conf.getString('tableName');
    let database = conf.getString('database');
    let outputBucket = conf.getString('outputBucket');

    if(conf) {
      accountId = conf.getOptionalString('accountId');
      region = conf.getOptionalString('region');
    }

    const credsManager = DefaultAwsCredentialsManager.fromConfig(config);

    var credentialProvider : AwsCredentialIdentityProvider;

    if (accountId) {
      credentialProvider = (await credsManager.getCredentialProvider({ accountId }))
        .sdkCredentialProvider;
    } else {
      credentialProvider = (await credsManager.getCredentialProvider()).sdkCredentialProvider;
    }

    let client = new AthenaClient({
      region: region,
      customUserAgent: 'aws-cur-plugin-for-backstage',
      credentialDefaultProvider: () => credentialProvider
    });

    return new AwsCostAndUsageInsightsApi(logger, catalogApi, tableName, client, database, outputBucket);
  }

  private parseInterval(intervals: string): Duration {
    let parts = intervals.split('/');
    return parse(parts[1]);
  }

  public async getCatalogEntityDailyCost(catalogEntityRef: string, intervals: string): Promise<Cost> {
    this.logger.info(`Fetching cost data for entity`);

    let duration = this.parseInterval(intervals);

    const entity = await this.catalogApi.getEntityByRef(catalogEntityRef);

    if(!entity) {
      throw new Error(`Failed to load entity ${catalogEntityRef}`);
    }

    let query = ENTITY_COST_QUERY.replace('%TABLE%', this.tableName).replace('%days%', `${duration.days}`).replace('%entity%', entity.metadata.name);

    const otherQuery = ENTITY_SERVICE_COST_QUERY.replace('%TABLE%', this.tableName).replace('%days%', `${duration.days}`).replace('%entity%', entity.metadata.name);

    let entityCostsPromise = this.getAggregations(query, duration.days!, true);
    let serviceCostsPromise = await this.getAggregations(otherQuery, duration.days!, false);

    return Promise.all([entityCostsPromise, serviceCostsPromise]).then((values) => {
      let entityCost = values[0][0];
      let serviceCosts = values[1];

      if(!entityCost) {
        return {
          id: entity.metadata.name,
          aggregation: []
        }
      }

      entityCost.groupedCosts = {
        service:  serviceCosts
      };

      return entityCost;
    })
  }

  private formatDate(date: Date) : string {
    return date.getUTCFullYear() + '/'
      + ('0' + (date.getUTCMonth()+1)).slice(-2) + '/'
      + ('0' + date.getUTCDate()).slice(-2);
  }

  private async getAggregations(query: string, days: number, compute: boolean): Promise<Cost[]> {
    const queryExecutionId = await this.executeAthenaQuery(query, this.client);

    let aggregations : Record<string, DateAggregation[]> = {};

    let paginator = paginateGetQueryResults({
      client: this.client,
      pageSize: 25,
    }, {
      QueryExecutionId: queryExecutionId
    });

    let startDate = new Date();
    startDate.setUTCHours(0, 0, 0, 0);

    let workDate = new Date(startDate);
    workDate.setUTCDate(workDate.getUTCDate() - days + 1);

    let aggregationPrototype : DateAggregation[] = [];

    for(let i = 0; i < days; i++) {
      let date = new Date(workDate.getTime());
      date.setUTCDate(date.getUTCDate() + i);

      aggregationPrototype[i] = {
        date: this.formatDate(date),
        amount: 0
      }
    }

    for await (const page of paginator) {
      if(page.ResultSet!.Rows) {
        let rows = page.ResultSet!.Rows;
  
        if(rows.length > 1) {
          for(let i = 1; i < rows.length; i++) {
            let row = rows[i];
  
            let rowDate = row.Data![0].VarCharValue!;
            let rowCost = row.Data![1].VarCharValue!;
            let id = row.Data![2].VarCharValue!;

            if(!aggregations[id]) {
              aggregations[id] = JSON.parse(JSON.stringify(aggregationPrototype));
            }

            let days_index = (new Date(rowDate).getTime() - startDate.getTime()) / (1000 * 3600 * 24);

            try {
              console.log(`Diff of ${new Date(rowDate).toUTCString()} and ${startDate.toUTCString()} is ${days_index} which is ${aggregationPrototype[days + days_index - 1].date}`);
              aggregations[id][days + days_index - 1].amount = parseFloat(rowCost);
            } catch(ex) {
              console.warn(`Error calculating aggregation: `, ex);
              console.log(`Diff of ${new Date(rowDate).toUTCString()} and ${startDate.toUTCString()} is ${days_index}`);
              console.log(`Date index: ${days + days_index - 1}`);
              console.log(`Aggregation prototype: `, JSON.stringify(aggregationPrototype, null, 4));
            }
          }
        }
      }
    }

    return Promise.resolve(Object.entries(aggregations).map(([k, v]) => {
      return {
        id: k,
        aggregation: v,
        change: compute ? this.changeOf(v) : undefined,
        trendline: compute ? this.trendlineOf(v) : undefined
      } as Cost
    }));
  }

  private async executeAthenaQuery(query: string, client: AthenaClient): Promise<string> {
    this.logger.debug(`Running Athena query: ${query}`);

    const response = await client.send(new StartQueryExecutionCommand({
      QueryString: query,
      QueryExecutionContext: {
        Database: this.database
      },
      ResultConfiguration: {
        OutputLocation: `s3://${this.outputBucket}/`
      }
    }));

    while(true) {
      let queryStatusResponse = await client.send(new GetQueryExecutionCommand({
        QueryExecutionId: response.QueryExecutionId
      }));

      if(['QUEUED', 'RUNNING'].indexOf(queryStatusResponse.QueryExecution?.Status?.State!) === -1) {
        break;
      }
    }

    return Promise.resolve(response.QueryExecutionId!);
  }

  private changeOf(aggregation: DateAggregation[]): ChangeStatistic {
    const firstAmount = aggregation.length ? aggregation[0].amount : 0;
    const lastAmount = aggregation.length
      ? aggregation[aggregation.length - 1].amount
      : 0;
  
    // if either the first or last amounts are zero, the rate of increase/decrease is infinite
    if (!firstAmount || !lastAmount) {
      return {
        amount: lastAmount - firstAmount,
      };
    }
  
    return {
      ratio: (lastAmount - firstAmount) / firstAmount,
      amount: lastAmount - firstAmount,
    };
  }
  
  private trendlineOf(aggregation: DateAggregation[]): Trendline {
    const data: ReadonlyArray<DataPoint> = aggregation.map(a => [
      Date.parse(a.date) / 1000,
      a.amount,
    ]);
    const result = regression.linear(data, { precision: 5 });
    return {
      slope: result.equation[0],
      intercept: result.equation[1],
    };
  }
}