# .ArtifactServiceApi

All URIs are relative to *http://localhost:2746*

Method | HTTP request | Description
------------- | ------------- | -------------
[**artifactServiceGetArtifactFile**](ArtifactServiceApi.md#artifactServiceGetArtifactFile) | **GET** /artifact-files/{namespace}/{idDiscriminator}/{id}/{nodeId}/{artifactDiscriminator}/{artifactName} | Get an artifact.
[**artifactServiceGetInputArtifact**](ArtifactServiceApi.md#artifactServiceGetInputArtifact) | **GET** /input-artifacts/{namespace}/{name}/{nodeId}/{artifactName} | Get an input artifact.
[**artifactServiceGetInputArtifactByUID**](ArtifactServiceApi.md#artifactServiceGetInputArtifactByUID) | **GET** /input-artifacts-by-uid/{uid}/{nodeId}/{artifactName} | Get an input artifact by UID.
[**artifactServiceGetOutputArtifact**](ArtifactServiceApi.md#artifactServiceGetOutputArtifact) | **GET** /artifacts/{namespace}/{name}/{nodeId}/{artifactName} | Get an output artifact.
[**artifactServiceGetOutputArtifactByUID**](ArtifactServiceApi.md#artifactServiceGetOutputArtifactByUID) | **GET** /artifacts-by-uid/{uid}/{nodeId}/{artifactName} | Get an output artifact by UID.


# **artifactServiceGetArtifactFile**
> HttpFile artifactServiceGetArtifactFile()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ArtifactServiceApi(configuration);

let body:.ArtifactServiceApiArtifactServiceGetArtifactFileRequest = {
  // string
  namespace: "namespace_example",
  // 'workflow' | 'archived-workflows '
  idDiscriminator: "workflow",
  // string
  id: "id_example",
  // string
  nodeId: "nodeId_example",
  // string
  artifactName: "artifactName_example",
  // 'outputs'
  artifactDiscriminator: "outputs",
};

apiInstance.artifactServiceGetArtifactFile(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | [**string**] |  | defaults to undefined
 **idDiscriminator** | [**&#39;workflow&#39; | &#39;archived-workflows &#39;**]**Array<&#39;workflow&#39; &#124; &#39;archived-workflows &#39;>** |  | defaults to undefined
 **id** | [**string**] |  | defaults to undefined
 **nodeId** | [**string**] |  | defaults to undefined
 **artifactName** | [**string**] |  | defaults to undefined
 **artifactDiscriminator** | [**&#39;outputs&#39;**]**Array<&#39;outputs&#39;>** |  | defaults to undefined


### Return type

**HttpFile**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An artifact file. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **artifactServiceGetInputArtifact**
> HttpFile artifactServiceGetInputArtifact()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ArtifactServiceApi(configuration);

let body:.ArtifactServiceApiArtifactServiceGetInputArtifactRequest = {
  // string
  namespace: "namespace_example",
  // string
  name: "name_example",
  // string
  nodeId: "nodeId_example",
  // string
  artifactName: "artifactName_example",
};

apiInstance.artifactServiceGetInputArtifact(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | [**string**] |  | defaults to undefined
 **name** | [**string**] |  | defaults to undefined
 **nodeId** | [**string**] |  | defaults to undefined
 **artifactName** | [**string**] |  | defaults to undefined


### Return type

**HttpFile**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An artifact file. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **artifactServiceGetInputArtifactByUID**
> HttpFile artifactServiceGetInputArtifactByUID()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ArtifactServiceApi(configuration);

let body:.ArtifactServiceApiArtifactServiceGetInputArtifactByUIDRequest = {
  // string
  uid: "uid_example",
  // string
  nodeId: "nodeId_example",
  // string
  artifactName: "artifactName_example",
};

apiInstance.artifactServiceGetInputArtifactByUID(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | [**string**] |  | defaults to undefined
 **nodeId** | [**string**] |  | defaults to undefined
 **artifactName** | [**string**] |  | defaults to undefined


### Return type

**HttpFile**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An artifact file. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **artifactServiceGetOutputArtifact**
> HttpFile artifactServiceGetOutputArtifact()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ArtifactServiceApi(configuration);

let body:.ArtifactServiceApiArtifactServiceGetOutputArtifactRequest = {
  // string
  namespace: "namespace_example",
  // string
  name: "name_example",
  // string
  nodeId: "nodeId_example",
  // string
  artifactName: "artifactName_example",
};

apiInstance.artifactServiceGetOutputArtifact(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | [**string**] |  | defaults to undefined
 **name** | [**string**] |  | defaults to undefined
 **nodeId** | [**string**] |  | defaults to undefined
 **artifactName** | [**string**] |  | defaults to undefined


### Return type

**HttpFile**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An artifact file. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **artifactServiceGetOutputArtifactByUID**
> HttpFile artifactServiceGetOutputArtifactByUID()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ArtifactServiceApi(configuration);

let body:.ArtifactServiceApiArtifactServiceGetOutputArtifactByUIDRequest = {
  // string
  uid: "uid_example",
  // string
  nodeId: "nodeId_example",
  // string
  artifactName: "artifactName_example",
};

apiInstance.artifactServiceGetOutputArtifactByUID(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | [**string**] |  | defaults to undefined
 **nodeId** | [**string**] |  | defaults to undefined
 **artifactName** | [**string**] |  | defaults to undefined


### Return type

**HttpFile**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An artifact file. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


