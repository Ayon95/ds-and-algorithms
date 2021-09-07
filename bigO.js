const smallArray = ["Nemo", "Nemo"];
const largeArray = new Array(1000).fill("Nemo");

/* The big O notation of this function is O(n). It has a linear time complexity.
The number of operations increases with the number of elements at the same rate, i.e. linearly.
If there are 5 items in the array, the for loop iterates over 5 times, and does 5 if checks */

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "Nemo") {
      console.log("Found Nemo!");
    }
  }
}

// The big O of this function is O(1)
function printFirstItem(array) {
  console.log(array[0]);
}

// The big O of this function is also said to be O(1) -> constant time
function printFirstTwoItems(array) {
  console.log(array[0]);
  console.log(array[1]);
}

/* Exercise - Calculate the big O of the function below
Assume that the big O of anotherFunction is O(1)
- O(1 + 1 + 1 + n + n + n + n) = O(3 + 4n)
It is not necessary to calculate the big O step by step like this.
Here, O(3 + 4n) can be simplified to O(n). This is because, the variable declarations and assignments
can be ignored when calculating the overall big O of a function. Here, the only thing that significantly
affects the runtime of the function is the input size.   */

function funChallenge(input) {
  // O(1)
  let a = 10;
  // O(1)
  a = 50 + 3;
  // O(n)
  for (let i = 0; i < input.length; i++) {
    // All these operations inside the loop will run n times for an input of size n
    // O(n)
    anotherFunction();
    // O(n)
    let stranger = true;
    // O(n)
    a++;
  }
  // O(1)
  return a;
}

/* Exercise - Calculate the big O of the function below
- O(1 + 1 + 1 + 1 + n + n + n + n + n + n + n) = O(4 + 7n) = O(n) */
function anotherFunChallenge(input) {
  // O(1)
  let a = 5;
  // O(1)
  let b = 10;
  // O(1)
  let c = 50;
  // O(n)
  for (let i = 0; i < input; i++) {
    // O(n)
    let x = i + 1;
    // O(n)
    let y = i + 2;
    // O(n)
    let z = i + 3;
  }
  // O(n)
  for (let j = 0; j < input; j++) {
    // O(n)
    let p = j * 2;
    // O(n)
    let q = j * 2;
  }
  // O(1)
  let whoAmI = "I don't know";
}

/* What is the big O of the following function?
Its big O is O(n + m). This is because this function takes two inputs,
so the time complexity of this algorithm depends on the sizes of the two inputs.
*/
function loopTwice(array1, array2) {
  array1.forEach((item) => console.log(item));
  array2.forEach((item) => console.log(item));
}

/* Log to the console all possible pairs in the array
For an array [1, 2, 3, 4, 5], some of the pairs are (1, 1), (1, 2), (1, 3), (1, 4), (1, 5), (2, 1), and so on.
What is the big O complexity of the algorithm? -> it's O(n * n) = O(n^2) because of the nested for loop */
function logAllPairs(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

logAllPairs([1, 2, 3, 4, 5]);
