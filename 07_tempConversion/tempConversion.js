const convertToCelsius = function (fc) {
  const temp = (fc - 32) * (5 / 9);
  // Round the number to the nearest 0.1 value
  var rounded = Math.round(temp * 10) / 10;

  // Check if the decimal part is zero
  if (rounded % 1 === 0) {
    // The decimal part is zero, so we can remove it
    return Number(rounded.toFixed(0));
  } else {
    // The decimal part is not zero, so we keep it
    return Number(rounded.toFixed(1));
  }
};

const convertToFahrenheit = function (cf) {
  const temp = cf * (9 / 5) + 32;
  var rounded = Math.round(temp * 10) / 10;

  // Check if the decimal part is zero
  if (rounded % 1 === 0) {
    // The decimal part is zero, so we can remove it
    return Number(rounded.toFixed(0));
  } else {
    // The decimal part is not zero, so we keep it
    return Number(rounded.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
