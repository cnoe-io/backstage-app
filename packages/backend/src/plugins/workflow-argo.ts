import {ActionContext, createTemplateAction} from "@backstage/plugin-scaffolder-node";
import { Config } from '@backstage/config';
import * as k8s from '@kubernetes/client-node';
import {Logger} from "winston";
import {HttpError} from "@kubernetes/client-node";

type argoInput = {
    namespace: string
    clusterName: string
    templateName: string
    parameters: parameter[]
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
                        templateName: {
                            title: 'Template name',
                            description: 'Argo Workflows template name',
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
                        }
                    },
                },
                output: {
                    type: 'object',
                    properties: {
                        ID: {
                            title: 'Workflow ID',
                            type: 'string',
                        },
                    },
                },
            },
            async handler(ctx: ActionContext<argoInput>) {
                logger.debug(`Invoked with ${ctx.input}`)

                const targetCluster = getClusterConfig(ctx.input.clusterName, config)
                const kc = new k8s.KubeConfig()
                kc.addCluster({
                    name: ctx.input.clusterName,
                    caData: targetCluster.getString("caData"),
                    server: targetCluster.getString("url"),
                    skipTLSVerify: targetCluster.getBoolean("skipTLSVerify"),
                })
                kc.addUser({
                    name: "admin",
                    token: targetCluster.getString("serviceAccountToken")
                })
                kc.addContext({
                    cluster: ctx.input.clusterName,
                    user: "admin",
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
                    logger.debug(`response: ${resp.body}`)
                    ctx.output('ID', resp.body.toString())
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
    const c = config.getConfigArray("kubernetes.clusterLocatorMethods")
    const cc = c.filter(function(val) {
        return val.getString("type") === "config"
    })

    const clusters = new Array<Config>();
    // this is shit
    cc.forEach(function(conf ) {
        const cl = conf.getConfigArray("clusters")
        cl.forEach(function(val) {
            if (val.getString("name") === name) {
                clusters.push(val)
            }
        })
    })
    if (clusters.length === 0 ) {
        throw new Error(`Cluster with name ${name} not found`)
    }
    return clusters[0]
}
