const getTheTitles = function (titleName) {
  const titleArr = [];
  for (let i = 0; i < titleName.length; i++) {
    titleArr.push(titleName[i].title);
  }
  return titleArr;
};

// Do not edit below this line
module.exports = getTheTitles;
