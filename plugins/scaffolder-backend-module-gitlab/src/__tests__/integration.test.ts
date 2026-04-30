/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

jest.mock('@backstage/plugin-scaffolder-node', () => {
  return {
    ...jest.requireActual('@backstage/plugin-scaffolder-node'),
    initRepoAndPush: jest.fn().mockResolvedValue({
      commitHash: 'abc123def456',
    }),
    commitAndPushRepo: jest.fn().mockResolvedValue({
      commitHash: 'abc123def456',
    }),
  };
});

const mockGitlabClient = {
  Namespaces: { show: jest.fn() },
  Groups: { allProjects: jest.fn(), show: jest.fn() },
  Projects: { create: jest.fn(), show: jest.fn(), edit: jest.fn() },
  Users: { showCurrentUser: jest.fn(), allProjects: jest.fn() },
  ProjectMembers: { add: jest.fn() },
  Branches: { create: jest.fn() },
  ProtectedBranches: { protect: jest.fn() },
  ProjectVariables: { create: jest.fn() },
  Issues: { create: jest.fn(), edit: jest.fn() },
  Epics: { all: jest.fn() },
  Pipelines: { create: jest.fn() },
  MergeRequests: { create: jest.fn() },
  Repositories: { allRepositoryTrees: jest.fn() },
  RepositoryFiles: { show: jest.fn(), create: jest.fn(), edit: jest.fn() },
  ProjectAccessTokens: { create: jest.fn() },
  ProjectDeployTokens: { create: jest.fn() },
};

jest.mock('@gitbeaker/rest', () => ({
  Gitlab: class {
    constructor() {
      return mockGitlabClient;
    }
  },
}));

import { ConfigReader } from '@backstage/config';
import { ScmIntegrations } from '@backstage/integration';
import {
  createPublishGitlabAction,
  createGitlabIssueAction,
  createGitlabGroupEnsureExistsAction,
  createGitlabRepoPushAction,
  createPublishGitlabMergeRequestAction,
  createTriggerGitlabPipelineAction,
  createGitlabProjectAccessTokenAction,
  createGitlabProjectDeployTokenAction,
  createGitlabProjectVariableAction,
  editGitlabIssueAction,
} from '../actions';
import { createGitlabProjectMigrateAction } from '../actions/gitlabProjectMigrate';

const createTestConfig = () =>
  new ConfigReader({
    integrations: {
      gitlab: [
        {
          host: 'gitlab.com',
          token: 'test-token',
          apiBaseUrl: 'https://gitlab.com/api/v4',
        },
      ],
    },
  });

const createTestIntegrations = (config: ConfigReader) =>
  ScmIntegrations.fromConfig(config);

/**
 * Creates a minimal mock action context compatible with scaffolder action handlers.
 */
function createMockContext(input: Record<string, any>) {
  const outputs = new Map<string, any>();
  return {
    input,
    workspacePath: '/tmp/test-workspace',
    logger: {
      info: jest.fn(),
      warn: jest.fn(),
      error: jest.fn(),
      debug: jest.fn(),
      child: jest.fn().mockReturnThis(),
    },
    logStream: { write: jest.fn() },
    output: jest.fn((key: string, value: any) => {
      outputs.set(key, value);
    }),
    getOutputValue: (key: string) => outputs.get(key),
    createTemporaryDirectory: jest.fn().mockResolvedValue('/tmp/test-temp'),
    checkpoint: jest.fn(),
    getInitiatorCredentials: jest.fn().mockResolvedValue({
      $$type: '@backstage/BackstageCredentials',
      principal: { type: 'user', userEntityRef: 'user:default/test' },
    }),
    each: jest.fn(),
    templateInfo: {
      entityRef: 'template:default/test-template',
    },
    isDryRun: false,
    user: {
      entity: undefined,
      ref: 'user:default/test',
    },
    signal: undefined as any,
  };
}

