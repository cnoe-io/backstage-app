import { executeShellCommand } from '@backstage/plugin-scaffolder-node';
import { createTemplateAction }from '@backstage/plugin-scaffolder-node';
import {Writable} from 'stream';

class ConsoleLogStream extends Writable {
  data: string;

  constructor(options: any) {
    super(options);
    this.data = '';
  }

  _write(chunk: any, _: any, callback: any) {
    this.data += chunk.toString();  // Convert the chunk to a string and append it to this.data
    console.log(this.data)
    callback();
  }
}

export const createVerifyDependency = () => {
  return createTemplateAction<{
    verifiers: string[];
  }>({
    id: 'cnoe:verify:dependency',
    schema: {
      input: {
        type: 'object',
        required: ['verifiers'],
        properties: {
          verifiers: {
            type: 'array',
            items: {
              type: 'string',
            },
            title: 'verifiers',
            description: 'The list of verifiers',
          },
        },
      },
    },
    async handler(ctx) {
      const verifiers = ctx.input.verifiers

      if (verifiers === null || verifiers.length === 0) {
        ctx.logger.error('no verifier was supplied for the object')
        return
      }

      const baseCommand = 'cnoe'
      const baseArguments = ['k8s', 'verify']

      verifiers.forEach((verifier: string) => baseArguments.push("--config", verifier))

      const logStream = new ConsoleLogStream({});
      await executeShellCommand({
        command: baseCommand,
        args: baseArguments,
        logStream: logStream,
      }).then(() =>
        ctx.logger.info("verification succeeded")
      ).catch((error) => {
        ctx.logger.error(error)
        throw new Error(logStream.data)
      });
    },
  });
};
