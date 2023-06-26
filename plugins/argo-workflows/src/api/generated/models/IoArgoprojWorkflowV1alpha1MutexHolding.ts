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
* MutexHolding describes the mutex and the object which is holding it.
*/
export class IoArgoprojWorkflowV1alpha1MutexHolding {
    /**
    * Holder is a reference to the object which holds the Mutex. Holding Scenario:   1. Current workflow\'s NodeID which is holding the lock.      e.g: ${NodeID} Waiting Scenario:   1. Current workflow or other workflow NodeID which is holding the lock.      e.g: ${WorkflowName}/${NodeID}
    */
    'holder'?: string;
    /**
    * Reference for the mutex e.g: ${namespace}/mutex/${mutexName}
    */
    'mutex'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "holder",
            "baseName": "holder",
            "type": "string",
            "format": ""
        },
        {
            "name": "mutex",
            "baseName": "mutex",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojWorkflowV1alpha1MutexHolding.attributeTypeMap;
    }

    public constructor() {
    }
}
