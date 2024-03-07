// @ts-nocheck
/**
 * Argo Workflows API
 * Argo Workflows is an open source container-native workflow engine for orchestrating parallel jobs on Kubernetes. For more information, please see https://argoproj.github.io/argo-workflows/
 *
 * The version of the OpenAPI document: VERSION
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { IoArgoprojEventsV1alpha1Backoff } from './ioArgoprojEventsV1alpha1Backoff';
import { IoArgoprojEventsV1alpha1RateLimit } from './ioArgoprojEventsV1alpha1RateLimit';
import { IoArgoprojEventsV1alpha1TriggerParameter } from './ioArgoprojEventsV1alpha1TriggerParameter';
import { IoArgoprojEventsV1alpha1TriggerPolicy } from './ioArgoprojEventsV1alpha1TriggerPolicy';
import { IoArgoprojEventsV1alpha1TriggerTemplate } from './ioArgoprojEventsV1alpha1TriggerTemplate';

export class IoArgoprojEventsV1alpha1Trigger {
    'parameters'?: Array<IoArgoprojEventsV1alpha1TriggerParameter>;
    'policy'?: IoArgoprojEventsV1alpha1TriggerPolicy;
    'rateLimit'?: IoArgoprojEventsV1alpha1RateLimit;
    'retryStrategy'?: IoArgoprojEventsV1alpha1Backoff;
    'template'?: IoArgoprojEventsV1alpha1TriggerTemplate;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "Array<IoArgoprojEventsV1alpha1TriggerParameter>"
        },
        {
            "name": "policy",
            "baseName": "policy",
            "type": "IoArgoprojEventsV1alpha1TriggerPolicy"
        },
        {
            "name": "rateLimit",
            "baseName": "rateLimit",
            "type": "IoArgoprojEventsV1alpha1RateLimit"
        },
        {
            "name": "retryStrategy",
            "baseName": "retryStrategy",
            "type": "IoArgoprojEventsV1alpha1Backoff"
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "IoArgoprojEventsV1alpha1TriggerTemplate"
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojEventsV1alpha1Trigger.attributeTypeMap;
    }
}
