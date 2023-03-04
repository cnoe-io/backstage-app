import { workflowsPlugin } from './plugin';

describe('workflows', () => {
  it('should export plugin', () => {
    expect(workflowsPlugin).toBeDefined();
  });
});
