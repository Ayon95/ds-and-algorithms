/* Different ways of representing a graph
- Edge list
- Adjacency matrix
- Adjacency list

Example graph:

     2--0
    / \
   1---3
*/

// Edge list
// each nested array represents an edge containing the edge nodes
const graphEdgeList = [
  [0, 2],
  [2, 1],
  [1, 3],
  [2, 3],
];

// Adjacency matrix
// the nodes have been sorted in ascending order (0, 1, 2, 3)
// the first nested array contains connection information for node 0 (the first node)
// 0 is connected to 2 so the value at index 2 is 1
const graphAdjMatrix = [
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
];

// Adjacency list using arrays
// the nodes have been sorted in ascending order (0, 1, 2, 3)
// each node is given an index and each index points to an array containing the adjacent nodes for that particular node
// e.g. node 2 has been given index of 2 and it is connected to nodes 0, 1, and 3
// the adjacency list could also be an object where each key represents a node and its corresponding value is an array containing adjacent nodes
const graphAdjList = [[2], [2, 3], [0, 1, 3], [1, 2]];
const graphAdjList2 = {
  0: [2],
  1: [2, 3],
  2: [0, 1, 3],
  3: [1, 2],
};

// Graph implementation using adjacency list
class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }
  // O(1) time complexity
  addVertex(node) {
    if (this.adjacentList[node]) return;
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }
  // O(n) time complexity
  addEdge(node1, node2) {
    if (!this.adjacentList[node1] || !this.adjacentList[node2]) return;
    //undirected Graph
    const node1Connections = this.adjacentList[node1];
    const node2Connections = this.adjacentList[node2];
    if (!node1Connections.includes(node2)) node1Connections.push(node2);
    if (!node2Connections.includes(node1)) node2Connections.push(node1);
  }

  showConnections() {
    for (const vertex in this.adjacentList) {
      console.log(`${vertex} --> ${this.adjacentList[vertex]}`);
    }
  }
}

const myGraph = new Graph();

/* Implement this undirected unweighted graph
3--4--5
|  |  |
1--2  6
\  /
 0
*/

myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");

myGraph.showConnections();
//Answer:
// 0-->1 2
// 1-->3 2 0
// 2-->4 1 0
// 3-->1 4
// 4-->3 2 5
// 5-->4 6
// 6-->5
