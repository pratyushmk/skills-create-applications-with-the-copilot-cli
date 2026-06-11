// calculator.js
// Supported operations:
//  - addition: a + b
//  - subtraction: a - b
//  - multiplication: a * b
//  - division: a / b  (division by zero throws an Error)

// Parse a value into a number and validate
function toNumber(value) {
  const n = Number(value);
  if (Number.isNaN(n)) throw new Error(`Invalid number: ${value}`);
  return n;
}

function addition(a, b) {
  return toNumber(a) + toNumber(b);
}

function subtraction(a, b) {
  return toNumber(a) - toNumber(b);
}

function multiplication(a, b) {
  return toNumber(a) * toNumber(b);
}

function division(a, b) {
  const bn = toNumber(b);
  if (bn === 0) throw new Error('Division by zero');
  return toNumber(a) / bn;
}

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
};
