import {sample} from '../index.js';

describe('Test sample lib', () => {
  beforeAll(() => {});

  afterAll(() => {});

  test('sample function', async () => {
    const result = await sample({query: 'hello'});
    expect(result).toBe('Test are querying hello');
  });
});
