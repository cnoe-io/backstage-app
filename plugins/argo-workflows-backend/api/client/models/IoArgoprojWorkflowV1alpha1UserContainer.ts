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

import { IoK8sApiCoreV1ContainerPort } from '../models/IoK8sApiCoreV1ContainerPort';
import { IoK8sApiCoreV1EnvFromSource } from '../models/IoK8sApiCoreV1EnvFromSource';
import { IoK8sApiCoreV1EnvVar } from '../models/IoK8sApiCoreV1EnvVar';
import { IoK8sApiCoreV1Lifecycle } from '../models/IoK8sApiCoreV1Lifecycle';
import { IoK8sApiCoreV1Probe } from '../models/IoK8sApiCoreV1Probe';
import { IoK8sApiCoreV1ResourceRequirements } from '../models/IoK8sApiCoreV1ResourceRequirements';
import { IoK8sApiCoreV1SecurityContext } from '../models/IoK8sApiCoreV1SecurityContext';
import { IoK8sApiCoreV1VolumeDevice } from '../models/IoK8sApiCoreV1VolumeDevice';
import { IoK8sApiCoreV1VolumeMount } from '../models/IoK8sApiCoreV1VolumeMount';
import { HttpFile } from '../http/http';

/**
* UserContainer is a container specified by a user.
*/
export class IoArgoprojWorkflowV1alpha1UserContainer {
    /**
    * Arguments to the entrypoint. The container image\'s CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container\'s environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. \"$$(VAR_NAME)\" will produce the string literal \"$(VAR_NAME)\". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
    */
    'args'?: Array<string>;
    /**
    * Entrypoint array. Not executed within a shell. The container image\'s ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container\'s environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. \"$$(VAR_NAME)\" will produce the string literal \"$(VAR_NAME)\". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
    */
    'command'?: Array<string>;
    /**
    * List of environment variables to set in the container. Cannot be updated.
    */
    'env'?: Array<IoK8sApiCoreV1EnvVar>;
    /**
    * List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.
    */
    'envFrom'?: Array<IoK8sApiCoreV1EnvFromSource>;
    /**
    * Container image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets.
    */
    'image'?: string;
    /**
    * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
    */
    'imagePullPolicy'?: string;
    'lifecycle'?: IoK8sApiCoreV1Lifecycle;
    'livenessProbe'?: IoK8sApiCoreV1Probe;
    /**
    * MirrorVolumeMounts will mount the same volumes specified in the main container to the container (including artifacts), at the same mountPaths. This enables dind daemon to partially see the same filesystem as the main container in order to use features such as docker volume binding
    */
    'mirrorVolumeMounts'?: boolean;
    /**
    * Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.
    */
    'name': string;
    /**
    * List of ports to expose from the container. Exposing a port here gives the system additional information about the network connections a container uses, but is primarily informational. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default \"0.0.0.0\" address inside a container will be accessible from the network. Cannot be updated.
    */
    'ports'?: Array<IoK8sApiCoreV1ContainerPort>;
    'readinessProbe'?: IoK8sApiCoreV1Probe;
    'resources'?: IoK8sApiCoreV1ResourceRequirements;
    'securityContext'?: IoK8sApiCoreV1SecurityContext;
    'startupProbe'?: IoK8sApiCoreV1Probe;
    /**
    * Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false.
    */
    'stdin'?: boolean;
    /**
    * Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false
    */
    'stdinOnce'?: boolean;
    /**
    * Optional: Path at which the file to which the container\'s termination message will be written is mounted into the container\'s filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.
    */
    'terminationMessagePath'?: string;
    /**
    * Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.
    */
    'terminationMessagePolicy'?: string;
    /**
    * Whether this container should allocate a TTY for itself, also requires \'stdin\' to be true. Default is false.
    */
    'tty'?: boolean;
    /**
    * volumeDevices is the list of block devices to be used by the container.
    */
    'volumeDevices'?: Array<IoK8sApiCoreV1VolumeDevice>;
    /**
    * Pod volumes to mount into the container\'s filesystem. Cannot be updated.
    */
    'volumeMounts'?: Array<IoK8sApiCoreV1VolumeMount>;
    /**
    * Container\'s working directory. If not specified, the container runtime\'s default will be used, which might be configured in the container image. Cannot be updated.
    */
    'workingDir'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "args",
            "baseName": "args",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "command",
            "baseName": "command",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "env",
            "baseName": "env",
            "type": "Array<IoK8sApiCoreV1EnvVar>",
            "format": ""
        },
        {
            "name": "envFrom",
            "baseName": "envFrom",
            "type": "Array<IoK8sApiCoreV1EnvFromSource>",
            "format": ""
        },
        {
            "name": "image",
            "baseName": "image",
            "type": "string",
            "format": ""
        },
        {
            "name": "imagePullPolicy",
            "baseName": "imagePullPolicy",
            "type": "string",
            "format": ""
        },
        {
            "name": "lifecycle",
            "baseName": "lifecycle",
            "type": "IoK8sApiCoreV1Lifecycle",
            "format": ""
        },
        {
            "name": "livenessProbe",
            "baseName": "livenessProbe",
            "type": "IoK8sApiCoreV1Probe",
            "format": ""
        },
        {
            "name": "mirrorVolumeMounts",
            "baseName": "mirrorVolumeMounts",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "ports",
            "baseName": "ports",
            "type": "Array<IoK8sApiCoreV1ContainerPort>",
            "format": ""
        },
        {
            "name": "readinessProbe",
            "baseName": "readinessProbe",
            "type": "IoK8sApiCoreV1Probe",
            "format": ""
        },
        {
            "name": "resources",
            "baseName": "resources",
            "type": "IoK8sApiCoreV1ResourceRequirements",
            "format": ""
        },
        {
            "name": "securityContext",
            "baseName": "securityContext",
            "type": "IoK8sApiCoreV1SecurityContext",
            "format": ""
        },
        {
            "name": "startupProbe",
            "baseName": "startupProbe",
            "type": "IoK8sApiCoreV1Probe",
            "format": ""
        },
        {
            "name": "stdin",
            "baseName": "stdin",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "stdinOnce",
            "baseName": "stdinOnce",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "terminationMessagePath",
            "baseName": "terminationMessagePath",
            "type": "string",
            "format": ""
        },
        {
            "name": "terminationMessagePolicy",
            "baseName": "terminationMessagePolicy",
            "type": "string",
            "format": ""
        },
        {
            "name": "tty",
            "baseName": "tty",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "volumeDevices",
            "baseName": "volumeDevices",
            "type": "Array<IoK8sApiCoreV1VolumeDevice>",
            "format": ""
        },
        {
            "name": "volumeMounts",
            "baseName": "volumeMounts",
            "type": "Array<IoK8sApiCoreV1VolumeMount>",
            "format": ""
        },
        {
            "name": "workingDir",
            "baseName": "workingDir",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojWorkflowV1alpha1UserContainer.attributeTypeMap;
    }

    public constructor() {
    }
}

