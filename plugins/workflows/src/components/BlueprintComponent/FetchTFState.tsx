import React from 'react';
import { Table, TableColumn, Progress } from '@backstage/core-components';
import Alert from '@material-ui/lab/Alert';
import useAsync from 'react-use/lib/useAsync';

import {
  DiscoveryApi,
  discoveryApiRef,
  useApi,
} from '@backstage/core-plugin-api';
// eslint-disable-next-line no-restricted-imports
import {gunzipSync} from "zlib";

type TFState = {
  terraform_version: string
  resources: {
    name: string
    provider: string
    type: string
    instances: {
      attributes: {
        arn: string
        id: string
      }
    }[]
  }[]
}

type Resource = {
  name: string
  provider: string
  type: string
  arn?: string
  id?: string
}

type TFTableProps = {
  resources: Resource[]
}

export const TFTable = (props: TFTableProps) => {

  const columns: TableColumn[] = [
    { title: 'Name', field: 'name' },
    { title: 'Provider', field: 'provider' },
    { title: 'Type', field: 'type' },
    { title: 'Arn', field: 'arn' },
    { title: 'ID', field: 'id' },
  ];

  return (
      <Table
          title="Resources provisioned by Terraform"
          options={{ search: true, paging: false }}
          columns={columns}
          data={props.resources}
      />
  );
}

export const FetchTFState = () => {
  const discoveryApi = useApi(discoveryApiRef);
  const { value, loading, error } = useAsync((): Promise<TFState> => {
    return getTFState("tfstate-default-helloworld", "flux-system", discoveryApi)
  } )
  if (loading) {
    return <Progress />
  } else if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  // const a = await getTFState("tfstate-default-helloworld", "flux-system", discoveryApi)
  // const tfdata = tfstate as TFState
  const resources =  value!.resources.map(val => {
    const out: Resource = {
      name: val.name,
      provider: val.provider,
      type: val.type,
    }
    if (val.instances.length > 0) {
      out.arn = val.instances[0].attributes.arn
      out.id = val.instances[0].attributes.id
    }
    return out
  })

  return <TFTable resources={resources}/>

  // const { value, loading, error } = useAsync(async (): Promise<User[]> => {
  //   const response = await fetch('https://randomuser.me/api/?results=20');
  //   const data = await response.json();
  //   return data.results;
  // }, []);
  //
  // if (loading) {
  //   return <Progress />;
  // } else if (error) {
  //   return <Alert severity="error">{error.message}</Alert>;
  // }
  //
  // return <DenseTable users={value || []} />;
};


type payload = {
  kind: string
  apiVersion: string
  metadata: {
    annotations: {
      [key: string]: string
    }
  }
  type: string
  data: {
    tfstate: string
  }
}

async function getTFState(name: string, namespace: string, discoveryApi: DiscoveryApi): Promise<TFState> {
  const kubernetesBaseUrl = await discoveryApi.getBaseUrl('kubernetes');
  const kubernetesProxyEndpoint = `${kubernetesBaseUrl}/proxy`;
  return new Promise(async (resolve, reject) => {
    const resp = await fetch(`${kubernetesProxyEndpoint}/api/v1/namespaces/${namespace}/secrets/${name}`, {
      method: 'GET',
      headers: {
        'X-Kubernetes-Cluster': "canoe-packaging",
        Authorization: `Bearer TOKEN`,
      },
    });
    if (resp.ok) {
      const payload = await resp.json() as payload
      const data = Buffer.from(payload.data.tfstate, 'base64')
      let compression = "gzip"
      if ( "encoding" in payload.metadata.annotations) {
        compression = payload.metadata.annotations.encoding
      }
      if (compression === "gzip") {
        const a = gunzipSync(data).toString("utf-8")
        resolve(JSON.parse(a) as TFState)
      }
      reject(`unknown compression method specified: ${compression}`)
    } else {
      reject(`Failed to retrieve terraform information: ${resp.status}: ${resp.statusText} `)
    }
  })
}


