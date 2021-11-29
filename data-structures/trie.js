class TrieNode {
  constructor(value) {
    this.value = value;
    this.isWord = false;
    // a map containing key-value pairs where each key is a letter that maps to a corresponding node
    // a node can have multiple child nodes
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode("");
  }
  // inserts the given word in the trie
  insert(word) {
    // start from the root node
    let currentNode = this.root;
    // loop over each letter of the word, and create a node for the letter if such a node doesn't exist in the children map of the current node
    for (const letter of word) {
      if (!currentNode.children.has(letter)) {
        currentNode.children.set(letter, new TrieNode(letter));
      }
      currentNode = currentNode.children.get(letter);
    }
    // the node for the last letter of the word should be labeled as the end of the word
    currentNode.isWord = true;
  }

  _getLastNode(str) {
    let currentNode = this.root;
    for (const letter of str) {
      // if a child node corresponding to the current letter doesn't exist for the current node, then the word or prefix is definitely not present in the trie
      if (!currentNode.children.has(letter)) return null;
      // otherwise keep going; go to the next node
      currentNode = currentNode.children.get(letter);
    }
    // after looping, the current node will be for the last letter in the given string
    return currentNode;
  }

  // indicates whether or not the word is present in the trie
  contains(word) {
    let lastNode = this._getLastNode(word);
    // if the last node exists and its isWord boolean variable is true, then that means the word exists in the trie
    return lastNode !== null && lastNode.isWord;
  }

  // indicates whether or not the prefix exists in the trie
  hasPrefix(str) {
    let lastNode = this._getLastNode(str);
    return lastNode !== null && !lastNode.isWord;
  }
}

const trie = new Trie();

trie.insert("ball");
trie.insert("bat");

console.log(`ball is present: ${trie.contains("ball")}`);
console.log(`bat is present: ${trie.contains("bat")}`);
console.log(`bal is present: ${trie.contains("bal")}`);

console.log(`ba prefix is present: ${trie.hasPrefix("ba")}`);
console.log(`bal prefix is present: ${trie.hasPrefix("bal")}`);
console.log(`ball prefix is present: ${trie.hasPrefix("ball")}`);
