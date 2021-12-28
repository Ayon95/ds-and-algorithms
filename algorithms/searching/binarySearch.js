// Time complexity -> O(1) best case; O(log n) worst case

// Recursive approach
// Space complexity -> O(1) best case; O(log n) worst case
function itemExists(array, item, start, end) {
  // base condition (if there is one item left in the searching portion and that is not equal to the target item)
  if (start === end && item !== array[start]) return false;
  const middleIndex = Math.floor((start + end) / 2);
  if (item === array[middleIndex]) return true;
  // if item is greater than the middle item, then we search the portion to the right of middle index
  if (item > array[middleIndex])
    return itemExists(array, item, middleIndex + 1, end);
  // if item is smaller than the middle item, then we search the portion to the left of the middle index
  return itemExists(array, item, start, middleIndex - 1);
}

const array = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(itemExists(array, 3, 0, array.length - 1));
console.log(itemExists(array, 8, 0, array.length - 1));
console.log(itemExists(array, 5, 0, array.length - 1));
console.log(itemExists(array, -1, 0, array.length - 1));
console.log(itemExists(array, 10, 0, array.length - 1));

// Iterative approach
// Space complexity -> O(1)
function itemExistsIterative(array, item) {
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    const middleIndex = Math.floor((start + end) / 2);
    if (item === array[middleIndex]) return true;
    if (item > array[middleIndex]) {
      start = middleIndex + 1;
      continue;
    }
    end = middleIndex - 1;
  }
  return false;
}

console.log(itemExistsIterative(array, 3));
console.log(itemExistsIterative(array, 8));
console.log(itemExistsIterative(array, 5));
console.log(itemExistsIterative(array, -1));
console.log(itemExistsIterative(array, 10));
