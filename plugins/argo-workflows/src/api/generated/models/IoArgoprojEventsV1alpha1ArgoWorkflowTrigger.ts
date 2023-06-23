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

import { IoArgoprojEventsV1alpha1ArtifactLocation } from '../models/IoArgoprojEventsV1alpha1ArtifactLocation';
import { IoArgoprojEventsV1alpha1TriggerParameter } from '../models/IoArgoprojEventsV1alpha1TriggerParameter';
import { HttpFile } from '../http/http';

export class IoArgoprojEventsV1alpha1ArgoWorkflowTrigger {
    'args'?: Array<string>;
    'operation'?: string;
    'parameters'?: Array<IoArgoprojEventsV1alpha1TriggerParameter>;
    'source'?: IoArgoprojEventsV1alpha1ArtifactLocation;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "args",
            "baseName": "args",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "operation",
            "baseName": "operation",
            "type": "string",
            "format": ""
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "Array<IoArgoprojEventsV1alpha1TriggerParameter>",
            "format": ""
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "IoArgoprojEventsV1alpha1ArtifactLocation",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojEventsV1alpha1ArgoWorkflowTrigger.attributeTypeMap;
    }

    public constructor() {
    }
}

