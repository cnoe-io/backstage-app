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

import { IoArgoprojEventsV1alpha1TriggerParameter } from '../models/IoArgoprojEventsV1alpha1TriggerParameter';
import { IoK8sApiCoreV1SecretKeySelector } from '../models/IoK8sApiCoreV1SecretKeySelector';
import { HttpFile } from '../http/http';

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

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "certSecret",
            "baseName": "certSecret",
            "type": "IoK8sApiCoreV1SecretKeySelector",
            "format": ""
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "Array<IoArgoprojEventsV1alpha1TriggerParameter>",
            "format": ""
        },
        {
            "name": "payload",
            "baseName": "payload",
            "type": "Array<IoArgoprojEventsV1alpha1TriggerParameter>",
            "format": ""
        },
        {
            "name": "secure",
            "baseName": "secure",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "serverNameOverride",
            "baseName": "serverNameOverride",
            "type": "string",
            "format": ""
        },
        {
            "name": "serverURL",
            "baseName": "serverURL",
            "type": "string",
            "format": ""
        },
        {
            "name": "spec",
            "baseName": "spec",
            "type": "{ [key: string]: string; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojEventsV1alpha1CustomTrigger.attributeTypeMap;
    }

    public constructor() {
    }
}
