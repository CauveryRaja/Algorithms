let graph = [
    [0, 1, 1, 0, 0],
    [1, 0, 0, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 1, 0, 1]
];
let visited = [false, false, false, false, false];

function bfs(start) {
    if(!visited[start]) {
        visited[start] = true;
        let connNodes = graph[start].map((connected, index) => connected ? index : undefined).filter(node => node);
        let queue = [...connNodes];
        while(queue.length) {
            let node = queue.shift();
            visited[node] = true;
            let connectedNodes = graph[node]
                                    .map((connected, index) => connected ? index : undefined)
                                    .filter(node => node);
            connectedNodes.forEach(node => {
                if(!visited[node] && !queue.includes(node)) {
                    queue.push(node);
                }
            })
            console.log('visited', node, queue.toString(), connectedNodes);
        }
    }
}

bfs(0);