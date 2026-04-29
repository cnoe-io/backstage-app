import { InputError } from '@backstage/errors';
import { Config } from '@backstage/config';
import {
  getGiteaRequestOptions,
  GiteaIntegrationConfig,
  ScmIntegrationRegistry,
  ScmIntegrations,
} from '@backstage/integration';
import {
  createTemplateAction,
  getRepoSourceDirectory,
  initRepoAndPush,
  TemplateExample,
} from '@backstage/plugin-scaffolder-node';
import crypto from 'crypto';
import yaml from 'yaml';

export const examples: TemplateExample[] = [
  {
    description:
      'Initializes a Gitea repository using the content of the workspace and publish it to Gitea with default configuration.',
    example: yaml.stringify({
      steps: [
        {
          id: 'publish',
          action: 'publish:gitea',
          name: 'Publish to Gitea',
          input: { repoUrl: 'gitea.com?repo=repo&owner=owner' },
        },
      ],
    }),
  },
];

const parseRepoUrl = (
  repoUrl: string,
  integrations: ScmIntegrationRegistry,
): {
  repo: string;
  host: string;
  owner?: string;
  organization?: string;
  workspace?: string;
  project?: string;
} => {
  let parsed;
  try {
    parsed = new URL(`https://${repoUrl}`);
  } catch (error) {
    throw new InputError(
      `Invalid repo URL passed to publisher, got ${repoUrl}, ${error}`,
    );
  }
  const host = parsed.host;
  const owner = parsed.searchParams.get('owner') ?? undefined;
  const organization = parsed.searchParams.get('organization') ?? undefined;
  const workspace = parsed.searchParams.get('workspace') ?? undefined;
  const project = parsed.searchParams.get('project') ?? undefined;

  const type = integrations.byHost(host)?.type;
  if (!type) {
    throw new InputError(
      `No matching integration configuration for host ${host}, please check your integrations config`,
    );
  }

  const repo: string = parsed.searchParams.get('repo')!;
  switch (type) {
    case 'bitbucket': {
      if (host === 'www.bitbucket.org') {
        checkRequiredParams(parsed, 'workspace');
      }
      checkRequiredParams(parsed, 'project', 'repo');
      break;
    }
    case 'gitlab': {
      if (!project) {
        checkRequiredParams(parsed, 'owner', 'repo');
      }
      break;
    }
    case 'gitea': {
      checkRequiredParams(parsed, 'repo');
      break;
    }
    case 'gerrit': {
      checkRequiredParams(parsed, 'repo');
      break;
    }
    default: {
      checkRequiredParams(parsed, 'repo', 'owner');
      break;
    }
  }

  return { host, owner, repo, organization, workspace, project };
};

function checkRequiredParams(repoUrl: URL, ...params: string[]) {
  for (let i = 0; i < params.length; i++) {
    if (!repoUrl.searchParams.get(params[i])) {
      throw new InputError(
        `Invalid repo URL passed to publisher: ${repoUrl.toString()}, missing ${params[i]}`,
      );
    }
  }
}

const checkGiteaOrg = async (
  config: GiteaIntegrationConfig,
  options: { owner: string },
): Promise<void> => {
  const { owner } = options;
  let response: Response;
  const getOptions: RequestInit = {
    method: 'GET',
    headers: {
      ...getGiteaRequestOptions(config).headers,
      'Content-Type': 'application/json',
    },
  };
  try {
    response = await fetch(`${config.baseUrl}/api/v1/orgs/${owner}`, getOptions);
  } catch (e) {
    throw new Error(`Unable to get the Organization: ${owner}, ${e}`);
  }
  if (response.status !== 200) {
    throw new Error(
      `Organization ${owner} do not exist. Please create it first !`,
    );
  }
};

const createGiteaProject = async (
  config: GiteaIntegrationConfig,
  options: { projectName: string; owner?: string; description: string },
): Promise<void> => {
  const { projectName, description, owner } = options;
  let response: Response;
  const postOptions: RequestInit = {
    method: 'POST',
    body: JSON.stringify({ name: projectName, description }),
    headers: {
      ...getGiteaRequestOptions(config).headers,
      'Content-Type': 'application/json',
    },
  };

  const url = owner
    ? `${config.baseUrl}/api/v1/orgs/${owner}/repos`
    : `${config.baseUrl}/api/v1/user/repos`;

  try {
    response = await fetch(url, postOptions);
  } catch (e) {
    throw new Error(`Unable to create repository, ${e}`);
  }
  if (response.status !== 201) {
    throw new Error(
      `Unable to create repository, ${response.status} ${response.statusText}, ${await response.text()}`,
    );
  }
};

