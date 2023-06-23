// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { GrpcGatewayRuntimeError } from '../models/GrpcGatewayRuntimeError';
import { IoArgoprojWorkflowV1alpha1Workflow } from '../models/IoArgoprojWorkflowV1alpha1Workflow';
import { IoArgoprojWorkflowV1alpha1WorkflowCreateRequest } from '../models/IoArgoprojWorkflowV1alpha1WorkflowCreateRequest';
import { IoArgoprojWorkflowV1alpha1WorkflowLintRequest } from '../models/IoArgoprojWorkflowV1alpha1WorkflowLintRequest';
import { IoArgoprojWorkflowV1alpha1WorkflowList } from '../models/IoArgoprojWorkflowV1alpha1WorkflowList';
import { IoArgoprojWorkflowV1alpha1WorkflowResubmitRequest } from '../models/IoArgoprojWorkflowV1alpha1WorkflowResubmitRequest';
import { IoArgoprojWorkflowV1alpha1WorkflowResumeRequest } from '../models/IoArgoprojWorkflowV1alpha1WorkflowResumeRequest';
import { IoArgoprojWorkflowV1alpha1WorkflowRetryRequest } from '../models/IoArgoprojWorkflowV1alpha1WorkflowRetryRequest';
import { IoArgoprojWorkflowV1alpha1WorkflowSetRequest } from '../models/IoArgoprojWorkflowV1alpha1WorkflowSetRequest';
import { IoArgoprojWorkflowV1alpha1WorkflowStopRequest } from '../models/IoArgoprojWorkflowV1alpha1WorkflowStopRequest';
import { IoArgoprojWorkflowV1alpha1WorkflowSubmitRequest } from '../models/IoArgoprojWorkflowV1alpha1WorkflowSubmitRequest';
import { IoArgoprojWorkflowV1alpha1WorkflowSuspendRequest } from '../models/IoArgoprojWorkflowV1alpha1WorkflowSuspendRequest';
import { IoArgoprojWorkflowV1alpha1WorkflowTerminateRequest } from '../models/IoArgoprojWorkflowV1alpha1WorkflowTerminateRequest';
import { StreamResultOfIoArgoprojWorkflowV1alpha1LogEntry } from '../models/StreamResultOfIoArgoprojWorkflowV1alpha1LogEntry';
import { StreamResultOfIoArgoprojWorkflowV1alpha1WorkflowWatchEvent } from '../models/StreamResultOfIoArgoprojWorkflowV1alpha1WorkflowWatchEvent';
import { StreamResultOfIoK8sApiCoreV1Event } from '../models/StreamResultOfIoK8sApiCoreV1Event';

/**
 * no description
 */
