import { Entity } from '@backstage/catalog-model';
import {
  APACHE_SPARK_LABEL_SELECTOR_ANNOTATION,
  CLUSTER_NAME_ANNOTATION,
  K8S_LABEL_SELECTOR_ANNOTATION,
  K8S_NAMESPACE_ANNOTATION,
} from '../consts';

export type getAnnotationValuesOutput = {
  ns: string;
  clusterName?: string;
  labelSelector?: string;
};

export function getAnnotationValues(entity: Entity): getAnnotationValuesOutput {
  const ns =
    entity.metadata.annotations?.[K8S_NAMESPACE_ANNOTATION] !== undefined
      ? entity.metadata.annotations?.[K8S_NAMESPACE_ANNOTATION]
      : 'default';
  const clusterName = entity.metadata.annotations?.[CLUSTER_NAME_ANNOTATION];
  const labelSelector =
    entity.metadata?.annotations?.[APACHE_SPARK_LABEL_SELECTOR_ANNOTATION] !==
    undefined
      ? entity.metadata?.annotations?.[APACHE_SPARK_LABEL_SELECTOR_ANNOTATION]
      : entity.metadata.annotations?.[K8S_LABEL_SELECTOR_ANNOTATION];
  return {
    ns: ns,
    clusterName: clusterName,
    labelSelector: labelSelector,
  };
}
