/*
Create a function that reverses a string.
The function should return the reversed string.

- split the string -> array of individual string characters
- reverse the array
- join the characters of the array
*/

// time complexity is O(3n) = O(n)
function reverseString(str) {
  if (typeof str !== "string") return "Invalid input";
  if (str.length < 2) return str;
  return str.split("").reverse().join("");
}

// without using the built-in reverse() method
function reverseString2(str) {
  if (typeof str !== "string") return "Invalid input";
  if (str.length < 2) return str;
  let reversedCharacters = [];

  for (let i = str.length - 1; i >= 0; i--) {
    reversedCharacters.push(str[i]);
  }

  return reversedCharacters.join("");
}

// without using array methods
function reverseString3(str) {
  if (typeof str !== "string") return "Invalid input";
  if (str.length < 2) return str;
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}

console.log(reverseString("hello"));
console.log(reverseString(1));
console.log(reverseString2("World"));
console.log(reverseString3("Hello World"));

/* Merge two sorted arrays into one array

Suppose there are two arrays, [0, 3, 4, 31] and [4, 6, 30].
The resultant array should be [0, 3, 4, 4, 6, 30, 31]*/

// the time complexity of this function is O(n + nlogn) = O(nlogn)
// sorting is O(nlogn)
function mergeArrays(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) return "Invalid input";
  return [...array1, ...array2].sort((x, y) => x - y);
}

console.log(mergeArrays([0, 3, 4, 31], [4, 6, 30]));

// without using built in functions
// this solution has a better time complexity, O(n + m), but it is long and less readable
// the space complexity is O(n)
function mergeArrays2(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) return "Invalid input";
  if (array1.length === 0 && array2.length === 0) return [];
  if (array1.length === 0) return array2;
  if (array2.length === 0) return array1;

  const mergedArray = [];
  // starting from the first items
  let i = 0;
  let j = 0;
  // the while loop will run as long as there are items in either array1 or array2
  while (array1[i] !== undefined || array2[j] !== undefined) {
    // if array2 item doesn't exist, then it means all items from array2 have been added
    if (array2[j] === undefined || array1[i] < array2[j]) {
      mergedArray.push(array1[i]);
      // go to the next item in array1
      i++;
    } else if (array1[i] === array2[j]) {
      mergedArray.push(array1[i]);
      mergedArray.push(array2[j]);
      i++;
      j++;
    }
    // if array1 item doesn't exist, then it means all items from array1 have been added
    else if (array1[i] === undefined || array1[i] > array2[j]) {
      mergedArray.push(array2[j]);
      j++;
    }
  }
  return mergedArray;
}

console.log(mergeArrays2([0, 3, 4, 31], [-1, 0, 4, 6, 11, 30]));
