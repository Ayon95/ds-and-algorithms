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

// Time complexity -> O(n) worst case
// Space complexity -> O(log n) best and average case
function isValidBST(currentNode) {
  const left = currentNode?.left;
  const right = currentNode?.right;
  // if the current node is a leaf node or it's null then that means the subtree matches that of a BST
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
