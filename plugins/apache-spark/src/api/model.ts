export type Metadata = {
  name: string;
  namespace?: string;
  labels: Record<string, string>;
  annotations: Record<string, string>;
  creationTimestamp: string;
  managedFields?: any;
};

export type Spec = {
  arguments?: string[];
  batchScheduler?: string;
  driver: {
    coreLimit?: string;
    coreRequest?: string;
    cores?: number;
    gpu?: {
      name: string;
      quantity: number;
    };
    labels?: Record<string, string>;
    memory?: string;
    memoryOverhead?: string;
    podName?: string;
    schedulerName?: string;
    serviceAccount?: string;
  };
  executor: {
    coreLimit?: string;
    coreRequest?: string;
    cores?: number;
    gpu?: {
      name: string;
      quantity: number;
    };
    instances?: number;
    labels?: Record<string, string>;
    memory?: string;
    memoryOverhead?: string;
    schedulerName?: string;
    serviceAccount?: string;
  };
  image: string;
  mainClass?: string;
  mainApplicationFile?: string;
  mode: string;
  pythonVersion?: string;
  sparkVersion: string;
  type: string;
};

export type Status = {
  applicationState: {
    errorMessage: string;
    state: string;
  };
  driverInfo: {
    podName: string;
    webUIAddress: string;
    webUIIngressAddress: string;
    webUIIngressName: string;
    webUIPort: string;
    webUIServiceName: string;
  };
  executionAttempts: number;
  executorState: { [key: string]: string };
  lastSubmissionAttemptTime: string;
  sparkApplicationId: string;
  submissionAttempts: number;
  submissionID: string;
  terminationTime: string;
};

export type ApacheSpark = {
  apiVersion: string;
  kind: string;
  metadata: Metadata;
  spec: Spec;
  status: Status;
};

export type ApacheSparkList = {
  apiVersion: string;
  kind: string;
  items?: ApacheSpark[];
};

export type Pod = {
  apiVersion: string;
  kind: string;
  metadata: Metadata;
  spec: PodSpec;
};

export type PodSpec = {
  containers: {
    image: string;
    name: string;
  }[];
};
