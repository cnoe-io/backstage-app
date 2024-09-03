import {
  createTemplateAction,
  executeShellCommand,
} from '@backstage/plugin-scaffolder-node';
import { dumpYaml } from '@kubernetes/client-node';
import yaml from 'js-yaml';
import { Config } from '@backstage/config';
import { resolveSafeChildPath } from '@backstage/backend-common';
import fs from 'fs-extra';

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
      let manifestPath = resolveSafeChildPath(
        ctx.workspacePath,
        'to-be-applied.yaml',
      );
      if (ctx.input.manifestString) {
        obj = yaml.load(ctx.input.manifestString);
        fs.writeFileSync(manifestPath, ctx.input.manifestString, {
          encoding: 'utf8',
          mode: '600',
        });
      } else if (ctx.input.manifestObject) {
        obj = ctx.input.manifestObject;
        fs.writeFileSync(manifestPath, yaml.dump(ctx.input.manifestObject), {
          encoding: 'utf8',
          mode: '600',
        });
      } else {
        const filePath = resolveSafeChildPath(
          ctx.workspacePath,
          ctx.input.manifestPath!,
        );
        const fileContent = fs.readFileSync(filePath, 'utf8');
        manifestPath = filePath;
        obj = yaml.load(fileContent);
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
                server: targetCluster.getString('url'),
                'insecure-skip-tls-verify':
                  !!targetCluster.getOptionalBoolean('skipTLSVerify'),
              } satisfies Record<string, any>,
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
        if (!confFile.clusters[0].cluster['insecure-skip-tls-verify']) {
          let caDataRaw = targetCluster.getOptionalString('caData');
          if (caDataRaw?.startsWith('-----BEGIN CERTIFICATE-----')) {
            caDataRaw = Buffer.from(
              targetCluster.getString('caData'),
              'utf8',
            ).toString('base64');
          }
          confFile.clusters[0].cluster['certificate-authority-data'] =
            caDataRaw;
          
          if (! (targetCluster.getOptionalString('caFile').length === 0 || targetCluster.getOptionalString('caFile').length === null)) {
            confFile.clusters[0].cluster['certificate-authority'] =
              targetCluster.getOptionalString('caFile');
          }
        }
        const confString = dumpYaml(confFile);
        const confFilePath = resolveSafeChildPath(ctx.workspacePath, 'config');
        fs.writeFileSync(confFilePath, confString, {
          encoding: 'utf8',
          mode: '600',
        });
        await executeShellCommand({
          command: 'cat',
          args: [confFilePath],
          logStream: ctx.logStream,
        });
        await executeShellCommand({
          command: 'cat',
          args: [manifestPath],
          logStream: ctx.logStream,
        });
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
      throw new Error('please specify a valid cluster name');
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
