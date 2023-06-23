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

import { GrpcGatewayRuntimeStreamError } from '../models/GrpcGatewayRuntimeStreamError';
import { IoK8sApiCoreV1Event } from '../models/IoK8sApiCoreV1Event';
import { HttpFile } from '../http/http';

export class StreamResultOfIoK8sApiCoreV1Event {
    'error'?: GrpcGatewayRuntimeStreamError;
    'result'?: IoK8sApiCoreV1Event;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "error",
            "baseName": "error",
            "type": "GrpcGatewayRuntimeStreamError",
            "format": ""
        },
        {
            "name": "result",
            "baseName": "result",
            "type": "IoK8sApiCoreV1Event",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StreamResultOfIoK8sApiCoreV1Event.attributeTypeMap;
    }

    public constructor() {
    }
}

