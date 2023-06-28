export const errored = {
  apiVersion: "v1",
  kind: "List",
  metadata: {
    resourceVersion: "",
  },
  items: [
    {
      apiVersion: "argoproj.io/v1alpha1",
      kind: "Workflow",
      metadata: {
        creationTimestamp: "2023-06-21T21:28:37Z",
        generateName: "test-workflow-",
        generation: 2,
        labels: {
          "workflows.argoproj.io/completed": "true",
          "workflows.argoproj.io/phase": "Error",
        },
        name: "test-workflow-2vphn",
        namespace: "default",
        resourceVersion: "43163381",
        uid: "40700bb3-2bce-4080-b0c8-c48033820666",
      },
      spec: {
        arguments: {
          parameters: [
            {
              name: "message",
              value: "from workflow",
            },
          ],
        },
        workflowTemplateRef: {
          name: "workflow-template-whalesay-template",
        },
      },
      status: {
        conditions: [
          {
            status: "True",
            type: "Completed",
          },
        ],
        finishedAt: "2023-06-21T21:28:37Z",
        message:
          'malformed workflow template "default/workflow-template-whalesay-template": cannot convert int64 to string',
        phase: "Error",
        progress: "0/0",
        startedAt: "2023-06-21T21:28:37Z",
      },
    },
  ],
};
