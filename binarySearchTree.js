/* Implement this binary search tree:
            9
        4       20
      1   6   15  170
         5
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
    // keep looping until the desired node is found, or it has been determined that the node with the given value doesn't exist
    while (true) {
      // if the value is equal to the current node's value, then return the current node
      if (value === currentNode.value) return currentNode;
      // if the value is less than the current node's value, we go to its left
      if (value < currentNode.value) {
        // if the current node doesn't have a left node, then that means the given value doesn't exist
        if (currentNode.left === null) return null;
        // otherwise, the left node becomes the current node
        currentNode = currentNode.left;
      }
      // if the value is greater than the current node's value, we go to its right
      if (value > currentNode.value) {
        // if the current node doesn't have a right node, then that means the given value doesn't exist
        if (currentNode.right === null) return null;
        // otherwise, the right node becomes the current node
        currentNode = currentNode.right;
      }
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

  _traverseToDeletionPoint(value) {
    // start from the root node
    let currentNode = this.root;
    let previousNode = null;
    // keep looping until the desired node is found, or it has been determined that the node with the given value doesn't exist
    while (true) {
      // if the value is equal to the current node's value, then return the current node (node to remove) and the previous node (parent of node to delete)
      if (value === currentNode.value)
        return {
          nodeToRemove: currentNode,
          parentOfNodeToRemove: previousNode,
        };
      // if the value is less than the current node's value, we go to its left
      if (value < currentNode.value) {
        // if the current node doesn't have a left node, then that means the given value doesn't exist
        if (currentNode.left === null) return null;
        // the current node becomes the previous node
        previousNode = currentNode;
        // the left node becomes the current node
        currentNode = currentNode.left;
      }
      // if the value is greater than the current node's value, we go to its right
      if (value > currentNode.value) {
        // if the current node doesn't have a right node, then that means the given value doesn't exist
        if (currentNode.right === null) return null;
        // otherwise, go to the right node
        previousNode = currentNode;
        currentNode = currentNode.right;
      }
    }
  }

  // this function will be used to get the successor node that will replace the removed node having two child nodes
  // the successor node is the smallest node that is larger than the node to remove
  _getSuccessorNode(nodeToRemove) {
    // the in-order successor of the node to be removed will be in the right subtree
    let currentNode = nodeToRemove.right;
    let previousNode = nodeToRemove;
    // keep looping and going left until a node without a left child node is reached
    // the in-order successor will be the leftmost node in the right subtree of the node to be deleted
    while (true) {
      if (currentNode.left === null)
        return { successorNode: currentNode, parentOfSuccessor: previousNode };
      // otherwise, go to the left node
      previousNode = currentNode;
      currentNode = currentNode.left;
    }
  }

  remove(value) {
    // if the tree does not have any node, then return null
    if (this.root === null) return null;

    // getting the node that we want to remove and the parent of that node
    const { nodeToRemove, parentOfNodeToRemove } =
      this._traverseToDeletionPoint(value);

    // if the node to remove is a leaf node, then simply remove that node
    if (nodeToRemove.left === null && nodeToRemove.right === null) {
      // if node to remove is the root node (and it is the only node in the tree)
      if (parentOfNodeToRemove === null) this.root = null;
      // checking if the node to remove is the left or right child of its parent
      else if (nodeToRemove.value < parentOfNodeToRemove.value) {
        parentOfNodeToRemove.left = null;
      } else parentOfNodeToRemove.right = null;
      return;
    }

    // if the node to remove has two child nodes, then remove that node
    // if the successor node had any child node, then it will be the child of the removed node's child node
    if (nodeToRemove.left !== null && nodeToRemove.right !== null) {
      // getting the in-order successor of the node that we want to remove
      const { successorNode, parentOfSuccessor } =
        this._getSuccessorNode(nodeToRemove);
      // if the node to remove is the root node
      if (parentOfNodeToRemove === null) {
        this.root = successorNode;
        successorNode.left = nodeToRemove.left;
        return;
      }
      // this successor node becomes the child of the removed node's parent node
      if (nodeToRemove.value < parentOfNodeToRemove.value) {
        parentOfNodeToRemove.left = successorNode;
      } else parentOfNodeToRemove.right = successorNode;
      // the left child node of the removed node will become the left child of the successor
      successorNode.left = nodeToRemove.left;
      // checking if the successor has a different parent than the node to remove
      // the successor will have a different parent when it is down multiple levels from the node to remove
      if (parentOfSuccessor.value !== nodeToRemove.value) {
        // if the successor has a right child, then it will become the left child of the successor's parent
        // otherwise, the parent of successor will no longer have a left child
        parentOfSuccessor.left = successorNode.right
          ? successorNode.right
          : null;
        // the successor's right child will become the node that was previously its parent
        successorNode.right = parentOfSuccessor;
      }
      return;
    }

    // if we reach this point, then that means either left or right is null but not both
    const childOfNodeToRemove = nodeToRemove.left || nodeToRemove.right;
    // if the node to remove is the root node (and it has one child node)
    if (parentOfNodeToRemove === null) this.root = childOfNodeToRemove;
    // if the node to remove has one child, then the child node of the removed node should become the child of the removed node's parent node
    else if (nodeToRemove.value < parentOfNodeToRemove.value) {
      parentOfNodeToRemove.left = childOfNodeToRemove;
    } else parentOfNodeToRemove.right = childOfNodeToRemove;
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(5);
tree.insert(15);
tree.insert(170);

console.log(tree);

console.log(tree.lookup(9));
console.log(tree.lookup(4));
console.log(tree.lookup(1));
console.log(tree.lookup(20));
console.log(tree.lookup(170));

// tree.remove(4);
// tree.remove(1);
// tree.remove(5);
// tree.remove(20);
// tree.remove(170);
// tree.remove(9);
// tree.remove(15);

console.log(JSON.stringify(tree));
