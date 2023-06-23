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

import { IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplate } from '../models/IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplate';
import { IoK8sApimachineryPkgApisMetaV1CreateOptions } from '../models/IoK8sApimachineryPkgApisMetaV1CreateOptions';
import { HttpFile } from '../http/http';

export class IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplateCreateRequest {
    'createOptions'?: IoK8sApimachineryPkgApisMetaV1CreateOptions;
    'template'?: IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplate;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "createOptions",
            "baseName": "createOptions",
            "type": "IoK8sApimachineryPkgApisMetaV1CreateOptions",
            "format": ""
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplate",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojWorkflowV1alpha1ClusterWorkflowTemplateCreateRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

