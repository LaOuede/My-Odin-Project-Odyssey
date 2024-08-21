import capitalize from '../src/capitalize';

test('capitalize -zoo- to equal -Zoo-', () => {
  expect(capitalize('zoo')).toBe('Zoo');
});

test('capitalize 123 to equal 123', () => {
  expect(capitalize('123')).toBe('123');
});

test('null str', () => {
  expect(capitalize()).toBeNull();
});