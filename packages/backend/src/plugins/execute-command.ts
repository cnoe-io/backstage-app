import { createTemplateAction } from '@backstage/plugin-scaffolder-node';
import { executeShellCommand } from '@backstage/plugin-scaffolder-node';

export const executeCommand = () => {

  return createTemplateAction<{
    command: string;
    arguments?: string[];
  }>({
    id: 'cnoe:command:execute',
    schema: {
      input: {
        type: 'object',
        required: ['command'],
        properties: {
          command: {
            type: 'string',
            title: 'Command to run',
            description: 'Command to execute',
          },
          arguments: {
            type: 'array',
            items: {
              type: 'string',
            },
            title: 'Command Arguments',
            description: 'Command arguments list',
          },
        },
      },
      output: {},
    },
    async handler(ctx) {
      const command = ctx.input.command;
      const commandArgs = ctx.input.arguments || [];

      if (!command) {
        throw new Error('The command must be provided.');
      }
      
      ctx.logger.info("Running command "+command+" "+commandArgs.join(' '));

      // Execute the shell command with optional arguments
      await executeShellCommand({
        command: command,
        args: commandArgs,
        logStream: ctx.logStream,
      });
      ctx.logger.info('Command executed successfully!');
    },
  });
};
