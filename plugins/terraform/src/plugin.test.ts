import { terraformPlugin } from './plugin';

describe('terraform', () => {
  it('should export plugin', () => {
    expect(terraformPlugin).toBeDefined();
  });
});
