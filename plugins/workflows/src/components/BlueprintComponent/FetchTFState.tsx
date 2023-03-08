import React from 'react';
import {Table, TableColumn, Progress, InfoCard} from '@backstage/core-components';
import Alert from '@material-ui/lab/Alert';
import useAsync from 'react-use/lib/useAsync';

import {
  DiscoveryApi,
  discoveryApiRef,
  useApi,
} from '@backstage/core-plugin-api';
// eslint-disable-next-line no-restricted-imports
import {gunzipSync} from "zlib";
import {useEntity} from "@backstage/plugin-catalog-react"
import {IconButton, Typography} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import ClearIcon from "@material-ui/icons/Clear";
import LinkOffRounded from "@material-ui/icons/LinkOffRounded";

const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImMxNWQ5MzdiNTViOWE4NjBhN2MzNjY5ZDBjODAzMjZjZjdlNDhmOGUifQ.eyJhdWQiOlsiaHR0cHM6Ly9rdWJlcm5ldGVzLmRlZmF1bHQuc3ZjIl0sImV4cCI6MTY3ODI5OTQ2MywiaWF0IjoxNjc4MjEzMDYzLCJpc3MiOiJodHRwczovL29pZGMuZWtzLnVzLXdlc3QtMi5hbWF6b25hd3MuY29tL2lkLzNDRUJBM0NBNzg3MEEzRTVCRkUyQ0YzRkExNzNFRTU2Iiwia3ViZXJuZXRlcy5pbyI6eyJuYW1lc3BhY2UiOiJhZG1pbiIsInNlcnZpY2VhY2NvdW50Ijp7Im5hbWUiOiJhZG1pbiIsInVpZCI6IjQyMzQwOTdiLWFmZjktNDc1Zi05NzY0LTg5NjM4ZWQ4MmVhMiJ9fSwibmJmIjoxNjc4MjEzMDYzLCJzdWIiOiJzeXN0ZW06c2VydmljZWFjY291bnQ6YWRtaW46YWRtaW4ifQ.CMew9l09MFBSISOPczcITpz9ZP5XASWlD7ez-tnvfs2ZzhVI7V8OpazQSQSXFcsCs399B3-DHc4Zt6NY9rZgvAMQ9hXtfO2a840o4sRMabOuljS7br503XUPr1JUwkTZ6hS_LRVNDqE8MEw8eyLmKQ7K_jV0fyWsIrR9mVXn6RVhD96P_k-N5da49MP-PbFHJsEeOwVwcUCWRfPYIMp1XlpCGxjqymKnxVQFuVC76aQYpSKzOsI-rYMkCk0Yt7L-NjOpx0tsBvs58SJy5XP_x64cw0_j4Xba9prH8g4OmGeCUV5csaT8N3FaY0e_kGqftY-B2bwtOxl0vx_6gadjyQ"

type TFState = {
  terraform_version: string
  resources: {
    name: string
    provider: string
    type: string
    instances: {
      attributes: {
        arn: string
        id: string
      }
    }[]
  }[]
}

type Resource = {
  name: string
  provider: string
  type: string
  arn?: string
  id?: string
}

type TFTableProps = {
  resources: Resource[]
}

export const TFTable = (props: TFTableProps) => {

  const columns: TableColumn[] = [
    { title: 'Name', field: 'name' },
    { title: 'Provider', field: 'provider' },
    { title: 'Type', field: 'type' },
    { title: 'Arn', field: 'arn' },
    { title: 'ID', field: 'id' },
  ];

  return (
      <Table
          title="Resources provisioned by Terraform"
          options={{ search: true, paging: false }}
          columns={columns}
          data={props.resources}
      />
  );
}

export const FetchTFState = () => {
  const apiRef = useApi(discoveryApiRef)
  const { value, loading, error } = useAsync((): Promise<TFState> => {
    return getTFState("tfstate-default-helloworld", "flux-system", apiRef)
  })
  if (loading) {
    return <Progress />
  } else if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  // const a = await getTFState("tfstate-default-helloworld", "flux-system", discoveryApi)
  // const tfdata = tfstate as TFState
  const resources =  value!.resources.map(val => {
    const out: Resource = {
      name: val.name,
      provider: val.provider,
      type: val.type,
    }
    if (val.instances.length > 0) {
      out.arn = val.instances[0].attributes.arn
      out.id = val.instances[0].attributes.id
    }
    return out
  })

  return <TFTable resources={resources}/>
};

