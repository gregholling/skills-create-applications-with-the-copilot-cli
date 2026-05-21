const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

describe('Calculator basic operations', () => {
  test('adds 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtracts 10 - 4 = 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('multiplies 45 * 2 = 90', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('divides 20 / 5 = 4', () => {
    expect(divide(20, 5)).toBe(4);
  });
});

describe('Calculator edge cases', () => {
  test('division by zero throws', () => {
    expect(() => divide(1, 0)).toThrow('division by zero');
  });

  test('operations with negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
    expect(subtract(-5, -5)).toBe(0);
    expect(multiply(-3, 4)).toBe(-12);
    expect(divide(-10, 2)).toBe(-5);
  });

  test('floating point precision', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

describe('Extended operations: modulo, power, squareRoot', () => {
  test('modulo: 5 % 2 = 1', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('modulo by zero throws', () => {
    expect(() => modulo(1, 0)).toThrow('modulo by zero');
  });

  test('power: 2 ^ 3 = 8', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('power with negative exponent: 2 ^ -1 = 0.5', () => {
    expect(power(2, -1)).toBeCloseTo(0.5);
  });

  test('power with fractional exponent: 9 ^ 0.5 = 3', () => {
    expect(power(9, 0.5)).toBeCloseTo(3);
  });

  test('squareRoot of 16 = 4', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('squareRoot of 2 is close to Math.sqrt(2)', () => {
    expect(squareRoot(2)).toBeCloseTo(Math.sqrt(2));
  });

  test('squareRoot of negative number throws', () => {
    expect(() => squareRoot(-4)).toThrow('square root of negative number');
  });
});
