# Local Testing Stack for Backstage Plugin Integration

Add-on to the [cnoe-io/stacks ref-implementation](https://github.com/cnoe-io/stacks/tree/main/ref-implementation) that adds Kro operator and updated Backstage config for verifying all plugin integrations.

## Prerequisites

- [idpbuilder](https://github.com/cnoe-io/idpbuilder/releases/latest) v0.3.0+
- kubectl, docker, helm 3.x
- 6 GB RAM allocated to Docker

## Setup

### 1. Run the ref-implementation

```bash
idpbuilder create --use-path-routing \
  --package https://github.com/cnoe-io/stacks//ref-implementation
```

Wait ~6 minutes. Track progress at https://cnoe.localtest.me:8443/argocd

### 2. Install Kro operator

```bash
helm install kro oci://registry.k8s.io/kro/charts/kro \
  --namespace kro-system --create-namespace
```

### 3. Apply Kro sample and Backstage patches

```bash
# Wait for CRD, then apply sample ResourceGraphDefinition
kubectl wait --for=condition=Established crd/resourcegraphdefinitions.kro.run --timeout=60s
kubectl apply -f examples/local-stack/kro/manifests/install.yaml

# Apply Backstage RBAC and config for Kro
kubectl apply -f examples/local-stack/backstage-patch/manifests/install.yaml
```

### 4. Build and load local Backstage image

```bash
docker build -t ghcr.io/cnoe-io/backstage-app:local .
docker save ghcr.io/cnoe-io/backstage-app:local | \
  docker exec -i localdev-control-plane ctr -n k8s.io images import --all-platforms -
```

### 5. Swap Backstage deployment

```bash
kubectl -n backstage set image deployment/backstage \
  backstage=ghcr.io/cnoe-io/backstage-app:local
kubectl -n backstage patch deployment backstage \
  -p '{"spec":{"template":{"spec":{"containers":[{"name":"backstage","imagePullPolicy":"Never"}]}}}}'
kubectl -n argocd patch application backstage --type merge \
  -p '{"spec":{"syncPolicy":null}}'
```

### 6. Add guest auth (for testing without Keycloak)

```bash
kubectl -n backstage get configmap backstage-config -o yaml | \
  sed 's/keycloak-oidc:/guest:\n          dangerouslyAllowOutsideDevelopment: true\n        keycloak-oidc:/' | \
  kubectl apply -f -
kubectl -n backstage rollout restart deployment/backstage
```

## Access

| Service | URL | Credentials |
|---|---|---|
| Backstage | https://cnoe.localtest.me:8443/ | guest or `user1` / `idpbuilder get secrets` |
| ArgoCD | https://cnoe.localtest.me:8443/argocd | admin / `idpbuilder get secrets -p argocd` |
| Gitea | https://cnoe.localtest.me:8443/gitea | giteaAdmin / `idpbuilder get secrets -p gitea` |
| Keycloak | https://cnoe.localtest.me:8443/keycloak | cnoe-admin / `idpbuilder get secrets` |

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

## Iterate

```bash
# After code changes:
docker build -t ghcr.io/cnoe-io/backstage-app:local .
docker save ghcr.io/cnoe-io/backstage-app:local | \
  docker exec -i localdev-control-plane ctr -n k8s.io images import --all-platforms -
kubectl -n backstage rollout restart deployment/backstage
```

## Mock Mode (no cluster needed)

For local development without any external services:

```bash
MOCK_MODE=true yarn dev
```

Mock entities in `examples/local-stack/mock-entities/catalog-info.yaml` are wired to the mock backends with correct annotations for Kubernetes, ArgoCD, Spark, Argo Workflows, and Terraform tabs.

## Troubleshooting

**Kro controller not starting**: Verify Helm install: `helm list -n kro-system`

**Backstage can't see Kro resources**: Check RBAC: `kubectl auth can-i list resourcegraphdefinitions.kro.run --as=system:serviceaccount:backstage:backstage`

**ArgoCD reverts image**: Disable auto-sync (step 5 above)

**Image not found after load**: Ensure `imagePullPolicy: Never` is set on the deployment
