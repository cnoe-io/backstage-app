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
* S3EncryptionOptions used to determine encryption options during s3 operations
*/
export class IoArgoprojWorkflowV1alpha1S3EncryptionOptions {
    /**
    * EnableEncryption tells the driver to encrypt objects if set to true. If kmsKeyId and serverSideCustomerKeySecret are not set, SSE-S3 will be used
    */
    'enableEncryption'?: boolean;
    /**
    * KmsEncryptionContext is a json blob that contains an encryption context. See https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context for more information
    */
    'kmsEncryptionContext'?: string;
    /**
    * KMSKeyId tells the driver to encrypt the object using the specified KMS Key.
    */
    'kmsKeyId'?: string;
    'serverSideCustomerKeySecret'?: IoK8sApiCoreV1SecretKeySelector;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "enableEncryption",
            "baseName": "enableEncryption",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "kmsEncryptionContext",
            "baseName": "kmsEncryptionContext",
            "type": "string",
            "format": ""
        },
        {
            "name": "kmsKeyId",
            "baseName": "kmsKeyId",
            "type": "string",
            "format": ""
        },
        {
            "name": "serverSideCustomerKeySecret",
            "baseName": "serverSideCustomerKeySecret",
            "type": "IoK8sApiCoreV1SecretKeySelector",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojWorkflowV1alpha1S3EncryptionOptions.attributeTypeMap;
    }

    public constructor() {
    }
}
