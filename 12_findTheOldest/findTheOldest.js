const findTheOldest = function (nameFunction) {
  // Find alive
  const eldestIfLiving = [];
  //  Find the oldest
  const ageArr = [];

  {
    for (let i = 0; i < nameFunction.length; i++) {
      // Test 1 Find the Eldest
      ageArr.push(nameFunction[i].yearOfDeath - nameFunction[i].yearOfBirth);

      // Test 2 Find Earliest BirthYear
      eldestIfLiving.push(
        new Date().getFullYear() - nameFunction[i].yearOfBirth
      );
      // if (nameFunction[i].yearOfDeath === "undefined"){
      //   alive.push(nameFunction.name)
    }
    //  [New] Math.max(...arrayVariable) finds the biggest number in a array
    return nameFunction[ageArr.indexOf(Math.max(...ageArr))];
  }
  return nameFunction[eldestIfLiving.indexOf(Math.max(...eldestIfLiving))];
};
// Do not edit below this line
module.exports = findTheOldest;
