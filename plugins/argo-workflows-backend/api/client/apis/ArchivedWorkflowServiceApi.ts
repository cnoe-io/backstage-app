// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { GrpcGatewayRuntimeError } from '../models/GrpcGatewayRuntimeError';
import { IoArgoprojWorkflowV1alpha1LabelKeys } from '../models/IoArgoprojWorkflowV1alpha1LabelKeys';
import { IoArgoprojWorkflowV1alpha1LabelValues } from '../models/IoArgoprojWorkflowV1alpha1LabelValues';
import { IoArgoprojWorkflowV1alpha1ResubmitArchivedWorkflowRequest } from '../models/IoArgoprojWorkflowV1alpha1ResubmitArchivedWorkflowRequest';
import { IoArgoprojWorkflowV1alpha1RetryArchivedWorkflowRequest } from '../models/IoArgoprojWorkflowV1alpha1RetryArchivedWorkflowRequest';
import { IoArgoprojWorkflowV1alpha1Workflow } from '../models/IoArgoprojWorkflowV1alpha1Workflow';
import { IoArgoprojWorkflowV1alpha1WorkflowList } from '../models/IoArgoprojWorkflowV1alpha1WorkflowList';

/**
 * no description
 */
export class ArchivedWorkflowServiceApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param uid 
     * @param namespace 
     */
    public async archivedWorkflowServiceDeleteArchivedWorkflow(uid: string, namespace?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'uid' is not null or undefined
        if (uid === null || uid === undefined) {
            throw new RequiredError("ArchivedWorkflowServiceApi", "archivedWorkflowServiceDeleteArchivedWorkflow", "uid");
        }



        // Path Params
        const localVarPath = '/api/v1/archived-workflows/{uid}'
            .replace('{' + 'uid' + '}', encodeURIComponent(String(uid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (namespace !== undefined) {
            requestContext.setQueryParam("namespace", ObjectSerializer.serialize(namespace, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param uid 
     * @param namespace 
     * @param name 
     */
    public async archivedWorkflowServiceGetArchivedWorkflow(uid: string, namespace?: string, name?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'uid' is not null or undefined
        if (uid === null || uid === undefined) {
            throw new RequiredError("ArchivedWorkflowServiceApi", "archivedWorkflowServiceGetArchivedWorkflow", "uid");
        }




        // Path Params
        const localVarPath = '/api/v1/archived-workflows/{uid}'
            .replace('{' + 'uid' + '}', encodeURIComponent(String(uid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (namespace !== undefined) {
            requestContext.setQueryParam("namespace", ObjectSerializer.serialize(namespace, "string", ""));
        }

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param namespace 
     */
    public async archivedWorkflowServiceListArchivedWorkflowLabelKeys(namespace?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/api/v1/archived-workflows-label-keys';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (namespace !== undefined) {
            requestContext.setQueryParam("namespace", ObjectSerializer.serialize(namespace, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param listOptionsLabelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything. +optional.
     * @param listOptionsFieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything. +optional.
     * @param listOptionsWatch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. +optional.
     * @param listOptionsAllowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. +optional.
     * @param listOptionsResourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @param listOptionsResourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @param listOptionsTimeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. +optional.
     * @param listOptionsLimit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param listOptionsContinue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param namespace 
     */
    public async archivedWorkflowServiceListArchivedWorkflowLabelValues(listOptionsLabelSelector?: string, listOptionsFieldSelector?: string, listOptionsWatch?: boolean, listOptionsAllowWatchBookmarks?: boolean, listOptionsResourceVersion?: string, listOptionsResourceVersionMatch?: string, listOptionsTimeoutSeconds?: string, listOptionsLimit?: string, listOptionsContinue?: string, namespace?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;











        // Path Params
        const localVarPath = '/api/v1/archived-workflows-label-values';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (listOptionsLabelSelector !== undefined) {
            requestContext.setQueryParam("listOptions.labelSelector", ObjectSerializer.serialize(listOptionsLabelSelector, "string", ""));
        }

        // Query Params
        if (listOptionsFieldSelector !== undefined) {
            requestContext.setQueryParam("listOptions.fieldSelector", ObjectSerializer.serialize(listOptionsFieldSelector, "string", ""));
        }

        // Query Params
        if (listOptionsWatch !== undefined) {
            requestContext.setQueryParam("listOptions.watch", ObjectSerializer.serialize(listOptionsWatch, "boolean", ""));
        }

        // Query Params
        if (listOptionsAllowWatchBookmarks !== undefined) {
            requestContext.setQueryParam("listOptions.allowWatchBookmarks", ObjectSerializer.serialize(listOptionsAllowWatchBookmarks, "boolean", ""));
        }

        // Query Params
        if (listOptionsResourceVersion !== undefined) {
            requestContext.setQueryParam("listOptions.resourceVersion", ObjectSerializer.serialize(listOptionsResourceVersion, "string", ""));
        }

        // Query Params
        if (listOptionsResourceVersionMatch !== undefined) {
            requestContext.setQueryParam("listOptions.resourceVersionMatch", ObjectSerializer.serialize(listOptionsResourceVersionMatch, "string", ""));
        }

        // Query Params
        if (listOptionsTimeoutSeconds !== undefined) {
            requestContext.setQueryParam("listOptions.timeoutSeconds", ObjectSerializer.serialize(listOptionsTimeoutSeconds, "string", "int64"));
        }

        // Query Params
        if (listOptionsLimit !== undefined) {
            requestContext.setQueryParam("listOptions.limit", ObjectSerializer.serialize(listOptionsLimit, "string", "int64"));
        }

        // Query Params
        if (listOptionsContinue !== undefined) {
            requestContext.setQueryParam("listOptions.continue", ObjectSerializer.serialize(listOptionsContinue, "string", ""));
        }

        // Query Params
        if (namespace !== undefined) {
            requestContext.setQueryParam("namespace", ObjectSerializer.serialize(namespace, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param listOptionsLabelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything. +optional.
     * @param listOptionsFieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything. +optional.
     * @param listOptionsWatch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. +optional.
     * @param listOptionsAllowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. +optional.
     * @param listOptionsResourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @param listOptionsResourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @param listOptionsTimeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. +optional.
     * @param listOptionsLimit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param listOptionsContinue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param namePrefix 
     * @param namespace 
     */
    public async archivedWorkflowServiceListArchivedWorkflows(listOptionsLabelSelector?: string, listOptionsFieldSelector?: string, listOptionsWatch?: boolean, listOptionsAllowWatchBookmarks?: boolean, listOptionsResourceVersion?: string, listOptionsResourceVersionMatch?: string, listOptionsTimeoutSeconds?: string, listOptionsLimit?: string, listOptionsContinue?: string, namePrefix?: string, namespace?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;












        // Path Params
        const localVarPath = '/api/v1/archived-workflows';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (listOptionsLabelSelector !== undefined) {
            requestContext.setQueryParam("listOptions.labelSelector", ObjectSerializer.serialize(listOptionsLabelSelector, "string", ""));
        }

        // Query Params
        if (listOptionsFieldSelector !== undefined) {
            requestContext.setQueryParam("listOptions.fieldSelector", ObjectSerializer.serialize(listOptionsFieldSelector, "string", ""));
        }

        // Query Params
        if (listOptionsWatch !== undefined) {
            requestContext.setQueryParam("listOptions.watch", ObjectSerializer.serialize(listOptionsWatch, "boolean", ""));
        }

        // Query Params
        if (listOptionsAllowWatchBookmarks !== undefined) {
            requestContext.setQueryParam("listOptions.allowWatchBookmarks", ObjectSerializer.serialize(listOptionsAllowWatchBookmarks, "boolean", ""));
        }

        // Query Params
        if (listOptionsResourceVersion !== undefined) {
            requestContext.setQueryParam("listOptions.resourceVersion", ObjectSerializer.serialize(listOptionsResourceVersion, "string", ""));
        }

        // Query Params
        if (listOptionsResourceVersionMatch !== undefined) {
            requestContext.setQueryParam("listOptions.resourceVersionMatch", ObjectSerializer.serialize(listOptionsResourceVersionMatch, "string", ""));
        }

        // Query Params
        if (listOptionsTimeoutSeconds !== undefined) {
            requestContext.setQueryParam("listOptions.timeoutSeconds", ObjectSerializer.serialize(listOptionsTimeoutSeconds, "string", "int64"));
        }

        // Query Params
        if (listOptionsLimit !== undefined) {
            requestContext.setQueryParam("listOptions.limit", ObjectSerializer.serialize(listOptionsLimit, "string", "int64"));
        }

        // Query Params
        if (listOptionsContinue !== undefined) {
            requestContext.setQueryParam("listOptions.continue", ObjectSerializer.serialize(listOptionsContinue, "string", ""));
        }

        // Query Params
        if (namePrefix !== undefined) {
            requestContext.setQueryParam("namePrefix", ObjectSerializer.serialize(namePrefix, "string", ""));
        }

        // Query Params
        if (namespace !== undefined) {
            requestContext.setQueryParam("namespace", ObjectSerializer.serialize(namespace, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param uid 
     * @param body 
     */
    public async archivedWorkflowServiceResubmitArchivedWorkflow(uid: string, body: IoArgoprojWorkflowV1alpha1ResubmitArchivedWorkflowRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'uid' is not null or undefined
        if (uid === null || uid === undefined) {
            throw new RequiredError("ArchivedWorkflowServiceApi", "archivedWorkflowServiceResubmitArchivedWorkflow", "uid");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("ArchivedWorkflowServiceApi", "archivedWorkflowServiceResubmitArchivedWorkflow", "body");
        }


        // Path Params
        const localVarPath = '/api/v1/archived-workflows/{uid}/resubmit'
            .replace('{' + 'uid' + '}', encodeURIComponent(String(uid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "IoArgoprojWorkflowV1alpha1ResubmitArchivedWorkflowRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param uid 
     * @param body 
     */
    public async archivedWorkflowServiceRetryArchivedWorkflow(uid: string, body: IoArgoprojWorkflowV1alpha1RetryArchivedWorkflowRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'uid' is not null or undefined
        if (uid === null || uid === undefined) {
            throw new RequiredError("ArchivedWorkflowServiceApi", "archivedWorkflowServiceRetryArchivedWorkflow", "uid");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("ArchivedWorkflowServiceApi", "archivedWorkflowServiceRetryArchivedWorkflow", "body");
        }


        // Path Params
        const localVarPath = '/api/v1/archived-workflows/{uid}/retry'
            .replace('{' + 'uid' + '}', encodeURIComponent(String(uid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "IoArgoprojWorkflowV1alpha1RetryArchivedWorkflowRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ArchivedWorkflowServiceApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to archivedWorkflowServiceDeleteArchivedWorkflow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async archivedWorkflowServiceDeleteArchivedWorkflow(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: GrpcGatewayRuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GrpcGatewayRuntimeError", ""
            ) as GrpcGatewayRuntimeError;
            throw new ApiException<GrpcGatewayRuntimeError>(response.httpStatusCode, "An unexpected error response.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to archivedWorkflowServiceGetArchivedWorkflow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async archivedWorkflowServiceGetArchivedWorkflow(response: ResponseContext): Promise<IoArgoprojWorkflowV1alpha1Workflow > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: IoArgoprojWorkflowV1alpha1Workflow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IoArgoprojWorkflowV1alpha1Workflow", ""
            ) as IoArgoprojWorkflowV1alpha1Workflow;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: GrpcGatewayRuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GrpcGatewayRuntimeError", ""
            ) as GrpcGatewayRuntimeError;
            throw new ApiException<GrpcGatewayRuntimeError>(response.httpStatusCode, "An unexpected error response.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: IoArgoprojWorkflowV1alpha1Workflow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IoArgoprojWorkflowV1alpha1Workflow", ""
            ) as IoArgoprojWorkflowV1alpha1Workflow;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to archivedWorkflowServiceListArchivedWorkflowLabelKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async archivedWorkflowServiceListArchivedWorkflowLabelKeys(response: ResponseContext): Promise<IoArgoprojWorkflowV1alpha1LabelKeys > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: IoArgoprojWorkflowV1alpha1LabelKeys = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IoArgoprojWorkflowV1alpha1LabelKeys", ""
            ) as IoArgoprojWorkflowV1alpha1LabelKeys;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: GrpcGatewayRuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GrpcGatewayRuntimeError", ""
            ) as GrpcGatewayRuntimeError;
            throw new ApiException<GrpcGatewayRuntimeError>(response.httpStatusCode, "An unexpected error response.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: IoArgoprojWorkflowV1alpha1LabelKeys = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IoArgoprojWorkflowV1alpha1LabelKeys", ""
            ) as IoArgoprojWorkflowV1alpha1LabelKeys;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to archivedWorkflowServiceListArchivedWorkflowLabelValues
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async archivedWorkflowServiceListArchivedWorkflowLabelValues(response: ResponseContext): Promise<IoArgoprojWorkflowV1alpha1LabelValues > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: IoArgoprojWorkflowV1alpha1LabelValues = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IoArgoprojWorkflowV1alpha1LabelValues", ""
            ) as IoArgoprojWorkflowV1alpha1LabelValues;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: GrpcGatewayRuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GrpcGatewayRuntimeError", ""
            ) as GrpcGatewayRuntimeError;
            throw new ApiException<GrpcGatewayRuntimeError>(response.httpStatusCode, "An unexpected error response.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: IoArgoprojWorkflowV1alpha1LabelValues = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IoArgoprojWorkflowV1alpha1LabelValues", ""
            ) as IoArgoprojWorkflowV1alpha1LabelValues;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to archivedWorkflowServiceListArchivedWorkflows
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async archivedWorkflowServiceListArchivedWorkflows(response: ResponseContext): Promise<IoArgoprojWorkflowV1alpha1WorkflowList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: IoArgoprojWorkflowV1alpha1WorkflowList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IoArgoprojWorkflowV1alpha1WorkflowList", ""
            ) as IoArgoprojWorkflowV1alpha1WorkflowList;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: GrpcGatewayRuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GrpcGatewayRuntimeError", ""
            ) as GrpcGatewayRuntimeError;
            throw new ApiException<GrpcGatewayRuntimeError>(response.httpStatusCode, "An unexpected error response.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: IoArgoprojWorkflowV1alpha1WorkflowList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IoArgoprojWorkflowV1alpha1WorkflowList", ""
            ) as IoArgoprojWorkflowV1alpha1WorkflowList;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to archivedWorkflowServiceResubmitArchivedWorkflow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async archivedWorkflowServiceResubmitArchivedWorkflow(response: ResponseContext): Promise<IoArgoprojWorkflowV1alpha1Workflow > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: IoArgoprojWorkflowV1alpha1Workflow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IoArgoprojWorkflowV1alpha1Workflow", ""
            ) as IoArgoprojWorkflowV1alpha1Workflow;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: GrpcGatewayRuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GrpcGatewayRuntimeError", ""
            ) as GrpcGatewayRuntimeError;
            throw new ApiException<GrpcGatewayRuntimeError>(response.httpStatusCode, "An unexpected error response.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: IoArgoprojWorkflowV1alpha1Workflow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IoArgoprojWorkflowV1alpha1Workflow", ""
            ) as IoArgoprojWorkflowV1alpha1Workflow;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to archivedWorkflowServiceRetryArchivedWorkflow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async archivedWorkflowServiceRetryArchivedWorkflow(response: ResponseContext): Promise<IoArgoprojWorkflowV1alpha1Workflow > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: IoArgoprojWorkflowV1alpha1Workflow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IoArgoprojWorkflowV1alpha1Workflow", ""
            ) as IoArgoprojWorkflowV1alpha1Workflow;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: GrpcGatewayRuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GrpcGatewayRuntimeError", ""
            ) as GrpcGatewayRuntimeError;
            throw new ApiException<GrpcGatewayRuntimeError>(response.httpStatusCode, "An unexpected error response.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: IoArgoprojWorkflowV1alpha1Workflow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IoArgoprojWorkflowV1alpha1Workflow", ""
            ) as IoArgoprojWorkflowV1alpha1Workflow;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
