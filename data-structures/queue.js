/* Queue implementation using linked list */

class QueueNode {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    //   initially the queue will be empty
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  //   get the first node in the queue
  peek() {
    return this.first;
  }

  //   add a node at the end of the queue
  // time complexity -> O(1)
  enqueue(value) {
    const newNode = new QueueNode(value);
    //   if the queue is empty, then the newly-added node will be the first and the last node
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // the current last node will point to the new node
      this.last.next = newNode;
      // the new node is now the last node
      this.last = newNode;
    }

    this.length++;
  }

  // remove the first node of the queue
  // time complexity -> O(1)
  dequeue() {
    //   if the queue is empty, then there's nothing to remove
    if (this.length === 0) return null;
    // if the queue has only 1 item, then the queue will be empty after removing that item
    if (this.length === 1) {
      this.first = null;
      this.last = null;
      this.length--;
      return;
    }

    // saving a reference to the current first node so that we can use it later
    const nodeToRemove = this.first;
    // the second node will be the first node now
    this.first = nodeToRemove.next;

    this.length--;
    // return the value of the removed node
    return nodeToRemove.data;
  }

  //   check if the queue is empty or not
  isEmpty() {
    return this.length === 0;
  }
}

const myQueue = new Queue();

// myQueue.enqueue("Joy");
// myQueue.enqueue("Matt");
// myQueue.enqueue("Pavel");
// myQueue.enqueue("Samir");

// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();

// console.log(myQueue.isEmpty());
// console.log(myQueue);

/* Implement queue with two stacks

- The push stack will contain enqueued items
- The pop stack will contain items ready to be dequeued
- When we want to dequeue, we remove the items from the push stack and push it into the pop stack
- Then we pop the topmost item from the pop stack (the dequeued item)
    - the items in the pop stack will be in the order that we want
    - the items in the pop stack will be ready to be dequeued
- If the pop stack is empty, then we check if the push stack has any items that can be moved to the pop stack
- If the push stack is also empty, then that means, the queue is empty
*/

class Queue2 {
  constructor() {
    // initially, the queue will be empty
    this.pushStack = [];
    this.popStack = [];
    this.length = 0;
  }

  peek() {
    //   if both stacks are empty, then return null
    if (this.length === 0) return null;
    // if the pop stack is empty and the push stack is not empty, then the first item in the queue is the bottommost item in the push stack,
    // the bottommost item in the push stack is the first item in the pushStack array
    if (this.popStack.length === 0) {
      return this.pushStack[0];
    }
    // if both stacks have items, then the first item in the queue is the topmost item in the pop stack
    // the topmost item in the pop stack is the last item in the popStack array
    return this.popStack[this.popStack.length - 1];
  }

  // time complexity -> O(1)
  enqueue(value) {
    this.pushStack.push(value);
    this.length++;
  }

  // worst-case time complexity -> O(n)
  // amortized time complexity -> O(1) because most of the time, there will be items in the pop stack ready to be dequeued
  dequeue() {
    //   if both stacks are empty, then there's nothing to remove
    if (this.length === 0) return null;
    //   check if pop stack is empty (and push stack has items)
    if (this.popStack.length === 0) {
      // need to save the number of pushStack items in a variable so that we know how many times to iterate
      const pushStackItems = this.pushStack.length;
      // remove the items from the push stack (top to bottom) and add them to the pop stack
      for (let i = 0; i < pushStackItems; i++) {
        this.popStack.push(this.pushStack.pop());
      }
    }
    // pop off the topmost item from the pop stack (last item in the popStack array)
    this.length--;
    return this.popStack.pop();
  }

  isEmpty() {
    return this.length === 0;
  }
}

const myQueue2 = new Queue2();

myQueue2.enqueue("Joy");
myQueue2.enqueue("Matt");
myQueue2.enqueue("Pavel");
myQueue2.enqueue("Samir");

myQueue2.dequeue();
myQueue2.dequeue();
myQueue2.dequeue();
myQueue2.dequeue();

console.log(myQueue2.isEmpty());
console.log(myQueue2);
