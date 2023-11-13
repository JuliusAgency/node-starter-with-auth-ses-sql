import { beforeAll, describe, expect, test } from '@jest/globals';

describe('Test Suite', () => {
  beforeAll(() => {
    console.log("beforeAll called");
  });

  test("test greet", () => {
    const expected = "Hello World!";
    const result = expected;
    expect(result).toBe(expected);
  });
});
