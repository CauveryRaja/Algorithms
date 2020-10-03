/* A sample implementation of Breadth First Search
   algorithm in Javascript.
   In BFS, all nodes at the current level has to be
   visited before digging down deep, Queue is used
   for this purpose.
 */

let graph, visited, queue;

/**
 * Initialises graph, visited list, queue
 */
function init() {
  // Adjacency Matrix to represent Graph
  graph = [
    [0,0,1,0],
    [0,0,1,1],
    [1,1,0,0],
    [0,0,1,0]
  ];
  // Indicates whether a node is visited or not
  visited = [];
  // Used to store neighbour nodes
  queue = [];
  bfs(0);
}

/**
 * Performs Breadth First Search with the help of Queue
 * @param {*} start Node to begin Search
 */
function bfs(start) {
  // Implement here
  visited[start] = true;
  enqueueNeigbours(start);
  while(!isQueueEmpty()) {
    let currNode = queue.shift();
    // Implement here
    visited[currNode] = true;
    enqueueNeigbours(currNode);
  }
}

/**
 * Enqueues all unvisited neighbours of given node into Queue
 * @param {*} node Node whose neighbours has to be enqueued
 */
function enqueueNeigbours(node) {
  graph[node].forEach((edge, i) => {
    if(edge && !visited[i]) {
      queue.push(i);
    }
  });
}

/**
 * Returns whether Queue is empty or not
 */
function isQueueEmpty() {
  return queue.length==0;
}