export class WorkflowServiceApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param namespace 
     * @param body 
     */
    public async workflowServiceCreateWorkflow(namespace: string, body: IoArgoprojWorkflowV1alpha1WorkflowCreateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new RequiredError("WorkflowServiceApi", "workflowServiceCreateWorkflow", "namespace");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("WorkflowServiceApi", "workflowServiceCreateWorkflow", "body");
        }


        // Path Params
        const localVarPath = '/api/v1/workflows/{namespace}'
            .replace('{' + 'namespace' + '}', encodeURIComponent(String(namespace)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "IoArgoprojWorkflowV1alpha1WorkflowCreateRequest", ""),
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
     * @param namespace 
     * @param name 
     * @param deleteOptionsGracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. +optional.
     * @param deleteOptionsPreconditionsUid Specifies the target UID. +optional.
     * @param deleteOptionsPreconditionsResourceVersion Specifies the target ResourceVersion +optional.
     * @param deleteOptionsOrphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both. +optional.
     * @param deleteOptionsPropagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground. +optional.
     * @param deleteOptionsDryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed +optional.
     * @param force 
     */
    public async workflowServiceDeleteWorkflow(namespace: string, name: string, deleteOptionsGracePeriodSeconds?: string, deleteOptionsPreconditionsUid?: string, deleteOptionsPreconditionsResourceVersion?: string, deleteOptionsOrphanDependents?: boolean, deleteOptionsPropagationPolicy?: string, deleteOptionsDryRun?: Array<string>, force?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new RequiredError("WorkflowServiceApi", "workflowServiceDeleteWorkflow", "namespace");
        }


        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("WorkflowServiceApi", "workflowServiceDeleteWorkflow", "name");
        }









        // Path Params
        const localVarPath = '/api/v1/workflows/{namespace}/{name}'
            .replace('{' + 'namespace' + '}', encodeURIComponent(String(namespace)))
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (deleteOptionsGracePeriodSeconds !== undefined) {
            requestContext.setQueryParam("deleteOptions.gracePeriodSeconds", ObjectSerializer.serialize(deleteOptionsGracePeriodSeconds, "string", "int64"));
        }

        // Query Params
        if (deleteOptionsPreconditionsUid !== undefined) {
            requestContext.setQueryParam("deleteOptions.preconditions.uid", ObjectSerializer.serialize(deleteOptionsPreconditionsUid, "string", ""));
        }

        // Query Params
        if (deleteOptionsPreconditionsResourceVersion !== undefined) {
            requestContext.setQueryParam("deleteOptions.preconditions.resourceVersion", ObjectSerializer.serialize(deleteOptionsPreconditionsResourceVersion, "string", ""));
        }

        // Query Params
        if (deleteOptionsOrphanDependents !== undefined) {
            requestContext.setQueryParam("deleteOptions.orphanDependents", ObjectSerializer.serialize(deleteOptionsOrphanDependents, "boolean", ""));
        }

        // Query Params
        if (deleteOptionsPropagationPolicy !== undefined) {
            requestContext.setQueryParam("deleteOptions.propagationPolicy", ObjectSerializer.serialize(deleteOptionsPropagationPolicy, "string", ""));
        }

        // Query Params
        if (deleteOptionsDryRun !== undefined) {
            requestContext.setQueryParam("deleteOptions.dryRun", ObjectSerializer.serialize(deleteOptionsDryRun, "Array<string>", ""));
        }

        // Query Params
        if (force !== undefined) {
            requestContext.setQueryParam("force", ObjectSerializer.serialize(force, "boolean", ""));
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
     * @param name 
     * @param getOptionsResourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional
     * @param fields Fields to be included or excluded in the response. e.g. \&quot;spec,status.phase\&quot;, \&quot;-status.nodes\&quot;.
     */
    public async workflowServiceGetWorkflow(namespace: string, name: string, getOptionsResourceVersion?: string, fields?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new RequiredError("WorkflowServiceApi", "workflowServiceGetWorkflow", "namespace");
        }


        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("WorkflowServiceApi", "workflowServiceGetWorkflow", "name");
        }




        // Path Params
        const localVarPath = '/api/v1/workflows/{namespace}/{name}'
            .replace('{' + 'namespace' + '}', encodeURIComponent(String(namespace)))
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (getOptionsResourceVersion !== undefined) {
            requestContext.setQueryParam("getOptions.resourceVersion", ObjectSerializer.serialize(getOptionsResourceVersion, "string", ""));
        }

        // Query Params
        if (fields !== undefined) {
            requestContext.setQueryParam("fields", ObjectSerializer.serialize(fields, "string", ""));
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
     * @param body 
     */
    public async workflowServiceLintWorkflow(namespace: string, body: IoArgoprojWorkflowV1alpha1WorkflowLintRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new RequiredError("WorkflowServiceApi", "workflowServiceLintWorkflow", "namespace");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("WorkflowServiceApi", "workflowServiceLintWorkflow", "body");
        }


        // Path Params
        const localVarPath = '/api/v1/workflows/{namespace}/lint'
            .replace('{' + 'namespace' + '}', encodeURIComponent(String(namespace)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "IoArgoprojWorkflowV1alpha1WorkflowLintRequest", ""),
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
     * @param fields Fields to be included or excluded in the response. e.g. \&quot;items.spec,items.status.phase\&quot;, \&quot;-items.status.nodes\&quot;.
     */
    public async workflowServiceListWorkflows(namespace: string, listOptionsLabelSelector?: string, listOptionsFieldSelector?: string, listOptionsWatch?: boolean, listOptionsAllowWatchBookmarks?: boolean, listOptionsResourceVersion?: string, listOptionsResourceVersionMatch?: string, listOptionsTimeoutSeconds?: string, listOptionsLimit?: string, listOptionsContinue?: string, fields?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new RequiredError("WorkflowServiceApi", "workflowServiceListWorkflows", "namespace");
        }












        // Path Params
        const localVarPath = '/api/v1/workflows/{namespace}'
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

        // Query Params
        if (fields !== undefined) {
            requestContext.setQueryParam("fields", ObjectSerializer.serialize(fields, "string", ""));
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
     * DEPRECATED: Cannot work via HTTP if podName is an empty string. Use WorkflowLogs.
     * @param namespace 
     * @param name 
     * @param podName 
     * @param logOptionsContainer The container for which to stream logs. Defaults to only container if there is one container in the pod. +optional.
     * @param logOptionsFollow Follow the log stream of the pod. Defaults to false. +optional.
     * @param logOptionsPrevious Return previous terminated container logs. Defaults to false. +optional.
     * @param logOptionsSinceSeconds A relative time in seconds before the current time from which to show logs. If this value precedes the time a pod was started, only logs since the pod start will be returned. If this value is in the future, no logs will be returned. Only one of sinceSeconds or sinceTime may be specified. +optional.
     * @param logOptionsSinceTimeSeconds Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.
     * @param logOptionsSinceTimeNanos Non-negative fractions of a second at nanosecond resolution. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be from 0 to 999,999,999 inclusive. This field may be limited in precision depending on context.
     * @param logOptionsTimestamps If true, add an RFC3339 or RFC3339Nano timestamp at the beginning of every line of log output. Defaults to false. +optional.
     * @param logOptionsTailLines If set, the number of lines from the end of the logs to show. If not specified, logs are shown from the creation of the container or sinceSeconds or sinceTime +optional.
     * @param logOptionsLimitBytes If set, the number of bytes to read from the server before terminating the log output. This may not display a complete final line of logging, and may return slightly more or slightly less than the specified limit. +optional.
     * @param logOptionsInsecureSkipTLSVerifyBackend insecureSkipTLSVerifyBackend indicates that the apiserver should not confirm the validity of the serving certificate of the backend it is connecting to.  This will make the HTTPS connection between the apiserver and the backend insecure. This means the apiserver cannot verify the log data it is receiving came from the real kubelet.  If the kubelet is configured to verify the apiserver\&#39;s TLS credentials, it does not mean the connection to the real kubelet is vulnerable to a man in the middle attack (e.g. an attacker could not intercept the actual log data coming from the real kubelet). +optional.
     * @param grep 
     * @param selector 
     */
    public async workflowServicePodLogs(namespace: string, name: string, podName: string, logOptionsContainer?: string, logOptionsFollow?: boolean, logOptionsPrevious?: boolean, logOptionsSinceSeconds?: string, logOptionsSinceTimeSeconds?: string, logOptionsSinceTimeNanos?: number, logOptionsTimestamps?: boolean, logOptionsTailLines?: string, logOptionsLimitBytes?: string, logOptionsInsecureSkipTLSVerifyBackend?: boolean, grep?: string, selector?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new RequiredError("WorkflowServiceApi", "workflowServicePodLogs", "namespace");
        }


        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("WorkflowServiceApi", "workflowServicePodLogs", "name");
        }


        // verify required parameter 'podName' is not null or undefined
        if (podName === null || podName === undefined) {
            throw new RequiredError("WorkflowServiceApi", "workflowServicePodLogs", "podName");
        }














        // Path Params
        const localVarPath = '/api/v1/workflows/{namespace}/{name}/{podName}/log'
            .replace('{' + 'namespace' + '}', encodeURIComponent(String(namespace)))
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'podName' + '}', encodeURIComponent(String(podName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (logOptionsContainer !== undefined) {
            requestContext.setQueryParam("logOptions.container", ObjectSerializer.serialize(logOptionsContainer, "string", ""));
        }

        // Query Params
        if (logOptionsFollow !== undefined) {
            requestContext.setQueryParam("logOptions.follow", ObjectSerializer.serialize(logOptionsFollow, "boolean", ""));
        }

        // Query Params
        if (logOptionsPrevious !== undefined) {
            requestContext.setQueryParam("logOptions.previous", ObjectSerializer.serialize(logOptionsPrevious, "boolean", ""));
        }

        // Query Params
        if (logOptionsSinceSeconds !== undefined) {
            requestContext.setQueryParam("logOptions.sinceSeconds", ObjectSerializer.serialize(logOptionsSinceSeconds, "string", "int64"));
        }

        // Query Params
        if (logOptionsSinceTimeSeconds !== undefined) {
            requestContext.setQueryParam("logOptions.sinceTime.seconds", ObjectSerializer.serialize(logOptionsSinceTimeSeconds, "string", "int64"));
        }

        // Query Params
        if (logOptionsSinceTimeNanos !== undefined) {
            requestContext.setQueryParam("logOptions.sinceTime.nanos", ObjectSerializer.serialize(logOptionsSinceTimeNanos, "number", "int32"));
        }

        // Query Params
        if (logOptionsTimestamps !== undefined) {
            requestContext.setQueryParam("logOptions.timestamps", ObjectSerializer.serialize(logOptionsTimestamps, "boolean", ""));
        }

        // Query Params
        if (logOptionsTailLines !== undefined) {
            requestContext.setQueryParam("logOptions.tailLines", ObjectSerializer.serialize(logOptionsTailLines, "string", "int64"));
        }

        // Query Params
        if (logOptionsLimitBytes !== undefined) {
            requestContext.setQueryParam("logOptions.limitBytes", ObjectSerializer.serialize(logOptionsLimitBytes, "string", "int64"));
        }

        // Query Params
        if (logOptionsInsecureSkipTLSVerifyBackend !== undefined) {
            requestContext.setQueryParam("logOptions.insecureSkipTLSVerifyBackend", ObjectSerializer.serialize(logOptionsInsecureSkipTLSVerifyBackend, "boolean", ""));
        }

        // Query Params
        if (grep !== undefined) {
            requestContext.setQueryParam("grep", ObjectSerializer.serialize(grep, "string", ""));
        }

        // Query Params
        if (selector !== undefined) {
            requestContext.setQueryParam("selector", ObjectSerializer.serialize(selector, "string", ""));
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
     * @param name 
     * @param body 
     */
    public async workflowServiceResubmitWorkflow(namespace: string, name: string, body: IoArgoprojWorkflowV1alpha1WorkflowResubmitRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new RequiredError("WorkflowServiceApi", "workflowServiceResubmitWorkflow", "namespace");
        }


        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("WorkflowServiceApi", "workflowServiceResubmitWorkflow", "name");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("WorkflowServiceApi", "workflowServiceResubmitWorkflow", "body");
        }


        // Path Params
        const localVarPath = '/api/v1/workflows/{namespace}/{name}/resubmit'
            .replace('{' + 'namespace' + '}', encodeURIComponent(String(namespace)))
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "IoArgoprojWorkflowV1alpha1WorkflowResubmitRequest", ""),
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
     * @param namespace 
     * @param name 
     * @param body 
     */
    public async workflowServiceResumeWorkflow(namespace: string, name: string, body: IoArgoprojWorkflowV1alpha1WorkflowResumeRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new RequiredError("WorkflowServiceApi", "workflowServiceResumeWorkflow", "namespace");
        }


        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("WorkflowServiceApi", "workflowServiceResumeWorkflow", "name");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("WorkflowServiceApi", "workflowServiceResumeWorkflow", "body");
        }


        // Path Params
        const localVarPath = '/api/v1/workflows/{namespace}/{name}/resume'
            .replace('{' + 'namespace' + '}', encodeURIComponent(String(namespace)))
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "IoArgoprojWorkflowV1alpha1WorkflowResumeRequest", ""),
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
     * @param namespace 
     * @param name 
     * @param body 
     */
    public async workflowServiceRetryWorkflow(namespace: string, name: string, body: IoArgoprojWorkflowV1alpha1WorkflowRetryRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new RequiredError("WorkflowServiceApi", "workflowServiceRetryWorkflow", "namespace");
        }


        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("WorkflowServiceApi", "workflowServiceRetryWorkflow", "name");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("WorkflowServiceApi", "workflowServiceRetryWorkflow", "body");
        }


        // Path Params
        const localVarPath = '/api/v1/workflows/{namespace}/{name}/retry'
            .replace('{' + 'namespace' + '}', encodeURIComponent(String(namespace)))
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "IoArgoprojWorkflowV1alpha1WorkflowRetryRequest", ""),
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
     * @param namespace 
     * @param name 
     * @param body 
     */
    public async workflowServiceSetWorkflow(namespace: string, name: string, body: IoArgoprojWorkflowV1alpha1WorkflowSetRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new RequiredError("WorkflowServiceApi", "workflowServiceSetWorkflow", "namespace");
        }


        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("WorkflowServiceApi", "workflowServiceSetWorkflow", "name");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("WorkflowServiceApi", "workflowServiceSetWorkflow", "body");
        }


        // Path Params
        const localVarPath = '/api/v1/workflows/{namespace}/{name}/set'
            .replace('{' + 'namespace' + '}', encodeURIComponent(String(namespace)))
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "IoArgoprojWorkflowV1alpha1WorkflowSetRequest", ""),
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
     * @param namespace 
     * @param name 
     * @param body 
     */
    public async workflowServiceStopWorkflow(namespace: string, name: string, body: IoArgoprojWorkflowV1alpha1WorkflowStopRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new RequiredError("WorkflowServiceApi", "workflowServiceStopWorkflow", "namespace");
        }


        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("WorkflowServiceApi", "workflowServiceStopWorkflow", "name");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("WorkflowServiceApi", "workflowServiceStopWorkflow", "body");
        }


        // Path Params
        const localVarPath = '/api/v1/workflows/{namespace}/{name}/stop'
            .replace('{' + 'namespace' + '}', encodeURIComponent(String(namespace)))
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "IoArgoprojWorkflowV1alpha1WorkflowStopRequest", ""),
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
     * @param namespace 
     * @param body 
     */
    public async workflowServiceSubmitWorkflow(namespace: string, body: IoArgoprojWorkflowV1alpha1WorkflowSubmitRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new RequiredError("WorkflowServiceApi", "workflowServiceSubmitWorkflow", "namespace");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("WorkflowServiceApi", "workflowServiceSubmitWorkflow", "body");
        }


        // Path Params
        const localVarPath = '/api/v1/workflows/{namespace}/submit'
            .replace('{' + 'namespace' + '}', encodeURIComponent(String(namespace)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "IoArgoprojWorkflowV1alpha1WorkflowSubmitRequest", ""),
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
     * @param namespace 
     * @param name 
     * @param body 
     */
    public async workflowServiceSuspendWorkflow(namespace: string, name: string, body: IoArgoprojWorkflowV1alpha1WorkflowSuspendRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new RequiredError("WorkflowServiceApi", "workflowServiceSuspendWorkflow", "namespace");
        }


        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("WorkflowServiceApi", "workflowServiceSuspendWorkflow", "name");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("WorkflowServiceApi", "workflowServiceSuspendWorkflow", "body");
        }


        // Path Params
        const localVarPath = '/api/v1/workflows/{namespace}/{name}/suspend'
            .replace('{' + 'namespace' + '}', encodeURIComponent(String(namespace)))
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "IoArgoprojWorkflowV1alpha1WorkflowSuspendRequest", ""),
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
     * @param namespace 
     * @param name 
     * @param body 
     */
    public async workflowServiceTerminateWorkflow(namespace: string, name: string, body: IoArgoprojWorkflowV1alpha1WorkflowTerminateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new RequiredError("WorkflowServiceApi", "workflowServiceTerminateWorkflow", "namespace");
        }


        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("WorkflowServiceApi", "workflowServiceTerminateWorkflow", "name");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("WorkflowServiceApi", "workflowServiceTerminateWorkflow", "body");
        }


        // Path Params
        const localVarPath = '/api/v1/workflows/{namespace}/{name}/terminate'
            .replace('{' + 'namespace' + '}', encodeURIComponent(String(namespace)))
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "IoArgoprojWorkflowV1alpha1WorkflowTerminateRequest", ""),
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
    public async workflowServiceWatchEvents(namespace: string, listOptionsLabelSelector?: string, listOptionsFieldSelector?: string, listOptionsWatch?: boolean, listOptionsAllowWatchBookmarks?: boolean, listOptionsResourceVersion?: string, listOptionsResourceVersionMatch?: string, listOptionsTimeoutSeconds?: string, listOptionsLimit?: string, listOptionsContinue?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new RequiredError("WorkflowServiceApi", "workflowServiceWatchEvents", "namespace");
        }











        // Path Params
        const localVarPath = '/api/v1/stream/events/{namespace}'
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
     * @param fields 
     */
    public async workflowServiceWatchWorkflows(namespace: string, listOptionsLabelSelector?: string, listOptionsFieldSelector?: string, listOptionsWatch?: boolean, listOptionsAllowWatchBookmarks?: boolean, listOptionsResourceVersion?: string, listOptionsResourceVersionMatch?: string, listOptionsTimeoutSeconds?: string, listOptionsLimit?: string, listOptionsContinue?: string, fields?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new RequiredError("WorkflowServiceApi", "workflowServiceWatchWorkflows", "namespace");
        }












        // Path Params
        const localVarPath = '/api/v1/workflow-events/{namespace}'
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

        // Query Params
        if (fields !== undefined) {
            requestContext.setQueryParam("fields", ObjectSerializer.serialize(fields, "string", ""));
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
     * @param name 
     * @param podName 
     * @param logOptionsContainer The container for which to stream logs. Defaults to only container if there is one container in the pod. +optional.
     * @param logOptionsFollow Follow the log stream of the pod. Defaults to false. +optional.
     * @param logOptionsPrevious Return previous terminated container logs. Defaults to false. +optional.
     * @param logOptionsSinceSeconds A relative time in seconds before the current time from which to show logs. If this value precedes the time a pod was started, only logs since the pod start will be returned. If this value is in the future, no logs will be returned. Only one of sinceSeconds or sinceTime may be specified. +optional.
     * @param logOptionsSinceTimeSeconds Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.
     * @param logOptionsSinceTimeNanos Non-negative fractions of a second at nanosecond resolution. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be from 0 to 999,999,999 inclusive. This field may be limited in precision depending on context.
     * @param logOptionsTimestamps If true, add an RFC3339 or RFC3339Nano timestamp at the beginning of every line of log output. Defaults to false. +optional.
     * @param logOptionsTailLines If set, the number of lines from the end of the logs to show. If not specified, logs are shown from the creation of the container or sinceSeconds or sinceTime +optional.
     * @param logOptionsLimitBytes If set, the number of bytes to read from the server before terminating the log output. This may not display a complete final line of logging, and may return slightly more or slightly less than the specified limit. +optional.
     * @param logOptionsInsecureSkipTLSVerifyBackend insecureSkipTLSVerifyBackend indicates that the apiserver should not confirm the validity of the serving certificate of the backend it is connecting to.  This will make the HTTPS connection between the apiserver and the backend insecure. This means the apiserver cannot verify the log data it is receiving came from the real kubelet.  If the kubelet is configured to verify the apiserver\&#39;s TLS credentials, it does not mean the connection to the real kubelet is vulnerable to a man in the middle attack (e.g. an attacker could not intercept the actual log data coming from the real kubelet). +optional.
     * @param grep 
     * @param selector 
     */
    public async workflowServiceWorkflowLogs(namespace: string, name: string, podName?: string, logOptionsContainer?: string, logOptionsFollow?: boolean, logOptionsPrevious?: boolean, logOptionsSinceSeconds?: string, logOptionsSinceTimeSeconds?: string, logOptionsSinceTimeNanos?: number, logOptionsTimestamps?: boolean, logOptionsTailLines?: string, logOptionsLimitBytes?: string, logOptionsInsecureSkipTLSVerifyBackend?: boolean, grep?: string, selector?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new RequiredError("WorkflowServiceApi", "workflowServiceWorkflowLogs", "namespace");
        }


        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("WorkflowServiceApi", "workflowServiceWorkflowLogs", "name");
        }















        // Path Params
        const localVarPath = '/api/v1/workflows/{namespace}/{name}/log'
            .replace('{' + 'namespace' + '}', encodeURIComponent(String(namespace)))
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (podName !== undefined) {
            requestContext.setQueryParam("podName", ObjectSerializer.serialize(podName, "string", ""));
        }

        // Query Params
        if (logOptionsContainer !== undefined) {
            requestContext.setQueryParam("logOptions.container", ObjectSerializer.serialize(logOptionsContainer, "string", ""));
        }

        // Query Params
        if (logOptionsFollow !== undefined) {
            requestContext.setQueryParam("logOptions.follow", ObjectSerializer.serialize(logOptionsFollow, "boolean", ""));
        }

        // Query Params
        if (logOptionsPrevious !== undefined) {
            requestContext.setQueryParam("logOptions.previous", ObjectSerializer.serialize(logOptionsPrevious, "boolean", ""));
        }

        // Query Params
        if (logOptionsSinceSeconds !== undefined) {
            requestContext.setQueryParam("logOptions.sinceSeconds", ObjectSerializer.serialize(logOptionsSinceSeconds, "string", "int64"));
        }

        // Query Params
        if (logOptionsSinceTimeSeconds !== undefined) {
            requestContext.setQueryParam("logOptions.sinceTime.seconds", ObjectSerializer.serialize(logOptionsSinceTimeSeconds, "string", "int64"));
        }

        // Query Params
        if (logOptionsSinceTimeNanos !== undefined) {
            requestContext.setQueryParam("logOptions.sinceTime.nanos", ObjectSerializer.serialize(logOptionsSinceTimeNanos, "number", "int32"));
        }

        // Query Params
        if (logOptionsTimestamps !== undefined) {
            requestContext.setQueryParam("logOptions.timestamps", ObjectSerializer.serialize(logOptionsTimestamps, "boolean", ""));
        }

        // Query Params
        if (logOptionsTailLines !== undefined) {
            requestContext.setQueryParam("logOptions.tailLines", ObjectSerializer.serialize(logOptionsTailLines, "string", "int64"));
        }

        // Query Params
        if (logOptionsLimitBytes !== undefined) {
            requestContext.setQueryParam("logOptions.limitBytes", ObjectSerializer.serialize(logOptionsLimitBytes, "string", "int64"));
        }

        // Query Params
        if (logOptionsInsecureSkipTLSVerifyBackend !== undefined) {
            requestContext.setQueryParam("logOptions.insecureSkipTLSVerifyBackend", ObjectSerializer.serialize(logOptionsInsecureSkipTLSVerifyBackend, "boolean", ""));
        }

        // Query Params
        if (grep !== undefined) {
            requestContext.setQueryParam("grep", ObjectSerializer.serialize(grep, "string", ""));
        }

        // Query Params
        if (selector !== undefined) {
            requestContext.setQueryParam("selector", ObjectSerializer.serialize(selector, "string", ""));
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

}

