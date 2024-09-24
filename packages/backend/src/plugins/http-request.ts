import { createTemplateAction } from '@backstage/plugin-scaffolder-node';

export type Methods =
  | 'GET'
  | 'OPTIONS'
  | 'POST'
  | 'UPDATE'
  | 'DELETE'
  | 'PUT'
  | 'PATCH';

export type Headers = {
  [key: string]: string;
};
export type Params = {
  [key: string]: string;
};
export type Body = string | undefined;

export interface HttpOptions {
  url: string;
  method: string;
  headers: Headers;
  body?: Body;
}

export const createHttpRequest = () => {
  return createTemplateAction<{
    api: string;
    method: Methods;
    headers?: Headers;
    params?: Params;
    body?: any;
  }>({
    id: 'cnoe:http:request',
    description: 'Sends a HTTP request to APIs with headers and payload',
    schema: {
      input: {
        type: 'object',
        required: ['api', 'method'],
        properties: {
          api: {
            type: 'string',
            title: 'API Url',
            description: 'The url path you want to query',
          },
          method: {
            type: 'string',
            title: 'Method',
            description: 'The method type of the request',
            enum: [
              'GET',
              'OPTIONS',
              'POST',
              'UPDATE',
              'DELETE',
              'PUT',
              'PATCH',
            ],
          },
          headers: {
            title: 'Request headers',
            description: 'The headers you would like to pass to your request',
            type: 'object',
          },
          params: {
            title: 'Request query params',
            description:
              'The query parameters you would like to pass to your request',
            type: 'object',
          },
          body: {
            title: 'Request body',
            description: 'The body you would like to pass to your request',
            type: ['object', 'string', 'array'],
          },
        },
      },
      output: {
        type: 'object',
        properties: {
          code: {
            title: 'Response Code',
            type: 'string',
          },
        },
      },
    },
    async handler(ctx) {
      let inputBody: Body = undefined;
      let response: any;

      if (
        ctx.input.body &&
        typeof ctx.input.body !== 'string' &&
        ctx.input.headers &&
        ctx.input.headers['content-type'] &&
        ctx.input.headers['content-type'].includes('application/json')
      ) {
        inputBody = JSON.stringify(ctx.input.body);
      } else {
        inputBody = ctx.input.body;
      }

      const queryParams: string = ctx.input.params
        ? new URLSearchParams(ctx.input.params).toString()
        : '';
      const url =
        queryParams == '' ? `${ctx.input.api}?${queryParams}` : ctx.input.api;

      ctx.logger.info(`Request Url: ${url}`);

      try {
        response = await fetch(url, {
          method: ctx.input.method,
          headers: ctx.input.headers ? (ctx.input.headers as Headers) : {},
          body: inputBody,
        });
        if (!response) {
          throw new Error(`Request was aborted as it took longer time`);
        }
      } catch (e) {
        throw new Error(`There was an issue with the request: ${e}`);
      }

      if (response.status >= 200 && response.status <= 300) {
        ctx.logger.info(
          `Request was successful. Status code: ${response.status}`,
        );
      } else {
        ctx.logger.error(
          `There was an issue with request. Status code: ${response.status}`,
        );
        throw new Error(
          `The Url request is failed with ${response.status} code.`,
        );
      }

      ctx.output('code', response.status);
    },
  });
};