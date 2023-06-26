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

import { IoArgoprojEventsV1alpha1DataFilter } from '../models/IoArgoprojEventsV1alpha1DataFilter';
import { IoArgoprojEventsV1alpha1EventContext } from '../models/IoArgoprojEventsV1alpha1EventContext';
import { IoArgoprojEventsV1alpha1ExprFilter } from '../models/IoArgoprojEventsV1alpha1ExprFilter';
import { IoArgoprojEventsV1alpha1TimeFilter } from '../models/IoArgoprojEventsV1alpha1TimeFilter';
import { HttpFile } from '../http/http';

/**
* EventDependencyFilter defines filters and constraints for a io.argoproj.workflow.v1alpha1.
*/
export class IoArgoprojEventsV1alpha1EventDependencyFilter {
    'context'?: IoArgoprojEventsV1alpha1EventContext;
    'data'?: Array<IoArgoprojEventsV1alpha1DataFilter>;
    /**
    * DataLogicalOperator defines how multiple Data filters (if defined) are evaluated together. Available values: and (&&), or (||) Is optional and if left blank treated as and (&&).
    */
    'dataLogicalOperator'?: string;
    /**
    * ExprLogicalOperator defines how multiple Exprs filters (if defined) are evaluated together. Available values: and (&&), or (||) Is optional and if left blank treated as and (&&).
    */
    'exprLogicalOperator'?: string;
    /**
    * Exprs contains the list of expressions evaluated against the event payload.
    */
    'exprs'?: Array<IoArgoprojEventsV1alpha1ExprFilter>;
    /**
    * Script refers to a Lua script evaluated to determine the validity of an io.argoproj.workflow.v1alpha1.
    */
    'script'?: string;
    'time'?: IoArgoprojEventsV1alpha1TimeFilter;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "context",
            "baseName": "context",
            "type": "IoArgoprojEventsV1alpha1EventContext",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<IoArgoprojEventsV1alpha1DataFilter>",
            "format": ""
        },
        {
            "name": "dataLogicalOperator",
            "baseName": "dataLogicalOperator",
            "type": "string",
            "format": ""
        },
        {
            "name": "exprLogicalOperator",
            "baseName": "exprLogicalOperator",
            "type": "string",
            "format": ""
        },
        {
            "name": "exprs",
            "baseName": "exprs",
            "type": "Array<IoArgoprojEventsV1alpha1ExprFilter>",
            "format": ""
        },
        {
            "name": "script",
            "baseName": "script",
            "type": "string",
            "format": ""
        },
        {
            "name": "time",
            "baseName": "time",
            "type": "IoArgoprojEventsV1alpha1TimeFilter",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojEventsV1alpha1EventDependencyFilter.attributeTypeMap;
    }

    public constructor() {
    }
}
