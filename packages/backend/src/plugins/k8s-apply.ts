import {
  createTemplateAction,
  executeShellCommand,
} from '@backstage/plugin-scaffolder-node';
import { dumpYaml } from '@kubernetes/client-node';
import yaml from 'js-yaml';
import { Config } from '@backstage/config';
import { resolveSafeChildPath } from '@backstage/backend-common';
import fs from 'fs-extra';

interface Cluster {
  name: string;
  cluster: {
    server: string;
    'insecure-skip-tls-verify': boolean;
    'certificate-authority-data'?: string;
    'certificate-authority'?: string;
  };
}
interface Context {
  name: string;
  context: {
    cluster: string;
    user: string;
  };
}
interface User {
  name: string;
  user: {
    token?: string;
  };
}
interface ConfFile {
  apiVersion: string;
  kind: string;
  'current-context': string;
  contexts: Context[];
  clusters: Cluster[];
  users: User[];
}
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
      let manifestPath = resolveSafeChildPath(
        ctx.workspacePath,
        'to-be-applied.yaml',
      );
      if (ctx.input.manifestString) {
        fs.writeFileSync(manifestPath, ctx.input.manifestString, {
          encoding: 'utf8',
          mode: '600',
        });
      } else if (ctx.input.manifestObject) {
        fs.writeFileSync(manifestPath, yaml.dump(ctx.input.manifestObject), {
          encoding: 'utf8',
          mode: '600',
        });
      } else {
        const filePath = resolveSafeChildPath(
          ctx.workspacePath,
          ctx.input.manifestPath!,
        );
        manifestPath = filePath;
      }
      const fileContent = fs.readFileSync(manifestPath, 'utf8');
      const objList: any[] = yaml.loadAll(fileContent);

      if (ctx.input.clusterName) {
        // Supports SA token authentication only
        const targetCluster = getClusterConfig(ctx.input.clusterName!, config);
        const confFile: ConfFile = {
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
          if (
            targetCluster.getOptionalString('caFile') &&
            !(
              targetCluster.getOptionalString('caFile')?.length === 0 ||
              targetCluster.getOptionalString('caFile') === null
            )
          ) {
            confFile.clusters[0].cluster['certificate-authority'] =
              targetCluster.getString('caFile');
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
        let counter = 1;
        for (const obj of objList) {
          let manifestFilePath = resolveSafeChildPath(
            ctx.workspacePath,
            'to-be-applied-' + counter.toString() + '.yaml',
          );
          fs.writeFileSync(manifestFilePath, yaml.dump(obj), {
            encoding: 'utf8',
            mode: '600',
          });
          if (obj.metadata.generateName !== undefined) {
            await executeShellCommand({
              command: 'kubectl',
              args: [
                '--kubeconfig',
                confFilePath,
                'create',
                '-f',
                manifestFilePath,
              ],
              logStream: ctx.logStream,
            });
          } else {
            await executeShellCommand({
              command: 'kubectl',
              args: [
                '--kubeconfig',
                confFilePath,
                'apply',
                '-f',
                manifestFilePath,
              ],
              logStream: ctx.logStream,
            });
          }
          counter += 1;
        }
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