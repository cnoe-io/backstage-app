# .EventServiceApi

All URIs are relative to *http://localhost:2746*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventServiceListWorkflowEventBindings**](EventServiceApi.md#eventServiceListWorkflowEventBindings) | **GET** /api/v1/workflow-event-bindings/{namespace} | 
[**eventServiceReceiveEvent**](EventServiceApi.md#eventServiceReceiveEvent) | **POST** /api/v1/events/{namespace}/{discriminator} | 


# **eventServiceListWorkflowEventBindings**
> IoArgoprojWorkflowV1alpha1WorkflowEventBindingList eventServiceListWorkflowEventBindings()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventServiceApi(configuration);

let body:.EventServiceApiEventServiceListWorkflowEventBindingsRequest = {
  // string
  namespace: "namespace_example",
  // string | A selector to restrict the list of returned objects by their labels. Defaults to everything. +optional. (optional)
  listOptionsLabelSelector: "listOptions.labelSelector_example",
  // string | A selector to restrict the list of returned objects by their fields. Defaults to everything. +optional. (optional)
  listOptionsFieldSelector: "listOptions.fieldSelector_example",
  // boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. +optional. (optional)
  listOptionsWatch: true,
  // boolean | allowWatchBookmarks requests watch events with type \"BOOKMARK\". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\'s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. +optional. (optional)
  listOptionsAllowWatchBookmarks: true,
  // string | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional (optional)
  listOptionsResourceVersion: "listOptions.resourceVersion_example",
  // string | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional (optional)
  listOptionsResourceVersionMatch: "listOptions.resourceVersionMatch_example",
  // string | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. +optional. (optional)
  listOptionsTimeoutSeconds: "listOptions.timeoutSeconds_example",
  // string | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. (optional)
  listOptionsLimit: "listOptions.limit_example",
  // string | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \"next key\".  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. (optional)
  listOptionsContinue: "listOptions.continue_example",
};

apiInstance.eventServiceListWorkflowEventBindings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | [**string**] |  | defaults to undefined
 **listOptionsLabelSelector** | [**string**] | A selector to restrict the list of returned objects by their labels. Defaults to everything. +optional. | (optional) defaults to undefined
 **listOptionsFieldSelector** | [**string**] | A selector to restrict the list of returned objects by their fields. Defaults to everything. +optional. | (optional) defaults to undefined
 **listOptionsWatch** | [**boolean**] | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. +optional. | (optional) defaults to undefined
 **listOptionsAllowWatchBookmarks** | [**boolean**] | allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. +optional. | (optional) defaults to undefined
 **listOptionsResourceVersion** | [**string**] | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional | (optional) defaults to undefined
 **listOptionsResourceVersionMatch** | [**string**] | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset +optional | (optional) defaults to undefined
 **listOptionsTimeoutSeconds** | [**string**] | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. +optional. | (optional) defaults to undefined
 **listOptionsLimit** | [**string**] | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. | (optional) defaults to undefined
 **listOptionsContinue** | [**string**] | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. | (optional) defaults to undefined


### Return type

**IoArgoprojWorkflowV1alpha1WorkflowEventBindingList**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **eventServiceReceiveEvent**
> any eventServiceReceiveEvent(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventServiceApi(configuration);

let body:.EventServiceApiEventServiceReceiveEventRequest = {
  // string | The namespace for the io.argoproj.workflow.v1alpha1. This can be empty if the client has cluster scoped permissions. If empty, then the event is \"broadcast\" to workflow event binding in all namespaces.
  namespace: "namespace_example",
  // string | Optional discriminator for the io.argoproj.workflow.v1alpha1. This should almost always be empty. Used for edge-cases where the event payload alone is not provide enough information to discriminate the event. This MUST NOT be used as security mechanism, e.g. to allow two clients to use the same access token, or to support webhooks on unsecured server. Instead, use access tokens. This is made available as `discriminator` in the event binding selector (`/spec/event/selector)`
  discriminator: "discriminator_example",
  // any | The event itself can be any data.
  body: {},
};

apiInstance.eventServiceReceiveEvent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**| The event itself can be any data. |
 **namespace** | [**string**] | The namespace for the io.argoproj.workflow.v1alpha1. This can be empty if the client has cluster scoped permissions. If empty, then the event is \&quot;broadcast\&quot; to workflow event binding in all namespaces. | defaults to undefined
 **discriminator** | [**string**] | Optional discriminator for the io.argoproj.workflow.v1alpha1. This should almost always be empty. Used for edge-cases where the event payload alone is not provide enough information to discriminate the event. This MUST NOT be used as security mechanism, e.g. to allow two clients to use the same access token, or to support webhooks on unsecured server. Instead, use access tokens. This is made available as &#x60;discriminator&#x60; in the event binding selector (&#x60;/spec/event/selector)&#x60; | defaults to undefined


### Return type

**any**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


