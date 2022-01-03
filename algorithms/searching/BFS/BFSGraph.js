const { Queue } = require("./queue");

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
function breadthFirstSearch(graph, rootNode) {
  if (!graph[rootNode]) return "The node does not exist.";

  const queue = new Queue();
  const visitedNodes = {};
  visitedNodes[rootNode] = true;
  queue.enqueue(rootNode);

  while (queue.length > 0) {
    const currentNode = queue.dequeue();
    console.log(currentNode);
    const adjacentNodes = graph[currentNode];

    for (const node of adjacentNodes) {
      if (!visitedNodes[node]) {
        visitedNodes[node] = true;
        queue.enqueue(node);
      }
    }
  }
}

breadthFirstSearch(graph1, 0);
breadthFirstSearch(graph2, "A");
breadthFirstSearch(graph3, "A");
