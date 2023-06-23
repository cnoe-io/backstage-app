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

import { IoK8sApiCoreV1SecretKeySelector } from '../models/IoK8sApiCoreV1SecretKeySelector';
import { HttpFile } from '../http/http';

/**
* ArtifactoryArtifact is the location of an artifactory artifact
*/
export class IoArgoprojWorkflowV1alpha1ArtifactoryArtifact {
    'passwordSecret'?: IoK8sApiCoreV1SecretKeySelector;
    /**
    * URL of the artifact
    */
    'url': string;
    'usernameSecret'?: IoK8sApiCoreV1SecretKeySelector;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "passwordSecret",
            "baseName": "passwordSecret",
            "type": "IoK8sApiCoreV1SecretKeySelector",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "usernameSecret",
            "baseName": "usernameSecret",
            "type": "IoK8sApiCoreV1SecretKeySelector",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojWorkflowV1alpha1ArtifactoryArtifact.attributeTypeMap;
    }

    public constructor() {
    }
}

