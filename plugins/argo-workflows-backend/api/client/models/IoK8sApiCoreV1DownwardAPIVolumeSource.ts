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
* DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling.
*/
export class IoK8sApiCoreV1DownwardAPIVolumeSource {
    /**
    * Optional: mode bits to use on created files by default. Must be a Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
    */
    'defaultMode'?: number;
    /**
    * Items is a list of downward API volume file
    */
    'items'?: Array<IoK8sApiCoreV1DownwardAPIVolumeFile>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "defaultMode",
            "baseName": "defaultMode",
            "type": "number",
            "format": ""
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<IoK8sApiCoreV1DownwardAPIVolumeFile>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1DownwardAPIVolumeSource.attributeTypeMap;
    }

    public constructor() {
    }
}

