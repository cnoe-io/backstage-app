# .InfoServiceApi

All URIs are relative to *http://localhost:2746*

Method | HTTP request | Description
------------- | ------------- | -------------
[**infoServiceCollectEvent**](InfoServiceApi.md#infoServiceCollectEvent) | **POST** /api/v1/tracking/event | 
[**infoServiceGetInfo**](InfoServiceApi.md#infoServiceGetInfo) | **GET** /api/v1/info | 
[**infoServiceGetUserInfo**](InfoServiceApi.md#infoServiceGetUserInfo) | **GET** /api/v1/userinfo | 
[**infoServiceGetVersion**](InfoServiceApi.md#infoServiceGetVersion) | **GET** /api/v1/version | 


# **infoServiceCollectEvent**
> any infoServiceCollectEvent(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InfoServiceApi(configuration);

let body:.InfoServiceApiInfoServiceCollectEventRequest = {
  // IoArgoprojWorkflowV1alpha1CollectEventRequest
  body: {
    name: "name_example",
  },
};

apiInstance.infoServiceCollectEvent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **IoArgoprojWorkflowV1alpha1CollectEventRequest**|  |


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

# **infoServiceGetInfo**
> IoArgoprojWorkflowV1alpha1InfoResponse infoServiceGetInfo()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InfoServiceApi(configuration);

let body:any = {};

apiInstance.infoServiceGetInfo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**IoArgoprojWorkflowV1alpha1InfoResponse**

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

# **infoServiceGetUserInfo**
> IoArgoprojWorkflowV1alpha1GetUserInfoResponse infoServiceGetUserInfo()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InfoServiceApi(configuration);

let body:any = {};

apiInstance.infoServiceGetUserInfo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**IoArgoprojWorkflowV1alpha1GetUserInfoResponse**

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

# **infoServiceGetVersion**
> IoArgoprojWorkflowV1alpha1Version infoServiceGetVersion()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InfoServiceApi(configuration);

let body:any = {};

apiInstance.infoServiceGetVersion(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**IoArgoprojWorkflowV1alpha1Version**

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


