import { useApi } from '@backstage/core-plugin-api';
import { apacheSparkApiRef } from '../../api';
import useAsync from 'react-use/lib/useAsync';
import { ApacheSpark } from '../../api/model';
import {
  LogViewer,
  Progress,
  Select,
  SelectedItems,
  SelectItem,
} from '@backstage/core-components';
import Alert from '@material-ui/lab/Alert';
import React, { useEffect, useState } from 'react';

export const ApacheSparkDriverLogs = (props: { sparkApp: ApacheSpark }) => {
  const apiClient = useApi(apacheSparkApiRef);

  const { value, loading, error } = useAsync(async (): Promise<string> => {
    return await apiClient.getLogs(
      'cnoe-packaging-2',
      'default',
      props.sparkApp.status.driverInfo.podName,
      'spark-kubernetes-driver',
    );
  }, [props]);
  if (loading) {
    return <Progress />;
  } else if (error) {
    return <Alert severity="error">{`${error}`}</Alert>;
  }
  return <LogViewer text={value!} />;
};

const ExecutorLogs = (props: { name: string }) => {
  const apiClient = useApi(apacheSparkApiRef);
  const [logs, setLogs] = useState('');
  useEffect(() => {
    async function getLogs() {
      try {
        const val = await apiClient.getLogs(
          'cnoe-packaging-2',
          'default',
          props.name,
          'spark-kubernetes-executor',
        );
        setLogs(val);
      } catch (e) {
        if (typeof e === 'string') {
          setLogs(e);
        }
      }
    }
    if (props.name !== '') {
      getLogs();
    }
  }, [apiClient, props]);

  return <LogViewer text={logs!} />;
};

export const ApacheSparkExecutorLogs = (props: { sparkApp: ApacheSpark }) => {
  const [selected, setSelected] = useState('');
  if (props.sparkApp.status.applicationState.state !== 'RUNNING') {
    return (
      <Alert severity="info">
        Executor logs are only available for Spark Applications in RUNNING state
      </Alert>
    );
  }
  const executors: SelectItem[] = [{ label: '', value: '' }];
  for (const key in props.sparkApp.status.executorState) {
    if (props.sparkApp.status.executorState.hasOwnProperty(key)) {
      executors.push({ label: key, value: key });
    }
  }

  const handleChange = (item: SelectedItems) => {
    if (typeof item === 'string' && item !== '') {
      setSelected(item);
    }
  };
  return (
    <>
      <Select
        placeholder="Select One"
        label="Select a executor"
        items={executors}
        onChange={handleChange}
      />
      <ExecutorLogs name={selected} key={selected} />
    </>
  );
};