describe('GitLab Scaffolder Module Integration Tests', () => {
  let config: ConfigReader;
  let integrations: ReturnType<typeof ScmIntegrations.fromConfig>;

  beforeEach(() => {
    jest.clearAllMocks();
    config = createTestConfig();
    integrations = createTestIntegrations(config);
  });

  describe('Action Registration', () => {
    it('should create all 11 expected scaffolder actions', () => {
      const actions = [
        createGitlabGroupEnsureExistsAction({ integrations }),
        createGitlabProjectMigrateAction({ integrations }),
        createGitlabIssueAction({ integrations }),
        createGitlabProjectAccessTokenAction({ integrations }),
        createGitlabProjectDeployTokenAction({ integrations }),
        createGitlabProjectVariableAction({ integrations }),
        createGitlabRepoPushAction({ integrations }),
        editGitlabIssueAction({ integrations }),
        createPublishGitlabAction({ config, integrations }),
        createPublishGitlabMergeRequestAction({ integrations }),
        createTriggerGitlabPipelineAction({ integrations }),
      ];

      expect(actions).toHaveLength(11);
    });

    it('should assign correct action IDs to each action', () => {
      const expectedIds = [
        'gitlab:group:ensureExists',
        'gitlab:group:migrate',
        'gitlab:issues:create',
        'gitlab:projectAccessToken:create',
        'gitlab:projectDeployToken:create',
        'gitlab:projectVariable:create',
        'gitlab:repo:push',
        'gitlab:issue:edit',
        'publish:gitlab',
        'publish:gitlab:merge-request',
        'gitlab:pipeline:trigger',
      ];

      const actions = [
        createGitlabGroupEnsureExistsAction({ integrations }),
        createGitlabProjectMigrateAction({ integrations }),
        createGitlabIssueAction({ integrations }),
        createGitlabProjectAccessTokenAction({ integrations }),
        createGitlabProjectDeployTokenAction({ integrations }),
        createGitlabProjectVariableAction({ integrations }),
        createGitlabRepoPushAction({ integrations }),
        editGitlabIssueAction({ integrations }),
        createPublishGitlabAction({ config, integrations }),
        createPublishGitlabMergeRequestAction({ integrations }),
        createTriggerGitlabPipelineAction({ integrations }),
      ];

      const actionIds = actions.map(a => a.id);
      expect(actionIds).toEqual(expect.arrayContaining(expectedIds));
      expect(actionIds).toHaveLength(expectedIds.length);
    });

    it('should create actions with handler functions', () => {
      const actions = [
        createGitlabGroupEnsureExistsAction({ integrations }),
        createGitlabProjectMigrateAction({ integrations }),
        createGitlabIssueAction({ integrations }),
        createPublishGitlabAction({ config, integrations }),
      ];

      for (const action of actions) {
        expect(typeof action.handler).toBe('function');
      }
    });
  });

  describe('Repository Creation Workflow', () => {
    it('should create publish:gitlab action with correct id', () => {
      const action = createPublishGitlabAction({ integrations, config });
      expect(action.id).toBe('publish:gitlab');
    });

    it('should process valid parameters and produce outputs', async () => {
      const action = createPublishGitlabAction({ integrations, config });

      mockGitlabClient.Users.showCurrentUser.mockResolvedValue({ id: 12345 });
      mockGitlabClient.Namespaces.show.mockResolvedValue({
        id: 1234,
        kind: 'group',
      });
      mockGitlabClient.Groups.allProjects.mockResolvedValue([]);
      mockGitlabClient.Projects.create.mockResolvedValue({
        id: 999,
        http_url_to_repo: 'https://gitlab.com/test-group/test-repo.git',
      });

      const ctx = createMockContext({
        repoUrl: 'gitlab.com?repo=test-repo&owner=test-group',
        repoVisibility: 'private',
      });

      await action.handler(ctx as any);

      expect(ctx.output).toHaveBeenCalledWith(
        'remoteUrl',
        'https://gitlab.com/test-group/test-repo',
      );
      expect(ctx.output).toHaveBeenCalledWith('projectId', 999);
      expect(ctx.output).toHaveBeenCalledWith('commitHash', 'abc123def456');
      expect(ctx.output).toHaveBeenCalledWith('created', true);
    });

    it('should call GitLab APIs in correct order for group-owned repos', async () => {
      const action = createPublishGitlabAction({ integrations, config });

      mockGitlabClient.Users.showCurrentUser.mockResolvedValue({ id: 12345 });
      mockGitlabClient.Namespaces.show.mockResolvedValue({
        id: 1234,
        kind: 'group',
      });
      mockGitlabClient.Groups.allProjects.mockResolvedValue([]);
      mockGitlabClient.Projects.create.mockResolvedValue({
        id: 999,
        http_url_to_repo: 'https://gitlab.com/my-group/my-repo.git',
      });

      const ctx = createMockContext({
        repoUrl: 'gitlab.com?repo=my-repo&owner=my-group',
      });

      await action.handler(ctx as any);

      expect(mockGitlabClient.Namespaces.show).toHaveBeenCalledWith(
        'my-group',
      );
      expect(mockGitlabClient.Projects.create).toHaveBeenCalledWith(
        expect.objectContaining({
          namespaceId: 1234,
          name: 'my-repo',
        }),
      );
    });
  });

  describe('Parameter Validation', () => {
    it('should throw when repoUrl is missing owner', async () => {
      const action = createPublishGitlabAction({ integrations, config });
      const ctx = createMockContext({
        repoUrl: 'gitlab.com?repo=test-repo',
      });

      await expect(action.handler(ctx as any)).rejects.toThrow(/missing owner/);
    });

    it('should throw when repoUrl is missing repo', async () => {
      const action = createPublishGitlabAction({ integrations, config });
      const ctx = createMockContext({
        repoUrl: 'gitlab.com?owner=test-owner',
      });

      await expect(action.handler(ctx as any)).rejects.toThrow(/missing repo/);
    });

    it('should throw when no integration config matches the host', async () => {
      const action = createPublishGitlabAction({ integrations, config });
      const ctx = createMockContext({
        repoUrl: 'unknown-host.com?repo=test-repo&owner=test-owner',
      });

      await expect(action.handler(ctx as any)).rejects.toThrow(
        /No matching integration configuration/,
      );
    });

    it('should throw when no token is available for the host', async () => {
      const noTokenConfig = new ConfigReader({
        integrations: {
          gitlab: [
            {
              host: 'no-token.gitlab.com',
              apiBaseUrl: 'https://no-token.gitlab.com/api/v4',
            },
          ],
        },
      });
      const noTokenIntegrations = ScmIntegrations.fromConfig(noTokenConfig);
      const action = createPublishGitlabAction({
        integrations: noTokenIntegrations,
        config: noTokenConfig,
      });

      const ctx = createMockContext({
        repoUrl: 'no-token.gitlab.com?repo=test-repo&owner=test-owner',
      });

      await expect(action.handler(ctx as any)).rejects.toThrow(
        /No token available/,
      );
    });
  });

  describe('GitLab API Error Handling', () => {
    it('should handle namespace not found (404) errors', async () => {
      const action = createPublishGitlabAction({ integrations, config });

      const notFoundError: any = new Error('Not Found');
      notFoundError.cause = { response: { status: 404 } };
      mockGitlabClient.Namespaces.show.mockRejectedValue(notFoundError);

      const ctx = createMockContext({
        repoUrl: 'gitlab.com?repo=test-repo&owner=nonexistent-group',
      });

      await expect(action.handler(ctx as any)).rejects.toThrow(
        /not found|doesn't have permissions/,
      );
    });

    it('should propagate unexpected API errors', async () => {
      const action = createPublishGitlabAction({ integrations, config });

      mockGitlabClient.Namespaces.show.mockRejectedValue(
        new Error('Internal Server Error'),
      );

      const ctx = createMockContext({
        repoUrl: 'gitlab.com?repo=test-repo&owner=test-group',
      });

      await expect(action.handler(ctx as any)).rejects.toThrow(
        'Internal Server Error',
      );
    });

    it('should handle project creation failure', async () => {
      const action = createPublishGitlabAction({ integrations, config });

      mockGitlabClient.Users.showCurrentUser.mockResolvedValue({ id: 12345 });
      mockGitlabClient.Namespaces.show.mockResolvedValue({
        id: 1234,
        kind: 'group',
      });
      mockGitlabClient.Groups.allProjects.mockResolvedValue([]);
      mockGitlabClient.Projects.create.mockRejectedValue(
        new Error('403 Forbidden'),
      );

      const ctx = createMockContext({
        repoUrl: 'gitlab.com?repo=test-repo&owner=test-group',
      });

      await expect(action.handler(ctx as any)).rejects.toThrow(
        '403 Forbidden',
      );
    });

    it('should handle network timeout errors', async () => {
      const action = createPublishGitlabAction({ integrations, config });

      mockGitlabClient.Namespaces.show.mockRejectedValue(
        new Error('ETIMEDOUT'),
      );

      const ctx = createMockContext({
        repoUrl: 'gitlab.com?repo=test-repo&owner=test-group',
      });

      await expect(action.handler(ctx as any)).rejects.toThrow('ETIMEDOUT');
    });
  });
});
