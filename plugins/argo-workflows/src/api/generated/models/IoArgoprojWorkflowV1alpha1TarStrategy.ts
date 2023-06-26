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
* TarStrategy will tar and gzip the file or directory when saving
*/
export class IoArgoprojWorkflowV1alpha1TarStrategy {
    /**
    * CompressionLevel specifies the gzip compression level to use for the artifact. Defaults to gzip.DefaultCompression.
    */
    'compressionLevel'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "compressionLevel",
            "baseName": "compressionLevel",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojWorkflowV1alpha1TarStrategy.attributeTypeMap;
    }

    public constructor() {
    }
}
