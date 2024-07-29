import calculator from "../src/calculator";

test('sum 1 + 1 = 2', () => {
  expect(calculator.sum(1, 1)).toBe(2);
});

test('sum 1 + -2 = -1', () => {
  expect(calculator.sum(1, -2)).toBe(-1);
});

test('substract 10 - 7 = 3', () => {
  expect(calculator.substract(10, 7)).toBe(3);
});

test('substract -10 - 7 = 3', () => {
  expect(calculator.substract(-10, 7)).toBe(-17);
});

test('divide 10 / 2 = 5', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test('divide 24 / 4 = 6', () => {
  expect(calculator.divide(24, 4)).toBe(6);
});

test('multiply 10 * 2 = 20', () => {
  expect(calculator.multiply(10, 2)).toBe(20);
});

test('multiply -3 * 4 = -12', () => {
  expect(calculator.multiply(-3, 4)).toBe(-12);
});