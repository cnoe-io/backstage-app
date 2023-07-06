// @ts-nocheck
/**
 * Argo Workflows API
 * Argo Workflows is an open source container-native workflow engine for orchestrating parallel jobs on Kubernetes. For more information, please see https://argoproj.github.io/argo-workflows/
 *
 * The version of the OpenAPI document: VERSION
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class IoArgoprojEventsV1alpha1GitRemoteConfig {
    /**
    * Name of the remote to fetch from.
    */
    'name'?: string;
    /**
    * URLs the URLs of a remote repository. It must be non-empty. Fetch will always use the first URL, while push will use all of them.
    */
    'urls'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "urls",
            "baseName": "urls",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojEventsV1alpha1GitRemoteConfig.attributeTypeMap;
    }
}
