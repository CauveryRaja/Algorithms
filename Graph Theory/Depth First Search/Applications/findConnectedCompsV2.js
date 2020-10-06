/**
 * Important application of DFS is to find
 * the connected components within the graph
 * Connected components share the same ID
 */
let graph, visited, ids, components;

/**
 * Initializes all state variables
 */
function init() {
  graph = [
    [ 0, 0, 1, 0 ],
    [ 0, 0, 0, 1 ],
    [ 1, 0, 0, 0 ],
    [ 0 ,0, 0, 0 ]
  ];
  visited = [];
  ids = [];
  components = 0;
}

/**
 * Computes all connected components
 */
function findConnectedComponents() {
  init();
  let n, id;
  n = graph.length, id = 0;
  for(let i=0; i<n; i++) {
    if(!visited[i]) {
      components++;
      dfs(i, id++);
    }
  }
}

/**
 * Performs DFS and sets the connected component id
 * @param {*} start Node to begin search
 * @param {*} id ID to be set
 */
function dfs(start, id) {
  visited[start] = true;
  ids[start] = id;
  let neighbours = getNeighours(start);
  neighbours.forEach(node => {
    if(!visited[node]) {
      dfs(node, id);
    }
  });
}

/**
 * Returns connected nodes of given node
 * @param {*} node Source node
 */
function getNeighours(node) {
  let neighbours  = [];
  graph[node].forEach((item, i) => {
    if(item)
      neighbours.push(i);
  });
  return neighbours;
}
