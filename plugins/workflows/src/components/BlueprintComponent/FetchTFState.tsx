import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableColumn, Progress } from '@backstage/core-components';
import {tfstate} from "./terraform"
import Alert from '@material-ui/lab/Alert';
import useAsync from 'react-use/lib/useAsync';

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

  const tfdata = tfstate as TFState
  const resources =  tfdata.resources.map(value => {
    const out: Resource = {
      name: value.name,
      provider: value.provider,
      type: value.type,
    }
    if (value.instances.length > 0) {
      out.arn = value.instances[0].attributes.arn
      out.id = value.instances[0].attributes.id
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
