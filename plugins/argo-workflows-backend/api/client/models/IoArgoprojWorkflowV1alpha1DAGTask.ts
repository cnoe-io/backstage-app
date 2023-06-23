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
import { IoArgoprojWorkflowV1alpha1ContinueOn } from '../models/IoArgoprojWorkflowV1alpha1ContinueOn';
import { IoArgoprojWorkflowV1alpha1LifecycleHook } from '../models/IoArgoprojWorkflowV1alpha1LifecycleHook';
import { IoArgoprojWorkflowV1alpha1Sequence } from '../models/IoArgoprojWorkflowV1alpha1Sequence';
import { IoArgoprojWorkflowV1alpha1Template } from '../models/IoArgoprojWorkflowV1alpha1Template';
import { IoArgoprojWorkflowV1alpha1TemplateRef } from '../models/IoArgoprojWorkflowV1alpha1TemplateRef';
import { HttpFile } from '../http/http';

/**
* DAGTask represents a node in the graph during DAG execution
*/
export class IoArgoprojWorkflowV1alpha1DAGTask {
    'arguments'?: IoArgoprojWorkflowV1alpha1Arguments;
    'continueOn'?: IoArgoprojWorkflowV1alpha1ContinueOn;
    /**
    * Dependencies are name of other targets which this depends on
    */
    'dependencies'?: Array<string>;
    /**
    * Depends are name of other targets which this depends on
    */
    'depends'?: string;
    /**
    * Hooks hold the lifecycle hook which is invoked at lifecycle of task, irrespective of the success, failure, or error status of the primary task
    */
    'hooks'?: { [key: string]: IoArgoprojWorkflowV1alpha1LifecycleHook; };
    'inline'?: IoArgoprojWorkflowV1alpha1Template;
    /**
    * Name is the name of the target
    */
    'name': string;
    /**
    * OnExit is a template reference which is invoked at the end of the template, irrespective of the success, failure, or error of the primary template. DEPRECATED: Use Hooks[exit].Template instead.
    */
    'onExit'?: string;
    /**
    * Name of template to execute
    */
    'template'?: string;
    'templateRef'?: IoArgoprojWorkflowV1alpha1TemplateRef;
    /**
    * When is an expression in which the task should conditionally execute
    */
    'when'?: string;
    /**
    * WithItems expands a task into multiple parallel tasks from the items in the list
    */
    'withItems'?: Array<any>;
    /**
    * WithParam expands a task into multiple parallel tasks from the value in the parameter, which is expected to be a JSON list.
    */
    'withParam'?: string;
    'withSequence'?: IoArgoprojWorkflowV1alpha1Sequence;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "arguments",
            "baseName": "arguments",
            "type": "IoArgoprojWorkflowV1alpha1Arguments",
            "format": ""
        },
        {
            "name": "continueOn",
            "baseName": "continueOn",
            "type": "IoArgoprojWorkflowV1alpha1ContinueOn",
            "format": ""
        },
        {
            "name": "dependencies",
            "baseName": "dependencies",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "depends",
            "baseName": "depends",
            "type": "string",
            "format": ""
        },
        {
            "name": "hooks",
            "baseName": "hooks",
            "type": "{ [key: string]: IoArgoprojWorkflowV1alpha1LifecycleHook; }",
            "format": ""
        },
        {
            "name": "inline",
            "baseName": "inline",
            "type": "IoArgoprojWorkflowV1alpha1Template",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "onExit",
            "baseName": "onExit",
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
        },
        {
            "name": "when",
            "baseName": "when",
            "type": "string",
            "format": ""
        },
        {
            "name": "withItems",
            "baseName": "withItems",
            "type": "Array<any>",
            "format": ""
        },
        {
            "name": "withParam",
            "baseName": "withParam",
            "type": "string",
            "format": ""
        },
        {
            "name": "withSequence",
            "baseName": "withSequence",
            "type": "IoArgoprojWorkflowV1alpha1Sequence",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojWorkflowV1alpha1DAGTask.attributeTypeMap;
    }

    public constructor() {
    }
}

