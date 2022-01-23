import capitalize from './capitalize.js'

test('Capitalize-hello', () => {
  const string = "hello";
  const result = capitalize(string);
  expect(result).toBe('Hello');
})