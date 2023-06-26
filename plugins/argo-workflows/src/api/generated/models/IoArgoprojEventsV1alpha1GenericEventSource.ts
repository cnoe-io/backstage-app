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

import { IoArgoprojEventsV1alpha1EventSourceFilter } from '../models/IoArgoprojEventsV1alpha1EventSourceFilter';
import { IoK8sApiCoreV1SecretKeySelector } from '../models/IoK8sApiCoreV1SecretKeySelector';
import { HttpFile } from '../http/http';

/**
* GenericEventSource refers to a generic event source. It can be used to implement a custom event source.
*/
export class IoArgoprojEventsV1alpha1GenericEventSource {
    'authSecret'?: IoK8sApiCoreV1SecretKeySelector;
    'config'?: string;
    'filter'?: IoArgoprojEventsV1alpha1EventSourceFilter;
    /**
    * Insecure determines the type of connection.
    */
    'insecure'?: boolean;
    'jsonBody'?: boolean;
    'metadata'?: { [key: string]: string; };
    /**
    * URL of the gRPC server that implements the event source.
    */
    'url'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "authSecret",
            "baseName": "authSecret",
            "type": "IoK8sApiCoreV1SecretKeySelector",
            "format": ""
        },
        {
            "name": "config",
            "baseName": "config",
            "type": "string",
            "format": ""
        },
        {
            "name": "filter",
            "baseName": "filter",
            "type": "IoArgoprojEventsV1alpha1EventSourceFilter",
            "format": ""
        },
        {
            "name": "insecure",
            "baseName": "insecure",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "jsonBody",
            "baseName": "jsonBody",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojEventsV1alpha1GenericEventSource.attributeTypeMap;
    }

    public constructor() {
    }
}
