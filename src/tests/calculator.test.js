const { addition, subtraction, multiplication, division, modulo, power, squareRoot } = require('../calculator');

describe('calculator basic operations', () => {
  test('addition: 2 + 3 = 5', () => {
    expect(addition(2, 3)).toBe(5);
    expect(addition('2', '3')).toBe(5);
  });

  test('subtraction: 10 - 4 = 6', () => {
    expect(subtraction(10, 4)).toBe(6);
    expect(subtraction('10', '4')).toBe(6);
  });

  test('multiplication: 45 * 2 = 90', () => {
    expect(multiplication(45, 2)).toBe(90);
    expect(multiplication('45', '2')).toBe(90);
  });

  test('division: 20 / 5 = 4', () => {
    expect(division(20, 5)).toBe(4);
    expect(division('20', '5')).toBe(4);
  });

  test('division by zero throws', () => {
    expect(() => division(1, 0)).toThrow(/Division by zero/);
    expect(() => division('1', '0')).toThrow(/Division by zero/);
  });

  test('invalid number input throws', () => {
    expect(() => addition('a', 2)).toThrow(/Invalid number/);
    expect(() => subtraction(1, 'b')).toThrow(/Invalid number/);
  });
});

describe('extended operations: modulo, power, squareRoot', () => {
  test('modulo: 5 % 2 = 1', () => {
    expect(modulo(5, 2)).toBe(1);
    expect(modulo('5', '2')).toBe(1);
  });

  test('modulo by zero throws', () => {
    expect(() => modulo(5, 0)).toThrow(/Modulo by zero/);
  });

  test('power: 2 ^ 3 = 8', () => {
    expect(power(2, 3)).toBe(8);
    expect(power('2', '3')).toBe(8);
  });

  test('power with negative exponent: 2 ^ -1 = 0.5', () => {
    expect(power(2, -1)).toBeCloseTo(0.5);
  });

  test('squareRoot: sqrt(16) = 4', () => {
    expect(squareRoot(16)).toBe(4);
    expect(squareRoot('16')).toBe(4);
  });

  test('squareRoot of negative throws', () => {
    expect(() => squareRoot(-1)).toThrow(/Square root of negative number/);
  });
});
