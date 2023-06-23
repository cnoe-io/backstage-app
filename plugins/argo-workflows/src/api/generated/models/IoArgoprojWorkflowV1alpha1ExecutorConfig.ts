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

import { HttpFile } from '../http/http';

/**
* ExecutorConfig holds configurations of an executor container.
*/
export class IoArgoprojWorkflowV1alpha1ExecutorConfig {
    /**
    * ServiceAccountName specifies the service account name of the executor container.
    */
    'serviceAccountName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "serviceAccountName",
            "baseName": "serviceAccountName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojWorkflowV1alpha1ExecutorConfig.attributeTypeMap;
    }

    public constructor() {
    }
}

