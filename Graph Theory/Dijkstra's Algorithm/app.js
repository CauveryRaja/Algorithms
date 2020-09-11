let heap, size;
heap = [];
size = 0;

// Adds <Vertex, distance> pair to the queue
function insert(arr) {
    heap.push(arr);
    size++;
    construct();
}

// Naive Construction
function construct() {
    for(let i=0; i<size; i++) {
        swim(i);
    }
    displayPQ();
}

function poll() {
    swap(0, size-1);
    let res = heap.pop();
    if(heap.length>0)
        sink(0);
    size--;
    return res;
}

// Efficient construction
function heapify() {
    for(let i=size-1; i>0; i--) {
        let parentIndex = Math.ceil(i/2)-1;
        if(heap[i] < heap[parentIndex]) {
            swap(i, parentIndex);
            sink(parentIndex);
        }
    }
    displayPQ();
}

function swim(currIndex) {
    let parentIndex;
    while(currIndex > 0) {
        parentIndex = Math.ceil(currIndex/2)-1;
        if(heap[currIndex][1] < heap[parentIndex][1]) {
            swap(parentIndex, currIndex);
            currIndex = parentIndex;
        }
        else {
            break;
        }
    }
}

function sink(currIndex) {
    let lChild, rChild;
    while(currIndex < size) {
        lChild = 2 * currIndex +1;
        rChild = 2 * currIndex +2;
        let smallChild = heap[lChild] < heap[rChild] ? lChild : rChild;
        if(!heap[smallChild] || !heap[currIndex])
            return;
        if(heap[smallChild][1] < heap[currIndex][1]) {
            swap(smallChild, currIndex);
            currIndex = smallChild;
        }
        else {
            break;
        }
    }
}

function swap(i,j) {
    let temp = heap[i];
    heap[i] = heap[j];
    heap[j] = temp;
}

let dist, adjList, visited, prev, V, E;
function init() {
    adjList = [[[1,4],[2,1]],
                [[2,1],[3,2]],
                [[3,3]],
                [[4,5]],
                []
            ];
    V = adjList.length;
    dist = [], visited = [], prev = [];
    for(let i=0; i<V; i++) {
        dist[i] = Infinity;
        visited[i] = false;
        prev[i] = 0;
    }
    dijkstra(0,4);
}

function dijkstra(s, e) {
    dist[s] = 0;
    visited[s] = true;
    insert([s,0]);
    while(heap.length>0) {
        console.log(heap.toString());
        let [index, oldDist] = poll();
        console.log(heap, index, oldDist);
        visited[index] = true;
        adjList[index].forEach(edge => {
            let [v,w] = edge;
            if(!visited[v]) {
                if(dist[index]+w < dist[v]) {
                    dist[v] = dist[index]+w;
                    prev[v] = index;
                    insert([v, dist[v]]);
                }
            }
        });
    }
    return dist;
}

function displayPQ() {
    console.log(heap);
}

init();