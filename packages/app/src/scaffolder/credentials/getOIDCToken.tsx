import React, {useCallback, useEffect} from 'react';
import FormControl from '@material-ui/core/FormControl';
import {
    useApi, configApiRef, discoveryApiRef, oauthRequestApiRef
} from "@backstage/core-plugin-api";
import { kubernetesApiRef } from "@backstage/plugin-kubernetes";
import { FormHelperText } from "@material-ui/core";
import {Progress, Select} from "@backstage/core-components";
import useAsync from "react-use/lib/useAsync";
import {useTemplateSecrets} from "@backstage/plugin-scaffolder-react";
import {ClusterPickerProps} from "./schema";
import {OAuth2} from "@backstage/core-app-api";


export const GetK8sOIDCToken = (props: ClusterPickerProps) => {

    const k8sApi = useApi(kubernetesApiRef)
    const { setSecrets, secrets } = useTemplateSecrets();

    const discoveryApi = useApi(discoveryApiRef)
    const oauthRequestApi = useApi(oauthRequestApiRef)
    const configApi = useApi(configApiRef)

    const {uiSchema, required} = props
    let {rawErrors} = props
    const {value: {clusters} = {clusters: []}, loading } = useAsync(
        async () => {
            const c = await k8sApi.getClusters()
            return {clusters: c.map(i => ({ label: i.name, value: i.name}))}
        }
    )
    if (!rawErrors) {
        rawErrors = []
    }

    const getToken = useCallback( async (clusterName: string) => {
        const {requestUserCredentials} = uiSchema?.['ui:options'] ?? {}
        if (!requestUserCredentials) {
            return;
        }
        const cs = await k8sApi.getClusters()
        const cluster = cs.find(c => {
            return c.name === clusterName
        })
        if (cluster?.oidcTokenProvider === undefined) {
            throw new Error("no oidc provider defined for this cluster")
        }

        const oidc = OAuth2.create({
            discoveryApi,
            oauthRequestApi,
            provider: {
                id: cluster.oidcTokenProvider,
                title: 'OIDC',
                icon: () => null,
            },
            environment: configApi.getOptionalString('auth.environment'),
            defaultScopes: ['openid', 'profile', 'email', 'groups'],
        })
        const token =  await oidc.getIdToken()

        setSecrets({ [requestUserCredentials.secretKey]: token })
        }, [configApi, discoveryApi, k8sApi, oauthRequestApi, setSecrets, uiSchema]
    )

    useEffect(() => {
        const {requestUserCredentials} = uiSchema?.['ui:options'] ?? {}
        if (!requestUserCredentials?.secretKey || secrets[requestUserCredentials?.secretKey!]) {
            return
        }

        if (clusters.length) {
            getToken(clusters[0].value).catch(console.error)
        }
    }, [clusters, getToken, secrets, uiSchema])

    if (loading) {
        return <Progress />;
    }

    return (
        <FormControl
            margin="normal"
            required={required}
            error={rawErrors?.length > 0}
        >
            <Select
                native
                label="Cluster"
                items={clusters}
                onChange={e => getToken(e.toString())}
                placeholder="select one"
            />
            <FormHelperText id="entityName">
                Kubernetes Cluster Name
            </FormHelperText>
        </FormControl>
    );
};



