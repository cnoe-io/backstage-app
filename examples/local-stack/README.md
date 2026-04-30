# Local Testing Stack for Backstage Plugin Integration

Add-on to the [cnoe-io/stacks ref-implementation](https://github.com/cnoe-io/stacks/tree/main/ref-implementation) that provides a custom Backstage image with CNOE UI, Kro operator, and all plugin integrations pre-configured.

## Prerequisites

- [idpbuilder](https://github.com/cnoe-io/idpbuilder/releases/latest) v0.3.0+
- [task](https://taskfile.dev/installation/) (Taskfile runner)
- kubectl, docker, helm 3.x
- 6 GB RAM allocated to Docker

## Quick Start

From the repo root:

```bash
task stack:up
```

This single command:
1. Starts idpbuilder with ref-implementation + custom Backstage override
2. Fixes the keycloak-clients secret (workaround for upstream bug)
3. Installs Kro operator + sample ResourceGraphDefinition
4. Applies Backstage RBAC patches for Kro

## Access

| Service | URL | Credentials |
|---|---|---|
| Backstage | https://cnoe.localtest.me:8443/ | Guest sign-in |
| ArgoCD | https://cnoe.localtest.me:8443/argocd | admin / `task stack:secrets` |
| Gitea | https://cnoe.localtest.me:8443/gitea | giteaAdmin / `task stack:secrets` |
| Keycloak | https://cnoe.localtest.me:8443/keycloak | cnoe-admin / `task stack:secrets` |

## How It Works

The `backstage-override.yaml` creates an ArgoCD Application named `backstage` that overrides the ref-implementation's default Backstage deployment with:
- CI-built image from `ghcr.io/cnoe-io/backstage-app`
- Guest auth enabled alongside Keycloak OIDC
- `NODE_OPTIONS=--no-node-snapshot` for scaffolder compatibility
- Config-driven homepage quick links pointing to local services
- Kubernetes cluster auto-detection via service account

## Useful Commands

| Command | Description |
|---|---|
| `task stack:up` | Full stack from scratch |
| `task stack:deploy` | Build local image and deploy to cluster |
| `task stack:iterate` | Fast rebuild cycle after code changes (~2 min) |
| `task stack:swap IMAGE_SHA=abc123` | Deploy a specific CI-built image |
| `task stack:status` | Check all components |
| `task stack:logs` | Tail backstage logs |
| `task stack:port-forward` | Port-forward to localhost:7007 |
| `task stack:secrets` | Show idpbuilder credentials |
| `task stack:down` | Delete the cluster |

## Updating the Backstage Image

To use the latest CI-built image, update the image tag in `backstage-override/manifests/install.yaml`:

```yaml
image: ghcr.io/cnoe-io/backstage-app:<new-git-sha>
```

Or use a locally built image:

```bash
task stack:deploy
```

## Verification

| Integration | How to verify |
|---|---|
| Catalog | `/catalog` — entities loaded from Gitea |
| APIs | `/api-docs` — API entities visible |
| Scaffolder | `/create` → choose template → creates repo in Gitea |
| Keycloak | Sign in via Keycloak OIDC |
| Kubernetes | Entity page → Kubernetes tab shows pods |
| ArgoCD | Entity page → ArgoCD card shows app status |
| Kro | `kubectl get rgd -A` — WebApp ResourceGraphDefinition present |
| TechDocs | `/docs` — documentation renders |
| Search | `/search` — results from catalog + techdocs |

## Mock Mode (no cluster needed)

For local development without any external services:

```bash
task dev:mock
```

## Troubleshooting

**Keycloak secret not created**: The ref-implementation's config job has a bug downloading kubectl. `task stack:keycloak-fix` handles this automatically, but if it fails, check `kubectl logs job/config -n keycloak`.

**Backstage CrashLoopBackOff after image change**: Usually a DB migration conflict. Delete PostgreSQL and let ArgoCD recreate it: `kubectl -n backstage delete statefulset postgresql && kubectl -n backstage delete pvc data-postgresql-0`

**ArgoCD reverts image**: The backstage-override package should prevent this. If it happens, check `kubectl get application backstage -n argocd -o jsonpath='{.spec.source.repoURL}'` — it should show `cnoe://backstage-override/manifests`.
