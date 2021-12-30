const { Queue } = require("./queue");
const { BinaryTree } = require("./binaryTree");

const tree = new BinaryTree();

tree.insert(4);
tree.insert(2);
tree.insert(6);
tree.insert(1);
tree.insert(3);
tree.insert(5);
tree.insert(7);

// Time complexity -> O(n)
// Space complexity -> best case 0(1), worst and average cases O(n/2) ~ O(n)
function traverseLevelOrder(tree) {
  // this queue is needed to store references to the child nodes of each visited node
  const queue = new Queue();
  // initially enqueue the root node since traversal will start from the root node
  queue.enqueue(tree.root);
  while (queue.length > 0) {
    // dequeue and read data from the removed node
    const currentNode = queue.dequeue();
    console.log(currentNode.value);
    // if the node has children, then enqueue them
    if (currentNode.left !== null) queue.enqueue(currentNode.left);
    if (currentNode.right !== null) queue.enqueue(currentNode.right);
  }
}

// Time complexity -> O(n)
// Space complexity -> O(n)
// However, space requirement is more than the iterative approach because the recursive function calls need to be stored on the call stack
function traverseLevelOrderRecursive(queue) {
  if (queue.length === 0) return;
  const currentNode = queue.dequeue();
  console.log(currentNode.value);
  if (currentNode.left !== null) queue.enqueue(currentNode.left);
  if (currentNode.right !== null) queue.enqueue(currentNode.right);
  traverseLevelOrderRecursive(queue);
}

traverseLevelOrder(tree);

const queue = new Queue();
queue.enqueue(tree.root);

traverseLevelOrderRecursive(queue);
