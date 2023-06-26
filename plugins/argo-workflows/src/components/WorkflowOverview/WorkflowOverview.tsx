import {configApiRef, useApi} from "@backstage/core-plugin-api";
import {argoWorkflowsApiRef} from "../../api/indext";
import useAsync from "react-use/lib/useAsync";
import {Link, Progress, Table, TableColumn} from '@backstage/core-components'
import React from "react";
import Alert from "@material-ui/lab/Alert";
import { useEntity } from '@backstage/plugin-catalog-react';
import {IoArgoprojWorkflowV1alpha1WorkflowList} from "../../api/generated";


type TableData = {
    name: string
    namespace: string
    phase?: string
    progress?: string
    startedAt?: string
    finishedAt?: string
}

export const WorkflowOverviewComponent = () => {
    const {entity} = useEntity()
    const apiClient = useApi(argoWorkflowsApiRef)
    const configApi = useApi(configApiRef)
    let argoWorkflowsBaseUrl = configApi.getOptionalString("argoWorkflows.baseUrl")
    if (argoWorkflowsBaseUrl && argoWorkflowsBaseUrl.endsWith("/")) {
        argoWorkflowsBaseUrl = argoWorkflowsBaseUrl.substring(0, argoWorkflowsBaseUrl.length - 1)
    }


    const ln = entity.metadata.annotations?.['backstage.io/kubernetes-namespace']
    const ns = ln !== undefined ? ln : 'default'
    const clusterName = entity.metadata.annotations?.['argo-workflows/cluster-name']
    const k8sLabelSelector = entity.metadata.annotations?.['backstage.io/kubernetes-label-selector']

    const columns: TableColumn[] = [
        {title: "Name", field: "name", render: (data: any | TableData, _): any => {
            if (data && argoWorkflowsBaseUrl) {
                return (<Link to={`${argoWorkflowsBaseUrl}/workflows/${data.namespace}/${data.name}`}>{data.name}</Link>)
            }
                return data.name
            }},
        {title: "Phase", field: "phase", cellStyle: (data, _) => {
                if (data === "Succeeded") {
                    return {
                        color: '#6CD75F',
                    }
                }
                if (data === "Error" || data === "Failed") {
                    return {
                        color: '#DC3D5A'
                    }
                }
                return {}
            }},
        {title: "Progress", field: "progress"},
        {title: "StartTime", field: "startedAt", type: "datetime", defaultSort: 'desc'},
        {title: "EndTime", field: "finishedAt", type: "datetime"},
        {title: "Namespace", field: "namespace", type: "string"}
    ]

    const {value, loading, error} = useAsync(
        async (): Promise<IoArgoprojWorkflowV1alpha1WorkflowList> => {
            return await apiClient.getWorkflows(clusterName, ns, k8sLabelSelector)
        }
    )

    if (loading) {
        return <Progress />;
    } else if (error) {
        return <Alert severity="error">{error.message}</Alert>;
    }

    const data = value?.items?.map( val => {
        return {
            name: val.metadata.name,
            namespace: val.metadata.namespace,
            phase: val.status?.phase,
            progress: val.status?.progress,
            startedAt: val.status?.startedAt,
            finishedAt: val.status?.finishedAt
        } as TableData
    })

    if (data) {
        return (
            <Table options={{
                    paging: true,
                    search: true,
                    sorting: true,
                }}
                   columns={columns}
                   data={data.sort()}
            />
        )
    }

    return <Alert severity="warning">No Workflows found with given filter. Check your entity's annotations.</Alert>

}