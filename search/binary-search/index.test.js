import { describe, expect, test } from '@jest/globals';
import binarySearch from './index';

describe('binarySearch', () => {
  test('should return the index of the target element in the sorted array', () => {
    const arr = [1, 2, 3, 4, 5]; // sorted array
    expect(binarySearch(arr, 3)).toBe(2);
    expect(binarySearch(arr, 4)).toBe(3);
  });

  test('should return -1 if the target element is not found', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(binarySearch(arr, 6)).toBe(-1);
  });

  test('should return -1 if the input array was not sorted', () => {
    const arr = [3, 4, 5, 1, 2];
    expect(binarySearch(arr, 1)).toBe(-1);
  });
});