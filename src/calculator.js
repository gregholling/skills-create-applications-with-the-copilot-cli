#!/usr/bin/env node
// Simple Node.js CLI Calculator
// Supported operations:
// - Addition: add or +
// - Subtraction: subtract or -
// - Multiplication: multiply or *
// - Division: divide or /

function printUsage() {
  console.log('Usage: node src/calculator.js <operation> <num1> <num2>');
  console.log('Operations: add | + , subtract | - , multiply | * , divide | /');
  console.log('Or use flags: node src/calculator.js --op add 2 3');
}

function parseArgs(argv) {
  const args = argv.slice(2);
  if (args.length === 0) return null;

  // support flag form: --op <op> <num1> <num2> or -o <op> <num1> <num2>
  const opFlagIndex = args.findIndex(a => a === '--op' || a === '-o');
  if (opFlagIndex !== -1) {
    const op = args[opFlagIndex + 1];
    const nums = args.slice(opFlagIndex + 2);
    return {op, nums};
  }

  // positional form: <op> <num1> <num2>
  if (args.length >= 3) {
    const [op, n1, n2] = args;
    return {op, nums: [n1, n2]};
  }

  return null;
}

function resolveOperator(op) {
  if (!op) return null;
  const map = {
    'add': '+',
    '+': '+',
    'subtract': '-',
    '-': '-',
    'multiply': '*',
    '*': '*',
    'divide': '/',
    '/': '/',
  };
  return map[op.toLowerCase()] || null;
}

// Exportable operation functions for unit testing
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('division by zero');
  }
  return a / b;
}

function main(argv) {
  const parsed = parseArgs(argv);
  if (!parsed) {
    printUsage();
    process.exitCode = 2;
    return;
  }

  const {op, nums} = parsed;
  const operator = resolveOperator(op);
  if (!operator) {
    console.error('Unsupported operator.');
    printUsage();
    process.exitCode = 3;
    return;
  }

  if (!nums || nums.length < 2) {
    console.error('Two numeric operands required.');
    printUsage();
    process.exitCode = 4;
    return;
  }

  const a = Number(nums[0]);
  const b = Number(nums[1]);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.error('Operands must be valid numbers.');
    process.exitCode = 5;
    return;
  }

  let result;
  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      if (b === 0) {
        console.error('Error: division by zero');
        process.exitCode = 6;
        return;
      }
      result = a / b;
      break;
    default:
      console.error('Unexpected operator');
      process.exitCode = 7;
      return;
  }

  // Print result to stdout
  console.log(result);
}

module.exports = { add, subtract, multiply, divide };

if (require.main === module) {
  main(process.argv);
}
