#!/usr/bin/env node
// CLI wrapper for calculator functions (supports add, sub, mul, div)
// Usage examples:
//   node src/cli.js add 2 3
//   node src/cli.js sub 5 2
//   node src/cli.js mul 4 6
//   node src/cli.js div 10 2

const readline = require('readline');
const { add, subtract, multiply, divide } = require('./calculator');

function printHelp() {
  console.log('Usage: node src/cli.js <op> <a> <b>');
  console.log('Operations: add, sub, mul, div');
  console.log('Interactive mode: run without arguments and enter commands like "add 2 3". Type "exit" to quit.');
}

function compute(op, a, b) {
  switch (op) {
    case 'add':
      return add(a, b);
    case 'sub':
      return subtract(a, b);
    case 'mul':
      return multiply(a, b);
    case 'div':
      return divide(a, b);
    default:
      throw new Error(`Unknown operation: ${op}`);
  }
}

async function runOne(args) {
  if (args.length < 3) {
    printHelp();
    process.exit(2);
  }
  const op = args[0].toLowerCase();
  const a = args[1];
  const b = args[2];
  try {
    const result = compute(op, a, b);
    console.log(result);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(2);
  }
}

function runInteractive() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout, prompt: '> ' });
  console.log('Interactive calculator. Examples: add 2 3');
  rl.prompt();
  rl.on('line', (line) => {
    const trimmed = line.trim();
    if (!trimmed) {
      rl.prompt();
      return;
    }
    if (trimmed === 'exit' || trimmed === 'quit') {
      rl.close();
      return;
    }
    const parts = trimmed.split(/\s+/);
    if (parts.length < 3) {
      console.log('Enter: <op> <a> <b> (e.g. add 2 3)');
      rl.prompt();
      return;
    }
    const [op, a, b] = parts;
    try {
      const res = compute(op.toLowerCase(), a, b);
      console.log(res);
    } catch (err) {
      console.error('Error:', err.message);
    }
    rl.prompt();
  }).on('close', () => {
    console.log('Goodbye');
    process.exit(0);
  });
}

// Entry point
const argv = process.argv.slice(2);
if (argv.length === 0) {
  runInteractive();
} else if (argv[0] === '-h' || argv[0] === '--help') {
  printHelp();
} else {
  runOne(argv);
}
