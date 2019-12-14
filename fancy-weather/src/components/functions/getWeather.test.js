import { getWeather } from './getWeather';

test('getWeather function exists', () => {
  expect(getWeather).toBeDefined();
});

test('throw error when lat and lon undefined', () => {
  expect(() => {
    getWeather(undefined, undefined);
  }).toThrow();
});
