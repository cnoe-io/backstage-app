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

/**
* EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.
*/
export class IoK8sApiCoreV1EventSeries {
    /**
    * Number of occurrences in this series up to the last heartbeat time
    */
    'count'?: number;
    /**
    * MicroTime is version of Time with microsecond level precision.
    */
    'lastObservedTime'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": ""
        },
        {
            "name": "lastObservedTime",
            "baseName": "lastObservedTime",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1EventSeries.attributeTypeMap;
    }

    public constructor() {
    }
}
