function recurse(x) {
  // base case
  if (x === 0) return "done";
  // recursive case
  console.log("called");
  return recurse(x - 1);
}

console.log(recurse(3));

/* Find the factorial of a number
- Implement the solution recursively and iteratively
- time complexity in both solutions is O(n)
*/

function findFactorialRecursive(number) {
  if (number === 1 || number === 0) return 1;
  if (number === 2) return 2;
  return number * findFactorialRecursive(number - 1);
}

console.log(findFactorialRecursive(5));

function findFactorialIterative(number) {
  if (number === 1 || number === 0) return 1;
  if (number === 2) return 2;
  let result = 1;
  for (let i = number; i > 1; i--) {
    result *= i;
  }
  return result;
}

console.log(findFactorialIterative(5));

/* Fibonacci sequence 
- Given an index, find the associated value in the Fibonacci sequence
- The Fibonacci sequence goes like this -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ....
- after the first two numbers, a number in the sequence is the sum of the previous two numbers
- so, for example, the value at index 3 is 2 which is the 4th number in the sequence

- time complexity for recursive approach is O(2^n) -> exponential time; elegant but extremely inefficient
- time complexity for iterative approach is O(n)
*/

// space complexity is O(n) not O(2^n)
// this is because both recursive calls will not be made at the same time
// the first recursive call will be completed, its value will be received, and then the second recursive call will be made
// so, we will need to have O(n) memory available
function findFibNumberRecursive(index) {
  if (index === 0 || index === 1) return index;
  if (index === 2) return 1;
  return findFibNumberRecursive(index - 1) + findFibNumberRecursive(index - 2);
}

// space complexity -> O(1)
function findFibNumberIterative(index) {
  if (index === 0 || index === 1) return index;
  if (index === 2) return 1;
  // starting with relation to the fourth fibonacci number (index 3)
  let immediatePrevFibNumber = 1;
  let secondPrevFibNumber = 1;
  let currentFibNumber;
  for (let i = 3; i <= index; i++) {
    currentFibNumber = immediatePrevFibNumber + secondPrevFibNumber;
    // shift them to the next numbers in the sequence
    secondPrevFibNumber = immediatePrevFibNumber;
    immediatePrevFibNumber = currentFibNumber;
  }
  return currentFibNumber;
}

// alternative solution for the iterative approach using arrays
// space complexity -> O(n)
function findFibNumberIterative2(index) {
  const fibSequence = [0, 1, 1];
  for (let i = 3; i <= index; i++) {
    fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
  }
  return fibSequence[index];
}

console.log(findFibNumberRecursive(6));
console.log(findFibNumberIterative(6));
console.log(findFibNumberIterative2(6));
