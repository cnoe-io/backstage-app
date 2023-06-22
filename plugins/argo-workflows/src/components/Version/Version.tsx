import {useApi} from "@backstage/core-plugin-api";
import {argoWorkflowsApiRef} from "../../api/indext";
import useAsync from "react-use/lib/useAsync";
import {InfoCard, Progress, StructuredMetadataTable} from '@backstage/core-components'
import React from "react";
import Alert from "@material-ui/lab/Alert";
import { useEntity } from '@backstage/plugin-catalog-react';



export const VersionComponent = () => {
    const {entity} = useEntity()
    const apiClient = useApi(argoWorkflowsApiRef)

    const ln = entity.metadata.annotations?.['backstage.io/kubernetes-namespace']
    const ns = ln !== undefined ? ln : 'default'
    const clusterName = entity.metadata.annotations?.['argo-workflows/cluster-name']

    const k8sLabelSelector = entity.metadata.annotations?.['backstage.io/kubernetes-label-selector']

    const {value, loading, error} = useAsync(
        async (): Promise<string> => {
            return await apiClient.getWorkflows(clusterName, ns, k8sLabelSelector)
        }
    )
    if (loading) {
        return <Progress />;
    } else if (error) {
        return <Alert severity="error">{error.message}</Alert>;
    }
    if (value) {
        const m = {
            namespaces: value
        }
        return (
            <InfoCard title="Testing" variant="fullHeight">
                <StructuredMetadataTable metadata={m} />
            </InfoCard>
        )
    }
    return <Alert severity="warning">Oh no</Alert>

}
