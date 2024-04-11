import {
  ConfigServiceClient,
  SelectAggregateResourceConfigCommand,
  type SelectAggregateResourceConfigCommandOutput,
} from '@aws-sdk/client-config-service';

const ALL_ACCOUNT_RESOURCES = 'AllAccountResources';

class AWSConfigQuery {
  query: string;
  client: ConfigServiceClient;
  aggregator: string;

  constructor(
    query: string,
    aggregator?: string,
    client?: ConfigServiceClient,
  ) {
    this.query = query;
    this.aggregator = aggregator ?? ALL_ACCOUNT_RESOURCES;
    this.client = client ?? new ConfigServiceClient({});
  }

  parseResponse(response: SelectAggregateResourceConfigCommandOutput): any[] {
    return response.Results?.map(result => JSON.parse(result)) ?? [];
  }

  async getMatchingResources(pageSize: number = 100): Promise<any> {
    const selectCommand = new SelectAggregateResourceConfigCommand({
      Expression: this.query,
      ConfigurationAggregatorName: this.aggregator,
      Limit: pageSize,
    });
    let response = await this.client.send(selectCommand);
    let resources = this.parseResponse(response);
    while (response.NextToken != null) {
      selectCommand.input.NextToken = response.NextToken;
      response = await this.client.send(selectCommand);
      resources = [...resources, ...this.parseResponse(response)];
    }
    return resources;
  }
}

export default AWSConfigQuery;
