// Given the root of a binary tree, check whether it is a BST or not

const invalidBST = {
  root: {
    value: 5,
    left: {
      value: 1,
      left: null,
      right: null,
    },
    right: {
      value: 6,
      left: {
        value: 3,
        left: null,
        right: null,
      },
      right: {
        value: 4,
        left: null,
        right: null,
      },
    },
  },
};

const validBST = {
  root: {
    value: 9,
    left: {
      value: 4,
      left: {
        value: 1,
        left: null,
        right: null,
      },
      right: {
        value: 6,
        left: {
          value: 5,
          left: null,
          right: null,
        },
        right: null,
      },
    },
    right: {
      value: 20,
      left: {
        value: 15,
        left: null,
        right: null,
      },
      right: {
        value: 170,
        left: null,
        right: null,
      },
    },
  },
};

// Time complexity -> O(n)
// Space complexity -> O(log n) best and average case
// Space complexity -> O(n) worst case (when the tree is highly skewed, and it is basically like a linked list)

// Using pre-order traversal and recursion
function isValidBST(currentNode) {
  const left = currentNode?.left;
  const right = currentNode?.right;
  // if the current node is a leaf node or it's null then that means the subtree is a valid BST
  if ((!left && !right) || !currentNode) return true;
  // compare the left and right child nodes with the current node
  if (
    (left && left.value >= currentNode.value) ||
    (right && right.value <= currentNode.value)
  ) {
    return false;
  }
  // check if the left and right subtrees satisfy the conditions of a BST
  return isValidBST(currentNode.left) && isValidBST(currentNode.right);
}

console.log(isValidBST(validBST.root));
console.log(isValidBST(invalidBST.root));

function isValidBST2(currentNode, min, max) {
  if (!currentNode) return true;
  // the current node's value must be within the min and max range
  // all the values in the left subtree must be smaller than the max
  // all the values in the right subtree must be greater than the min
  if ((min && currentNode.value <= min) || (max && currentNode.value >= max)) {
    return false;
  }
  return (
    isValidBST2(currentNode.left, min, currentNode.value) &&
    isValidBST2(currentNode.right, currentNode.value, max)
  );
}

console.log(isValidBST2(validBST.root, -Infinity, Infinity));
console.log(isValidBST2(invalidBST.root, -Infinity, Infinity));
