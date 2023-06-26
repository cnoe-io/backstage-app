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

import { IoArgoprojEventsV1alpha1ConditionsResetByTime } from '../models/IoArgoprojEventsV1alpha1ConditionsResetByTime';
import { HttpFile } from '../http/http';

export class IoArgoprojEventsV1alpha1ConditionsResetCriteria {
    'byTime'?: IoArgoprojEventsV1alpha1ConditionsResetByTime;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "byTime",
            "baseName": "byTime",
            "type": "IoArgoprojEventsV1alpha1ConditionsResetByTime",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojEventsV1alpha1ConditionsResetCriteria.attributeTypeMap;
    }

    public constructor() {
    }
}
