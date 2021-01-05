let graph, dist, prev;
function init() {
    graph = [
        [ 0, 3, 2, 0, 0, 1 ],
        [ 0, 0, 0, 2, 0, 0 ],
        [ 0, 0, 0, 0, 1, 0 ],
        [ 0, 0, 0, 0, 0, 3 ],
        [ 0, 0, 0, 0, 0, 2 ],
        [ 0, 0, 0, 0, 0, 0 ]
    ];
    dist = [100, 100, 100, 100, 100, 100];
    prev = [null, null, null, null, null, null];
    dijkstra(0);
}

function dijkstra(start) {
    dist[start] = 0;
    dfs(start);
}

function dfs(node) {
    let neighbours = getNeighbours(node);
    neighbours.forEach((neighbour, i) => {
        let newDist = dist[node]+graph[node][neighbour];
        if(newDist<dist[neighbour]) {
            dist[neighbour] = newDist;
            prev[neighbour] = node;
        }
        dfs(neighbour);
    });
}

function getNeighbours(node) {
    let arr = [];
    graph[node].forEach((v, i) => {
        if(v != 0) {
            arr.push(i);
        }
    });
    return arr;
}
