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

export class IoArgoprojEventsV1alpha1BitbucketBasicAuth {
    'password'?: IoK8sApiCoreV1SecretKeySelector;
    'username'?: IoK8sApiCoreV1SecretKeySelector;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "password",
            "baseName": "password",
            "type": "IoK8sApiCoreV1SecretKeySelector",
            "format": ""
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "IoK8sApiCoreV1SecretKeySelector",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojEventsV1alpha1BitbucketBasicAuth.attributeTypeMap;
    }

    public constructor() {
    }
}

