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

import { IoK8sApiCoreV1SELinuxOptions } from '../models/IoK8sApiCoreV1SELinuxOptions';
import { IoK8sApiCoreV1SeccompProfile } from '../models/IoK8sApiCoreV1SeccompProfile';
import { IoK8sApiCoreV1Sysctl } from '../models/IoK8sApiCoreV1Sysctl';
import { IoK8sApiCoreV1WindowsSecurityContextOptions } from '../models/IoK8sApiCoreV1WindowsSecurityContextOptions';
import { HttpFile } from '../http/http';

/**
* PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext.
*/
export class IoK8sApiCoreV1PodSecurityContext {
    /**
    * A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod:  1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR\'d with rw-rw----  If unset, the Kubelet will not modify the ownership and permissions of any volume. Note that this field cannot be set when spec.os.name is windows.
    */
    'fsGroup'?: number;
    /**
    * fsGroupChangePolicy defines behavior of changing ownership and permission of the volume before being exposed inside Pod. This field will only apply to volume types which support fsGroup based ownership(and permissions). It will have no effect on ephemeral volume types such as: secret, configmaps and emptydir. Valid values are \"OnRootMismatch\" and \"Always\". If not specified, \"Always\" is used. Note that this field cannot be set when spec.os.name is windows.
    */
    'fsGroupChangePolicy'?: string;
    /**
    * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
    */
    'runAsGroup'?: number;
    /**
    * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
    */
    'runAsNonRoot'?: boolean;
    /**
    * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
    */
    'runAsUser'?: number;
    'seLinuxOptions'?: IoK8sApiCoreV1SELinuxOptions;
    'seccompProfile'?: IoK8sApiCoreV1SeccompProfile;
    /**
    * A list of groups applied to the first process run in each container, in addition to the container\'s primary GID.  If unspecified, no groups will be added to any container. Note that this field cannot be set when spec.os.name is windows.
    */
    'supplementalGroups'?: Array<number>;
    /**
    * Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch. Note that this field cannot be set when spec.os.name is windows.
    */
    'sysctls'?: Array<IoK8sApiCoreV1Sysctl>;
    'windowsOptions'?: IoK8sApiCoreV1WindowsSecurityContextOptions;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "fsGroup",
            "baseName": "fsGroup",
            "type": "number",
            "format": ""
        },
        {
            "name": "fsGroupChangePolicy",
            "baseName": "fsGroupChangePolicy",
            "type": "string",
            "format": ""
        },
        {
            "name": "runAsGroup",
            "baseName": "runAsGroup",
            "type": "number",
            "format": ""
        },
        {
            "name": "runAsNonRoot",
            "baseName": "runAsNonRoot",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "runAsUser",
            "baseName": "runAsUser",
            "type": "number",
            "format": ""
        },
        {
            "name": "seLinuxOptions",
            "baseName": "seLinuxOptions",
            "type": "IoK8sApiCoreV1SELinuxOptions",
            "format": ""
        },
        {
            "name": "seccompProfile",
            "baseName": "seccompProfile",
            "type": "IoK8sApiCoreV1SeccompProfile",
            "format": ""
        },
        {
            "name": "supplementalGroups",
            "baseName": "supplementalGroups",
            "type": "Array<number>",
            "format": "int64"
        },
        {
            "name": "sysctls",
            "baseName": "sysctls",
            "type": "Array<IoK8sApiCoreV1Sysctl>",
            "format": ""
        },
        {
            "name": "windowsOptions",
            "baseName": "windowsOptions",
            "type": "IoK8sApiCoreV1WindowsSecurityContextOptions",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1PodSecurityContext.attributeTypeMap;
    }

    public constructor() {
    }
}
