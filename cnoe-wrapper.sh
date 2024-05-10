#!/bin/bash

SERVICE_ACCOUNT_DIR="/var/run/secrets/kubernetes.io/serviceaccount"
KUBERNETES_SERVICE_SCHEME=$(case $KUBERNETES_SERVICE_PORT in 80|8080|8081) echo "http";; *) echo "https"; esac)
KUBERNETES_SERVER_URL="$KUBERNETES_SERVICE_SCHEME"://"$KUBERNETES_SERVICE_HOST":"$KUBERNETES_SERVICE_PORT"
KUBERNETES_CLUSTER_CA_FILE="$SERVICE_ACCOUNT_DIR"/ca.crt
KUBERNETES_NAMESPACE=$(cat "$SERVICE_ACCOUNT_DIR"/namespace)
KUBERNETES_USER_TOKEN=$(cat "$SERVICE_ACCOUNT_DIR"/token)
KUBERNETES_CONTEXT="inCluster"

rm -rf "$HOME"/.kube 
mkdir -p "$HOME"/.kube 
cat << EOF > "$HOME"/.kube/config
apiVersion: v1
kind: Config
preferences: {}
current-context: $KUBERNETES_CONTEXT
clusters:
- cluster:
    server: $KUBERNETES_SERVER_URL
    certificate-authority: $KUBERNETES_CLUSTER_CA_FILE
  name: inCluster
users:
- name: podServiceAccount
  user:
    token: $KUBERNETES_USER_TOKEN
contexts:
- context:
    cluster: inCluster
    user: podServiceAccount
    namespace: $KUBERNETES_NAMESPACE
  name: $KUBERNETES_CONTEXT
EOF

cnoe-cli "$@"
