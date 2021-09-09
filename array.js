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

console.log(this);

/* --------- Array implementation ----------

- arrays in JS are objects with integer-based keys that act like indices
*/

class MyArray {
  constructor(length, data) {
    this.length = length;
    this.data = data;
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  remove(index) {
    // don't do anything if the array is empty or index is out of bounds
    if (this.length === 0 || index > this.length - 1) return;
    for (let i = index; i < this.length - 1; i++) {
      // shifting every item to the left starting from the index of the item that we want to delete
      // if we delete the first item (index 0), then 0 will be the index of second item (it will become the first item), and so on
      this.data[i] = this.data[i + 1];
    }
    // need to delete the last item since we are not iterating over it (i < this.length - 1)
    // we are not iterating over the last item because i + 1 will be out of bounds
    delete this.data[this.length - 1];
    this.length--;
  }
}

const array1 = new MyArray(0, {});
array1.push("how");
array1.push("are");
array1.push("you?");
array1.remove(2);
console.log(array1);
console.log(array1.length);
