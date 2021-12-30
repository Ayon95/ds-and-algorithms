class Queue {
  constructor() {
    // initially, the queue will be empty
    this.pushStack = [];
    this.popStack = [];
    this.length = 0;
  }

  enqueue(value) {
    this.pushStack.push(value);
    this.length++;
  }

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
}
exports.Queue = Queue;
