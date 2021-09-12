/* Linked list implementation

Create a linked list like this, 10--->5--->16 

const myLinkedList = {
  head: {
    data: 10,
    next: {
      data: 5,
      next: {
        data: 16,
        next: null,
      },
    },
  },
};

*/

class ListNode {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new ListNode(value);
    // since, at the beginning, the linked list will have one node
    this.tail = this.head;
    this.length = 1;
  }

  // this will create a node and add it to the end of the linked list
  // this operation is O(1)
  append(value) {
    const newNode = new ListNode(value);
    // the current tail node will need to point to the newly-added node
    this.tail.next = newNode;
    // setting the newly-added node as the tail node; this node is now the tail node
    this.tail = newNode;
    // increasing the length of the linked list
    this.length++;
  }

  // this will create a node and add it to the beginning of the linked list
  // this operation is O(1)
  prepend(value) {
    // this new node will point to the node that is currently the head
    const newNode = new ListNode(value);
    newNode.next = this.head;
    // setting the newly-added node as the head node
    this.head = newNode;
    this.length++;
  }

  // this method will create an array based on the linked list
  // the array will contain the data values of all the nodes
  // the time complexity is O(n)
  toArray() {
    const array = [];
    // start from the head node
    let currentNode = this.head;
    // while loop will keep running as long as the current node is not null
    // if the current node is null, then that means we have reached the end of the linked list
    while (currentNode !== null) {
      array.push(currentNode.data);
      // move to the next node
      currentNode = currentNode.next;
    }

    return array;
  }

  /* this method will create a node and insert it at the specified index
  Before: current node ---> next node
  After: current node ---> new node ----> next node
  the worst-case time complexity is O(n) where n is the index number
  */
  insert(index, value) {
    // validating the index
    if (!Number.isInteger(index)) return console.log("Invalid index");
    if (index < 0 || index > this.length - 1)
      return console.log("Index is out of bounds");

    // if index is 0, then it is the same as prepending to the list
    if (index === 0) return this.prepend(value);
    // if index is the last index, then it is the same as appending to the list
    if (index === this.length - 1) return this.append(value);

    // need to start traversing from the beginning
    // assuming that the index of the head node is 0
    // the nodes are not actually indexed; we are just using index to determine where to insert the node
    let currentNode = this.head;
    let currentIndex = 0;

    // to keep track of when to stop traversing
    // we can stop traversing when the new node is inserted
    let isInserted = false;

    while (!isInserted) {
      // if current index is equal to the specified index - 1, then that means this is where the insertion needs to happen
      // suppose, we want to insert at index 2; we have to stop at index 1
      if (currentIndex === index - 1) {
        const newNode = new ListNode(value);
        // the new node needs to point to the node that is next to the current node
        newNode.next = currentNode.next;
        // the current node needs to point to the newly-added node
        currentNode.next = newNode;

        this.length++;
        isInserted = true;
      } else {
        // go to the next node
        currentNode = currentNode.next;
        currentIndex++;
      }
    }
  }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);

myLinkedList.prepend(1);

myLinkedList.insert(2, 15);
myLinkedList.insert(0, 100);
myLinkedList.insert(myLinkedList.length - 1, 200);

console.log(myLinkedList);
console.log(myLinkedList.toArray());
