/* Exercise - First recurring character
Given an array = [2,5,1,2,3,5,1,2,4]:
It should return 2

Given an array = [2,1,1,2,3,5,1,2,4]:
It should return 1

Given an array = [2,3,4,5]:
It should return undefined

*/

// First solution - naive approach -> time complexity O(n^2), space complexity O(n)

function getFirstRecurringCharacter(array) {
  if (!Array.isArray(array)) return "Invalid input";
  if (array.length === 0) return undefined;

  const recurrenceData = {};
  // its starting value will be the highest possible recurring index (the last index in the array)
  // recurring index is the index at which a character repeats
  let earliestRecurringIndex = array.length - 1;
  let firstRecurringCharacter = "";

  // O(n*n) = O(n^2)
  // loop through each character and check if it repeats in the array
  // if the character repeats, then store its FIRST recurring index in recurrenceData object
  for (let i = 0; i < array.length; i++) {
    const character = array[i];

    for (let j = i + 1; j < array.length; j++) {
      if (character === array[j] && !recurrenceData[character]) {
        recurrenceData[character] = j;
        break;
      }
    }
  }

  // O(n)
  // if the object is empty then return undefined as there is no recurring character in the array
  if (JSON.stringify(recurrenceData) === "{}") return undefined;

  // O(n)
  // loop through each property and check which one holds the earliest (smallest) recurring index
  for (character in recurrenceData) {
    if (recurrenceData[character] < earliestRecurringIndex) {
      earliestRecurringIndex = recurrenceData[character];
      firstRecurringCharacter = character;
    }
  }

  return firstRecurringCharacter;
}

console.log(getFirstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(getFirstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(getFirstRecurringCharacter([2, 3, 4, 5]));

// more simplified and readable version -> still O(n^2) time complexity, O(1) space complexity
function getFirstRecurringCharacter4(array) {
  if (!Array.isArray(array)) return "Invalid input";
  if (array.length === 0) return undefined;

  for (let i = 1; i < array.length; i++) {
    const character = array[i];

    for (let j = i - 1; j >= 0; j--) {
      if (array[j] === character) return character;
    }
  }

  return undefined;
}

console.log(getFirstRecurringCharacter4([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(getFirstRecurringCharacter4([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(getFirstRecurringCharacter4([2, 3, 4, 5]));

// Second solution using sets -> O(n) time complexity, O(n) space complexity

function getFirstRecurringCharacter2(array) {
  if (!Array.isArray(array)) return "Invalid input";
  if (array.length === 0) return undefined;

  const characterSet = new Set();

  for (character of array) {
    if (characterSet.has(character)) return character;
    characterSet.add(character);
  }

  // reaching this point means that there are no recurring characters in the array
  return undefined;
}

console.log(getFirstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(getFirstRecurringCharacter2([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(getFirstRecurringCharacter2([2, 3, 4, 5]));

// Third solution - similar to the Set solution but using plain object
// time complexity -> O(n), space complexity -> O(n)

/* In each iteration, I check if a property with the character exists in the object or not.
  If it does not exist, then I create such a property on the object with true boolean value and move on to the next character.
  If such a property exists, then the corresponding character is the first recurring character
*/

function getFirstRecurringCharacter3(array) {
  if (!Array.isArray(array)) return "Invalid input";
  if (array.length === 0) return undefined;

  const characterSet = {};

  for (character of array) {
    if (characterSet[character]) return character;
    characterSet[character] = true;
  }

  return undefined;
}

console.log(getFirstRecurringCharacter3([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(getFirstRecurringCharacter3([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(getFirstRecurringCharacter3([2, 3, 4, 5]));
console.log(getFirstRecurringCharacter3(["a", "b", "c", "c", "e"]));
