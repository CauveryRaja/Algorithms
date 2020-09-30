
let graph, visited;

init();

/**
 * Initialises Graph and invokes DFS method
 */
function init() {
  graph = [ [0,0,1],
            [0,0,1],
            [1,1,0]
          ];
  visited = [];
  dfs(0);
}

/**
* Recursive Depth First Search method
* @param {*} start Node to begin Search
*/
function dfs(start) {
  visited[start] = true;
  getConnectedNodes(start).forEach((neighbour) => {
    if(!visited[neighbour])
      dfs(neighbour);
  });
}

/**
* Returns array of all neighbour nodes
* @param {*} node Current node
*/
function getConnectedNodes(node) {
  let neighbours = [];
  graph[node].forEach((item, i) => {
    if(item==1)
      neighbours.push(i);
  });
  return neighbours;
}
