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

const invalidBST2 = {
  root: {
    value: 10,
    left: {
      value: 5,
      left: {
        value: 1,
        left: null,
        right: null,
      },
      right: {
        value: 12,
        left: null,
        right: null,
      },
    },
    right: {
      value: 15,
      left: null,
      right: null,
    },
  },
};

// Time complexity -> O(n)
// Space complexity -> O(log n) best and average case
// Space complexity -> O(n) worst case (when the tree is highly skewed, and it is basically like a linked list)

// Using pre-order traversal and recursion
// this algorithm keeps track of the current min and max values as it traverses the tree
function isValidBST(currentNode, min, max) {
  if (!currentNode) return true;
  // the current node's value must be within the min and max range
  // all the values in the left subtree must be smaller than the max
  // all the values in the right subtree must be greater than the min
  if ((min && currentNode.value <= min) || (max && currentNode.value >= max)) {
    return false;
  }
  return (
    isValidBST(currentNode.left, min, currentNode.value) &&
    isValidBST(currentNode.right, currentNode.value, max)
  );
}

console.log(isValidBST(validBST.root, -Infinity, Infinity));
console.log(isValidBST(invalidBST.root, -Infinity, Infinity));
console.log(isValidBST(invalidBST2.root, -Infinity, Infinity));

// this algorithm will not work in some cases where an incorrect node is present farther down the tree even if that node is correct relative to its immediate parent
function isValidBST2(currentNode) {
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
  return isValidBST2(currentNode.left) && isValidBST2(currentNode.right);
}

console.log(isValidBST2(validBST.root));
console.log(isValidBST2(invalidBST.root));
// this will give an incorrect result
console.log(isValidBST2(invalidBST2.root));