const generateCommitMessage = (
  config: Config,
  commitSubject?: string,
): string => {
  const changeId = crypto.randomBytes(20).toString('hex');
  return `${
    config.getOptionalString('scaffolder.defaultCommitMessage') || commitSubject
  }\n\nChange-Id: I${changeId}`;
};

export function createPublishGiteaAction(options: {
  integrations: ScmIntegrations;
  config: Config;
}) {
  const { integrations, config } = options;

  return createTemplateAction<{
    repoUrl: string;
    description: string;
    defaultBranch?: string;
    gitCommitMessage?: string;
    gitAuthorName?: string;
    gitAuthorEmail?: string;
    sourcePath?: string;
  }>({
    id: 'publish:gitea',
    description:
      'Initializes a git repository using the content of the workspace, and publishes it to Gitea.',
    examples,
    schema: {
      input: {
        type: 'object',
        required: ['repoUrl'],
        properties: {
          repoUrl: { title: 'Repository Location', type: 'string' },
          description: { title: 'Repository Description', type: 'string' },
          defaultBranch: {
            title: 'Default Branch',
            type: 'string',
            description: `Sets the default branch on the repository. The default value is 'main'`,
          },
          gitCommitMessage: {
            title: 'Git Commit Message',
            type: 'string',
            description: `Sets the commit message on the repository. The default value is 'initial commit'`,
          },
          gitAuthorName: {
            title: 'Default Author Name',
            type: 'string',
            description: `Sets the default author name for the commit. The default value is 'Scaffolder'`,
          },
          gitAuthorEmail: {
            title: 'Default Author Email',
            type: 'string',
            description: `Sets the default author email for the commit.`,
          },
          sourcePath: {
            title: 'Source Path',
            type: 'string',
            description: `Path within the workspace that will be used as the repository root.`,
          },
        },
      },
      output: {
        type: 'object',
        properties: {
          remoteUrl: {
            title: 'A URL to the repository with the provider',
            type: 'string',
          },
          repoContentsUrl: {
            title: 'A URL to the root of the repository',
            type: 'string',
          },
          commitHash: {
            title: 'The git commit hash of the initial commit',
            type: 'string',
          },
        },
      },
    },
    async handler(ctx) {
      const {
        repoUrl,
        description,
        defaultBranch = 'main',
        gitAuthorName,
        gitAuthorEmail,
        gitCommitMessage = 'initial commit',
        sourcePath,
      } = ctx.input;
      const { repo, host, owner } = parseRepoUrl(repoUrl, integrations);
      const integrationConfig = integrations.gitea.byHost(host);
      if (!integrationConfig) {
        throw new InputError(
          `No matching integration configuration for host ${host}, please check your integrations config`,
        );
      }
      const { username, password } = integrationConfig.config;
      if (!username || !password) {
        throw new Error(`Credentials for the gitea ${host} required.`);
      }

      if (owner && owner !== username) {
        await checkGiteaOrg(integrationConfig.config, { owner });
      }

      await createGiteaProject(integrationConfig.config, {
        description,
        owner,
        projectName: repo,
      });

      const auth = { username, password };
      const gitAuthorInfo = {
        name:
          gitAuthorName ??
          config.getOptionalString('scaffolder.defaultAuthor.name'),
        email:
          gitAuthorEmail ??
          config.getOptionalString('scaffolder.defaultAuthor.email'),
      };
      const repoOwner = owner ? owner : username;
      const remoteUrl = `${integrationConfig.config.baseUrl}/${repoOwner}/${repo}.git`;
      const commitResult = await initRepoAndPush({
        dir: getRepoSourceDirectory(ctx.workspacePath, sourcePath),
        remoteUrl,
        auth,
        defaultBranch,
        logger: ctx.logger,
        commitMessage: generateCommitMessage(config, gitCommitMessage),
        gitAuthorInfo,
      });

      const operationTimeLimit = 5000;
      const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
      await sleep(operationTimeLimit);

      const repoContentsUrl = `${integrationConfig.config.baseUrl}/${repoOwner}/${repo}/src/branch/${defaultBranch}/`;
      ctx.output('remoteUrl', remoteUrl);
      ctx.output('commitHash', commitResult?.commitHash);
      ctx.output('repoContentsUrl', repoContentsUrl);
    },
  });
}
