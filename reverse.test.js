import reverse from "./reverse.js";

test('reverse hello', () => {
  const string='hello';
  const result=reverse(string);
  expect(result).toBe('olleh');
});