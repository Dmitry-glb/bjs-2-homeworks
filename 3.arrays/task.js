function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every((element, index) => {
    return element === arr2[index];
  })
}

function getUsersNamesInAgeRange(users, gender) {
   const filteredUsers = users.filter(user => user.gender === gender)
   const ages = filteredUsers.map(user => user.age);
   const sumAges = ages.reduce((acc, curr) => acc + curr, 0);
   if (filteredUsers.length > 0) {
    return sumAges / filteredUsers.length;
   } else {
    return 0;
   }
}