import { Entity } from '@backstage/catalog-model';
import {
  ARGO_WORKFLOWS_LABEL_SELECTOR_ANNOTATION,
  CLUSTER_NAME_ANNOTATION,
  ARGO_WORKFLOWS_NAMESPACE_ANNOTATION,
} from '../plugin';

export function trimBaseUrl(argoWorkflowsBaseUrl: string | undefined) {
  if (argoWorkflowsBaseUrl && argoWorkflowsBaseUrl.endsWith('/')) {
    return argoWorkflowsBaseUrl.substring(0, argoWorkflowsBaseUrl.length - 1);
  }
  return argoWorkflowsBaseUrl;
}

export type getAnnotationValuesOutput = {
  ns?: string;
  clusterName?: string;
  labelSelector?: string;
};

export function getAnnotationValues(entity: Entity): getAnnotationValuesOutput {
  const ns = entity.metadata.annotations?.[ARGO_WORKFLOWS_NAMESPACE_ANNOTATION];
  const clusterName = entity.metadata.annotations?.[CLUSTER_NAME_ANNOTATION];
  const labelSelector =
    entity.metadata?.annotations?.[ARGO_WORKFLOWS_LABEL_SELECTOR_ANNOTATION];
  return {
    ns: ns,
    clusterName: clusterName,
    labelSelector: labelSelector,
  };
}