// helper function that swaps the positions of two elements in an array
function swap(arr, first, second) {
  const temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
}

// O(n - 1) ~ O(n) worst-case time complexity
// O(1) space complexity
function partition(arr, start, end) {
  // selecting the last element as the pivot
  const pivot = arr[end];
  let pivotIndex = start;

  // scan the array from the start till the second last item, and compare each item with the pivot
  for (let i = start; i < end; i++) {
    if (arr[i] <= pivot) {
      //   swap the element at i with the element at pivot index
      swap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }
  // swap the pivot element with the element at the pivot index
  swap(arr, end, pivotIndex);

  return pivotIndex;
}

// Best and average-case time complexity -> O(n log n)
// Worst-case time complexity -> O(n^2)
// Best and average-case space complexity-> O(log n)
// Worst case space complexity -> O(n)
function sort(arr, start, end) {
  // simply return if the partition space has only 1 item, or it's an invalid partition space
  if (start >= end) return;
  const pivotIndex = partition(arr, start, end);
  // sort the portion to the left of the pivot element
  sort(arr, start, pivotIndex - 1);
  // sort the portion to the right of the pivot element
  sort(arr, pivotIndex + 1, end);
}

const arr1 = [2, 6, 4, 5, 7, 3, 1];
const arr2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

sort(arr1, 0, arr1.length - 1);
sort(arr2, 0, arr2.length - 1);

console.log(arr1);
console.log(arr2);
