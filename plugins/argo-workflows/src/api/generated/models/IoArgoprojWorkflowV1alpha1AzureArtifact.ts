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
* AzureArtifact is the location of a an Azure Storage artifact
*/
export class IoArgoprojWorkflowV1alpha1AzureArtifact {
    'accountKeySecret'?: IoK8sApiCoreV1SecretKeySelector;
    /**
    * Blob is the blob name (i.e., path) in the container where the artifact resides
    */
    'blob': string;
    /**
    * Container is the container where resources will be stored
    */
    'container': string;
    /**
    * Endpoint is the service url associated with an account. It is most likely \"https://<ACCOUNT_NAME>.blob.core.windows.net\"
    */
    'endpoint': string;
    /**
    * UseSDKCreds tells the driver to figure out credentials based on sdk defaults.
    */
    'useSDKCreds'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "accountKeySecret",
            "baseName": "accountKeySecret",
            "type": "IoK8sApiCoreV1SecretKeySelector",
            "format": ""
        },
        {
            "name": "blob",
            "baseName": "blob",
            "type": "string",
            "format": ""
        },
        {
            "name": "container",
            "baseName": "container",
            "type": "string",
            "format": ""
        },
        {
            "name": "endpoint",
            "baseName": "endpoint",
            "type": "string",
            "format": ""
        },
        {
            "name": "useSDKCreds",
            "baseName": "useSDKCreds",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojWorkflowV1alpha1AzureArtifact.attributeTypeMap;
    }

    public constructor() {
    }
}

