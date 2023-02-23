import {ActionContext, createTemplateAction} from "@backstage/plugin-scaffolder-node";
import { Config } from '@backstage/config';
import * as k8s from '@kubernetes/client-node';
import {Logger} from "winston";
import {HttpError} from "@kubernetes/client-node";

// export function createInvokeArgoAction() {


type argoInput = {
    name: string
    namespace: string
    clusterName: string
}
export function createInvokeArgoAction(config: Config, logger: Logger) {
    return createTemplateAction<argoInput>({
            id: 'workflows:argo:invoke',
            description:
                'Append content to the end of the given file, it will create the file if it does not exist.',
            schema: {
                input: {
                    type: 'object',
                    required: ['name', 'namespace', 'clusterName'],
                    properties: {
                        name: {
                            title: 'Name',
                            description: 'Name of Argo workflow template',
                            type: 'string',
                        },
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
                    },
                },
                output: {
                    type: 'object',
                    properties: {
                        ID: {
                            title: 'ID',
                            type: 'string',
                        },
                    },
                },
            },
            async handler(ctx: ActionContext<argoInput>) {
                logger.debug(`Invoked with ${ctx.input}`)

                const c = config.getConfigArray("kubernetes.clusterLocatorMethods")
                const cc = c.filter(function(val) {
                    return val.getString("type") === "config"
                })
                logger.info(`found ${cc.length} statically configured clusters`)

                const clusters = new Array<Config>();
                // this is shit
                cc.forEach(function(conf ) {
                    const cl = conf.getConfigArray("clusters")
                    cl.forEach(function(val) {
                        if (val.getString("name") === ctx.input.clusterName) {
                            clusters.push(val)
                        }
                    })
                })
                if (clusters.length === 0 ) {
                    throw new Error("Cluster not found")
                }
                const targetCluster = clusters[0]
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
                const client = kc.makeApiClient(k8s.CoreV1Api)
                logger.info("made client")
                try {
                    const resp = await client.listNamespace()
                    logger.info(`response: ${resp.body}`)

                } catch (error) {
                    if (error instanceof HttpError) {
                        logger.info(`error : ${error.response.statusCode} ${error.response.statusMessage}`)
                        throw new Error(`Failed to talk to the cluster: ${error.response.statusCode} ${error.response.statusMessage}`)
                    }
                    if (error instanceof Error) {
                        logger.error(`error while talking to cluster: ${error.name} ${error.message}`)
                    }
                    throw new Error("Unknown exception was encountered.")
                }
            }
        }
    )
}