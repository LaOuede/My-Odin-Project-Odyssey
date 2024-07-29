import { caesarCipher, transform } from '../src/caesarCipher';

test('Hello, World! - 3', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('HeLLo - 3', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('test transform function', () => {
  expect(transform(65, 65, 3)).toBe('D');
});