let graph, visited, components, count;
graph = []; visited = []; components = []; count = 0;

// Required only for Weighted Graphs
function Edge(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
}

function constructGraph() {
    graph[0] = [new Edge(1,3), new Edge(2,5)];
    graph[1] = [new Edge(3,7), new Edge(4,8)];
    graph[2] = [new Edge(5,10)];
    graph[3] = [new Edge(4,1)];
    graph[4] = [];
    graph[5] = [];
    graph[6] = [];
    graph[7] = [];
}

function findConnectedComponents() {
    for(let i=0; i<graph.length; i++) {
        if(!visited[i]) {
            count++;
            dfs(i);
        }
    }
}

function dfs(index) {
    console.log('Vertex:', index)
    if(visited[index])
        return;
    console.log('Unvisited...');
    visited[index] = true;
    components[index] = count;
    graph[index].forEach(neighbour => {
        dfs(neighbour['vertex']);
    });
}

function init() {
    constructGraph();
    findConnectedComponents();
    console.log(components, count);
}

init();