/* Implement this binary search tree:
            9
        4       20
      1   6   15  170
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // this should return the node that we are looking for
  // return null if the node doesn't exist
  lookup(value) {
    //   if the tree does not have any node, then return null
    if (this.root === null) return null;
    // start lookup from the root node
    let currentNode = this.root;
    // to keep track of whether the current node is a leaf node or not
    // initially we will assume that the current node is not a leaf node
    let isLeafNode = false;
    // keep looping until a leaf node is reached
    while (!isLeafNode) {
      // check if the current node is a leaf node
      isLeafNode = currentNode.left === null && currentNode.right === null;
      // if the current node is a leaf node, and the given value is not equal to the leaf node's value, then that means that value doesn't exist
      if (isLeafNode && value !== currentNode.value) return null;
      // if the value is equal to the current node's value, then return the current node
      if (value === currentNode.value) return currentNode;
      // if the value is less than the current node's value, we go to its left; the left node becomes the current node
      if (value < currentNode.value) currentNode = currentNode.left;
      // if the value is greater than the current node's value, we go to its right; the right node becomes the current node
      if (value > currentNode.value) currentNode = currentNode.right;
    }
  }

  insert(value) {
    // create a new node that will be inserted
    const newNode = new Node(value);
    // if the tree doesn't have any node, then the newly-created node will be the root node
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    // start from the root node
    let currentNode = this.root;
    // to keep track of whether a node has been inserted or not
    let hasInserted = false;
    // keep looping until the appropriate node is reached (where the insertion needs to happen)
    while (!hasInserted) {
      // no duplicate values can be inserted
      if (newNode.value === currentNode.value)
        return "A node with this value already exists!";
      //   go left if the given value is less than the current node's value
      if (newNode.value < currentNode.value) {
        // if the current node doesn't have a left node, then insert the new node as the left node
        if (currentNode.left === null) {
          currentNode.left = newNode;
          hasInserted = true;
          // otherwise, go to the left node
        } else currentNode = currentNode.left;
        // go right if the given value is greater than the current node's value
      } else {
        // if the current node doesn't have a right node, then insert the new node as the right node
        if (currentNode.right === null) {
          currentNode.right = newNode;
          hasInserted = true;
          // otherwise, go to the right node
        } else currentNode = currentNode.right;
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(170);

console.log(tree);

console.log(tree.lookup(9));
console.log(tree.lookup(4));
console.log(tree.lookup(1));
console.log(tree.lookup(20));
console.log(tree.lookup(170));
