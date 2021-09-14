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
    // if the linked list is empty
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // the current tail node will need to point to the newly-added node
      this.tail.next = newNode;
      // setting the newly-added node as the tail node; this node is now the tail node
      this.tail = newNode;
    }
    // increasing the length of the linked list
    this.length++;
  }

  // this will create a node and add it to the beginning of the linked list
  // this operation is O(1)
  prepend(value) {
    // this new node will point to the node that is currently the head (unless the linked list is empty)
    const newNode = new ListNode(value);
    // if the linked list is empty
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      // setting the newly-added node as the head node
      this.head = newNode;
    }
    this.length++;
  }

  // this method will create an array based on the linked list
  // the array will contain the data values of all the nodes
  // the time complexity is O(n)
  toArray() {
    if (this.length === 0) return [];
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

  // this method traverses to the node at the specified index and returns that node
  // worst-case time complexity is O(n)
  _traverseAndGetNode(index) {
    if (index === 0) return this.head;
    if (index === this.length - 1) return this.tail;

    // need to start traversing from the beginning
    // assuming that the index of the head node is 0
    // the nodes are not actually indexed; we are just using index to determine where to insert the node
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentIndex !== index) {
      // go to the next node
      currentNode = currentNode.next;
      currentIndex++;
    }

    return currentNode;
  }

  _validateIndex(index) {
    return Number.isInteger(index) && index >= 0 && index <= this.length - 1;
  }

  /* this method will create a node and insert it at the specified index
  Before: current node ---> next node
  After: current node ---> new node ----> next node
  the worst-case time complexity is O(n) where n is the index number
  */
  insert(index, value) {
    // validating the index
    const indexIsValid = this._validateIndex(index);
    if (!indexIsValid) return console.log("Invalid index");

    // if index is 0, then it is the same as prepending to the list
    if (index === 0) return this.prepend(value);

    // if index is the last index, then it is the same as appending to the list
    if (index === this.length - 1) return this.append(value);

    const newNode = new ListNode(value);

    // the new node will be inserted after the preceding node
    // suppose we want to insert a node at index 2; for that, we need the node at index 1
    const precedingNode = this._traverseAndGetNode(index - 1);
    const subsequentNode = precedingNode.next;
    // the new node needs to point to the node that is currently next to the preceding node
    newNode.next = subsequentNode;
    // the preceding node needs to point to the new node
    precedingNode.next = newNode;
    this.length++;
  }

  // this method will remove the node at the specified index
  // the worst-case time complexity is O(n)
  remove(index) {
    // validating the index
    const indexIsValid = this._validateIndex(index);
    if (!indexIsValid) return console.log("Invalid index");

    // if the linked list is empty
    if (this.length === 0) return console.log("List is empty");

    // if the linked list has only 1 node
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return;
    }

    // need to get the preceding node (the node that is before the node we want to delete)
    const precedingNode =
      index === 0 ? null : this._traverseAndGetNode(index - 1);

    // remove from the beginning (if index is 0)
    if (index === 0) this.head = this.head.next;
    // remove from the end (if the index is the last index, i.e. we want to remove the current tail node)
    else if (index === this.length - 1) {
      // the preceding node needs to point to null (this node is the tail node now)
      precedingNode.next = null;
      this.tail = precedingNode;
      // remove from somewhere in the middle
    } else {
      // need to get the subsequent node (the node that comes after the node we want to delete)
      const subsequentNode = this._traverseAndGetNode(index + 1);
      precedingNode.next = subsequentNode;
    }
    this.length--;
  }

  /* this method reverses the list
  Suppose, you have a linked list 1-->10-->5--16. If you reverse it, it will be 16-->5-->10-->1
  the time complexity of this method is O(n)
  the space complexity is O(n) 
  */
  reverse() {
    // get the array containing the values of all the nodes
    const valuesArray = this.toArray();

    // if the linked list has only one node or the list is empty, then simply return the linked list as is
    if (valuesArray.length <= 1) return this;

    // reset the linked list and populate it based on looping through the array backwards
    for (let i = valuesArray.length - 1; i >= 0; i--) {
      // in the first iteration, we are resetting the linked list
      // the tail node of the normal linked list will be the head of the reversed linked list
      if (i === valuesArray.length - 1) {
        this.head = new ListNode(valuesArray[i]);
        this.tail = this.head;
        this.length = 1;
        continue;
      }

      // in all other iterations, we are creating a node and appending it to the linked list
      this.append(valuesArray[i]);
    }

    return this;
  }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);

myLinkedList.prepend(1);

myLinkedList.insert(2, 15);
myLinkedList.insert(0, 100);
myLinkedList.insert(myLinkedList.length - 1, 200);

myLinkedList.remove(0);
myLinkedList.remove(myLinkedList.length - 1);
myLinkedList.remove(2);

myLinkedList.reverse();

console.log(myLinkedList);
console.log(myLinkedList.toArray());
