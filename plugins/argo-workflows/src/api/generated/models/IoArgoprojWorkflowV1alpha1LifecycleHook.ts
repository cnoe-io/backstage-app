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

import { IoArgoprojWorkflowV1alpha1Arguments } from '../models/IoArgoprojWorkflowV1alpha1Arguments';
import { IoArgoprojWorkflowV1alpha1TemplateRef } from '../models/IoArgoprojWorkflowV1alpha1TemplateRef';
import { HttpFile } from '../http/http';

export class IoArgoprojWorkflowV1alpha1LifecycleHook {
    'arguments'?: IoArgoprojWorkflowV1alpha1Arguments;
    /**
    * Expression is a condition expression for when a node will be retried. If it evaluates to false, the node will not be retried and the retry strategy will be ignored
    */
    'expression'?: string;
    /**
    * Template is the name of the template to execute by the hook
    */
    'template'?: string;
    'templateRef'?: IoArgoprojWorkflowV1alpha1TemplateRef;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "arguments",
            "baseName": "arguments",
            "type": "IoArgoprojWorkflowV1alpha1Arguments",
            "format": ""
        },
        {
            "name": "expression",
            "baseName": "expression",
            "type": "string",
            "format": ""
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "string",
            "format": ""
        },
        {
            "name": "templateRef",
            "baseName": "templateRef",
            "type": "IoArgoprojWorkflowV1alpha1TemplateRef",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojWorkflowV1alpha1LifecycleHook.attributeTypeMap;
    }

    public constructor() {
    }
}
