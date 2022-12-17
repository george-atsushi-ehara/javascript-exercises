const caesar = function (x, y) {
  const chars = x.split("");

  for (let i = 0; i < chars.length; i++) {
    if (/[a-z]/i.test(chars[i])) {
      let code = chars[i].charCodeAt(0);
      let isUpperCase = chars[i] === chars[i].toUpperCase();

      // Shift the character's code point
      code += y;

      // If the character was uppercase, ensure the resulting character is uppercase as well
      if (isUpperCase) {
        code = ((code - 65 + 26) % 26) + 65;
      } else {
        code = ((code - 97 + 26) % 26) + 97;
      }

      // Replace the character with the shifted version
      chars[i] = String.fromCharCode(code);
    }
  }

  return chars.join("");
};

// Do not edit below this line
module.exports = caesar;
