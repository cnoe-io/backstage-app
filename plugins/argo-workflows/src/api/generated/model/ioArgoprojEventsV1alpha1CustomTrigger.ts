// @ts-nocheck
/**
 * Argo Workflows API
 * Argo Workflows is an open source container-native workflow engine for orchestrating parallel jobs on Kubernetes. For more information, please see https://argoproj.github.io/argo-workflows/
 *
 * The version of the OpenAPI document: VERSION
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { IoArgoprojEventsV1alpha1TriggerParameter } from './ioArgoprojEventsV1alpha1TriggerParameter';
import { IoK8sApiCoreV1SecretKeySelector } from './ioK8sApiCoreV1SecretKeySelector';

/**
* CustomTrigger refers to the specification of the custom trigger.
*/
export class IoArgoprojEventsV1alpha1CustomTrigger {
    'certSecret'?: IoK8sApiCoreV1SecretKeySelector;
    /**
    * Parameters is the list of parameters that is applied to resolved custom trigger trigger object.
    */
    'parameters'?: Array<IoArgoprojEventsV1alpha1TriggerParameter>;
    /**
    * Payload is the list of key-value extracted from an event payload to construct the request payload.
    */
    'payload'?: Array<IoArgoprojEventsV1alpha1TriggerParameter>;
    'secure'?: boolean;
    /**
    * ServerNameOverride for the secure connection between sensor and custom trigger gRPC server.
    */
    'serverNameOverride'?: string;
    'serverURL'?: string;
    /**
    * Spec is the custom trigger resource specification that custom trigger gRPC server knows how to interpret.
    */
    'spec'?: { [key: string]: string; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "certSecret",
            "baseName": "certSecret",
            "type": "IoK8sApiCoreV1SecretKeySelector"
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "Array<IoArgoprojEventsV1alpha1TriggerParameter>"
        },
        {
            "name": "payload",
            "baseName": "payload",
            "type": "Array<IoArgoprojEventsV1alpha1TriggerParameter>"
        },
        {
            "name": "secure",
            "baseName": "secure",
            "type": "boolean"
        },
        {
            "name": "serverNameOverride",
            "baseName": "serverNameOverride",
            "type": "string"
        },
        {
            "name": "serverURL",
            "baseName": "serverURL",
            "type": "string"
        },
        {
            "name": "spec",
            "baseName": "spec",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojEventsV1alpha1CustomTrigger.attributeTypeMap;
    }
}
