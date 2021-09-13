class ListNode {
  constructor(value) {
    this.data = value;
    this.previous = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new ListNode(value);
    this.tail = this.head;
    this.length = 1;
  }

  _addToEmptyList(node) {
    this.head = node;
    this.tail = this.head;
    this.length++;
  }

  append(value) {
    const newNode = new ListNode(value);
    // if the linked list is empty
    if (this.length === 0) return this._addToEmptyList(newNode);
    //   the previous pointer of the new node needs to point to the current tail node
    newNode.previous = this.tail;
    // the next pointer of the current tail node needs to point to the new node
    this.tail.next = newNode;
    // the newly-added node is the tail node now
    this.tail = newNode;

    this.length++;
  }

  prepend(value) {
    const newNode = new ListNode(value);
    // if the linked list is empty
    if (this.length === 0) return this._addToEmptyList(newNode);

    // the previous pointer of the current head node should point to the new node
    this.head.previous = newNode;
    // the next pointer of the new node needs to point to the current head node
    newNode.next = this.head;
    // the new node is the head node now (since it is the first node)
    this.head = newNode;

    this.length++;
  }

  _validateIndex(index) {
    return Number.isInteger(index) && index >= 0 && index <= this.length - 1;
  }

  _traverseAndGetNode(index) {
    if (index === 0) return this.head;
    if (index === this.length - 1) return this.tail;

    let currentIndex = 0;
    let currentNode = this.head;
    while (currentIndex !== index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode;
  }

  insert(index, value) {
    const indexIsValid = this._validateIndex(index);
    if (!indexIsValid) return console.log("Invalid index");

    const newNode = new ListNode(value);

    // if the linked list is empty
    if (this.length === 0) return this._addToEmptyList(newNode);
    // if the index is 0 then it is the same as adding a node at the beginning
    if (index === 0) return this.prepend(value);

    const precedingNode = this._traverseAndGetNode(index - 1);
    const subsequentNode = precedingNode.next;
    // the next pointer of the new node needs to point to the node that is currently next to the preceding node
    newNode.next = subsequentNode;
    // the previous pointer of the subsequent node needs to point to the new node
    subsequentNode.previous = newNode;
    // the next pointer of the preceding node needs to point to the new node
    precedingNode.next = newNode;
    // the previous pointer of the new node needs to point to the preceding node
    newNode.previous = precedingNode;

    this.length++;
  }

  remove(index) {
    const indexIsValid = this._validateIndex(index);
    if (!indexIsValid) return console.log("Invalid index");

    // if the linked list is empty
    if (this.length === 0) return console.log("List is empty");
    // if the list has only one item
    else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    // if the index is that of the last node (tail node), i.e. if we want to delete the tail node
    else if (index === this.length - 1) {
      const secondLastNode = this.tail.previous;
      //   the next pointer of second-last node needs to point to null
      secondLastNode.next = null;
      // this node is the tail node now
      this.tail = secondLastNode;
    } else {
      const nodeToDelete = this._traverseAndGetNode(index);
      // the node that comes before the node that we want to delete
      const precedingNode = nodeToDelete.previous;
      // the node that comes after the node that we want to delete
      const subsequentNode = nodeToDelete.next;
      // the next pointer of the preceding node needs to point to the subsequent node
      precedingNode.next = subsequentNode;
      // the previous pointer of the subsequent node needs to point to the preceding node
      subsequentNode.previous = precedingNode;
    }

    this.length--;
  }

  toArray() {
    const array = [];
    if (this.length === 0) return [];
    // starting from the head node
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.data);
      // go to the next node
      currentNode = currentNode.next;
    }

    return array;
  }
}

const myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(5);
myDoublyLinkedList.prepend(1);
myDoublyLinkedList.insert(2, 15);
myDoublyLinkedList.remove(myDoublyLinkedList.length - 1);
myDoublyLinkedList.remove(1);
console.log(myDoublyLinkedList);
console.log(myDoublyLinkedList.toArray());
