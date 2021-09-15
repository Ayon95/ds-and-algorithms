/* Stack implementation using a linked list */

class StackNode {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    // initially the stack will be empty
    this.top = null;
    this.length = 0;
  }

  // this method retrieves the topmost element of the stack
  peek() {
    return this.top;
  }

  // this method adds an element at the top of the stack
  //   O(1) time complexity, O(1) space complexity
  push(value) {
    const newNode = new StackNode(value);
    // the new node needs to point to the current top node
    newNode.next = this.top;
    // the new node is now the topmost node
    this.top = newNode;
    this.length++;
  }

  // this method removes the topmost element
  // O(1) time complexity, O(1) space complexity
  pop() {
    //   if the stack is empty then there is nothing to remove
    if (this.length === 0) return console.log("Stack is empty");
    // need to save a reference to the current topmost node so that we can use it later
    const nodeToDelete = this.top;
    // the node that is below the current topmost node
    const subsequentNode = this.top.next;
    // this node is now the topmost node
    this.top = subsequentNode;
    this.length--;
    // returning the value of the removed node
    return nodeToDelete.data;
  }

  // this method checks whether the stack is empty or not
  isEmpty() {
    return this.length === 0;
  }
}

// const myStack = new Stack();

// myStack.push("Google");
// myStack.push("Facebook");
// myStack.push("YouTube");

// myStack.pop();
// myStack.pop();

// console.log(myStack.isEmpty());
// console.log(myStack);

/* Stack implementation using array */

class Stack2 {
  constructor() {
    // initially the stack will be empty
    this._data = [];
    this.length = 0;
    this.top = null;
  }

  peek() {
    // the last item in the array will be the topmost item
    return this._data[this._data.length - 1];
  }

  push(value) {
    this._data.push(value);
    this.top = value;
    this.length++;
  }

  pop() {
    if (this.length === 0) return console.log("Stack is empty");
    const deletedItem = this._data.pop();
    // if the stack has only 1 item, then the top will be null, otherwise the top will be the item below the current top item
    this.top = this.length === 1 ? null : this._data[this.length - 2];
    this.length--;
    // returning the removed item
    return deletedItem;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const myStack2 = new Stack2();

myStack2.push("Google");
myStack2.push("Facebook");
myStack2.push("YouTube");

myStack2.pop();
myStack2.pop();

console.log(myStack2.isEmpty());
console.log(myStack2);
console.log(myStack2.peek());
