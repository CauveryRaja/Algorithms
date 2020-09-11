let arr, size;
arr = [], size = 0;

function insert(num) {
    num = parseInt(num);
    arr.push(num);
    displayArr();
}

function sort() {
    quickSort(0, arr.length-1);
    displayArr();
}

// Flaw in implementation, refer Previous file
function partition(l, h) {
    let pivot = arr[l];
    let i=l, j=h;
    while(i<j) {
        for(; i<arr.length; i++) {
            if(arr[i]>pivot)
                break;
        }
        for(; j>=0; j--) {
            if(arr[j]<pivot)
                break;
        }
        if(i<j)
            swap(i,j);
    }
    swap(l, i-1);
    return i-1;
}

function quickSort(l, h) {
    if(l<h) {
        let m = partition(l, h);
        quickSort(l,m-1);
        quickSort(m+1, h);
    }
}

function swap(i,j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function displayArr() {
    document.getElementById('Arr').textContent = arr.toString();
}