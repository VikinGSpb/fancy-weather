import { translate } from './translate';

test('translate function exists', () => {
  expect(translate).toBeDefined();
});

test('throw error when activeEl undefined', () => {
  expect(() => {
    translate(undefined, null);
  }).toThrow();
});
