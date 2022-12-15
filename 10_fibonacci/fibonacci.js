const fibonacci = function (x) {
  const sequence = [1, 1];
  if (x < 0) {
    return "OOPS";
  } else {
    for (i = 0; i < x - 1; i++) {
      sequence.push(sequence[i] + sequence[i + 1]);
    }
    return sequence[x - 1];
  }
};

// Do not edit below this line
module.exports = fibonacci;
