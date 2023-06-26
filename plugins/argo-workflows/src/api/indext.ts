import {
    ConfigApi,
    createApiRef,
    DiscoveryApi, IdentityApi
} from '@backstage/core-plugin-api';

import {KubernetesApi } from "@backstage/plugin-kubernetes";
import {
    IoArgoprojWorkflowV1alpha1WorkflowList,
} from "./generated/";


const API_VERSION = 'argoproj.io/v1alpha1'
const WORKFLOW_PLURAL = 'workflows'
const DEFAULT_WORKFLOW_PROXY = '/argo-workflows/api'
const API_LABEL_SELECTOR = 'listOptions.labelSelector'
const API_TIMEOUT = "listOptions.timeoutSeconds"
const K8s_API_TIMEOUT = "timeoutSeconds"
export const argoWorkflowsApiRef = createApiRef<ArgoWorkflowsApi>({
    id: 'plugin.argoworkflows',
})
export interface ArgoWorkflowsApi {
    discoveryApi: DiscoveryApi
    kubernetesApi: KubernetesApi
    getWorkflowsFromK8s(clusterName: string, namespace: string | undefined, labels: string | undefined): Promise<IoArgoprojWorkflowV1alpha1WorkflowList>
    getWorkflows(clusterName: string | undefined, namespace: string | undefined, labels: string | undefined): Promise<IoArgoprojWorkflowV1alpha1WorkflowList>
    getWorkflowsFromProxy(namespace: string, labels: string | undefined): Promise<IoArgoprojWorkflowV1alpha1WorkflowList>
}

// type Metadata = {
//     annotations: Record<string, string>
//     labels: Record<string, string>
//     name: string
//     namespace: string
// }
//
// export type Workflow = {
//     metadata: Metadata
//     status?: WorkflowStatus
// }
//
// type WorkflowStatus = {
//     finishedAt: string
//     startedAt: string
//     phase: string
//     progress: string
// }
//
// type workflowResponse = {
//     items: Workflow[]
// }

export class ArgoWorkflows implements ArgoWorkflowsApi {
    discoveryApi: DiscoveryApi
    kubernetesApi: KubernetesApi
    configApi: ConfigApi
    identityApi: IdentityApi

    constructor(discoveryApi: DiscoveryApi, kubernetesApi: KubernetesApi, configApi: ConfigApi, identityApi: IdentityApi) {
        this.discoveryApi = discoveryApi
        this.kubernetesApi = kubernetesApi
        this.configApi = configApi
        this.identityApi = identityApi
    }

    async getWorkflowsFromK8s(clusterName: string | undefined, namespace: string | undefined, labels: string | undefined): Promise<IoArgoprojWorkflowV1alpha1WorkflowList> {
        const ns = namespace !== undefined ? namespace : 'default'
        const path = `/apis/${API_VERSION}/namespaces/${ns}/${WORKFLOW_PLURAL}`
        const query = new URLSearchParams({
            [K8s_API_TIMEOUT]: "30"
        })
        if (labels) {
            query.set('labelSelector', labels)
        }
        // need limits and pagination
        const resp = await this.kubernetesApi.proxy({
            clusterName: clusterName !== undefined ? clusterName: await this.getCluster(),
            path: `${path}?${query.toString()}`
        })

        if (!resp.ok) {
            return Promise.reject(`failed to fetch resources: ${resp.status}, ${resp.statusText}, ${await resp.json()}`)
        }
        // need validation
        return JSON.parse(await resp.text()) as IoArgoprojWorkflowV1alpha1WorkflowList
    }

    getWorkflows(clusterName: string | undefined, namespace: string, labels: string | undefined): Promise<IoArgoprojWorkflowV1alpha1WorkflowList> {
        if (clusterName) {
            return this.getWorkflowsFromK8s(clusterName, namespace, labels)
        }
        return this.getWorkflowsFromProxy(namespace, labels);
    }

    async getWorkflowsFromProxy(namespace: string | undefined, labels: string | undefined): Promise<IoArgoprojWorkflowV1alpha1WorkflowList> {
        const proxyUrl = await this.discoveryApi.getBaseUrl('proxy')

        const ns = namespace !== undefined ? namespace : 'default'
        const url = `${proxyUrl}${DEFAULT_WORKFLOW_PROXY}/api/v1/workflows/${ns}`

        const query = new URLSearchParams(
            {[API_TIMEOUT]: "30"}
        )
        if (labels) {
            query.set(API_LABEL_SELECTOR, labels)
        }

        const { token } = await this.identityApi.getCredentials()

        const headers = new Headers(
            {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        )

        const resp = await fetch(`${url}?${query.toString()}`, {
            headers: headers
        })

        if (!resp.ok) {
            return Promise.reject(`failed to fetch resources: ${resp.status}, ${resp.statusText}, ${await resp.json()}`)
        }

        // need validation
        return Promise.resolve(JSON.parse(await resp.text()) as IoArgoprojWorkflowV1alpha1WorkflowList);
    }


    async getCluster(): Promise<string> {
        const clusters = await this.kubernetesApi.getClusters()
        if (clusters.length > 0) {
            return Promise.resolve(clusters[0].name)
        }
        return Promise.reject("no clusters found in configuration")
    }

    // async getToken(clusterName: string): Promise<string> {
    //     const clusters = await this.kubernetesApi.getClusters()
    //     const cluster = clusters.find(c => {
    //         return c.name === clusterName
    //     })
    //     if (!cluster) {
    //         return Promise.reject(`cluster ${clusterName} not found`)
    //     }
    //     const oidc = OAuth2.create({
    //         discoveryApi: this.discoveryApi,
    //         oauthRequestApi: this.oauthRequestApi,
    //         provider: {
    //             id: cluster.oidcTokenProvider!,
    //             title: 'OIDC',
    //             icon: () => null,
    //         },
    //         environment: this.configApi.getOptionalString('auth.environment'),
    //         defaultScopes: ['openid', 'profile', 'email', 'groups'],
    //     })
    //     return oidc.getIdToken()
    // }
}
