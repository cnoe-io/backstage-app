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

import { IoArgoprojEventsV1alpha1Amount } from '../models/IoArgoprojEventsV1alpha1Amount';
import { IoArgoprojEventsV1alpha1Int64OrString } from '../models/IoArgoprojEventsV1alpha1Int64OrString';
import { HttpFile } from '../http/http';

export class IoArgoprojEventsV1alpha1Backoff {
    'duration'?: IoArgoprojEventsV1alpha1Int64OrString;
    'factor'?: IoArgoprojEventsV1alpha1Amount;
    'jitter'?: IoArgoprojEventsV1alpha1Amount;
    'steps'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "duration",
            "baseName": "duration",
            "type": "IoArgoprojEventsV1alpha1Int64OrString",
            "format": ""
        },
        {
            "name": "factor",
            "baseName": "factor",
            "type": "IoArgoprojEventsV1alpha1Amount",
            "format": ""
        },
        {
            "name": "jitter",
            "baseName": "jitter",
            "type": "IoArgoprojEventsV1alpha1Amount",
            "format": ""
        },
        {
            "name": "steps",
            "baseName": "steps",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojEventsV1alpha1Backoff.attributeTypeMap;
    }

    public constructor() {
    }
}

