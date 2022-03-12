let grid = [[0, 0, 0, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 1, 0, 0]];

function initialise(length) {
    let arr = new Array(length);
    for(let i=0; i<length; i++) {
        arr[i] = new Array(length);
    }
    return arr;
}

function getNeighbours(cell, side) {
    let [x, y] = cell;
    let neighbours = [];

    // Left cell
    if(x > 0) {
        neighbours.push([x-1, y]);
    }
    // Right cell
    if(x < side-1) {
        neighbours.push([x+1, y]);
    }
    // Upper cell
    if(y > 0) {
        neighbours.push([x, y-1]);
    }
    // Lower cell
    if(y < side-1) {
        neighbours.push([x, y+1]);
    }
    return neighbours;
}

function getPath(prev, source, destination) {
    let path = [];
    let cell = destination;
    while(cell) {
        path.push(cell);
        if(cell[0] == source[0] && cell[1] == source[1]) {
            break;
        }
        cell = prev[cell[0]][cell[1]];
    }

    path = path.reverse();
    return path;
}

function findShortestPath(grid, source, destination) {
    let sides = grid.length;
    let visited = initialise(sides);
    let previous = initialise(sides);
    let queue = [source];

    while(queue.length > 0) {
        let currCell = queue.shift();
        let neighbours = getNeighbours(currCell, sides);
        for(let i=0; i<neighbours.length; i++) {
            let [x, y] = neighbours[i];
            if(!visited[x][y]) {
                if(x == destination[0] && y == destination[1]) {
                    previous[x][y] = currCell;
                    break;
                }
                queue.push(neighbours[i]);
                visited[x][y] = true;
                previous[x][y] = currCell;
            }
        }
    }

    let steps = getPath(previous, source, destination).length;
    return steps-1;
}

findShortestPath(grid, [3, 1], [0, 3]);