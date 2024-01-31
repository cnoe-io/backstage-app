import React from 'react';
import { render, screen } from '@testing-library/react';
import { useApi } from '@backstage/core-plugin-api';
import { useEntity } from '@backstage/plugin-catalog-react';
import useAsync from 'react-use/lib/useAsync';
import { ApacheSpark } from '../../api/model';
import { ApacheSparkDriverLogs } from './ApacheSparkLogs';
import {
  APACHE_SPARK_LABEL_SELECTOR_ANNOTATION,
  CLUSTER_NAME_ANNOTATION,
  K8S_NAMESPACE_ANNOTATION,
} from '../../consts';

jest.mock('@backstage/core-plugin-api');
jest.mock('react-use/lib/useAsync');
jest.mock('@backstage/plugin-catalog-react');

jest.mock('@backstage/core-components', () => ({
  LogViewer: (props: { text: string }) => {
    return <div>{props.text}</div>;
  },
}));

describe('ApacheSparkDriverLogs', () => {
  const mockUseApi = useApi as jest.MockedFunction<typeof useApi>;
  const mockUseAsync = useAsync as jest.MockedFunction<typeof useAsync>;
  const mockUseEntity = useEntity as jest.MockedFunction<typeof useEntity>;
  const mockGetLogs = jest.fn();
  const mockSparkApp = {
    status: {
      driverInfo: {
        podName: 'test-pod',
      },
    },
  } as ApacheSpark;

  beforeEach(() => {
    mockUseApi.mockReturnValue({
      getLogs: mockGetLogs,
    });
    mockUseEntity.mockReturnValue({
      entity: {
        apiVersion: 'version',
        kind: 'kind',
        metadata: {
          name: 'name',
          namespace: 'ns1',
          annotations: {
            [K8S_NAMESPACE_ANNOTATION]: 'k8s-ns',
            [CLUSTER_NAME_ANNOTATION]: 'my-cluster',
            [APACHE_SPARK_LABEL_SELECTOR_ANNOTATION]: 'env=test',
          },
        },
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render error message if there is an error', () => {
    mockUseAsync.mockReturnValue({
      value: undefined,
      loading: false,
      error: new Error('Test error'),
    });

    render(<ApacheSparkDriverLogs sparkApp={mockSparkApp} />);
    expect(screen.getByText('Error: Test error')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('should render the log viewer with the fetched logs', async () => {
    mockUseAsync.mockReturnValue({
      value: 'test logs',
      loading: false,
      error: undefined,
    });
    render(<ApacheSparkDriverLogs sparkApp={mockSparkApp} />);
    expect(screen.getByText('test logs')).toBeInTheDocument();
  });
});
