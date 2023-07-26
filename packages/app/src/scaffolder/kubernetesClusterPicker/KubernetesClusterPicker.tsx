import React, { useCallback, useMemo } from 'react';
import FormControl from '@material-ui/core/FormControl';
import { useApi } from '@backstage/core-plugin-api';
import {
  kubernetesApiRef,
  kubernetesAuthProvidersApiRef,
} from '@backstage/plugin-kubernetes';
import { FormHelperText } from '@material-ui/core';
import { Progress, Select } from '@backstage/core-components';
import useAsync from 'react-use/lib/useAsync';
import { useTemplateSecrets } from '@backstage/plugin-scaffolder-react';
import { ClusterPickerProps } from './schema';

export const KubernetesClusterPicker = (props: ClusterPickerProps) => {
  const k8sApi = useApi(kubernetesApiRef);
  const k8sAuthApi = useApi(kubernetesAuthProvidersApiRef);
  const { setSecrets } = useTemplateSecrets();
  const { uiSchema, required, onChange } = props;
  const { rawErrors } = props ?? [];
  const allowedClusters = useMemo(
    () => uiSchema?.['ui:options']?.allowedClusters ?? [],
    [uiSchema],
  );

  const getToken = useCallback(
    async (clusterName: string) => {
      const { requestUserCredentials } = uiSchema?.['ui:options'] ?? {};
      if (!requestUserCredentials) {
        return;
      }
      const cs = await k8sApi.getClusters();
      const cluster = cs.find(c => {
        return c.name === clusterName;
      });
      const { token } = await k8sAuthApi.getCredentials(cluster?.authProvider!);
      if (token === undefined) {
        return;
      }
      setSecrets({ [requestUserCredentials.secretKey]: token });
    },
    [k8sApi, k8sAuthApi, setSecrets, uiSchema],
  );

  const { value: { clusters } = { clusters: [] }, loading } = useAsync(
    async () => {
      const c = await k8sApi.getClusters();
      const filteredClusters = c
        .filter(i => {
          if (allowedClusters.length === 0) {
            return true;
          }
          return allowedClusters.includes(i.name);
        })
        .map(i => ({ label: i.name, value: i.name }));
      if (filteredClusters.length) {
        await getToken(filteredClusters[0].value);
        onChange(filteredClusters[0].value);
      }
      return {
        clusters: filteredClusters,
      };
    },
  );

  if (loading) {
    return <Progress />;
  }

  return (
    <FormControl
      margin="normal"
      required={required}
      error={rawErrors?.length > 0}
    >
      <Select
        native
        label="Cluster"
        items={clusters}
        onChange={e => {
          onChange(e.toString());
          getToken(e.toString());
        }}
      />
      <FormHelperText>Kubernetes Cluster Name</FormHelperText>
    </FormControl>
  );
};
