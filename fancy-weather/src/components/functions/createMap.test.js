import { createMap } from './createMap';

test('createMap function exists', () => {
  expect(createMap).toBeDefined();
});

test('throw error when coordinates undefined', () => {
  expect(() => {
    createMap(undefined, undefined);
  }).toThrow();
});
