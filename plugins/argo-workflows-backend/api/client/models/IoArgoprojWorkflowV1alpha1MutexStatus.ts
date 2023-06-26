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

import { IoArgoprojWorkflowV1alpha1MutexHolding } from '../models/IoArgoprojWorkflowV1alpha1MutexHolding';
import { HttpFile } from '../http/http';

/**
* MutexStatus contains which objects hold  mutex locks, and which objects this workflow is waiting on to release locks.
*/
export class IoArgoprojWorkflowV1alpha1MutexStatus {
    /**
    * Holding is a list of mutexes and their respective objects that are held by mutex lock for this io.argoproj.workflow.v1alpha1.
    */
    'holding'?: Array<IoArgoprojWorkflowV1alpha1MutexHolding>;
    /**
    * Waiting is a list of mutexes and their respective objects this workflow is waiting for.
    */
    'waiting'?: Array<IoArgoprojWorkflowV1alpha1MutexHolding>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "holding",
            "baseName": "holding",
            "type": "Array<IoArgoprojWorkflowV1alpha1MutexHolding>",
            "format": ""
        },
        {
            "name": "waiting",
            "baseName": "waiting",
            "type": "Array<IoArgoprojWorkflowV1alpha1MutexHolding>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojWorkflowV1alpha1MutexStatus.attributeTypeMap;
    }

    public constructor() {
    }
}
