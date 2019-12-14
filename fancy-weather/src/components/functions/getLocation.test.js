import { getLocation } from './getLocation';

test('getLocation function exists', () => {
  expect(getLocation).toBeDefined();
});

test('throw error when f1 undefined', () => {
  expect(() => {
    getLocation(undefined);
  }).toThrow();
});
