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
* PubSubEventSource refers to event-source for GCP PubSub related events.
*/
export class IoArgoprojEventsV1alpha1PubSubEventSource {
    'credentialSecret'?: IoK8sApiCoreV1SecretKeySelector;
    'deleteSubscriptionOnFinish'?: boolean;
    'filter'?: IoArgoprojEventsV1alpha1EventSourceFilter;
    'jsonBody'?: boolean;
    'metadata'?: { [key: string]: string; };
    'projectID'?: string;
    'subscriptionID'?: string;
    'topic'?: string;
    'topicProjectID'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "credentialSecret",
            "baseName": "credentialSecret",
            "type": "IoK8sApiCoreV1SecretKeySelector",
            "format": ""
        },
        {
            "name": "deleteSubscriptionOnFinish",
            "baseName": "deleteSubscriptionOnFinish",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "filter",
            "baseName": "filter",
            "type": "IoArgoprojEventsV1alpha1EventSourceFilter",
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
            "name": "projectID",
            "baseName": "projectID",
            "type": "string",
            "format": ""
        },
        {
            "name": "subscriptionID",
            "baseName": "subscriptionID",
            "type": "string",
            "format": ""
        },
        {
            "name": "topic",
            "baseName": "topic",
            "type": "string",
            "format": ""
        },
        {
            "name": "topicProjectID",
            "baseName": "topicProjectID",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojEventsV1alpha1PubSubEventSource.attributeTypeMap;
    }

    public constructor() {
    }
}
