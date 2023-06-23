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

export class IoArgoprojEventsV1alpha1AzureEventsHubEventSource {
    'filter'?: IoArgoprojEventsV1alpha1EventSourceFilter;
    'fqdn'?: string;
    'hubName'?: string;
    'metadata'?: { [key: string]: string; };
    'sharedAccessKey'?: IoK8sApiCoreV1SecretKeySelector;
    'sharedAccessKeyName'?: IoK8sApiCoreV1SecretKeySelector;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "filter",
            "baseName": "filter",
            "type": "IoArgoprojEventsV1alpha1EventSourceFilter",
            "format": ""
        },
        {
            "name": "fqdn",
            "baseName": "fqdn",
            "type": "string",
            "format": ""
        },
        {
            "name": "hubName",
            "baseName": "hubName",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "sharedAccessKey",
            "baseName": "sharedAccessKey",
            "type": "IoK8sApiCoreV1SecretKeySelector",
            "format": ""
        },
        {
            "name": "sharedAccessKeyName",
            "baseName": "sharedAccessKeyName",
            "type": "IoK8sApiCoreV1SecretKeySelector",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojEventsV1alpha1AzureEventsHubEventSource.attributeTypeMap;
    }

    public constructor() {
    }
}

