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

import { IoK8sApiCoreV1LifecycleHandler } from '../models/IoK8sApiCoreV1LifecycleHandler';
import { HttpFile } from '../http/http';

/**
* Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted.
*/
export class IoK8sApiCoreV1Lifecycle {
    'postStart'?: IoK8sApiCoreV1LifecycleHandler;
    'preStop'?: IoK8sApiCoreV1LifecycleHandler;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "postStart",
            "baseName": "postStart",
            "type": "IoK8sApiCoreV1LifecycleHandler",
            "format": ""
        },
        {
            "name": "preStop",
            "baseName": "preStop",
            "type": "IoK8sApiCoreV1LifecycleHandler",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1Lifecycle.attributeTypeMap;
    }

    public constructor() {
    }
}
