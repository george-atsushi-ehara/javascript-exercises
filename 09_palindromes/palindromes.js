const palindromes = function (x) {
  //   Googled how to remove all non character and spaces and found replace(/[^\w\s]/g, "")
  //   But all the spaces were still there after console.log
  //   Googled again on how to remove spaces and found .replace(/\s/g, "")
  let shortenedX = x
    .replace(/[^\w\s]/g, "")
    .replace(/\s/g, "")
    .trim()
    .toLowerCase();

  //  Set Word length for array
  let wordLength = shortenedX.length;

  //  Check first character and last character are the same and all charcters inbetten
  for (a = 0; a < wordLength / 2; a++){
    if (shortenedX[a] !== shortenedX[wordLength - 1 - a]) {
        return false;
    }
  }
  //  initially put in 'return true' as a else after that if and didn't work out for the final test
  return true;
};

// Do not edit below this line
module.exports = palindromes;
