import { rest } from 'msw';
import sparkApplications from '../fixtures/spark-applications.json';
import argoWorkflows from '../fixtures/argo-workflows.json';
import argoWorkflowTemplates from '../fixtures/argo-workflow-templates.json';

// Spark logs inline — the fixture is a .txt file which can't be JSON-imported
const SPARK_LOGS = `2026-04-15 10:00:01 INFO SparkContext: Running Spark version 3.5.0
2026-04-15 10:00:02 INFO SparkContext: Submitted application: spark-etl-job
2026-04-15 10:00:05 INFO Utils: Successfully started service 'sparkDriver' on port 7078
2026-04-15 10:00:15 INFO DAGScheduler: Job 0 finished: reduce at SparkPi.scala:38, took 5.123 s`;

// ---------------------------------------------------------------------------
// Kubernetes proxy handlers
//
// KubernetesBackendClient.proxy() builds the URL as:
//   `${discoveryApi.getBaseUrl("kubernetes")}/proxy${options.path}`
//
// So all k8s proxy requests are GETs to /api/kubernetes/proxy/<k8s-path>.
// ---------------------------------------------------------------------------

export const kubernetesHandlers = [
  // --- Apache Spark (sparkoperator CRDs) ---

  // List spark applications:
  //   /api/kubernetes/proxy/apis/sparkoperator.k8s.io/v1beta2/namespaces/{ns}/sparkapplications
  rest.get('*/api/kubernetes/proxy/apis/sparkoperator.k8s.io/*/namespaces/*/sparkapplications', (_req, res, ctx) => {
    return res(ctx.json(sparkApplications));
  }),

  // Single spark application:
  //   /api/kubernetes/proxy/apis/sparkoperator.k8s.io/v1beta2/namespaces/{ns}/sparkapplications/{name}
  rest.get('*/api/kubernetes/proxy/apis/sparkoperator.k8s.io/*/namespaces/*/sparkapplications/*', (_req, res, ctx) => {
    // Return the first item from the list as a single resource
    const items = (sparkApplications as any).items;
    if (items && items.length > 0) {
      return res(ctx.json(items[0]));
    }
    return res(ctx.json(sparkApplications));
  }),

  // Pod logs:
  //   /api/kubernetes/proxy/api/v1/namespaces/{ns}/pods/{pod}/log
  rest.get('*/api/kubernetes/proxy/api/v1/namespaces/*/pods/*/log', (_req, res, ctx) => {
    return res(ctx.text(SPARK_LOGS));
  }),

  // Pod details (for getContainers):
  //   /api/kubernetes/proxy/api/v1/namespaces/{ns}/pods/{pod}
  rest.get('*/api/kubernetes/proxy/api/v1/namespaces/*/pods/*', (_req, res, ctx) => {
    return res(
      ctx.json({
        metadata: { name: 'spark-etl-job-driver' },
        spec: {
          containers: [{ name: 'spark-kubernetes-driver' }],
        },
      }),
    );
  }),

  // --- Argo Workflows (via kubernetes proxy) ---

  // List workflows through k8s proxy:
  //   /api/kubernetes/proxy/apis/argoproj.io/v1alpha1/namespaces/{ns}/workflows
  //   /api/kubernetes/proxy/apis/argoproj.io/v1alpha1/workflows  (all namespaces)
  rest.get('*/api/kubernetes/proxy/apis/argoproj.io/*/namespaces/*/workflows', (_req, res, ctx) => {
    return res(ctx.json(argoWorkflows));
  }),
  rest.get('*/api/kubernetes/proxy/apis/argoproj.io/*/workflows', (_req, res, ctx) => {
    return res(ctx.json(argoWorkflows));
  }),

  // --- Argo Workflows (via backstage backend proxy) ---
  //
  // ArgoWorkflows.fetchFromPath() builds:
  //   `${discoveryApi.getBaseUrl("proxy")}/argo-workflows/api${path}`
  // where path is e.g. /api/v1/workflows/{ns}

  // Workflows through backend proxy
  rest.get('*/api/proxy/argo-workflows/api/api/v1/workflows/*', (_req, res, ctx) => {
    return res(ctx.json(argoWorkflows));
  }),

  // Workflow templates through backend proxy
  rest.get('*/api/proxy/argo-workflows/api/api/v1/workflow-templates/*', (_req, res, ctx) => {
    return res(ctx.json(argoWorkflowTemplates));
  }),

  // --- Kubernetes clusters endpoint ---
  rest.get('*/api/kubernetes/clusters', (_req, res, ctx) => {
    return res(
      ctx.json({
        items: [{ name: 'local-cluster', authProvider: 'serviceAccount' }],
      }),
    );
  }),
];
