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

import { IoArgoprojEventsV1alpha1EventSource } from '../models/IoArgoprojEventsV1alpha1EventSource';
import { IoK8sApimachineryPkgApisMetaV1ListMeta } from '../models/IoK8sApimachineryPkgApisMetaV1ListMeta';
import { HttpFile } from '../http/http';

export class IoArgoprojEventsV1alpha1EventSourceList {
    'items'?: Array<IoArgoprojEventsV1alpha1EventSource>;
    'metadata'?: IoK8sApimachineryPkgApisMetaV1ListMeta;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<IoArgoprojEventsV1alpha1EventSource>",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "IoK8sApimachineryPkgApisMetaV1ListMeta",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojEventsV1alpha1EventSourceList.attributeTypeMap;
    }

    public constructor() {
    }
}
