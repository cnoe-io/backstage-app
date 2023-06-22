import {useApi} from "@backstage/core-plugin-api";
import {argoWorkflowsApiRef, Workflow} from "../../api/indext";
import useAsync from "react-use/lib/useAsync";
import {Progress, Table, TableColumn} from '@backstage/core-components'
import React from "react";
import Alert from "@material-ui/lab/Alert";
import { useEntity } from '@backstage/plugin-catalog-react';


type TableData = {
    name: string
    phase?: string
    progress?: string
    startedAt?: string
    finishedAt?: string
}


const columns: TableColumn[] = [
    {title: "Name", field: "name"},
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
    {title: "StartTime", field: "startedAt", type: "datetime"},
    {title: "EndTime", field: "finishedAt", type: "datetime"}
]

export const VersionComponent = () => {
    const {entity} = useEntity()
    const apiClient = useApi(argoWorkflowsApiRef)

    const ln = entity.metadata.annotations?.['backstage.io/kubernetes-namespace']
    const ns = ln !== undefined ? ln : 'default'
    const clusterName = entity.metadata.annotations?.['argo-workflows/cluster-name']

    const k8sLabelSelector = entity.metadata.annotations?.['backstage.io/kubernetes-label-selector']

    const {value, loading, error} = useAsync(
        async (): Promise<Workflow[]> => {
            return await apiClient.getWorkflows(clusterName, ns, k8sLabelSelector)
        }
    )
    if (loading) {
        return <Progress />;
    } else if (error) {
        return <Alert severity="error">{error.message}</Alert>;
    }

    const data = value?.map( val => {
        return {
            name: val.metadata.name,
            phase: val.status?.phase,
            progress: val.status?.progress,
            startedAt: val.status?.startedAt,
            finishedAt: val.status?.finishedAt
        } as TableData
    })

    if (data) {
        return (
            <Table options={{paging: true, search: true}}
                   columns={columns}
                   data={data}
            />
        )
    }
    return <Alert severity="warning">Oh no</Alert>

}
