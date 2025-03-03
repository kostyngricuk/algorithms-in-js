import { describe, expect, test } from '@jest/globals';
import linearSearch from './index';

describe('linearSearch', () => {
  test('should return the index of the target element', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(linearSearch(arr, 3)).toBe(2);
    expect(linearSearch(arr, 4)).toBe(3);
  });

  test('should return -1 if the target element is not in the array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(linearSearch(arr, 6)).toBe(-1);
  });
});