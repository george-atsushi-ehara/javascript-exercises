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
  //  if character count is odd then ignore the middle character
  for (a = 0, b = wordLength - 1; wordLength > wordLength / 2; a++, b--){
    if (x[a] == x[b]) {

    }
  }
};

// Do not edit below this line
module.exports = palindromes;
