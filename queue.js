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

myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");

myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();

console.log(myQueue.isEmpty());
console.log(myQueue);
