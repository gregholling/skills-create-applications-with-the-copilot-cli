const { add, subtract, multiply, divide } = require('../calculator');

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
