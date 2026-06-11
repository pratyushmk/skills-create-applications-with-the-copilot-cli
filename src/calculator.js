// calculator.js
// Supported operations:
//  - addition: a + b
//  - subtraction: a - b
//  - multiplication: a * b
//  - division: a / b  (division by zero throws an Error)
//  - modulo: a % b (modulo by zero throws an Error)
//  - power: base ** exponent
//  - squareRoot: sqrt(n) (throws on negative input)

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

function modulo(a, b) {
  const bn = toNumber(b);
  if (bn === 0) throw new Error('Modulo by zero');
  return toNumber(a) % bn;
}

function power(base, exponent) {
  return Math.pow(toNumber(base), toNumber(exponent));
}

function squareRoot(n) {
  const nn = toNumber(n);
  if (nn < 0) throw new Error('Square root of negative number');
  return Math.sqrt(nn);
}

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
};
