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
  push(value) {
    const newNode = new StackNode(value);
    // the new node needs to point to the current top node
    newNode.next = this.top;
    // the new node is now the topmost node
    this.top = newNode;
    this.length++;
  }

  // this method removes the topmost element
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

const myStack = new Stack();

myStack.push("Google");
myStack.push("Facebook");
myStack.push("YouTube");

myStack.pop();
myStack.pop();

console.log(myStack.isEmpty());
console.log(myStack);
