import {ArgoWorkflowsApi, InstanceConfig} from "../types";
import { Config } from '@backstage/config';
import {
    IoArgoprojWorkflowV1alpha1Workflow,
    AuthMethodsConfiguration,
    WorkflowServiceApi,
    createConfiguration, ServerConfiguration
} from "../../api/client";

export class Workflows implements ArgoWorkflowsApi {
    instanceConfigs: InstanceConfig[]
    workflowsSvcApi: {[key: string]: WorkflowServiceApi}

    constructor(
        config: Config
    ) {
        this.instanceConfigs = this.getInstanceConfigs(config)
        const svcConf = createConfiguration({
            baseServer: new ServerConfiguration(this.instanceConfigs[0].url, {}),
            authMethods: {}
        })
        this.workflowsSvcApi = new WorkflowServiceApi(svcConf)
    }

    getInstanceConfigs(config: Config): InstanceConfig[] {
        return config.getConfigArray('argocd.appLocatorMethods')
            .filter(element => element.getString('type') === 'config')
            .reduce(
                (acc: Config[], argoApp: Config) =>
                    acc.concat(argoApp.getConfigArray('instances')),
                [],
            )
            .map(instance => ({
                name: instance.getString('name'),
                url: instance.getString('url'),
                token: instance.getOptionalString('token'),
                username: instance.getOptionalString('username'),
                password: instance.getOptionalString('password'),
            }));
    }

    workflowsClient() {


        new  AuthMethodsConfiguration()
    }

    getWorkflowData(labelSelectors: string): Promise<IoArgoprojWorkflowV1alpha1Workflow> {

        return Promise.resolve(undefined);
    }

}
