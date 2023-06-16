import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import {useApi} from "@backstage/core-plugin-api";
import {kubernetesApiRef, kubernetesAuthProvidersApiRef} from "@backstage/plugin-kubernetes";
import {FormHelperText} from "@material-ui/core";
import {Progress, Select} from "@backstage/core-components";
import useAsync from "react-use/lib/useAsync";
import {useTemplateSecrets} from "@backstage/plugin-scaffolder-react";
import {ClusterPickerProps} from "./schema";

export const GetK8sOIDCToken = (props: ClusterPickerProps) => {

    const k8sApi = useApi(kubernetesApiRef)
    const k8sAuthProviderApi = useApi(kubernetesAuthProvidersApiRef)
    const { setSecrets } = useTemplateSecrets();

    const {uiSchema, onChange, rawErrors, formData, required} = props
    const getToken = async () => {
        const {requestUserCredentials} = uiSchema?.['ui:options'] ?? {}
        if (!requestUserCredentials) {
            return;
        }

        const clusters = await k8sApi.getClusters()
        const cluster = clusters.find(c => {
            return c.name === formData
        })
        const creds = await k8sAuthProviderApi.getCredentials(cluster!.oidcTokenProvider!)
        setSecrets({ [requestUserCredentials.secretKey]: creds.token! })
    }

    const {value: {clusters} = {clusters: []}, loading } = useAsync(
        async () => {
            const c = await k8sApi.getClusters()
            return {clusters: c.map(i => ({ label: i.name, value: i.name}))}
        }
    )

    if (loading) {
        return <Progress />;
    }

    return (
        <FormControl
            margin="normal"
            required={required}
            error={rawErrors?.length > 0 && !formData}
        >
            <Select
                native
                label="Cluster"
                items={clusters}
                onChange={getToken}
            />
            <FormHelperText id="entityName">
                Kubernetes Cluster Name
            </FormHelperText>
        </FormControl>
    );
};



