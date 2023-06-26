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
* ArtGCStatus maintains state related to ArtifactGC
*/
export class IoArgoprojWorkflowV1alpha1ArtGCStatus {
    /**
    * if this is true, we already checked to see if we need to do it and we don\'t
    */
    'notSpecified'?: boolean;
    /**
    * have completed Pods been processed? (mapped by Pod name) used to prevent re-processing the Status of a Pod more than once
    */
    'podsRecouped'?: { [key: string]: boolean; };
    /**
    * have Pods been started to perform this strategy? (enables us not to re-process what we\'ve already done)
    */
    'strategiesProcessed'?: { [key: string]: boolean; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "notSpecified",
            "baseName": "notSpecified",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "podsRecouped",
            "baseName": "podsRecouped",
            "type": "{ [key: string]: boolean; }",
            "format": ""
        },
        {
            "name": "strategiesProcessed",
            "baseName": "strategiesProcessed",
            "type": "{ [key: string]: boolean; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojWorkflowV1alpha1ArtGCStatus.attributeTypeMap;
    }

    public constructor() {
    }
}
