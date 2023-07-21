# Apache Spark Plugin for Backstage

Welcome to the Apache Spark plugin for Backstage!

This plugin allows you to display information related to your Apache Spark Applications running in Kubernetes on Backstage

## Getting started

![GIF](doc/images/demo1.gif)


### Configuration

[The Kubernetes plugin](https://backstage.io/docs/features/kubernetes/) must also be installed and enabled.  

Entities must be annotated with Kubernetes annotations. For example:
```yaml
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: backstage
  annotations:
    backstage.io/kubernetes-namespace: default
    backstage.io/kubernetes-label-selector: env=dev,my=label
```

Update your Entity page. For example:
```typescript
// in packages/app/src/components/catalog/EntityPage.tsx

```


#### Annotations
- `backstage.io/kubernetes-namespace`: Optional. Defaults to the `default` namespace.
- `backstage.io/kubernetes-label-selector`: Conditionally required. One of label selectors must be defined.
- `apache-spark/label-selector`: Conditionally required. One of label selectors must be defined. This value takes precedent over the one above.
- `apache-spark/cluster-name`: Optional. Specifies the name of Kubernetes cluster to retrieve information from.

### Authentication

This plugin uses the Kubernetes plugin for authentication. 

#### Using configured Kubernetes API

The plugin uses configured Kubernetes clusters to fetch resources.

For example, for a Kubernetes cluster given in your `app-config.yaml`

```yaml
kubernetes:
  serviceLocatorMethod:
    type: "multiTenant"
  clusterLocatorMethods:
    - type: "config"
      clusters:
        - url: https://abcd.gr7.us-west-2.eks.amazonaws.com:443
          name: my-cluster-1
          authProvider: "serviceAccount"
          serviceAccountToken: eyJh
          caData: LS0t
```

For this configuration, the `argo-workflows/cluster-name` annotation value must be `my-cluster-1`. If this is not specified, the first cluster in the list is selected.

```yaml
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: backstage
  annotations:
    backstage.io/kubernetes-namespace: default
    backstage.io/kubernetes-label-selector: env=dev,my=label
    argo-workflows/cluster-name: my-cluster-1
```
