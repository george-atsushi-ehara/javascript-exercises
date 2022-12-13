const sumAll = function (num1, num2) {
  // Make sure num1 is smaller than num2
  if (num1 > num2) {
    [num1, num2] = [num2, num1];
  }

  // This makes a array of all the numbers between num1 and num2
  var numArray = [];
  for (i = num1; i <= num2; i++) {
    numArray.push(i);
  }

  if (
    typeof num1 !== "number" &&
    typeof num2 !== "number" &&
    !Array.isArray(num1) &&
    !Array.isArray(num2)
  ) {
    return "ERROR";
  } else if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "ERROR";
  } else if (num1 < 0 || num2 < 0) {
    return "ERROR";
  } else {
    return (sumThis = numArray.reduce((a, b) => a + b, 0));
  }
};

// Do not edit below this line
module.exports = sumAll;
