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

import { IoArgoprojWorkflowV1alpha1ArtifactNodeSpec } from '../models/IoArgoprojWorkflowV1alpha1ArtifactNodeSpec';
import { HttpFile } from '../http/http';

/**
* ArtifactGCSpec specifies the Artifacts that need to be deleted
*/
export class IoArgoprojWorkflowV1alpha1ArtifactGCSpec {
    /**
    * ArtifactsByNode maps Node name to information pertaining to Artifacts on that Node
    */
    'artifactsByNode'?: { [key: string]: IoArgoprojWorkflowV1alpha1ArtifactNodeSpec; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "artifactsByNode",
            "baseName": "artifactsByNode",
            "type": "{ [key: string]: IoArgoprojWorkflowV1alpha1ArtifactNodeSpec; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojWorkflowV1alpha1ArtifactGCSpec.attributeTypeMap;
    }

    public constructor() {
    }
}

