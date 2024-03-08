import { createTemplateAction } from '@backstage/plugin-scaffolder-node';
import yaml from 'js-yaml';

// Add type annotations to fix TS2742
type SanitizeResourceInput = {
  document: string;
};

type SanitizeResourceOutput = {
  sanitized: string;
};

export const createSanitizeResource = () => {
  return createTemplateAction<SanitizeResourceInput, SanitizeResourceOutput>({
    id: 'cnoe:utils:sanitize',
    schema: {
      input: {
        type: 'object',
        required: ['document'],
        properties: {
          document: {
            type: 'string',
            title: 'Document',
            description: 'The document to be sanitized',
          },
        },
      },
    },
    async handler(ctx) {
      const obj = yaml.load(ctx.input.document);
      ctx.output('sanitized', yaml.dump(removeEmptyObjects(obj)));
    },
  });
};

// Remove empty elements from an object
function removeEmptyObjects(obj: any): any {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  const newObj: any = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    const value = obj[key];
    const newValue = removeEmptyObjects(value);
    if (
      !(
        newValue === null ||
        newValue === undefined ||
        (typeof newValue === 'object' && Object.keys(newValue).length === 0)
      )
    ) {
      newObj[key] = newValue;
    }
  }

  return newObj;
}
