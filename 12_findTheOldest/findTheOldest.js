const findTheOldest = function (nameFunction) {
  //  Find the oldest
  const ageArr = [];
  for (let i = 0; i < nameFunction.length; i++) {
    ageArr.push(nameFunction[i].yearOfDeath - nameFunction[i].yearOfBirth);
  }

  //  [New] Math.max(...arrayVariable) finds the biggest number in a array
  console.log(nameFunction[ageArr.indexOf(Math.max(...ageArr))].name);
  return nameFunction[ageArr.indexOf(Math.max(...ageArr))];
};

// Do not edit below this line
module.exports = findTheOldest;
