import {ActionContext, createTemplateAction} from "@backstage/plugin-scaffolder-node";
import { Config } from '@backstage/config';
import * as k8s from '@kubernetes/client-node';
import {Logger} from "winston";
import {HttpError} from "@kubernetes/client-node";

type argoInput = {
    namespace: string
    clusterName: string
    userOIDCToken: string
    templateName: string
    parameters: parameter[]
    wait?: boolean
}

const argoWorkflowsGroup = 'argoproj.io'
const argoWorkflowsVersion = 'v1alpha1'
const argoWorkFlowPlural = 'workflows'
const argoWorkFlowKind = 'Workflow'
const argoWorkFlowMetadataDefault: k8s.V1ObjectMeta = {
    generateName: "backstage-scaffolding-"
}

class Workflow {
    apiVersion: string = `${argoWorkflowsGroup}/${argoWorkflowsVersion}`
    kind: string = argoWorkFlowKind
    metadata: k8s.V1ObjectMeta = argoWorkFlowMetadataDefault
    spec: workflowSpec
    status?: workflowStatus
    constructor(templateName: string, namespace: string, params?: parameter[], artifacts?: object[] ) {
        this.metadata.namespace = namespace
        const args: argument = {}
        if (params) {
            args.parameters = params
        }
        if (artifacts) {
            args.artifacts = artifacts
        }
        this.spec = {
            workflowTemplateRef: {
                name: templateName
            },
            arguments: args
        }
    }
}

type workflowSpec = {
    arguments?: argument
    entrypoint?: string
    workflowTemplateRef: workflowTemplateRef
}

type workflowStatus = {
    conditions?: workflowStatusCondition[]
    phase?: string
    progress?: string
}

type workflowStatusCondition = {
    message?: string
    status?: string
    type: string
}

type workflowTemplateRef = {
    clusterScope?: boolean
    name: string
}

type argument = {
    artifacts?: object[]
    parameters?: parameter[]
}

type parameter = {
    name: string
    value: string
    valueFrom?: object
}

