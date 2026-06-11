const { add, subtract, multiply, divide } = require('../calculator');

describe('calculator basic operations', () => {
  test('addition: 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
    expect(add('2', '3')).toBe(5);
  });

  test('subtraction: 10 - 4 = 6', () => {
    expect(subtract(10, 4)).toBe(6);
    expect(subtract('10', '4')).toBe(6);
  });

  test('multiplication: 45 * 2 = 90', () => {
    expect(multiply(45, 2)).toBe(90);
    expect(multiply('45', '2')).toBe(90);
  });

  test('division: 20 / 5 = 4', () => {
    expect(divide(20, 5)).toBe(4);
    expect(divide('20', '5')).toBe(4);
  });

  test('division by zero throws', () => {
    expect(() => divide(1, 0)).toThrow(/Division by zero/);
    expect(() => divide('1', '0')).toThrow(/Division by zero/);
  });

  test('invalid number input throws', () => {
    expect(() => add('a', 2)).toThrow(/Invalid number/);
    expect(() => subtract(1, 'b')).toThrow(/Invalid number/);
  });
});
