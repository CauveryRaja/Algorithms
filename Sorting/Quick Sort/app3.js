let arr = [];

function quickSort(l, r) {
    if(l<r) {
        let sortedIndex = partition(l, r);
        quickSort(l, sortedIndex);
        quickSort(sortedIndex+1, r);
    }
}

function partition(l, r) {
    let pivot, i, j;
    pivot = arr[l];
    i = l; j = r;
    while(i<j) {
        while(arr[i] <= pivot) {
            i++;
        }
        while(arr[j] > pivot) {
            j--;
        }
        if(i<j)
            swap(i, j);
    }
    swap(l, j);
    return j;
}

function swap(i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function insert(num) {
    arr.push(parseInt(num));
    document.getElementById('Arr').textContent = arr.toString();
}

function sort() {
    console.log(arr);
    quickSort(0, arr.length-1);
    document.getElementById('Arr').textContent = arr.toString();
}