class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    // if the tree doesn't have a root node, then the new node will be the root node
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    function traverseToInsertionPoint(currentNode, newNode) {
      if (newNode.value === currentNode.value) {
        return "A node with this value already exists!";
      }
      if (newNode.value > currentNode.value) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return;
        }
        // keep going right
        return traverseToInsertionPoint(currentNode.right, newNode);
      }
      if (currentNode.left === null) {
        currentNode.left = newNode;
        return;
      }
      // keep going left
      return traverseToInsertionPoint(currentNode.left, newNode);
    }

    traverseToInsertionPoint(this.root, newNode);
  }
}

exports.BinaryTree = BinaryTree;
