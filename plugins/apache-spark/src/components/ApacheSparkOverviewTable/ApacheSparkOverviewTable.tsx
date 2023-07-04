import {
  Progress,
  StatusError,
  StatusOK,
  StatusPending,
  StatusRunning,
  Table,
  TableColumn,
} from '@backstage/core-components';
import { useEntity } from '@backstage/plugin-catalog-react';
import { useApi } from '@backstage/core-plugin-api';
import { apacheSparkApiRef } from '../../api';
import React, { useEffect, useState } from 'react';
import { getAnnotationValues } from '../utils';
import useAsync from 'react-use/lib/useAsync';
import { ApacheSpark, ApacheSparkList } from '../../api/model';
import Alert from '@material-ui/lab/Alert';
import { createStyles, Drawer, makeStyles, Theme } from '@material-ui/core';
import { DrawerContent } from '../DetailedDrawer/DetailedDrawer';

type TableData = {
  id: string;
  name: string;
  namespace: string;
  applicationState?: string;
  startedAt?: string;
  finishedAt?: string;
  raw: ApacheSpark;
};

const columns: TableColumn[] = [
  {
    title: 'Name',
    field: 'name',
  },
  { title: 'Namespace', field: 'namespace', type: 'string' },
  {
    title: 'Application State',
    field: 'applicationState',
  },
  {
    title: 'StartTime',
    field: 'startedAt',
    type: 'datetime',
    defaultSort: 'desc',
  },
  { title: 'EndTime', field: 'finishedAt', type: 'datetime' },
];

const useDrawerStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: '50%',
      justifyContent: 'space-between',
      padding: theme.spacing(2.5),
    },
  }),
);

export const ApacheSparkOverviewTable = () => {
  // const { entity } = useEntity();
  const apiClient = useApi(apacheSparkApiRef);
  const [columnData, setColumnData] = useState([] as TableData[]);
  const [isOpen, toggleDrawer] = useState(false);
  const [drawerData, setDrawerData] = useState({} as ApacheSpark);
  const classes = useDrawerStyles();
  // const { ns, clusterName, labelSelector } = getAnnotationValues(entity);

  const { value, loading, error } = useAsync(
    async (): Promise<ApacheSparkList> => {
      return await apiClient.getSparkApps(
        'cnoe-packaging-2',
        'default',
        undefined,
      );
    },
  );

  useEffect(() => {
    const data = value?.items?.map(val => {
      let state = {};
      switch (val.status?.applicationState.state) {
        case 'RUNNING':
          state = <StatusRunning>Running</StatusRunning>;
          break;
        case 'COMPLETED':
          state = <StatusOK>COMPLETED</StatusOK>;
          break;
        case 'FAILED':
          state = <StatusError>FAILED</StatusError>;
          break;
        default:
          state = (
            <StatusPending>
              '${val.status.applicationState.state}'
            </StatusPending>
          );
          break;
      }
      return {
        id: `${val.metadata.namespace}/${val.metadata.name}`,
        raw: val,
        name: val.metadata.name,
        namespace: val.metadata.namespace,
        applicationState: state,
        startedAt: val.metadata.creationTimestamp,
        finishedAt: val.status?.terminationTime,
      } as TableData;
    });
    if (data && data.length > 0) {
      setColumnData(data);
    }
  }, [value]);
  if (loading) {
    return <Progress />;
  } else if (error) {
    return <Alert severity="error">{`${error}`}</Alert>;
  }

  return (
    <>
      <Table
        options={{
          padding: 'dense',
          paging: true,
          search: true,
          sorting: true,
        }}
        onRowClick={(_event, rowData: TableData | undefined) => {
          setDrawerData(rowData?.raw!);
          toggleDrawer(true);
        }}
        columns={columns}
        data={columnData}
      />
      <Drawer
        classes={{
          paper: classes.paper,
        }}
        anchor="right"
        open={isOpen}
        onClose={() => toggleDrawer(false)}
      >
        <DrawerContent toggleDrawer={toggleDrawer} apacheSpark={drawerData} />
      </Drawer>
    </>
  );
};
