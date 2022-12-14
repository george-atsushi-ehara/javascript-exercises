const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (x) {
  const initialValue = 0;
  return x.reduce((a, b) => a + b, initialValue);
};

const multiply = function (x) {
  return x.reduce((a, b) => a * b);
};

const power = function (x, y) {
  return x ** y;
};

const factorial = function (x) {
  if (x == 0 || x == 1) return 1;
  for (let i = x - 1; i > 0; i--) {
    x = x * i;
  }
  return x;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
