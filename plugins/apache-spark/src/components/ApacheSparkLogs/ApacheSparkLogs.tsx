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
import { ResponseErrorPanel } from '@backstage/core-components';
import React, { useEffect, useState } from 'react';
import { useEntity } from '@backstage/plugin-catalog-react';
import { getAnnotationValues } from '../utils';

export const ApacheSparkDriverLogs = (props: { sparkApp: ApacheSpark }) => {
  const apiClient = useApi(apacheSparkApiRef);
  const { entity } = useEntity();
  const { ns, clusterName } = getAnnotationValues(entity);

  const { value, loading, error } = useAsync(async (): Promise<string> => {
    return await apiClient.getLogs(
      clusterName,
      ns,
      props.sparkApp.status.driverInfo?.podName!,
      'spark-kubernetes-driver',
    );
  }, [props]);
  if (loading) {
    return <Progress />;
  } else if (error) {
    return <ResponseErrorPanel error={error} />;
  }
  return <LogViewer text={value!} />;
};

const ExecutorLogs = (props: { name: string }) => {
  const apiClient = useApi(apacheSparkApiRef);
  const { entity } = useEntity();
  const [logs, setLogs] = useState('');
  const { ns, clusterName } = getAnnotationValues(entity);

  useEffect(() => {
    async function getLogs() {
      try {
        const val = await apiClient.getLogs(
          clusterName,
          ns,
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
  }, [apiClient, clusterName, ns, props]);

  return <LogViewer text={logs!} />;
};

export const ApacheSparkExecutorLogs = (props: { sparkApp: ApacheSpark }) => {
  const [selected, setSelected] = useState('');
  if (props.sparkApp.status.applicationState.state !== 'RUNNING') {
    return (
      <div style={{ padding: '12px 16px', background: 'rgba(77,166,255,0.1)', border: '1px solid rgba(77,166,255,0.3)', borderRadius: '8px', color: 'inherit', fontSize: '13px' }}>
        Executor logs are only available for Spark Applications in RUNNING state
      </div>
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
