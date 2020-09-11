let pq, graph, V, visited, dist, prev;
pq = [], visited = [], dist = [], prev = [];

function bellmanFord(s, e) {
    graph = getGraph();
    V = graph.length;
    init();
    for(let i=0; i<V; i++) {
        pq.push([s,0]);
        dist[s] = 0;
        while(pq.length > 0) {
            let [v, d] = pop();
            // console.log(v, d, graph[v]);
            graph[v].forEach(neighbour => {
                let [_v, _w] = neighbour;
                // console.log(_v, _w, dist[_v]);
                if(d+_w < dist[_v]) {
                    dist[_v] = d+_w;
                    pq.push([_v, dist[_v]]);
                    visited[_v] = true;
                    prev[_v] = v;
                }
            });
        }
        console.log(i + ' th time: ', dist.toString(), prev.toString());
    }
}

function pop() {
    pq.sort((a,b) => {
        if(a[1]>b[1])
            return 1;
    });
    console.log(pq);
    return pq.pop();
}

function getGraph() {
    return  [[[1,4],[6,2]],
                [[1,-1],[2,3]],
                [[3,3], [4,1]],
                [[5,2]],
                [[5,2]],
                [],
                [[4,2]]
            ];
}

function init() {
    for(let i=0; i<V; i++) {
        visited[i] = false;
        prev[i] = -1;
        dist[i] = Infinity;
    }
}

bellmanFord(0,5);