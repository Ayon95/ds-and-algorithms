// this function will receive two sorted arrays and merge them such that the items in the merged array are in the right order
// e.g. [2, 8] and [1, 4] will be merged to give [1, 2, 4, 8]
// time complexity -> O(n) where n is the total size of left and right
// space complexity -> O(n)
function merge(left, right) {
  const merged = [];
  // to keep track of position in the three arrays
  let leftIndex = 0;
  let rightIndex = 0;
  // keep looping until all the elements from one of the arrays has been added
  while (leftIndex < left.length && rightIndex < right.length) {
    /* if the smallest element in the left array is smaller
        than or equal to the smallest element in the right array (that we haven't already inserted into merged array),
        then add that element from the left array to the merged array
        */
    if (left[leftIndex] <= right[rightIndex]) {
      merged.push(left[leftIndex]);
      leftIndex++;
    } else {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  }
  // if we have added all the elements from one array, and there are elements remaining in the other array, then we add them to the merged array
  // only one of these for loops will run
  for (let i = leftIndex; i < left.length; i++) {
    merged.push(left[leftIndex]);
    leftIndex++;
  }

  for (let i = rightIndex; i < right.length; i++) {
    merged.push(right[rightIndex]);
    rightIndex++;
  }

  return merged;
}

// time complexity -> O(n log n)
// space complexity -> O(n) assuming that left and right arrays are cleared from memory once a call to sort is completed
function sort(arr) {
  if (arr.length === 1) return arr;
  // split the array in half - left and right sub-arrays
  const middle = Math.ceil(arr.length / 2);
  let left = [];
  let right = [];

  for (let i = 0; i < middle; i++) {
    left.push(arr[i]);
  }

  for (let i = middle; i < arr.length; i++) {
    right.push(arr[i]);
  }
  // recursively split and sort the sub arrays
  left = sort(left);
  right = sort(right);

  return merge(left, right);
}

console.log(sort([2, 6, 4, 5, 7, 3, 1]));
console.log(sort([5, 4, 3, 2, 1]));
