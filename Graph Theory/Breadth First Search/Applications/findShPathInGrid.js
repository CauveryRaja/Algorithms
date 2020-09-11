/*
S 0 0 0 0
0 # # 0 0
0 0 0 0 #
0 0 0 # 0
# 0 0 E 0
*/

let grid, start, end, visited, queue, prev, steps, path;

function init() {
    grid = [[0,0,0,0,0],
            [0,'#','#',0,0],
            [0,0,0,0,'#'],
            ['#','#',0,'#',0],
            ['#',0,0,'E',0]];
    start = [0,0];
    visited = defineGrid(visited);
    path = [];
    prev = defineGrid(prev);
    queue = [];
    steps = 0;
    return bfs();
}

function defineGrid(arr) {
    arr = [];
    for(let i=0; i<5; i++)
        arr[i] = [];
    return arr;
}

function solve(x,y) {
    console.log(visited);
    if(visited[x][y])
        return;
    queue.push([x,y]);
    visited[x][y] = true;
    prev[x][y] = -1;
    while(queue.length>0) {
        let node = queue.shift();
        console.log('Curr node: ', node);
        let neighbours = getNeighbours(...node);
        console.log(neighbours);
        for(let i=0; i<neighbours.length; i++) {
            let [xx,yy] = neighbours[i];
            if(!visited[xx][yy] && grid[xx][yy] != '#') {
                queue.push([xx,yy]);
                visited[xx][yy] = true;
                prev[xx][yy] = node;
                if(grid[xx][yy]=='E') {
                    console.log('Curr behaviour: ', neighbours[i]);
                    return neighbours[i];
                }
                    
            }
        }
        steps++;
    }
}

function bfs() {
    let target = solve(...start);
    console.log('Target received: ', target)
    reconstructPath(...target);
    return [steps, path];
}

function reconstructPath(x,y) {
    for(let i=x, j=y; i>=0;) {
        path.push([i,j]);
        let prevNode = prev[i][j];
        i = prevNode[0];
        j = prevNode[1];
    }
    path.reverse();
    return path;
}

function getNeighbours(x,y) {
    let rx, cy;
    rx = [0,1,0,-1];
    cy = [-1,0,1,0];
    let neighbours = [];
    for(let i=0; i<4; i++) {
        let xr = x+rx[i];
        let yc = y+cy[i];
        if(xr<0 || yc<0)
            continue;
        if(xr>=5 || yc>=5)
            continue;
        if(!visited[xr][yc]) {
            neighbours.push([xr,yc]);
        }
    }
    console.log('neighbours: ', neighbours); 
    return neighbours;
}