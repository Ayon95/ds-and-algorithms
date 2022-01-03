// undirected graph
const graph1 = {
  0: [2],
  1: [2, 3],
  2: [0, 1, 3],
  3: [1, 2],
};

// directed graph
const graph2 = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: [],
};

// undirected
const graph3 = {
  A: ["B", "C", "D", "E"],
  B: ["A", "C", "G"],
  C: ["A", "B", "D"],
  D: ["A", "C", "E", "H"],
  E: ["A", "D", "F"],
  F: ["E", "G", "H"],
  G: ["B", "F"],
  H: ["D", "F"],
};

// Time complexity -> O(V + E)
// Space complexity -> O(V)

function depthFirstSearch(graph, currentNode) {
  if (!graph[currentNode]) return "Node does not exist";
  const visitedNodes = {};
  function traverse(currentNode) {
    // if the node has been visited, then don't do anything
    if (visitedNodes[currentNode]) return;
    // read data and mark the node as visited
    console.log(currentNode);
    visitedNodes[currentNode] = true;
    // recursively visit adjacent nodes
    const adjacentNodes = graph[currentNode];
    for (let i = 0; i < adjacentNodes.length; i++) {
      traverse(adjacentNodes[i]);
    }
  }
  traverse(currentNode);
}

function DFSIterative(graph, rootNode) {
  if (!graph[rootNode]) return "Node does not exist";

  const visitedNodes = {};
  const stack = [];
  stack.push(rootNode);

  while (stack.length > 0) {
    const currentNode = stack.pop();
    if (visitedNodes[currentNode]) continue;
    console.log(currentNode);
    visitedNodes[currentNode] = true;
    const adjacentNodes = graph[currentNode];

    for (const node of adjacentNodes) {
      if (!visitedNodes[node]) stack.push(node);
    }
    // In the iterative approach, the default order in which adjacent nodes are visited is the opposite of that in recursive approach
    // This reverse loop will give the same order of traversal as recursive DFS
    /*
    for (let i = adjacentNodes.length - 1; i >= 0; i--) {
      if (!visitedNodes[adjacentNodes[i]]) stack.push(adjacentNodes[i]);
    }
    */
  }
}

console.log("Recursive");
console.log(depthFirstSearch(graph1, 0));
console.log(depthFirstSearch(graph2, "A"));
console.log(depthFirstSearch(graph3, "A"));

console.log("Iterative");
console.log(DFSIterative(graph1, 0));
console.log(DFSIterative(graph2, "A"));
console.log(DFSIterative(graph3, "A"));
