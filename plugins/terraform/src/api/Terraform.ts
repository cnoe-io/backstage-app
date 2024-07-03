import { IdentityApi, ConfigApi } from "@backstage/core-plugin-api"
import { KubernetesApi } from "@backstage/plugin-kubernetes";
import { TerraformApi } from "./index";

const API_VERSION = "v1";
const K8s_API_TIMEOUT = "timeoutSeconds";

export class Terraform implements TerraformApi {
  private kubernetesApi: KubernetesApi;
  private identityApi: IdentityApi;
  private configApi: ConfigApi;

  constructor(
    kubernetesApi: KubernetesApi,
    identityApi: IdentityApi,
    configApi: ConfigApi,
  ) {
    this.kubernetesApi = kubernetesApi;
    this.identityApi = identityApi;
    this.configApi = configApi;
  }

  async fetchURL(url: string, type: string, requestBody: any) {
    const { token } = await this.identityApi.getCredentials();
    const backendUrl = this.configApi.getString('backend.baseUrl');
    const response = await fetch(`${backendUrl}${url}`, {
      method: type,
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}`,
      }
    });
    return response;
  }

  async deflate(
    tfState:string
  ): Promise<any> {
    const requestBody = {
      tfState
    };

    const response = await this.fetchURL('/api/terraform/deflate', 'post', requestBody);
    
    if (!response.ok) {
      return Promise.reject(
        `failed to fetch resources: ${response.status}, ${
          response.statusText
        }, ${await response.text()}`
      );
    }
    return response.json();
  }

  async s3GetFileList(
    Bucket:string,
    Prefix:string
  ):Promise<any> {
    const requestBody = {
      Bucket,
      Prefix
    };

    const response = await this.fetchURL('/api/terraform/getFileList', 'post', requestBody);
    if (!response.ok) {
      return Promise.reject(
        `failed to fetch resources: ${response.status}, ${
          response.statusText
        }, ${await response.text()}`
      );
    }
    return response.json();
  }

  async localGetFileList(
    FileLocation:string
  ):Promise<any> {
    const requestBody = {
      FileLocation,
    };

    const response = await this.fetchURL('/api/terraform/getLocalFileList', 'post', requestBody);
    if (!response.ok) {
      return Promise.reject(
        `failed to fetch resources: ${response.status}, ${
          response.statusText
        }, ${await response.text()}`
      );
    }
    return response.json();
  }

  async getTFStateFile(
    Bucket:string,
    file:any
  ):Promise<any> {
    const bodyObj:any = {
      Key: file.Key
    };
    if(Bucket) {
      bodyObj.Bucket = Bucket;
    }

    const response = await this.fetchURL('/api/terraform/getTFStateFile', 'post', bodyObj);
    if (!response.ok) {
      return Promise.reject(
        `failed to fetch resources: ${response.status}, ${
          response.statusText
        }, ${await response.text()}`
      );
    }
    return response.json();
  }

  

  async getSecret(
    clusterName: string | undefined,
    namespace: string,
    secretName: string
  ): Promise<any> {
    const ns = namespace !== undefined ? namespace : "flux-system";
    const path = `/api/${API_VERSION}/namespaces/${ns}/secrets/${secretName}`;
    const query = new URLSearchParams({
      [K8s_API_TIMEOUT]: "30",
    });
    // need limits and pagination
    const resp = await this.kubernetesApi.proxy({
      clusterName:
        clusterName !== undefined ? clusterName : await this.getFirstCluster(),
      path: `${path}?${query.toString()}`,
    });

    if (!resp.ok) {
      return Promise.reject(
        `failed to fetch resources: ${resp.status}, ${
          resp.statusText
        }, ${await resp.text()}`
      );
    }
    // need validation
    const responseText = await resp.text()
    const secretJSON = JSON.parse(responseText)
    return [
      {
        "TFStateContents": secretJSON.data.tfstate
      }
    ]
  }

  async getFirstCluster(): Promise<string> {
    const clusters = await this.kubernetesApi.getClusters();
    if (clusters.length > 0) {
      return Promise.resolve(clusters[0].name);
    }
    return Promise.reject("no clusters found in configuration");
  }
}
