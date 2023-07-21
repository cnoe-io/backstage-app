import { ApacheSparkClient } from './index';
import { ApacheSpark } from './model';

const mockKubernetesApi = {
  proxy: jest.fn(),
  getClusters: jest.fn(),
  getObjectsByEntity: jest.fn(),
  getWorkloadsByEntity: jest.fn(),
  getCustomObjectsByEntity: jest.fn(),
};

describe('ApacheSparkClient', () => {
  let apacheSparkClient: ApacheSparkClient;

  beforeEach(() => {
    apacheSparkClient = new ApacheSparkClient(mockKubernetesApi);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch Spark application logs', async () => {
    mockKubernetesApi.proxy.mockResolvedValue({
      ok: true,
      text: () => {
        return 'logs';
      },
    });
    const logs = await apacheSparkClient.getLogs(
      'cluster1',
      'spark-namespace',
      'spark-pod-name',
      'abc',
    );
    expect(logs).toEqual('logs');
    expect(mockKubernetesApi.proxy).toHaveBeenCalledWith({
      clusterName: 'cluster1',
      path: '/api/v1/namespaces/spark-namespace/pods/spark-pod-name/log?tailLines=1000&container=abc',
    });
  });

  it('should throw error if Spark application logs are not fetched', async () => {
    mockKubernetesApi.proxy.mockResolvedValueOnce({
      status: 500,
      statusText: 'Internal Server Error',
      ok: false,
      text: () => {
        return 'oh noes';
      },
    });

    await expect(
      apacheSparkClient.getLogs(
        'spark-app-name',
        'spark-namespace',
        'spark-pod-name',
        'abc',
      ),
    ).rejects.toEqual(
      'failed to fetch logs: 500, Internal Server Error, oh noes',
    );
  });

  // test getSparkApp method
  it('should fetch Spark application', async () => {
    // @ts-ignore
    const mockResponse: ApacheSpark = {
      apiVersion: 'sparkoperator.k8s.io/v1beta2',
      kind: 'SparkApplication',
      metadata: {
        name: 'spark-app-name',
        namespace: 'spark-namespace',
        labels: {
          app: 'spark-app-name',
        },
        creationTimestamp: '2021-01-01T00:00:00Z',
      },
      spec: {
        image: 'abc',
        mainApplicationFile: 'main.py',
        mode: 'cluster',
        sparkVersion: 'v3.1.1.',
        type: 'Python',
        driver: {
          cores: 1,
        },
        executor: {
          cores: 1,
        },
      },
      status: {
        applicationState: {
          state: 'RUNNING',
        },
      },
    };

    mockKubernetesApi.proxy.mockResolvedValue({
      ok: true,
      text: () => {
        return JSON.stringify(mockResponse);
      },
    });

    const application = await apacheSparkClient.getSparkApp(
      'spark-app-name',
      'spark-namespace',
      'abc',
    );
    expect(application).toEqual(mockResponse);
  });
});
