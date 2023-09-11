import { createTemplateAction } from '@backstage/plugin-scaffolder-node';
import { dumpYaml } from '@kubernetes/client-node';
import YAML from 'yaml';
import { Config } from '@backstage/config';
import { resolveSafeChildPath } from '@backstage/backend-common';
import fs from 'fs-extra';
import { executeShellCommand } from '@backstage/plugin-scaffolder-backend';

export const createKubernetesApply = (config: Config) => {
  return createTemplateAction<{
    manifestString?: string;
    manifestObject?: any;
    manifestPath?: string;
    namespaced: boolean;
    clusterName?: string;
  }>({
    id: 'cnoe:kubernetes:apply',
    schema: {
      input: {
        type: 'object',
        required: ['namespaced'],
        properties: {
          manifestString: {
            type: 'string',
            title: 'Manifest',
            description:
              'The manifest to apply in the cluster. Must be a string',
          },
          manifestObject: {
            type: 'object',
            title: 'Manifest',
            description:
              'The manifest to apply in the cluster. Must be an object',
          },
          manifestPath: {
            type: 'string',
            title: 'Path to the manifest file',
            description: 'The path to the manifest file.',
          },
          namespaced: {
            type: 'boolean',
            title: 'Namespaced',
            description: 'Whether the API is namespaced or not',
          },
          clusterName: {
            type: 'string',
            title: 'Cluster Name',
            description: 'The name of the cluster to apply this',
          },
        },
      },
      output: {
        type: 'object',
        title: 'Returned object',
        description:
          'The object returned by Kubernetes by performing this operation',
      },
    },
    async handler(ctx) {
      let obj: any;
      if (ctx.input.manifestString) {
        obj = YAML.parse(ctx.input.manifestString);
      } else if (ctx.input.manifestObject) {
        obj = ctx.input.manifestObject;
      } else {
        const filePath = resolveSafeChildPath(
          ctx.workspacePath,
          ctx.input.manifestPath!,
        );
        const fileContent = fs.readFileSync(filePath, 'utf8');
        obj = YAML.parse(fileContent);
      }

      if (ctx.input.clusterName) {
        // Supports SA token authentication only
        const targetCluster = getClusterConfig(ctx.input.clusterName!, config);
        const confFile = {
          apiVersion: 'v1',
          kind: 'Config',
          'current-context': ctx.input.clusterName,
          contexts: [
            {
              name: ctx.input.clusterName,
              context: {
                cluster: ctx.input.clusterName,
                user: ctx.input.clusterName,
              },
            },
          ],
          clusters: [
            {
              name: ctx.input.clusterName,
              cluster: {
                'certificate-authority-data': targetCluster.getString('caData'),
                server: targetCluster.getString('url'),
              },
            },
          ],
          users: [
            {
              name: ctx.input.clusterName,
              user: {
                token: targetCluster.getString('serviceAccountToken'),
              },
            },
          ],
        };
        const confString = dumpYaml(confFile);
        const confFilePath = resolveSafeChildPath(ctx.workspacePath, 'config');
        fs.writeFileSync(confFilePath, confString, {
          encoding: 'utf8',
          mode: '600',
        });
        const manifestPath = resolveSafeChildPath(
          ctx.workspacePath,
          ctx.input.manifestPath!,
        );
        if (obj.metadata.generateName !== undefined) {
          await executeShellCommand({
            command: 'kubectl',
            args: ['--kubeconfig', confFilePath, 'create', '-f', manifestPath],
            logStream: ctx.logStream,
          });
          return;
        }
        await executeShellCommand({
          command: 'kubectl',
          args: ['--kubeconfig', confFilePath, 'apply', '-f', manifestPath],
          logStream: ctx.logStream,
        });
        return;
      }
      return;
    },
  });
};

// Finds the first cluster that matches the given name.
function getClusterConfig(name: string, config: Config): Config {
  const clusterConfigs = config
    .getConfigArray('kubernetes.clusterLocatorMethods')
    .filter((val: Config) => {
      return val.getString('type') === 'config';
    });

  const clusters = new Array<Config>();
  clusterConfigs.filter((conf: Config) => {
    const cluster = conf.getConfigArray('clusters').find((val: Config) => {
      return val.getString('name') === name;
    });
    if (cluster) {
      clusters.push(cluster);
    }
  });

  if (clusters.length === 0) {
    throw new Error(`Cluster with name ${name} not found`);
  }
  return clusters[0];
}
