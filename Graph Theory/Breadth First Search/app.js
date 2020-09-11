let queue, graph, visited, prev, start, end;
queue = [], graph = [], visited = [], prev = [];

function init() {
    graph[0] = [1, 3];
    graph[1] = [2, 4, 3];
    graph[2] = [4];
    graph[3] = [4,5];
    graph[4] = [6];
    graph[5] = [];
    graph[6] = [];
    start = 0;
    end = 5;
    return bfs();
}

function bfs() {
    solve();
    return reconstructPath();
}

function solve() {
    if(visited[start])
        return;
    queue.push(start);
    visited[start] = true;
    while(queue.length>0) {
        let node = queue.shift();
        graph[node].forEach(vertex => {
            if(!visited[vertex]) {
                queue.push(vertex);
                visited[vertex] = true;
                prev[vertex] = node;
            }
        });
    }
}

function reconstructPath() {
    let path = [];
    path.push(end);
    for(let i=end; i>=1;) {
        path.push(prev[i]);
        i = prev[i];
    }
    path.reverse();
    if(path[0] != start)
        return null;
    return path;
}