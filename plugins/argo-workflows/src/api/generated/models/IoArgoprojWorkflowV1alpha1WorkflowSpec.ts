/**
 * Argo Workflows API
 * Argo Workflows is an open source container-native workflow engine for orchestrating parallel jobs on Kubernetes. For more information, please see https://argoproj.github.io/argo-workflows/
 *
 * OpenAPI spec version: VERSION
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { IoArgoprojWorkflowV1alpha1Arguments } from '../models/IoArgoprojWorkflowV1alpha1Arguments';
import { IoArgoprojWorkflowV1alpha1ArtifactRepositoryRef } from '../models/IoArgoprojWorkflowV1alpha1ArtifactRepositoryRef';
import { IoArgoprojWorkflowV1alpha1ExecutorConfig } from '../models/IoArgoprojWorkflowV1alpha1ExecutorConfig';
import { IoArgoprojWorkflowV1alpha1LifecycleHook } from '../models/IoArgoprojWorkflowV1alpha1LifecycleHook';
import { IoArgoprojWorkflowV1alpha1Metadata } from '../models/IoArgoprojWorkflowV1alpha1Metadata';
import { IoArgoprojWorkflowV1alpha1Metrics } from '../models/IoArgoprojWorkflowV1alpha1Metrics';
import { IoArgoprojWorkflowV1alpha1PodGC } from '../models/IoArgoprojWorkflowV1alpha1PodGC';
import { IoArgoprojWorkflowV1alpha1RetryStrategy } from '../models/IoArgoprojWorkflowV1alpha1RetryStrategy';
import { IoArgoprojWorkflowV1alpha1Synchronization } from '../models/IoArgoprojWorkflowV1alpha1Synchronization';
import { IoArgoprojWorkflowV1alpha1TTLStrategy } from '../models/IoArgoprojWorkflowV1alpha1TTLStrategy';
import { IoArgoprojWorkflowV1alpha1Template } from '../models/IoArgoprojWorkflowV1alpha1Template';
import { IoArgoprojWorkflowV1alpha1VolumeClaimGC } from '../models/IoArgoprojWorkflowV1alpha1VolumeClaimGC';
import { IoArgoprojWorkflowV1alpha1WorkflowLevelArtifactGC } from '../models/IoArgoprojWorkflowV1alpha1WorkflowLevelArtifactGC';
import { IoArgoprojWorkflowV1alpha1WorkflowMetadata } from '../models/IoArgoprojWorkflowV1alpha1WorkflowMetadata';
import { IoArgoprojWorkflowV1alpha1WorkflowTemplateRef } from '../models/IoArgoprojWorkflowV1alpha1WorkflowTemplateRef';
import { IoK8sApiCoreV1Affinity } from '../models/IoK8sApiCoreV1Affinity';
import { IoK8sApiCoreV1HostAlias } from '../models/IoK8sApiCoreV1HostAlias';
import { IoK8sApiCoreV1LocalObjectReference } from '../models/IoK8sApiCoreV1LocalObjectReference';
import { IoK8sApiCoreV1PersistentVolumeClaim } from '../models/IoK8sApiCoreV1PersistentVolumeClaim';
import { IoK8sApiCoreV1PodDNSConfig } from '../models/IoK8sApiCoreV1PodDNSConfig';
import { IoK8sApiCoreV1PodSecurityContext } from '../models/IoK8sApiCoreV1PodSecurityContext';
import { IoK8sApiCoreV1Toleration } from '../models/IoK8sApiCoreV1Toleration';
import { IoK8sApiCoreV1Volume } from '../models/IoK8sApiCoreV1Volume';
import { IoK8sApiPolicyV1PodDisruptionBudgetSpec } from '../models/IoK8sApiPolicyV1PodDisruptionBudgetSpec';
import { HttpFile } from '../http/http';

/**
* WorkflowSpec is the specification of a Workflow.
*/
export class IoArgoprojWorkflowV1alpha1WorkflowSpec {
    /**
    * Optional duration in seconds relative to the workflow start time which the workflow is allowed to run before the controller terminates the io.argoproj.workflow.v1alpha1. A value of zero is used to terminate a Running workflow
    */
    'activeDeadlineSeconds'?: number;
    'affinity'?: IoK8sApiCoreV1Affinity;
    /**
    * ArchiveLogs indicates if the container logs should be archived
    */
    'archiveLogs'?: boolean;
    'arguments'?: IoArgoprojWorkflowV1alpha1Arguments;
    'artifactGC'?: IoArgoprojWorkflowV1alpha1WorkflowLevelArtifactGC;
    'artifactRepositoryRef'?: IoArgoprojWorkflowV1alpha1ArtifactRepositoryRef;
    /**
    * AutomountServiceAccountToken indicates whether a service account token should be automatically mounted in pods. ServiceAccountName of ExecutorConfig must be specified if this value is false.
    */
    'automountServiceAccountToken'?: boolean;
    'dnsConfig'?: IoK8sApiCoreV1PodDNSConfig;
    /**
    * Set DNS policy for the pod. Defaults to \"ClusterFirst\". Valid values are \'ClusterFirstWithHostNet\', \'ClusterFirst\', \'Default\' or \'None\'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to \'ClusterFirstWithHostNet\'.
    */
    'dnsPolicy'?: string;
    /**
    * Entrypoint is a template reference to the starting point of the io.argoproj.workflow.v1alpha1.
    */
    'entrypoint'?: string;
    'executor'?: IoArgoprojWorkflowV1alpha1ExecutorConfig;
    /**
    * Hooks holds the lifecycle hook which is invoked at lifecycle of step, irrespective of the success, failure, or error status of the primary step
    */
    'hooks'?: { [key: string]: IoArgoprojWorkflowV1alpha1LifecycleHook; };
    'hostAliases'?: Array<IoK8sApiCoreV1HostAlias>;
    /**
    * Host networking requested for this workflow pod. Default to false.
    */
    'hostNetwork'?: boolean;
    /**
    * ImagePullSecrets is a list of references to secrets in the same namespace to use for pulling any images in pods that reference this ServiceAccount. ImagePullSecrets are distinct from Secrets because Secrets can be mounted in the pod, but ImagePullSecrets are only accessed by the kubelet. More info: https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod
    */
    'imagePullSecrets'?: Array<IoK8sApiCoreV1LocalObjectReference>;
    'metrics'?: IoArgoprojWorkflowV1alpha1Metrics;
    /**
    * NodeSelector is a selector which will result in all pods of the workflow to be scheduled on the selected node(s). This is able to be overridden by a nodeSelector specified in the template.
    */
    'nodeSelector'?: { [key: string]: string; };
    /**
    * OnExit is a template reference which is invoked at the end of the workflow, irrespective of the success, failure, or error of the primary io.argoproj.workflow.v1alpha1.
    */
    'onExit'?: string;
    /**
    * Parallelism limits the max total parallel pods that can execute at the same time in a workflow
    */
    'parallelism'?: number;
    'podDisruptionBudget'?: IoK8sApiPolicyV1PodDisruptionBudgetSpec;
    'podGC'?: IoArgoprojWorkflowV1alpha1PodGC;
    'podMetadata'?: IoArgoprojWorkflowV1alpha1Metadata;
    /**
    * Priority to apply to workflow pods. DEPRECATED: Use PodPriorityClassName instead.
    */
    'podPriority'?: number;
    /**
    * PriorityClassName to apply to workflow pods.
    */
    'podPriorityClassName'?: string;
    /**
    * PodSpecPatch holds strategic merge patch to apply against the pod spec. Allows parameterization of container fields which are not strings (e.g. resource limits).
    */
    'podSpecPatch'?: string;
    /**
    * Priority is used if controller is configured to process limited number of workflows in parallel. Workflows with higher priority are processed first.
    */
    'priority'?: number;
    'retryStrategy'?: IoArgoprojWorkflowV1alpha1RetryStrategy;
    /**
    * Set scheduler name for all pods. Will be overridden if container/script template\'s scheduler name is set. Default scheduler will be used if neither specified.
    */
    'schedulerName'?: string;
    'securityContext'?: IoK8sApiCoreV1PodSecurityContext;
    /**
    * ServiceAccountName is the name of the ServiceAccount to run all pods of the workflow as.
    */
    'serviceAccountName'?: string;
    /**
    * Shutdown will shutdown the workflow according to its ShutdownStrategy
    */
    'shutdown'?: string;
    /**
    * Suspend will suspend the workflow and prevent execution of any future steps in the workflow
    */
    'suspend'?: boolean;
    'synchronization'?: IoArgoprojWorkflowV1alpha1Synchronization;
    'templateDefaults'?: IoArgoprojWorkflowV1alpha1Template;
    /**
    * Templates is a list of workflow templates used in a workflow
    */
    'templates'?: Array<IoArgoprojWorkflowV1alpha1Template>;
    /**
    * Tolerations to apply to workflow pods.
    */
    'tolerations'?: Array<IoK8sApiCoreV1Toleration>;
    'ttlStrategy'?: IoArgoprojWorkflowV1alpha1TTLStrategy;
    'volumeClaimGC'?: IoArgoprojWorkflowV1alpha1VolumeClaimGC;
    /**
    * VolumeClaimTemplates is a list of claims that containers are allowed to reference. The Workflow controller will create the claims at the beginning of the workflow and delete the claims upon completion of the workflow
    */
    'volumeClaimTemplates'?: Array<IoK8sApiCoreV1PersistentVolumeClaim>;
    /**
    * Volumes is a list of volumes that can be mounted by containers in a io.argoproj.workflow.v1alpha1.
    */
    'volumes'?: Array<IoK8sApiCoreV1Volume>;
    'workflowMetadata'?: IoArgoprojWorkflowV1alpha1WorkflowMetadata;
    'workflowTemplateRef'?: IoArgoprojWorkflowV1alpha1WorkflowTemplateRef;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "activeDeadlineSeconds",
            "baseName": "activeDeadlineSeconds",
            "type": "number",
            "format": ""
        },
        {
            "name": "affinity",
            "baseName": "affinity",
            "type": "IoK8sApiCoreV1Affinity",
            "format": ""
        },
        {
            "name": "archiveLogs",
            "baseName": "archiveLogs",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "arguments",
            "baseName": "arguments",
            "type": "IoArgoprojWorkflowV1alpha1Arguments",
            "format": ""
        },
        {
            "name": "artifactGC",
            "baseName": "artifactGC",
            "type": "IoArgoprojWorkflowV1alpha1WorkflowLevelArtifactGC",
            "format": ""
        },
        {
            "name": "artifactRepositoryRef",
            "baseName": "artifactRepositoryRef",
            "type": "IoArgoprojWorkflowV1alpha1ArtifactRepositoryRef",
            "format": ""
        },
        {
            "name": "automountServiceAccountToken",
            "baseName": "automountServiceAccountToken",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "dnsConfig",
            "baseName": "dnsConfig",
            "type": "IoK8sApiCoreV1PodDNSConfig",
            "format": ""
        },
        {
            "name": "dnsPolicy",
            "baseName": "dnsPolicy",
            "type": "string",
            "format": ""
        },
        {
            "name": "entrypoint",
            "baseName": "entrypoint",
            "type": "string",
            "format": ""
        },
        {
            "name": "executor",
            "baseName": "executor",
            "type": "IoArgoprojWorkflowV1alpha1ExecutorConfig",
            "format": ""
        },
        {
            "name": "hooks",
            "baseName": "hooks",
            "type": "{ [key: string]: IoArgoprojWorkflowV1alpha1LifecycleHook; }",
            "format": ""
        },
        {
            "name": "hostAliases",
            "baseName": "hostAliases",
            "type": "Array<IoK8sApiCoreV1HostAlias>",
            "format": ""
        },
        {
            "name": "hostNetwork",
            "baseName": "hostNetwork",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "imagePullSecrets",
            "baseName": "imagePullSecrets",
            "type": "Array<IoK8sApiCoreV1LocalObjectReference>",
            "format": ""
        },
        {
            "name": "metrics",
            "baseName": "metrics",
            "type": "IoArgoprojWorkflowV1alpha1Metrics",
            "format": ""
        },
        {
            "name": "nodeSelector",
            "baseName": "nodeSelector",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "onExit",
            "baseName": "onExit",
            "type": "string",
            "format": ""
        },
        {
            "name": "parallelism",
            "baseName": "parallelism",
            "type": "number",
            "format": ""
        },
        {
            "name": "podDisruptionBudget",
            "baseName": "podDisruptionBudget",
            "type": "IoK8sApiPolicyV1PodDisruptionBudgetSpec",
            "format": ""
        },
        {
            "name": "podGC",
            "baseName": "podGC",
            "type": "IoArgoprojWorkflowV1alpha1PodGC",
            "format": ""
        },
        {
            "name": "podMetadata",
            "baseName": "podMetadata",
            "type": "IoArgoprojWorkflowV1alpha1Metadata",
            "format": ""
        },
        {
            "name": "podPriority",
            "baseName": "podPriority",
            "type": "number",
            "format": ""
        },
        {
            "name": "podPriorityClassName",
            "baseName": "podPriorityClassName",
            "type": "string",
            "format": ""
        },
        {
            "name": "podSpecPatch",
            "baseName": "podSpecPatch",
            "type": "string",
            "format": ""
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "number",
            "format": ""
        },
        {
            "name": "retryStrategy",
            "baseName": "retryStrategy",
            "type": "IoArgoprojWorkflowV1alpha1RetryStrategy",
            "format": ""
        },
        {
            "name": "schedulerName",
            "baseName": "schedulerName",
            "type": "string",
            "format": ""
        },
        {
            "name": "securityContext",
            "baseName": "securityContext",
            "type": "IoK8sApiCoreV1PodSecurityContext",
            "format": ""
        },
        {
            "name": "serviceAccountName",
            "baseName": "serviceAccountName",
            "type": "string",
            "format": ""
        },
        {
            "name": "shutdown",
            "baseName": "shutdown",
            "type": "string",
            "format": ""
        },
        {
            "name": "suspend",
            "baseName": "suspend",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "synchronization",
            "baseName": "synchronization",
            "type": "IoArgoprojWorkflowV1alpha1Synchronization",
            "format": ""
        },
        {
            "name": "templateDefaults",
            "baseName": "templateDefaults",
            "type": "IoArgoprojWorkflowV1alpha1Template",
            "format": ""
        },
        {
            "name": "templates",
            "baseName": "templates",
            "type": "Array<IoArgoprojWorkflowV1alpha1Template>",
            "format": ""
        },
        {
            "name": "tolerations",
            "baseName": "tolerations",
            "type": "Array<IoK8sApiCoreV1Toleration>",
            "format": ""
        },
        {
            "name": "ttlStrategy",
            "baseName": "ttlStrategy",
            "type": "IoArgoprojWorkflowV1alpha1TTLStrategy",
            "format": ""
        },
        {
            "name": "volumeClaimGC",
            "baseName": "volumeClaimGC",
            "type": "IoArgoprojWorkflowV1alpha1VolumeClaimGC",
            "format": ""
        },
        {
            "name": "volumeClaimTemplates",
            "baseName": "volumeClaimTemplates",
            "type": "Array<IoK8sApiCoreV1PersistentVolumeClaim>",
            "format": ""
        },
        {
            "name": "volumes",
            "baseName": "volumes",
            "type": "Array<IoK8sApiCoreV1Volume>",
            "format": ""
        },
        {
            "name": "workflowMetadata",
            "baseName": "workflowMetadata",
            "type": "IoArgoprojWorkflowV1alpha1WorkflowMetadata",
            "format": ""
        },
        {
            "name": "workflowTemplateRef",
            "baseName": "workflowTemplateRef",
            "type": "IoArgoprojWorkflowV1alpha1WorkflowTemplateRef",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojWorkflowV1alpha1WorkflowSpec.attributeTypeMap;
    }

    public constructor() {
    }
}
