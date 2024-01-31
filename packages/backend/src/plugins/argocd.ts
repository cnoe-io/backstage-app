import {Config} from "@backstage/config";
import {createTemplateAction} from "@backstage/plugin-scaffolder-node";
import {examples} from "./gitea-actions";
import {Logger} from "winston";

import { ArgoService } from '@roadiehq/backstage-plugin-argo-cd-backend';

import { createRouter } from '@roadiehq/backstage-plugin-argo-cd-backend';
import { PluginEnvironment } from '../types';

export default async function createPlugin({
                                             logger,
                                             config,
                                           }: PluginEnvironment) {
  return await createRouter({ logger, config });
}

export function createArgoCDApp(options: {
  config: Config;
  logger: Logger
}) {
  const { config, logger } = options;

  return createTemplateAction<{
    repoUrl: string;
    projectName?: string;
    appName: string;
    argoInstance: string;
    path: string;
    labelValue?: string;
    appNamespace: string
  }>({
    id: 'cnoe:create-argocd-app',
    description:
      'creates argocd app',
    examples,
    schema: {
      input: {
        type: 'object',
        required: ['repoUrl', 'projectName', 'appName', 'argoInstance', 'path', 'appNamespace'],
        properties: {
          repoUrl: {
            title: 'Repository Location',
            type: 'string',
          },
          projectName: {
            title: 'name of the project in argocd',
            type: 'string',
          },
          appName: {
            title: 'application name in argocd',
            type: 'string',
          },
          appNamespace: {
            title: 'application name in argocd',
            type: 'string',
          },
          argoInstance: {
            title: 'backstage argocd  instance name defined in app-config.yaml',
            type: 'string',
          },
          path: {
            title: 'argocd spec path',
            type: 'string',
          },
          labelValue: {
            title: 'for argocd plugin to locate this app',
            type: 'string',
          }
        },
      },
      output: {
      },
    },
    async handler(ctx) {

      const {
        repoUrl,
        projectName,
        appName,
        argoInstance,
        path,
        labelValue,
        appNamespace
      } = ctx.input;

      const argoUserName =
        config.getOptionalString('argocd.username') ?? 'argocdUsername';
      const argoPassword =
        config.getOptionalString('argocd.password') ?? 'argocdPassword';

      const argoSvc = new ArgoService(
        argoUserName,
        argoPassword,
        config,
        logger,
      );

      const argocdConfig = config
        .getConfigArray('argocd.appLocatorMethods')
        .filter(element => element.getString('type') === 'config')
        .reduce(
          (acc: Config[], argoApp: Config) =>
            acc.concat(argoApp.getConfigArray('instances')),
          [],
        )
        .map(instance => ({
          name: instance.getString('name'),
          url: instance.getString('url'),
          token: instance.getOptionalString('token'),
          username: instance.getOptionalString('username'),
          password: instance.getOptionalString('password'),
        }));
      const matchedArgoInstance = argocdConfig.find(
        argoHost => argoHost.name === argoInstance,
      );
      if (!matchedArgoInstance) {
        throw new Error(`Unable to find Argo instance named "${argoInstance}"`);
      }
      const token =
        matchedArgoInstance.token ||
        (await argoSvc.getArgoToken(matchedArgoInstance));

      await argoSvc.createArgoApplication({
        baseUrl: matchedArgoInstance.url,
        argoToken: token,
        appName: appName,
        projectName: projectName ? projectName : appName,
        namespace: appNamespace,
        sourceRepo: repoUrl,
        sourcePath: path,
        labelValue: labelValue ? labelValue : appName,
      })
    },
  });
}