export class WorkflowServiceApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to workflowServiceCreateWorkflow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async workflowServiceCreateWorkflow(response: ResponseContext): Promise<IoArgoprojWorkflowV1alpha1Workflow > {
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
     * @params response Response returned by the server for a request to workflowServiceDeleteWorkflow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async workflowServiceDeleteWorkflow(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to workflowServiceGetWorkflow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async workflowServiceGetWorkflow(response: ResponseContext): Promise<IoArgoprojWorkflowV1alpha1Workflow > {
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
     * @params response Response returned by the server for a request to workflowServiceLintWorkflow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async workflowServiceLintWorkflow(response: ResponseContext): Promise<IoArgoprojWorkflowV1alpha1Workflow > {
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
     * @params response Response returned by the server for a request to workflowServiceListWorkflows
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async workflowServiceListWorkflows(response: ResponseContext): Promise<IoArgoprojWorkflowV1alpha1WorkflowList > {
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
     * @params response Response returned by the server for a request to workflowServicePodLogs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async workflowServicePodLogs(response: ResponseContext): Promise<StreamResultOfIoArgoprojWorkflowV1alpha1LogEntry > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: StreamResultOfIoArgoprojWorkflowV1alpha1LogEntry = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StreamResultOfIoArgoprojWorkflowV1alpha1LogEntry", ""
            ) as StreamResultOfIoArgoprojWorkflowV1alpha1LogEntry;
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
            const body: StreamResultOfIoArgoprojWorkflowV1alpha1LogEntry = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StreamResultOfIoArgoprojWorkflowV1alpha1LogEntry", ""
            ) as StreamResultOfIoArgoprojWorkflowV1alpha1LogEntry;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to workflowServiceResubmitWorkflow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async workflowServiceResubmitWorkflow(response: ResponseContext): Promise<IoArgoprojWorkflowV1alpha1Workflow > {
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
     * @params response Response returned by the server for a request to workflowServiceResumeWorkflow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async workflowServiceResumeWorkflow(response: ResponseContext): Promise<IoArgoprojWorkflowV1alpha1Workflow > {
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
     * @params response Response returned by the server for a request to workflowServiceRetryWorkflow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async workflowServiceRetryWorkflow(response: ResponseContext): Promise<IoArgoprojWorkflowV1alpha1Workflow > {
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
     * @params response Response returned by the server for a request to workflowServiceSetWorkflow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async workflowServiceSetWorkflow(response: ResponseContext): Promise<IoArgoprojWorkflowV1alpha1Workflow > {
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
     * @params response Response returned by the server for a request to workflowServiceStopWorkflow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async workflowServiceStopWorkflow(response: ResponseContext): Promise<IoArgoprojWorkflowV1alpha1Workflow > {
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
     * @params response Response returned by the server for a request to workflowServiceSubmitWorkflow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async workflowServiceSubmitWorkflow(response: ResponseContext): Promise<IoArgoprojWorkflowV1alpha1Workflow > {
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
     * @params response Response returned by the server for a request to workflowServiceSuspendWorkflow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async workflowServiceSuspendWorkflow(response: ResponseContext): Promise<IoArgoprojWorkflowV1alpha1Workflow > {
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
     * @params response Response returned by the server for a request to workflowServiceTerminateWorkflow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async workflowServiceTerminateWorkflow(response: ResponseContext): Promise<IoArgoprojWorkflowV1alpha1Workflow > {
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
     * @params response Response returned by the server for a request to workflowServiceWatchEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async workflowServiceWatchEvents(response: ResponseContext): Promise<StreamResultOfIoK8sApiCoreV1Event > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: StreamResultOfIoK8sApiCoreV1Event = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StreamResultOfIoK8sApiCoreV1Event", ""
            ) as StreamResultOfIoK8sApiCoreV1Event;
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
            const body: StreamResultOfIoK8sApiCoreV1Event = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StreamResultOfIoK8sApiCoreV1Event", ""
            ) as StreamResultOfIoK8sApiCoreV1Event;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to workflowServiceWatchWorkflows
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async workflowServiceWatchWorkflows(response: ResponseContext): Promise<StreamResultOfIoArgoprojWorkflowV1alpha1WorkflowWatchEvent > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: StreamResultOfIoArgoprojWorkflowV1alpha1WorkflowWatchEvent = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StreamResultOfIoArgoprojWorkflowV1alpha1WorkflowWatchEvent", ""
            ) as StreamResultOfIoArgoprojWorkflowV1alpha1WorkflowWatchEvent;
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
            const body: StreamResultOfIoArgoprojWorkflowV1alpha1WorkflowWatchEvent = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StreamResultOfIoArgoprojWorkflowV1alpha1WorkflowWatchEvent", ""
            ) as StreamResultOfIoArgoprojWorkflowV1alpha1WorkflowWatchEvent;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to workflowServiceWorkflowLogs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async workflowServiceWorkflowLogs(response: ResponseContext): Promise<StreamResultOfIoArgoprojWorkflowV1alpha1LogEntry > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: StreamResultOfIoArgoprojWorkflowV1alpha1LogEntry = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StreamResultOfIoArgoprojWorkflowV1alpha1LogEntry", ""
            ) as StreamResultOfIoArgoprojWorkflowV1alpha1LogEntry;
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
            const body: StreamResultOfIoArgoprojWorkflowV1alpha1LogEntry = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StreamResultOfIoArgoprojWorkflowV1alpha1LogEntry", ""
            ) as StreamResultOfIoArgoprojWorkflowV1alpha1LogEntry;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
