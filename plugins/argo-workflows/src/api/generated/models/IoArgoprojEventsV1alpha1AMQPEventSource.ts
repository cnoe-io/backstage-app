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

import { IoArgoprojEventsV1alpha1AMQPConsumeConfig } from '../models/IoArgoprojEventsV1alpha1AMQPConsumeConfig';
import { IoArgoprojEventsV1alpha1AMQPExchangeDeclareConfig } from '../models/IoArgoprojEventsV1alpha1AMQPExchangeDeclareConfig';
import { IoArgoprojEventsV1alpha1AMQPQueueBindConfig } from '../models/IoArgoprojEventsV1alpha1AMQPQueueBindConfig';
import { IoArgoprojEventsV1alpha1AMQPQueueDeclareConfig } from '../models/IoArgoprojEventsV1alpha1AMQPQueueDeclareConfig';
import { IoArgoprojEventsV1alpha1Backoff } from '../models/IoArgoprojEventsV1alpha1Backoff';
import { IoArgoprojEventsV1alpha1BasicAuth } from '../models/IoArgoprojEventsV1alpha1BasicAuth';
import { IoArgoprojEventsV1alpha1EventSourceFilter } from '../models/IoArgoprojEventsV1alpha1EventSourceFilter';
import { IoArgoprojEventsV1alpha1TLSConfig } from '../models/IoArgoprojEventsV1alpha1TLSConfig';
import { IoK8sApiCoreV1SecretKeySelector } from '../models/IoK8sApiCoreV1SecretKeySelector';
import { HttpFile } from '../http/http';

export class IoArgoprojEventsV1alpha1AMQPEventSource {
    'auth'?: IoArgoprojEventsV1alpha1BasicAuth;
    'connectionBackoff'?: IoArgoprojEventsV1alpha1Backoff;
    'consume'?: IoArgoprojEventsV1alpha1AMQPConsumeConfig;
    'exchangeDeclare'?: IoArgoprojEventsV1alpha1AMQPExchangeDeclareConfig;
    'exchangeName'?: string;
    'exchangeType'?: string;
    'filter'?: IoArgoprojEventsV1alpha1EventSourceFilter;
    'jsonBody'?: boolean;
    'metadata'?: { [key: string]: string; };
    'queueBind'?: IoArgoprojEventsV1alpha1AMQPQueueBindConfig;
    'queueDeclare'?: IoArgoprojEventsV1alpha1AMQPQueueDeclareConfig;
    'routingKey'?: string;
    'tls'?: IoArgoprojEventsV1alpha1TLSConfig;
    'url'?: string;
    'urlSecret'?: IoK8sApiCoreV1SecretKeySelector;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "auth",
            "baseName": "auth",
            "type": "IoArgoprojEventsV1alpha1BasicAuth",
            "format": ""
        },
        {
            "name": "connectionBackoff",
            "baseName": "connectionBackoff",
            "type": "IoArgoprojEventsV1alpha1Backoff",
            "format": ""
        },
        {
            "name": "consume",
            "baseName": "consume",
            "type": "IoArgoprojEventsV1alpha1AMQPConsumeConfig",
            "format": ""
        },
        {
            "name": "exchangeDeclare",
            "baseName": "exchangeDeclare",
            "type": "IoArgoprojEventsV1alpha1AMQPExchangeDeclareConfig",
            "format": ""
        },
        {
            "name": "exchangeName",
            "baseName": "exchangeName",
            "type": "string",
            "format": ""
        },
        {
            "name": "exchangeType",
            "baseName": "exchangeType",
            "type": "string",
            "format": ""
        },
        {
            "name": "filter",
            "baseName": "filter",
            "type": "IoArgoprojEventsV1alpha1EventSourceFilter",
            "format": ""
        },
        {
            "name": "jsonBody",
            "baseName": "jsonBody",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "queueBind",
            "baseName": "queueBind",
            "type": "IoArgoprojEventsV1alpha1AMQPQueueBindConfig",
            "format": ""
        },
        {
            "name": "queueDeclare",
            "baseName": "queueDeclare",
            "type": "IoArgoprojEventsV1alpha1AMQPQueueDeclareConfig",
            "format": ""
        },
        {
            "name": "routingKey",
            "baseName": "routingKey",
            "type": "string",
            "format": ""
        },
        {
            "name": "tls",
            "baseName": "tls",
            "type": "IoArgoprojEventsV1alpha1TLSConfig",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "urlSecret",
            "baseName": "urlSecret",
            "type": "IoK8sApiCoreV1SecretKeySelector",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojEventsV1alpha1AMQPEventSource.attributeTypeMap;
    }

    public constructor() {
    }
}
