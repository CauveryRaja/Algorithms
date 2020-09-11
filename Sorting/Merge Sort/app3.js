let arr = [];

function insert(num) {
    num = parseInt(num);
    arr.push(num);
    displayArr();
}

function sort() {
    mergeSort(0, arr.length-1);
    displayArr();
}

function mergeSort(l, h) {
    if(l<h) {
        let m = Math.floor((l+h)/2);
        mergeSort(l, m);
        mergeSort(m+1, h);
        merge(l,m,h)
    }
}

function merge(l, m, h) {
    let i, j, temp;
    i = l;
    j = m+1;
    temp = [];
    while(i<=m && j<=h) {
        if(arr[i]<arr[j]) {
            temp.push(arr[i++]);
        }
        else {
            temp.push(arr[j++]);
        }
    }
    for(;i<=m; i++) {
        temp.push(arr[i]);
    }
    for(; j<=h; j++) {
        temp.push(arr[j]);
    }
    for(let k = l, x=0; k<=h; k++) {
        arr[k] = temp[x++];
    }
}

function displayArr() {
    document.getElementById('Arr').textContent = arr.toString();
}