import stringLength from "./stringlength.js";

test('Correct-string-length', () => {
  const string = 'hello';
  const val = stringLength(string);
  expect(val).toEqual(5);
});