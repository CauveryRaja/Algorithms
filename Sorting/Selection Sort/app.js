let arr = [];

function insert(num) {
    num = parseInt(num);
    arr.push(num);
    displayArr();
}

function sort() {
    selectionSort();
    displayArr();
}

function selectionSort() {
    for(let i=0; i<arr.length-1; i++) {
        let min=i;
        for(j=i+1; j<arr.length; j++) {
            if(arr[j]<arr[min]) {
                min = j;
            }
        }
        swap(i,min);
    }
}

function swap(i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function displayArr() {
    document.getElementById('Arr').textContent = arr.toString();
}