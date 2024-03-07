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
import { IoK8sApiCoreV1HTTPHeader } from './ioK8sApiCoreV1HTTPHeader';

/**
* HTTPGetAction describes an action based on HTTP Get requests.
*/
export class IoK8sApiCoreV1HTTPGetAction {
    /**
    * Host name to connect to, defaults to the pod IP. You probably want to set \"Host\" in httpHeaders instead.
    */
    'host'?: string;
    /**
    * Custom headers to set in the request. HTTP allows repeated headers.
    */
    'httpHeaders'?: Array<IoK8sApiCoreV1HTTPHeader>;
    /**
    * Path to access on the HTTP server.
    */
    'path'?: string;
    'port': string;
    /**
    * Scheme to use for connecting to the host. Defaults to HTTP.  Possible enum values:  - `\"HTTP\"` means that the scheme used will be http://  - `\"HTTPS\"` means that the scheme used will be https://
    */
    'scheme'?: IoK8sApiCoreV1HTTPGetAction.SchemeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "host",
            "baseName": "host",
            "type": "string"
        },
        {
            "name": "httpHeaders",
            "baseName": "httpHeaders",
            "type": "Array<IoK8sApiCoreV1HTTPHeader>"
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string"
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "string"
        },
        {
            "name": "scheme",
            "baseName": "scheme",
            "type": "IoK8sApiCoreV1HTTPGetAction.SchemeEnum"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1HTTPGetAction.attributeTypeMap;
    }
}

export namespace IoK8sApiCoreV1HTTPGetAction {
    export enum SchemeEnum {
        Http = <any> 'HTTP',
        Https = <any> 'HTTPS'
    }
}