// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { GrpcGatewayRuntimeError } from '../models/GrpcGatewayRuntimeError';
import { IoArgoprojWorkflowV1alpha1WorkflowEventBindingList } from '../models/IoArgoprojWorkflowV1alpha1WorkflowEventBindingList';

/**
 * no description
 */
export class EventServiceApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param namespace 
     * @param listOptionsLabelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything. +optional.
     * @param listOptionsFieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything. +optional.
     * @param listOptionsWatch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. +optional.
     * @param listOptionsAllowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. +optional.
     * @param listOptionsResourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @param listOptionsResourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @param listOptionsTimeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. +optional.
     * @param listOptionsLimit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param listOptionsContinue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     */
    public async eventServiceListWorkflowEventBindings(namespace: string, listOptionsLabelSelector?: string, listOptionsFieldSelector?: string, listOptionsWatch?: boolean, listOptionsAllowWatchBookmarks?: boolean, listOptionsResourceVersion?: string, listOptionsResourceVersionMatch?: string, listOptionsTimeoutSeconds?: string, listOptionsLimit?: string, listOptionsContinue?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new RequiredError("EventServiceApi", "eventServiceListWorkflowEventBindings", "namespace");
        }











        // Path Params
        const localVarPath = '/api/v1/workflow-event-bindings/{namespace}'
            .replace('{' + 'namespace' + '}', encodeURIComponent(String(namespace)));

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
     * @param namespace The namespace for the io.argoproj.workflow.v1alpha1. This can be empty if the client has cluster scoped permissions. If empty, then the event is \&quot;broadcast\&quot; to workflow event binding in all namespaces.
     * @param discriminator Optional discriminator for the io.argoproj.workflow.v1alpha1. This should almost always be empty. Used for edge-cases where the event payload alone is not provide enough information to discriminate the event. This MUST NOT be used as security mechanism, e.g. to allow two clients to use the same access token, or to support webhooks on unsecured server. Instead, use access tokens. This is made available as &#x60;discriminator&#x60; in the event binding selector (&#x60;/spec/event/selector)&#x60;
     * @param body The event itself can be any data.
     */
    public async eventServiceReceiveEvent(namespace: string, discriminator: string, body: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new RequiredError("EventServiceApi", "eventServiceReceiveEvent", "namespace");
        }


        // verify required parameter 'discriminator' is not null or undefined
        if (discriminator === null || discriminator === undefined) {
            throw new RequiredError("EventServiceApi", "eventServiceReceiveEvent", "discriminator");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("EventServiceApi", "eventServiceReceiveEvent", "body");
        }


        // Path Params
        const localVarPath = '/api/v1/events/{namespace}/{discriminator}'
            .replace('{' + 'namespace' + '}', encodeURIComponent(String(namespace)))
            .replace('{' + 'discriminator' + '}', encodeURIComponent(String(discriminator)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "any", ""),
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

export class EventServiceApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to eventServiceListWorkflowEventBindings
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async eventServiceListWorkflowEventBindings(response: ResponseContext): Promise<IoArgoprojWorkflowV1alpha1WorkflowEventBindingList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: IoArgoprojWorkflowV1alpha1WorkflowEventBindingList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IoArgoprojWorkflowV1alpha1WorkflowEventBindingList", ""
            ) as IoArgoprojWorkflowV1alpha1WorkflowEventBindingList;
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
            const body: IoArgoprojWorkflowV1alpha1WorkflowEventBindingList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IoArgoprojWorkflowV1alpha1WorkflowEventBindingList", ""
            ) as IoArgoprojWorkflowV1alpha1WorkflowEventBindingList;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to eventServiceReceiveEvent
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async eventServiceReceiveEvent(response: ResponseContext): Promise<any > {
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

}
