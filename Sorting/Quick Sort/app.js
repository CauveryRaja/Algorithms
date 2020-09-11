let arr = [];

function insert(num) {
    arr.push(parseInt(num));
    displayArr();
}

function partition(l,h) {
    let i=l, j=h;
    while(i<j) {
        console.log('partition : ', l, h);
        for(; i<=h; i++) {
            if(arr[i]>arr[l]) 
                break;
        }
        for(; j>l; j--) {
            if(arr[j]<arr[l]) {
                break;
            }
        }
        if(i<j) {
            swap(i,j);
        }
    }
    if(i>j) {
        swap(l,j);
    }
    console.log(arr, j);
    return j;
}

function quickSort(l,h) {
    if(l<h) {
        console.log('quick sort : ', l ,h);
        let m = partition(l,h);
        quickSort(l, m-1);
        quickSort(m+1, h);
    }
}

function swap(i,j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function sort() {
    quickSort(0, arr.length-1);
    displayArr();
}

function displayArr() {
    document.querySelector('#Arr').textContent = arr.toString();
    console.log(arr);
}