// this array will take up 16 bytes of memory
// each letter requires 4 bytes of memory
// the items will be stored in consecutive memory blocks
const strings = ["a", "b", "c", "d"];

// accessing an item
// O(1)
console.log(strings[1]);

// add item to the end of the array
// O(1)
strings.push("e");

// remove the last item
// O(1)
strings.pop();

// insert a new element at the start of the array
// O(n) because it needs to iterate over each item and assign it the right index
strings.unshift("x");

// adding 'hello' at index position 2
// O(n) because it needs to iterate over each item and assign it the right index
strings.splice(2, 0, "hello");
