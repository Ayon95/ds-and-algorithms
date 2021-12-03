// Time complexity -> O(n^2)
// Space complexity -> O(1)
function sort(arr) {
  // for an array of size n, we need to make n - 1 number of passes because the very last element will already be sorted
  for (let i = 0; i < arr.length - 1; i++) {
    let smallestNumIndex = i;
    const firstUnsortedElem = arr[i];
    // after each pass, the number of sorted elements increases by 1
    // this nested for loop will start iterating after the sorted portion of the array (j = i)
    // it will find the index of the smallest number in the unsorted portion of the array
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallestNumIndex]) smallestNumIndex = j;
    }
    // swap the position of the first unsorted element with that of the smallest number in the current pass
    arr[i] = arr[smallestNumIndex];
    arr[smallestNumIndex] = firstUnsortedElem;
  }
  return arr;
}

console.log(sort([2, 6, 4, 5, 7, 3, 1]));
console.log(sort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]));
