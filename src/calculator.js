// calculator.js
// Supported operations:
//  - add: a + b
//  - sub: a - b
//  - mul: a * b
//  - div: a / b  (division by zero throws an Error)

// Parse a value into a number and validate
function toNumber(value) {
  const n = Number(value);
  if (Number.isNaN(n)) throw new Error(`Invalid number: ${value}`);
  return n;
}

function add(a, b) {
  return toNumber(a) + toNumber(b);
}

function subtract(a, b) {
  return toNumber(a) - toNumber(b);
}

function multiply(a, b) {
  return toNumber(a) * toNumber(b);
}

function divide(a, b) {
  const bn = toNumber(b);
  if (bn === 0) throw new Error('Division by zero');
  return toNumber(a) / bn;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
