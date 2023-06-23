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

import { IoK8sApiCoreV1DownwardAPIVolumeFile } from '../models/IoK8sApiCoreV1DownwardAPIVolumeFile';
import { HttpFile } from '../http/http';

/**
* Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode.
*/
export class IoK8sApiCoreV1DownwardAPIProjection {
    /**
    * Items is a list of DownwardAPIVolume file
    */
    'items'?: Array<IoK8sApiCoreV1DownwardAPIVolumeFile>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<IoK8sApiCoreV1DownwardAPIVolumeFile>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1DownwardAPIProjection.attributeTypeMap;
    }

    public constructor() {
    }
}

