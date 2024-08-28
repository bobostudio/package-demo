import { expect, test } from 'vitest';
import { add } from './utils';

test('add', () => {
  expect(add(1, 2)).toBe(3);
});

test('add', () => {
  expect(add(0, 2)).toBe(2);
});
