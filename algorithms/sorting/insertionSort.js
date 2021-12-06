// Time complexity: O(n^2) -> worst case; O(n^2) -> average case; O(n) -> best case
// Space complexity: O(1)
function sort(arr) {
  // initially we consider the first item to be sorted, so we start iterating from the second item
  for (let i = 1; i < arr.length; i++) {
    const firstUnsortedItem = arr[i];
    let previousItem = arr[i - 1];
    // if this is true then the item is in the correct order so there's no need for any shifting
    if (firstUnsortedItem > previousItem) continue;
    // the nested for loop iterates through the sorted portion of the array from the end to the beginning (reverse loop)
    // the part right before the unsorted portion is the sorted portion (hence i - 1)
    for (let j = i - 1; j >= 0; j--) {
      // if the first unsorted item is less than the previous sorted item, then we shift that sorted item to the right by 1
      // and we insert the first unsorted item in that vacant spot (the position right before that of the shifted item)
      arr[j + 1] = arr[j];
      arr[j] = firstUnsortedItem;
      previousItem = arr[j - 1];
      // we keep shifting and inserting until the first unsorted item is in the right place (when it is greater than the item before it)
      if (firstUnsortedItem > previousItem) break;
    }
  }
  return arr;
}

console.log(sort([2, 6, 4, 5, 7, 3, 1]));
// best case
console.log(sort([1, 2, 3, 4, 5]));
// worst case
console.log(sort([5, 4, 3, 2, 1]));