export function createInvokeArgoAction(config: Config, logger: Logger) {
    return createTemplateAction<argoInput>({
            id: 'workflows:argo:invoke',
            description:
                'Invokes an Argo workflow using a workflow template',
            schema: {
                input: {
                    type: 'object',
                    required: ['namespace', 'clusterName', 'templateName'],
                    properties: {
                        namespace: {
                            title: 'Namespace',
                            description: 'Namespace to run this workflow',
                            type: 'string',
                        },
                        clusterName: {
                            title: 'Cluster name',
                            description: 'Name of Cluster',
                            type: 'string',
                        },
                        userOIDCToken: {
                            title: 'User\'s OIDC token',
                            description: "If specified, it will use the provided token to communicate with the Kubernetes cluster",
                            type: 'string'
                        },
                        templateName: {
                            title: 'Template name',
                            description: 'Argo Workflows template name to run',
                            type: 'string',
                        },
                        parameters: {
                            title: "Argo workflows parameters",
                            description: 'parameters used by the template',
                            type: 'array',
                            items: {
                                type: "object",
                                properties: {
                                    name: {
                                        type: "string"
                                    },
                                    value: {
                                        type: "string"
                                    }
                                }
                            }
                        },
                        wait: {
                            title: 'Wait for completion',
                            description: 'specify weather to wait for completion of this workflow.',
                            type: 'boolean',
                        }
                    },
                },
                output: {
                    type: 'object',
                    properties: {
                        workflowName: {
                            title: 'Workflow name',
                            type: 'string',
                        },
                        workflowNamespace: {
                            title: 'Workflow namespace',
                            type: 'string',
                        },
                    },
                },
            },
            async handler(ctx: ActionContext<argoInput>) {
                logger.debug(`Invoked with ${JSON.stringify(ctx.input)})`)
                logger.info(JSON.stringify(ctx.secrets))
                const targetCluster = getClusterConfig(ctx.input.clusterName, config)
                const kc = new k8s.KubeConfig()
                kc.addCluster({
                    name: targetCluster.getString("name"),
                    caData: targetCluster.getString("caData"),
                    server: targetCluster.getString("url"),
                    skipTLSVerify: targetCluster.getBoolean("skipTLSVerify"),
                })

                kc.addUser({
                    name: "scaffolder-user",
                    token: ctx.input.userOIDCToken? ctx.input.userOIDCToken : targetCluster.getString("serviceAccountToken")
                })
                kc.addContext({
                    cluster: ctx.input.clusterName,
                    user: "scaffolder-user",
                    name: ctx.input.clusterName
                })
                kc.setCurrentContext(ctx.input.clusterName)

                const client = kc.makeApiClient(k8s.CustomObjectsApi)
                const wf = new Workflow(ctx.input.templateName, ctx.input.namespace, ctx.input.parameters)
                // const body = generateBody(ctx.input.templateName, ctx.input.namespace)
                try {
                    const resp = await client.createNamespacedCustomObject(
                        argoWorkflowsGroup, argoWorkflowsVersion, ctx.input.namespace,
                        argoWorkFlowPlural, wf
                    )
                    const respBody = resp.body as Workflow
                    logger.debug(`Workflow ID: ${respBody.metadata.name}, namespace ${respBody.metadata.namespace}`)
                    ctx.output('workflowName', respBody.metadata.name!)
                    ctx.output('workflowNamespace', respBody.metadata.namespace!)
                    if (ctx.input.wait) {
                        await wait(kc, respBody.metadata.namespace!, respBody.metadata.name!)
                    }
                } catch (err) {
                    if (err instanceof HttpError) {
                        let msg = `${err.response.statusMessage}: `
                        if ("kind" in err.body && err.body.kind === "Status" && "message" in err.body) {
                            msg += err.body.message
                        }
                        logger.info(`error : ${err.response.statusCode} ${msg}`)
                        throw new Error(`Failed to talk to the cluster: ${err.response.statusCode} ${err.response.statusMessage} \n ${msg}`)
                    }
                    if (err instanceof Error) {
                        logger.error(`error while talking to cluster: ${err.name} ${err.message}`)
                    }
                    throw new Error("Unknown exception was encountered.")
                }
            }
        }
    )
}

function getClusterConfig(name: string, config: Config): Config {

    const clusterConfigs = config.getConfigArray("kubernetes.clusterLocatorMethods").filter(
        (val: Config) => {
            return val.getString('type') === 'config'
        }
    )

    const clusters = new Array<Config>();
    clusterConfigs.filter( (conf: Config) => {
        const cluster = conf.getConfigArray("clusters").find( (val: Config) => {
            return val.getString("name") === name
        })
        if (cluster) {
            clusters.push(cluster)
        }
    })

    if (clusters.length === 0 ) {
        throw new Error(`Cluster with name ${name} not found`)
    }
    return clusters[0]
}

async function wait(kc: k8s.KubeConfig, namespace: string, name: string, timeoutSeconds: number = 120) {
    const client = new k8s.Watch(kc)
    return new Promise<void>( async (resolve, reject) => {
        const result = await client.watch(
            `/apis/${argoWorkflowsGroup}/${argoWorkflowsVersion}/namespaces/${namespace}/${argoWorkFlowPlural}`,
            {
                fieldSelector: `metadata.name=${name}`,
            },
            (_type, apiObj, _watchObj) => {
                if (apiObj) {
                    const wf = apiObj as Workflow
                    if (wf.status && wf.status.conditions) {
                        const cond = wf.status.conditions.filter((val) => {
                            return val.type === 'Completed' && val.status === "True"
                        })
                        if (cond.length > 0) {
                            // result.abort()
                            resolve()
                            return
                        }
                    }
                }
            },
            (err) => {
                if (err instanceof Error) {
                    // logger.debug(`error encountered while waiting for workflow to complete: ${err.name} ${err.message}`)
                }
            }
        )
        setTimeout(() => {
            result.abort()
            reject(new Error("TIMEOUT"))
        }, timeoutSeconds * 1000)
    })
}
