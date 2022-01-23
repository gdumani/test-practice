import stringLength from "./stringlength.js";

test('Correct-string-length', () => {
  const string = 'hello';
  const val = stringLength(string);
  expect(val).toEqual(5);
});

test('test for empty string', () => {
  const string = '';
  const val = stringLength(string);
  expect(val).toBeFalsy();
});

test('test for string of length 1', () => {
  const string = 'a';
  const val = stringLength(string);
  expect(val).toBe(1);
});

test('test for string of length 10', () => {
  const string = '1234567890';
  const val = stringLength(string);
  expect(val).toBe(10);
});

test('test for empty of length bigger than 10', () => {
  const string = '12345678901';
  const val = stringLength(string);
  expect(val).toBeFalsy();
});