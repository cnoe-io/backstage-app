import {
    ConfigApi,
    createApiRef,
    DiscoveryApi, OAuthRequestApi,
} from '@backstage/core-plugin-api';

import {KubernetesApi } from "@backstage/plugin-kubernetes";


const API_VERSION = 'argoproj.io/v1alpha1'
const WORKFLOW_PLURAL = 'workflows'
export const argoWorkflowsApiRef = createApiRef<ArgoWorkflowsApi>({
    id: 'plugin.argoworkflows',
})
export interface ArgoWorkflowsApi {
    discoveryApi: DiscoveryApi
    kubernetesApi: KubernetesApi
    getWorkflows(clusterName: string | undefined, namespace: string | undefined, labels: string | undefined): Promise<string>
}

type Metadata = {
    annotations: Record<string, string>
    labels: Record<string, string>
    name: string
    namespace: string
}

type Workflows = {
    workflows: Workflow[]
}



export type Workflow = {
    metadata: Metadata
    spec: any
    status?: any
}

type WorkflowStatus = {
    finishedAt: string
    startedAt: string
    phase: string
    progress: string

}


export class ArgoWorkflows implements ArgoWorkflowsApi {
    discoveryApi: DiscoveryApi
    kubernetesApi: KubernetesApi
    configApi: ConfigApi
    oauthRequestApi: OAuthRequestApi

    constructor(discoveryApi: DiscoveryApi, kubernetesApi: KubernetesApi, configApi: ConfigApi, oauthRequestApi: OAuthRequestApi) {
        this.discoveryApi = discoveryApi
        this.kubernetesApi = kubernetesApi
        this.configApi = configApi
        this.oauthRequestApi = oauthRequestApi
    }

    async getWorkflows(clusterName: string | undefined, namespace: string | undefined, labels: string | undefined): Promise<string> {
        const ns = namespace !== undefined ? namespace : 'default'
        const path = `/apis/${API_VERSION}/namespaces/${ns}/${WORKFLOW_PLURAL}`
        const query = new URLSearchParams()
        if (labels) {
            query.set('labelSelector', labels)
        }
        const resp = await this.kubernetesApi.proxy({
            clusterName: clusterName !== undefined ? clusterName: await this.getCluster(),
            path: `${path}?${query.toString()}`
        })

        if (!resp.ok) {
            return Promise.reject(`failed to fetch resources: ${resp.status}, ${resp.statusText}, ${await resp.json()}`)
        }
        return Promise.resolve(resp.json());
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
