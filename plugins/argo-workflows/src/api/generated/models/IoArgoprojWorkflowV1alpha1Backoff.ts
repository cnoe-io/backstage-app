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
* Backoff is a backoff strategy to use within retryStrategy
*/
export class IoArgoprojWorkflowV1alpha1Backoff {
    /**
    * Duration is the amount to back off. Default unit is seconds, but could also be a duration (e.g. \"2m\", \"1h\")
    */
    'duration'?: string;
    'factor'?: string;
    /**
    * MaxDuration is the maximum amount of time allowed for a workflow in the backoff strategy
    */
    'maxDuration'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "duration",
            "baseName": "duration",
            "type": "string",
            "format": ""
        },
        {
            "name": "factor",
            "baseName": "factor",
            "type": "string",
            "format": ""
        },
        {
            "name": "maxDuration",
            "baseName": "maxDuration",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojWorkflowV1alpha1Backoff.attributeTypeMap;
    }

    public constructor() {
    }
}
