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
