export const failed = {
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
        creationTimestamp: "2023-06-22T23:03:08Z",
        generateName: "test-workflow-",
        generation: 2,
        labels: {
          "backstage.io/kubernetes-id": "backstage",
          "workflows.argoproj.io/completed": "true",
          "workflows.argoproj.io/phase": "Failed",
        },
        name: "test-workflow-6z6dc",
        namespace: "default",
        resourceVersion: "43485348",
        uid: "98c95400-061a-4f9f-85ca-b95d4bf2ef2b",
      },
      spec: {
        arguments: {},
      },
      status: {
        conditions: [
          {
            status: "True",
            type: "Completed",
          },
        ],
        finishedAt: "2023-06-22T23:03:08Z",
        message: "cannot unmarshall spec: cannot restore struct from: slice",
        phase: "Failed",
        progress: "0/0",
        startedAt: "2023-06-22T23:03:08Z",
      },
    },
  ],
};
