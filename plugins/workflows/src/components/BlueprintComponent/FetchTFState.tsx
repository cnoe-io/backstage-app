import React, {useState} from 'react';
import {Table, TableColumn, Progress, InfoCard, LinkButton} from '@backstage/core-components';
import Alert from '@material-ui/lab/Alert';
import useAsync from 'react-use/lib/useAsync';

import {
  DiscoveryApi,
  discoveryApiRef, OpenIdConnectApi,
  useApi
} from '@backstage/core-plugin-api';
// eslint-disable-next-line no-restricted-imports
import {gunzipSync} from "zlib";
import {useEntity} from "@backstage/plugin-catalog-react"
import {
  Dialog, DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import ClearIcon from "@material-ui/icons/Clear";
import LinkOffRounded from "@material-ui/icons/LinkOffRounded";
import {keycloakOIDCAuthApiRef} from "../../plugin";

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
  const entity = useEntity()
  const oidcApi = useApi(keycloakOIDCAuthApiRef)
  const secretName = `tfstate-default-${entity.entity.metadata.name}`
  const { value, loading, error } = useAsync((): Promise<TFState> => {
    return getTFState(secretName, "admin", apiRef, oidcApi)
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

async function getTFState(name: string, namespace: string, apiRef: DiscoveryApi, oidcRef: OpenIdConnectApi): Promise<TFState> {
  const token = await oidcRef.getIdToken()
  const baseUrl = await apiRef.getBaseUrl("kubernetes")
  const proxyUrl = `${baseUrl}/proxy`
  return new Promise(async (resolve, reject) => {
    const resp = await fetch(`${proxyUrl}/api/v1/namespaces/${namespace}/secrets/${name}`, {
      method: 'GET',
      headers: {
        'X-Kubernetes-Cluster': "canoe-packaging",
        'Authorization': `Bearer ${token}`,
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
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const oidcApi = useApi(keycloakOIDCAuthApiRef)

  const apiRef = useApi(discoveryApiRef)
  const { value, loading, error } = useAsync((): Promise<workflowStatus> => {
    return getWorkflow(entity.entity.metadata.name, "admin", apiRef, oidcApi)
  })
  const module = entity.entity.metadata.annotations!["blueprint-module"]
  if (module === undefined) {
    return <Alert severity="error">"could not find blueprint module"</Alert>;
  }

  const handleConfirm = async (): Promise<void> => {
    const ok = await createWorkflow(entity.entity.metadata.name, module, "admin", apiRef, oidcApi)
    if (ok) {
      handleClose()
    } else {
      console.log("oh no")
    }
  }

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
        <IconButton aria-label="delete" size="medium" onClick={handleClickOpen}>
          <DeleteIcon />
        </IconButton>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle style={{ cursor: 'move' }} id="title">
            Confirmation
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete this?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <LinkButton onClick={handleClose} to="cba">
              Cancel
            </LinkButton>
            <LinkButton onClick={handleConfirm}
                        to="abc" color="primary">Delete</LinkButton>
          </DialogActions>
         </Dialog>
        <IconButton aria-label="clear" size="medium">
          <ClearIcon />
        </IconButton>
        <IconButton aria-label="link" size="medium">
          <LinkOffRounded />
        </IconButton>
      </InfoCard>
  )
}
async function getWorkflow(entityId: string, namespace: string, apiRef: DiscoveryApi, oidcRef: OpenIdConnectApi ): Promise<workflowStatus> {
  const token = await oidcRef.getIdToken()
  const baseUrl = await apiRef.getBaseUrl("kubernetes")
  const proxyUrl = `${baseUrl}/proxy`
  return new Promise(async (resolve, reject) => {
    const queryParams = new URLSearchParams({
      labelSelector: `entity-id=${entityId},workflow-kind=delete`,
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

async function createWorkflow(entityId: string, module: string, namespace: string, apiRef: DiscoveryApi, oidcRef: OpenIdConnectApi): Promise<Boolean> {
  const token = await oidcRef.getIdToken()
  const baseUrl = await apiRef.getBaseUrl("kubernetes")
  const proxyUrl = `${baseUrl}/proxy`
  return new Promise(async (resolve, reject) => {
    const queryParams = new URLSearchParams({
      fieldValidation: "Strict",
    }).toString()
    const body = {
      "apiVersion": "argoproj.io/v1alpha1",
      "kind": "Workflow",
      "metadata": {
        "generateName": "blue-prints-delete-",
        "namespace": "admin",
      },
      "spec": {
        "arguments": {
          "parameters": [
            {
              "name": "module",
              "value": `${module}`
            },
            {
              "name": "entityId",
              "value": `${entityId}`
            }
          ]
        },
        "workflowTemplateRef": {
          "name": "blueprints-delete"
        }
      }
    }
    const resp = await fetch(`${proxyUrl}/apis/argoproj.io/v1alpha1/namespaces/${namespace}/workflows?${queryParams}`, {
      method: 'POST',
      headers: {
        'X-Kubernetes-Cluster': "canoe-packaging",
        Authorization: `Bearer ${token}`,
        'Content-Type': "application/json"
      },
      body: JSON.stringify(body)
    });
    if (resp.ok) {
      resolve(true)
    } else {
      reject(`Failed to delete blueprints deployment: ${resp.status}: ${resp.statusText} `)
    }
  })
}



