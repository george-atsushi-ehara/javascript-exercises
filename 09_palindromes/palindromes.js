const palindromes = function (x) {
//   Googled how to remove all non character and spaces and found replace(/[^\w\s]/g, "") 
//   But all the spaces were still there after console.log
//   Googled again on how to remove spaces and found .replace(/\s/g, "")
  let shortenedX = x
    .replace(/[^\w\s]/g, "")
    .replace(/\s/g, "")
    .trim()
    .toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
