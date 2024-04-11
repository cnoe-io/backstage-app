import { Cluster, Service, Task } from '@aws-sdk/client-ecs';

export interface ServicesResponse {
  clusters: Array<ClusterResponse>;
}

export interface ClusterResponse {
  services: Array<ServiceResponse>;
  cluster: Cluster;
}

export interface ServiceResponse {
  tasks: Array<Task>
  service: Service;
}