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

import { IoArgoprojWorkflowV1alpha1ArtGCStatus } from '../models/IoArgoprojWorkflowV1alpha1ArtGCStatus';
import { IoArgoprojWorkflowV1alpha1ArtifactRepositoryRefStatus } from '../models/IoArgoprojWorkflowV1alpha1ArtifactRepositoryRefStatus';
import { IoArgoprojWorkflowV1alpha1Condition } from '../models/IoArgoprojWorkflowV1alpha1Condition';
import { IoArgoprojWorkflowV1alpha1NodeStatus } from '../models/IoArgoprojWorkflowV1alpha1NodeStatus';
import { IoArgoprojWorkflowV1alpha1Outputs } from '../models/IoArgoprojWorkflowV1alpha1Outputs';
import { IoArgoprojWorkflowV1alpha1SynchronizationStatus } from '../models/IoArgoprojWorkflowV1alpha1SynchronizationStatus';
import { IoArgoprojWorkflowV1alpha1Template } from '../models/IoArgoprojWorkflowV1alpha1Template';
import { IoArgoprojWorkflowV1alpha1WorkflowSpec } from '../models/IoArgoprojWorkflowV1alpha1WorkflowSpec';
import { IoK8sApiCoreV1Volume } from '../models/IoK8sApiCoreV1Volume';
import { HttpFile } from '../http/http';

/**
* WorkflowStatus contains overall status information about a workflow
*/
export class IoArgoprojWorkflowV1alpha1WorkflowStatus {
    'artifactGCStatus'?: IoArgoprojWorkflowV1alpha1ArtGCStatus;
    'artifactRepositoryRef'?: IoArgoprojWorkflowV1alpha1ArtifactRepositoryRefStatus;
    /**
    * Compressed and base64 decoded Nodes map
    */
    'compressedNodes'?: string;
    /**
    * Conditions is a list of conditions the Workflow may have
    */
    'conditions'?: Array<IoArgoprojWorkflowV1alpha1Condition>;
    /**
    * EstimatedDuration in seconds.
    */
    'estimatedDuration'?: number;
    /**
    * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
    */
    'finishedAt'?: Date;
    /**
    * A human readable message indicating details about why the workflow is in this condition.
    */
    'message'?: string;
    /**
    * Nodes is a mapping between a node ID and the node\'s status.
    */
    'nodes'?: { [key: string]: IoArgoprojWorkflowV1alpha1NodeStatus; };
    /**
    * Whether on not node status has been offloaded to a database. If exists, then Nodes and CompressedNodes will be empty. This will actually be populated with a hash of the offloaded data.
    */
    'offloadNodeStatusVersion'?: string;
    'outputs'?: IoArgoprojWorkflowV1alpha1Outputs;
    /**
    * PersistentVolumeClaims tracks all PVCs that were created as part of the io.argoproj.workflow.v1alpha1. The contents of this list are drained at the end of the workflow.
    */
    'persistentVolumeClaims'?: Array<IoK8sApiCoreV1Volume>;
    /**
    * Phase a simple, high-level summary of where the workflow is in its lifecycle. Will be \"\" (Unknown), \"Pending\", or \"Running\" before the workflow is completed, and \"Succeeded\", \"Failed\" or \"Error\" once the workflow has completed.
    */
    'phase'?: string;
    /**
    * Progress to completion
    */
    'progress'?: string;
    /**
    * ResourcesDuration is the total for the workflow
    */
    'resourcesDuration'?: { [key: string]: number; };
    /**
    * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
    */
    'startedAt'?: Date;
    /**
    * StoredTemplates is a mapping between a template ref and the node\'s status.
    */
    'storedTemplates'?: { [key: string]: IoArgoprojWorkflowV1alpha1Template; };
    'storedWorkflowTemplateSpec'?: IoArgoprojWorkflowV1alpha1WorkflowSpec;
    'synchronization'?: IoArgoprojWorkflowV1alpha1SynchronizationStatus;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "artifactGCStatus",
            "baseName": "artifactGCStatus",
            "type": "IoArgoprojWorkflowV1alpha1ArtGCStatus",
            "format": ""
        },
        {
            "name": "artifactRepositoryRef",
            "baseName": "artifactRepositoryRef",
            "type": "IoArgoprojWorkflowV1alpha1ArtifactRepositoryRefStatus",
            "format": ""
        },
        {
            "name": "compressedNodes",
            "baseName": "compressedNodes",
            "type": "string",
            "format": ""
        },
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<IoArgoprojWorkflowV1alpha1Condition>",
            "format": ""
        },
        {
            "name": "estimatedDuration",
            "baseName": "estimatedDuration",
            "type": "number",
            "format": ""
        },
        {
            "name": "finishedAt",
            "baseName": "finishedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "nodes",
            "baseName": "nodes",
            "type": "{ [key: string]: IoArgoprojWorkflowV1alpha1NodeStatus; }",
            "format": ""
        },
        {
            "name": "offloadNodeStatusVersion",
            "baseName": "offloadNodeStatusVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "outputs",
            "baseName": "outputs",
            "type": "IoArgoprojWorkflowV1alpha1Outputs",
            "format": ""
        },
        {
            "name": "persistentVolumeClaims",
            "baseName": "persistentVolumeClaims",
            "type": "Array<IoK8sApiCoreV1Volume>",
            "format": ""
        },
        {
            "name": "phase",
            "baseName": "phase",
            "type": "string",
            "format": ""
        },
        {
            "name": "progress",
            "baseName": "progress",
            "type": "string",
            "format": ""
        },
        {
            "name": "resourcesDuration",
            "baseName": "resourcesDuration",
            "type": "{ [key: string]: number; }",
            "format": "int64"
        },
        {
            "name": "startedAt",
            "baseName": "startedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "storedTemplates",
            "baseName": "storedTemplates",
            "type": "{ [key: string]: IoArgoprojWorkflowV1alpha1Template; }",
            "format": ""
        },
        {
            "name": "storedWorkflowTemplateSpec",
            "baseName": "storedWorkflowTemplateSpec",
            "type": "IoArgoprojWorkflowV1alpha1WorkflowSpec",
            "format": ""
        },
        {
            "name": "synchronization",
            "baseName": "synchronization",
            "type": "IoArgoprojWorkflowV1alpha1SynchronizationStatus",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojWorkflowV1alpha1WorkflowStatus.attributeTypeMap;
    }

    public constructor() {
    }
}
