/* Exercise
Given 2 arrays, create a function that lets a user know (true/false) whether these two arrays contain any common items
For Example:
const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
should return false.
-----------
const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
should return true.

2 parameters - arrays - no size limit
return true or false
*/

// this function's time complexity is O(n*m) -> two different inputs
// consider the worst case where n ~ m, and therefore big O will be O(n^2)
// it has a space complexity of O(1)
function hasCommonItem(array1, array2) {
  // O(n)
  // loop through the first array
  array1.forEach((item) => {
    // O(m)
    // in each iteration, loop through the second array and check whether the item from array 1 exists in array 2
    if (array2.includes(item)) return true;
  });

  return false;
}

console.log(hasCommonItem(["a", "b", "c", "d"], ["g", "x", "d", "j"]));

// This solution is better (in terms of speed) because its time complexity is O(n + m)
// it has a space complexity of O(n) because it involves creating an object with n number of properties
function hasCommonItem2(array1, array2) {
  let array1ItemsObject = {};
  // loop through array 1 and create a object where each array item is a property with a value of true
  // O(n)
  for (const item of array1) {
    // create a property with the array item if such a property does not exist
    if (!array1ItemsObject[item]) {
      array1ItemsObject[item] = true;
    }
  }
  // loop through array 2 and check whether an item exists as a property on the created object
  // O(m)
  for (const item of array2) {
    if (array1ItemsObject[item]) return true;
  }

  return false;
}

console.log(hasCommonItem2(["a", "b", "c", "d"], ["g", "x", "d", "j"]));

// this function has a time complexity of O(n + m), and also the same space complexity
// the big O of array spread operation is O(n)
// this solution is more readable than the previous one
function hasCommonItem3(array1, array2) {
  // creating an array that is the combination of the two arrays
  const combinedArray = [...array1, ...array2];
  // creating a set from the combined array, and comparing the size of that set with the combined array's length
  // if the set size and array length are not equal, then that means array 1 and array 2 had at least one common item
  return new Set(combinedArray).size !== combinedArray.length;
}

console.log(hasCommonItem3(["a", "b", "c", "d"], ["g", "x", "d", "j"]));
