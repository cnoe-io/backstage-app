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

import { IoK8sApimachineryPkgApisMetaV1OwnerReference } from '../models/IoK8sApimachineryPkgApisMetaV1OwnerReference';
import { HttpFile } from '../http/http';

/**
* SubmitOpts are workflow submission options
*/
export class IoArgoprojWorkflowV1alpha1SubmitOpts {
    /**
    * Annotations adds to metadata.labels
    */
    'annotations'?: string;
    /**
    * DryRun validates the workflow on the client-side without creating it. This option is not supported in API
    */
    'dryRun'?: boolean;
    /**
    * Entrypoint overrides spec.entrypoint
    */
    'entryPoint'?: string;
    /**
    * GenerateName overrides metadata.generateName
    */
    'generateName'?: string;
    /**
    * Labels adds to metadata.labels
    */
    'labels'?: string;
    /**
    * Name overrides metadata.name
    */
    'name'?: string;
    'ownerReference'?: IoK8sApimachineryPkgApisMetaV1OwnerReference;
    /**
    * Parameters passes input parameters to workflow
    */
    'parameters'?: Array<string>;
    /**
    * Set the podPriorityClassName of the workflow
    */
    'podPriorityClassName'?: string;
    /**
    * Priority is used if controller is configured to process limited number of workflows in parallel, higher priority workflows are processed first.
    */
    'priority'?: number;
    /**
    * ServerDryRun validates the workflow on the server-side without creating it
    */
    'serverDryRun'?: boolean;
    /**
    * ServiceAccount runs all pods in the workflow using specified ServiceAccount.
    */
    'serviceAccount'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "annotations",
            "baseName": "annotations",
            "type": "string",
            "format": ""
        },
        {
            "name": "dryRun",
            "baseName": "dryRun",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "entryPoint",
            "baseName": "entryPoint",
            "type": "string",
            "format": ""
        },
        {
            "name": "generateName",
            "baseName": "generateName",
            "type": "string",
            "format": ""
        },
        {
            "name": "labels",
            "baseName": "labels",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "ownerReference",
            "baseName": "ownerReference",
            "type": "IoK8sApimachineryPkgApisMetaV1OwnerReference",
            "format": ""
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "podPriorityClassName",
            "baseName": "podPriorityClassName",
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
            "name": "serverDryRun",
            "baseName": "serverDryRun",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "serviceAccount",
            "baseName": "serviceAccount",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojWorkflowV1alpha1SubmitOpts.attributeTypeMap;
    }

    public constructor() {
    }
}
