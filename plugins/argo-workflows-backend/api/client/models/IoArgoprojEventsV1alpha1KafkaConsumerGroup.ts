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

export class IoArgoprojEventsV1alpha1KafkaConsumerGroup {
    'groupName'?: string;
    'oldest'?: boolean;
    'rebalanceStrategy'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "groupName",
            "baseName": "groupName",
            "type": "string",
            "format": ""
        },
        {
            "name": "oldest",
            "baseName": "oldest",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "rebalanceStrategy",
            "baseName": "rebalanceStrategy",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojEventsV1alpha1KafkaConsumerGroup.attributeTypeMap;
    }

    public constructor() {
    }
}