// horrible
type payload = {
  kind: string
  apiVersion: string
  items?: {
    metadata: {
      labels: {
        [key: string]: string
      }
    }
  }[]
  metadata: {
    annotations: {
      [key: string]: string
    }
  }
  type: string
  data: {
    tfstate: string
  }
}

async function getTFState(name: string, namespace: string, apiRef: DiscoveryApi): Promise<TFState> {
  const baseUrl = await apiRef.getBaseUrl("kubernetes")
  const proxyUrl = `${baseUrl}/proxy`
  return new Promise(async (resolve, reject) => {
    const resp = await fetch(`${proxyUrl}/api/v1/namespaces/${namespace}/secrets/${name}`, {
      method: 'GET',
      headers: {
        'X-Kubernetes-Cluster': "canoe-packaging",
        Authorization: `Bearer ${token}`,
      },
    });
    if (resp.ok) {
      const payload = await resp.json() as payload
      const data = Buffer.from(payload.data.tfstate, 'base64')
      let compression = "gzip"
      if ( "encoding" in payload.metadata.annotations) {
        compression = payload.metadata.annotations.encoding
      }
      if (compression === "gzip") {
        const a = gunzipSync(data).toString("utf-8")
        resolve(JSON.parse(a) as TFState)
      }
      reject(`unknown compression method specified: ${compression}`)
    } else {
      reject(`Failed to retrieve terraform information: ${resp.status}: ${resp.statusText} `)
    }
  })
}

enum workflowStatus {
  UNKNOWN,
  DELETING = 0,
  CREATING,
  DELETED,
  NOTFOUND,
  FAILED
}
export const ManageBlueprint = () => {
  const entity = useEntity()
  const apiRef = useApi(discoveryApiRef)
  const { value, loading, error } = useAsync((): Promise<workflowStatus> => {
    return getWorkflow(entity.entity.metadata.uid!, "admin", apiRef)
  })
  if (loading) {
    return <Progress />
  } else if (error) {
    return <Alert severity="error">{error}</Alert>;
  }
  let text: string
  switch (value) {
    case workflowStatus.DELETING:
      text = "This blueprint deployment is being deleted"
      break
    case workflowStatus.DELETED:
      text = "This blueprint deployment was successfully deleted"
      break
    case workflowStatus.NOTFOUND:
      text = "Manage this blueprint with the buttons below"
      break
    case workflowStatus.FAILED:
      return <Alert severity="error">"failed to delete blueprint deployment"</Alert>;
    default:
      return <Alert severity="error">"could not determine blueprint status"</Alert>;
  }
  return (
      <InfoCard title="Blueprint management">
        <Typography color="textSecondary">
          {text}
        </Typography>
        <IconButton aria-label="delete" size="medium">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="clear" size="medium">
          <ClearIcon />
        </IconButton>
        <IconButton aria-label="link" size="medium">
          <LinkOffRounded />
        </IconButton>
      </InfoCard>
  )
}
async function getWorkflow(entityId: string, namespace: string, apiRef: DiscoveryApi): Promise<workflowStatus> {
  const baseUrl = await apiRef.getBaseUrl("kubernetes")
  const proxyUrl = `${baseUrl}/proxy`
  return new Promise(async (resolve, reject) => {
    const queryParams = new URLSearchParams({
      labelSelector: `entity-id=${entityId}`,
      limit: "1"
    }).toString()

    const resp = await fetch(`${proxyUrl}/apis/argoproj.io/v1alpha1/namespaces/${namespace}/workflows?${queryParams}`, {
      method: 'GET',
      headers: {
        'X-Kubernetes-Cluster': "canoe-packaging",
        Authorization: `Bearer ${token}`,
      },
    });
    if (resp.ok) {
      const payload = await resp.json() as payload
      if (payload.items!.length > 0) {
        const labels = payload.items![0].metadata.labels
        if ("workflows.argoproj.io/phase" in labels) {
          switch (labels["workflows.argoproj.io/phase"]) {
            case "Running":
              resolve(workflowStatus.DELETING)
              break;
            case "Succeeded":
              resolve(workflowStatus.DELETED)
              break
            case "Failed":
              resolve(workflowStatus.FAILED)
              break
            default:
              reject(workflowStatus.UNKNOWN)
              break
          }
        }
      } else {
        resolve(workflowStatus.NOTFOUND)
      }
    } else {
      reject(`Failed to retrieve terraform information: ${resp.status}: ${resp.statusText} `)
    }
  })
}



