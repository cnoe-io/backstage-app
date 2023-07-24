import { z } from 'zod';
import {makeFieldSchemaFromZod} from "@backstage/plugin-scaffolder";

export const ClusterPickerFieldSchema = makeFieldSchemaFromZod(
    z.string(),
    z.object( {
        requestUserCredentials: z.object({
                secretKey: z.string().describe('Key used within the template secrets context to store the credential')
            }
        )
            .optional()
            .describe('If defined will request user credentials to auth against the cluster')
    })
)

export const ClusterPickerSchema = ClusterPickerFieldSchema.schema

export type ClusterPickerProps = typeof ClusterPickerFieldSchema.type

export type ClusterPickerUiOptions = typeof ClusterPickerFieldSchema.uiOptionsType
