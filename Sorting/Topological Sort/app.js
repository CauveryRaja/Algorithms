function topSort() {
    let ordering, visited, adjList, orderIndex;
    ordering = [], visited = [];
    adjList = getGraph();
    orderIndex = adjList.length-1;
    for(let i=0; i<adjList.length; i++) {
        orderIndex = dfs(orderIndex, i, ordering, visited, adjList);
    }
    return ordering;
}

function dfs(orderIndex, node, ordering, visited, adjList) {
    console.log(orderIndex, node, ordering, visited);
    if(!visited[node]) {
        adjList[node].forEach(neighbour => {
            orderIndex = dfs(orderIndex, neighbour, ordering, visited, adjList);
        });
        visited[node] = true;
        ordering[orderIndex] = node;
        orderIndex--;
    }
    return orderIndex;
}

function getGraph() {
    return [
        [1,2],
        [2],
        [3,4],
        [5],
        [6],
        [],
        []
    ];
}