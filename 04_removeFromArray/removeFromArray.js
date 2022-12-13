const removeFromArray = function (arr, ...removal) {
  const removalArr = Array.from(removal);
  const res = arr.filter(item => !removalArr.includes(item));

  
  return res;
};

// Do not edit below this line
module.exports = removeFromArray;
