import {scaffolderPlugin,} from '@backstage/plugin-scaffolder';
import {createScaffolderFieldExtension} from "@backstage/plugin-scaffolder-react";
import {GetK8sOIDCToken} from "./getOIDCToken";
import {ClusterPickerSchema} from "./schema";

export const GetK8sOIDCTokenExtension = scaffolderPlugin.provide(
    createScaffolderFieldExtension(
        {
            name: 'GetK8sOIDCToken',
            component: GetK8sOIDCToken,
            schema: ClusterPickerSchema
        }
    )
)
