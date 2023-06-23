import {IoArgoprojWorkflowV1alpha1Workflow} from "../api/client";

export type InstanceConfig = {
    name: string;
    password?: string;
    token?: string;
    url: string;
    username?: string;
};


export interface ArgoWorkflowsApi {
    getWorkflowData: () => Promise<IoArgoprojWorkflowV1alpha1Workflow>
}
