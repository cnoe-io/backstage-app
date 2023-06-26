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

import { IoArgoprojEventsV1alpha1TLSConfig } from '../models/IoArgoprojEventsV1alpha1TLSConfig';
import { IoArgoprojEventsV1alpha1TriggerParameter } from '../models/IoArgoprojEventsV1alpha1TriggerParameter';
import { HttpFile } from '../http/http';

/**
* NATSTrigger refers to the specification of the NATS trigger.
*/
export class IoArgoprojEventsV1alpha1NATSTrigger {
    'parameters'?: Array<IoArgoprojEventsV1alpha1TriggerParameter>;
    'payload'?: Array<IoArgoprojEventsV1alpha1TriggerParameter>;
    /**
    * Name of the subject to put message on.
    */
    'subject'?: string;
    'tls'?: IoArgoprojEventsV1alpha1TLSConfig;
    /**
    * URL of the NATS cluster.
    */
    'url'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
            "name": "subject",
            "baseName": "subject",
            "type": "string",
            "format": ""
        },
        {
            "name": "tls",
            "baseName": "tls",
            "type": "IoArgoprojEventsV1alpha1TLSConfig",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojEventsV1alpha1NATSTrigger.attributeTypeMap;
    }

    public constructor() {
    }
}
