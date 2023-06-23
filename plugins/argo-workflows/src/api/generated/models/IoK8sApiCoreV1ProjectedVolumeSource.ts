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

import { IoK8sApiCoreV1VolumeProjection } from '../models/IoK8sApiCoreV1VolumeProjection';
import { HttpFile } from '../http/http';

/**
* Represents a projected volume source
*/
export class IoK8sApiCoreV1ProjectedVolumeSource {
    /**
    * Mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
    */
    'defaultMode'?: number;
    /**
    * list of volume projections
    */
    'sources'?: Array<IoK8sApiCoreV1VolumeProjection>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "defaultMode",
            "baseName": "defaultMode",
            "type": "number",
            "format": ""
        },
        {
            "name": "sources",
            "baseName": "sources",
            "type": "Array<IoK8sApiCoreV1VolumeProjection>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1ProjectedVolumeSource.attributeTypeMap;
    }

    public constructor() {
    }
}

