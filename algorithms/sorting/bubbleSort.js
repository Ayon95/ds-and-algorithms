// time complexity -> O(n^2)
// space complexity -> O(1)
function sort(arr) {
  let isSorted = false;
  let sortedElemsCount = 0;
  let swaps;

  while (!isSorted) {
    // resetting the number of swaps made to 0 at the beginning of each pass
    swaps = 0;
    // subtracting sortedElemsCount because we don't need to loop through the elements that have been sorted already
    for (let i = 0; i < arr.length - 1 - sortedElemsCount; i++) {
      // swap the positions of the elements if the current element is larger than its adjacent element
      // this condition is for sorting in ascending order
      if (arr[i + 1] < arr[i]) {
        const temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        swaps++;
      }
    }
    // after each pass, there will be one more sorted element
    sortedElemsCount++;
    // if no swap has been made in a pass, then it means that the array is fully sorted
    if (swaps === 0) isSorted = true;
  }

  return arr;
}

console.log(sort([2, 6, 4, 5, 7, 3, 1]));
console.log(sort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]));

// Alternative solution
function sort2(arr) {
  let swaps = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    swaps = 0;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j + 1] < arr[j]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        swaps++;
      }
    }

    if (swaps === 0) break;
  }
  return arr;
}

console.log(sort2([2, 6, 4, 5, 7, 3, 1]));
console.log(sort2([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]));
