import reverseString from "../src/reverseString";

test('null str', () => {
  expect(reverseString()).toBeNull();
});

test('reverse -string- to equal -gnirts-', () => {
  expect(reverseString('string')).toBe('gnirts');
});

test('reverse -Greetings from Earth”- to equal -htraE morf sgniteerG-', () => {
  expect(reverseString('Greetings from Earth')).toBe('htraE morf sgniteerG');
});
