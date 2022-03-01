let adjancencyList = [
    [0, 1, 1, 0, 0],
    [1, 0, 0, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 1, 0, 1]
];
let visited = [false, false, false, false, false];

function dfs(node) {
    if(!visited[node]) {
        console.log('visiting', node);
        visited[node] = true;
        let connectedNodes = adjancencyList[node].map((connected, index) => connected ? index : undefined).filter(node => node);
        console.log('connected nodes', connectedNodes);
        connectedNodes.forEach(connectedNode => {
            dfs(connectedNode);
        });
    }
};

dfs(0);