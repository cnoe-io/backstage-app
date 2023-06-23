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

import { IoArgoprojEventsV1alpha1Selector } from '../models/IoArgoprojEventsV1alpha1Selector';
import { HttpFile } from '../http/http';

export class IoArgoprojEventsV1alpha1ResourceFilter {
    'afterStart'?: boolean;
    /**
    * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
    */
    'createdBy'?: Date;
    'fields'?: Array<IoArgoprojEventsV1alpha1Selector>;
    'labels'?: Array<IoArgoprojEventsV1alpha1Selector>;
    'prefix'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "afterStart",
            "baseName": "afterStart",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "createdBy",
            "baseName": "createdBy",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "fields",
            "baseName": "fields",
            "type": "Array<IoArgoprojEventsV1alpha1Selector>",
            "format": ""
        },
        {
            "name": "labels",
            "baseName": "labels",
            "type": "Array<IoArgoprojEventsV1alpha1Selector>",
            "format": ""
        },
        {
            "name": "prefix",
            "baseName": "prefix",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojEventsV1alpha1ResourceFilter.attributeTypeMap;
    }

    public constructor() {
    }
}

