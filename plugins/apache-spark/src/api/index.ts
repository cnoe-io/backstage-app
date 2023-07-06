import { createApiRef } from '@backstage/core-plugin-api';
import { ApacheSpark, ApacheSparkList, Pod } from './model';
import { KubernetesApi } from '@backstage/plugin-kubernetes';

export const apacheSparkApiRef = createApiRef<ApacheSparkApi>({
  id: 'plugin.apachespark',
});

const API_VERSION = 'sparkoperator.k8s.io/v1beta2';
const SPARK_APP_PLURAL = 'sparkapplications';
const K8s_API_TIMEOUT = 'timeoutSeconds';

export interface ApacheSparkApi {
  getSparkApps(
    clusterName: string | undefined,
    namespace: string | undefined,
    labels: string | undefined,
  ): Promise<ApacheSparkList>;

  getSparkApp(
    clusterName: string | undefined,
    namespace: string | undefined,
    name: string,
  ): Promise<ApacheSpark>;

  getLogs(
    clusterName: string | undefined,
    namespace: string | undefined,
    podName: string,
    containerName?: string | undefined,
    tailLine?: number,
  ): Promise<string>;

  getContainers(
    clusterName: string | undefined,
    namespace: string | undefined,
    podName: string,
  ): Promise<string[]>;
}

export class ApacheSparkClient implements ApacheSparkApi {
  private kubernetesApi: KubernetesApi;
  constructor(kubernetesApi: KubernetesApi) {
    this.kubernetesApi = kubernetesApi;
  }
  async getSparkApps(
    clusterName: string | undefined,
    namespace: string | undefined,
    labels: string,
  ): Promise<ApacheSparkList> {
    const ns = namespace !== undefined ? namespace : 'default';
    const path = `/apis/${API_VERSION}/namespaces/${ns}/${SPARK_APP_PLURAL}`;
    const query = new URLSearchParams({
      [K8s_API_TIMEOUT]: '30',
      // labelSelector: labels,
    });
    const resp = await this.kubernetesApi.proxy({
      clusterName:
        clusterName !== undefined ? clusterName : await this.getFirstCluster(),
      path: `${path}?${query.toString()}`,
    });

    if (!resp.ok) {
      return Promise.reject(
        `failed to fetch resources: ${resp.status}, ${
          resp.statusText
        }, ${await resp.text()}`,
      );
    }
    const out = JSON.parse(await resp.text());
    this.removeManagedField(out);
    return out;
  }

  async getSparkApp(
    clusterName: string | undefined,
    namespace: string | undefined,
    name: string,
  ): Promise<ApacheSpark> {
    const ns = namespace !== undefined ? namespace : 'default';
    const path = `/apis/${API_VERSION}/namespaces/${ns}/${SPARK_APP_PLURAL}/${name}`;
    const resp = await this.kubernetesApi.proxy({
      clusterName:
        clusterName !== undefined ? clusterName : await this.getFirstCluster(),
      path: `${path}`,
    });
    if (!resp.ok) {
      return Promise.reject(
        `failed to fetch resources: ${resp.status}, ${
          resp.statusText
        }, ${await resp.text()}`,
      );
    }
    const out = JSON.parse(await resp.text());
    this.removeManagedField(out);
    return out;
  }

  async getLogs(
    clusterName: string | undefined,
    namespace: string | undefined,
    podName: string,
    containerName: string | undefined,
    tailLine: number = 1000,
  ): Promise<string> {
    const ns = namespace !== undefined ? namespace : 'default';
    const path = `/api/v1/namespaces/${ns}/pods/${podName}/log`;
    const query = new URLSearchParams({
      tailLines: tailLine.toString(),
    });
    if (containerName) {
      query.set('container', containerName);
    }

    const resp = await this.kubernetesApi.proxy({
      clusterName:
        clusterName !== undefined ? clusterName : await this.getFirstCluster(),
      path: `${path}?${query.toString()}`,
    });
    if (!resp.ok) {
      return Promise.reject(
        `failed to fetch logs: ${resp.status}, ${
          resp.statusText
        }, ${await resp.text()}`,
      );
    }
    return resp.text();
  }

  async getContainers(
    clusterName: string | undefined,
    namespace: string | undefined,
    podName: string,
  ): Promise<string[]> {
    const ns = namespace !== undefined ? namespace : 'default';
    const path = `/api/v1/namespaces/${ns}/pods/${podName}`;
    const query = new URLSearchParams({
      [K8s_API_TIMEOUT]: '30',
    });
    const resp = await this.kubernetesApi.proxy({
      clusterName:
        clusterName !== undefined ? clusterName : await this.getFirstCluster(),
      path: `${path}?${query.toString()}`,
    });
    if (!resp.ok) {
      throw new Error(
        `failed to fetch logs: ${resp.status}, ${
          resp.statusText
        }, ${await resp.text()}`,
      );
    }
    const pod = JSON.parse(await resp.text()) as Pod;
    return pod.spec.containers.map(c => c.name);
  }

  async getFirstCluster(): Promise<string> {
    const clusters = await this.kubernetesApi.getClusters();
    if (clusters.length > 0) {
      return Promise.resolve(clusters[0].name);
    }
    return Promise.reject('no clusters found in configuration');
  }

  removeManagedField(spark: any) {
    if (spark.metadata?.hasOwnProperty('managedFields')) {
      delete spark.metadata.managedFields;
    }
    if (spark.items) {
      for (const i of spark.items) {
        this.removeManagedField(i);
      }
    }
  }
}
