import { rest } from 'msw';
import terraformState from '../fixtures/terraform-state.json';
import terraformFileList from '../fixtures/terraform-file-list.json';

// ---------------------------------------------------------------------------
// Terraform handlers
//
// The Terraform client uses two patterns:
//   1. Backend routes via fetchURL(): POST to /api/terraform/<action>
//   2. K8s secrets via kubernetesApi.proxy(): GET to /api/kubernetes/proxy/api/v1/namespaces/{ns}/secrets/{name}
// ---------------------------------------------------------------------------

export const terraformHandlers = [
  // deflate — POST /api/terraform/deflate
  rest.post('*/api/terraform/deflate', (_req, res, ctx) => {
    return res(ctx.json(terraformState));
  }),

  // S3 file list — POST /api/terraform/getFileList
  rest.post('*/api/terraform/getFileList', (_req, res, ctx) => {
    return res(ctx.json(terraformFileList));
  }),

  // Local file list — POST /api/terraform/getLocalFileList
  rest.post('*/api/terraform/getLocalFileList', (_req, res, ctx) => {
    return res(ctx.json(terraformFileList));
  }),

  // TF state file — POST /api/terraform/getTFStateFile
  rest.post('*/api/terraform/getTFStateFile', (_req, res, ctx) => {
    return res(ctx.json(terraformState));
  }),

  // K8s secret for terraform state (secret-based state storage)
  // Terraform.getSecret() calls kubernetesApi.proxy() with path:
  //   /api/v1/namespaces/{ns}/secrets/{secretName}
  // which becomes GET /api/kubernetes/proxy/api/v1/namespaces/{ns}/secrets/{name}
  rest.get('*/api/kubernetes/proxy/api/v1/namespaces/*/secrets/*', (_req, res, ctx) => {
    return res(
      ctx.json({
        metadata: { name: 'terraform-state' },
        data: {
          tfstate: btoa(JSON.stringify(terraformState)),
        },
      }),
    );
  }),
];
