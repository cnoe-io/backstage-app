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

import { IoK8sApiCoreV1ExecAction } from '../models/IoK8sApiCoreV1ExecAction';
import { IoK8sApiCoreV1GRPCAction } from '../models/IoK8sApiCoreV1GRPCAction';
import { IoK8sApiCoreV1HTTPGetAction } from '../models/IoK8sApiCoreV1HTTPGetAction';
import { IoK8sApiCoreV1TCPSocketAction } from '../models/IoK8sApiCoreV1TCPSocketAction';
import { HttpFile } from '../http/http';

/**
* Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
*/
export class IoK8sApiCoreV1Probe {
    'exec'?: IoK8sApiCoreV1ExecAction;
    /**
    * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
    */
    'failureThreshold'?: number;
    'grpc'?: IoK8sApiCoreV1GRPCAction;
    'httpGet'?: IoK8sApiCoreV1HTTPGetAction;
    /**
    * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
    */
    'initialDelaySeconds'?: number;
    /**
    * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
    */
    'periodSeconds'?: number;
    /**
    * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
    */
    'successThreshold'?: number;
    'tcpSocket'?: IoK8sApiCoreV1TCPSocketAction;
    /**
    * Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod\'s terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
    */
    'terminationGracePeriodSeconds'?: number;
    /**
    * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
    */
    'timeoutSeconds'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "exec",
            "baseName": "exec",
            "type": "IoK8sApiCoreV1ExecAction",
            "format": ""
        },
        {
            "name": "failureThreshold",
            "baseName": "failureThreshold",
            "type": "number",
            "format": ""
        },
        {
            "name": "grpc",
            "baseName": "grpc",
            "type": "IoK8sApiCoreV1GRPCAction",
            "format": ""
        },
        {
            "name": "httpGet",
            "baseName": "httpGet",
            "type": "IoK8sApiCoreV1HTTPGetAction",
            "format": ""
        },
        {
            "name": "initialDelaySeconds",
            "baseName": "initialDelaySeconds",
            "type": "number",
            "format": ""
        },
        {
            "name": "periodSeconds",
            "baseName": "periodSeconds",
            "type": "number",
            "format": ""
        },
        {
            "name": "successThreshold",
            "baseName": "successThreshold",
            "type": "number",
            "format": ""
        },
        {
            "name": "tcpSocket",
            "baseName": "tcpSocket",
            "type": "IoK8sApiCoreV1TCPSocketAction",
            "format": ""
        },
        {
            "name": "terminationGracePeriodSeconds",
            "baseName": "terminationGracePeriodSeconds",
            "type": "number",
            "format": ""
        },
        {
            "name": "timeoutSeconds",
            "baseName": "timeoutSeconds",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1Probe.attributeTypeMap;
    }

    public constructor() {
    }
}

