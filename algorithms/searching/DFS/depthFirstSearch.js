const { BinaryTree } = require("./binaryTree");

const tree = new BinaryTree();

tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(5);
tree.insert(15);
tree.insert(170);

// Time complexity -> O(n) because all the nodes are visited once
// Space complexity (best and average case) -> O(log n) because at any given time, the call stack will need to store, at most, log(n) + 1 recursive calls
// Space complexity (worst case) -> O(n), when the tree is highly imbalanced or skewed
// Space requirement is proportional to the height of the tree

function traversePreOrder(currentNode) {
  // visit node (read data)
  console.log(currentNode.value);
  // recursively visit left and right subtrees
  if (currentNode.left !== null) traversePreOrder(currentNode.left);
  if (currentNode.right !== null) traversePreOrder(currentNode.right);
}

function traverseInOrder(currentNode) {
  if (currentNode.left !== null) traverseInOrder(currentNode.left);
  console.log(currentNode.value);
  if (currentNode.right !== null) traverseInOrder(currentNode.right);
}

function traversePostOrder(currentNode) {
  if (currentNode.left !== null) traversePostOrder(currentNode.left);
  if (currentNode.right !== null) traversePostOrder(currentNode.right);
  console.log(currentNode.value);
}

console.log("Pre-order traversal");
console.log(traversePreOrder(tree.root));
console.log("In-order traversal");
console.log(traverseInOrder(tree.root));
console.log("Post-order traversal");
console.log(traversePostOrder(tree.root));
