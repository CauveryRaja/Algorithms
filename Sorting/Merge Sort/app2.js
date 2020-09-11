let arr = [];

function insert(num) {
    arr.push(parseInt(num));
    displayArr();
}

function Merge(l,m,h) {
    let temp = [], i = l, j=m+1;
    while (i<=m && j<=h) {
        if(arr[i]<arr[j]) {
            temp.push(arr[i]);
            i++;
        }
        else {
            temp.push(arr[j]);
            j++;
        }
    }
    for(; i<=m; i++)
        temp.push(arr[i]);
    for(; j<=h; j++)
        temp.push(arr[j]);
    
    for(let k=l, m=0; k<=h; k++, m++) {
        arr[k] = temp[m];
    }
}

function MergeSort(l,h) {
    if(l<h) {
        let m = Math.floor((l+h)/2);
        MergeSort(l,m);
        MergeSort(m+1,h);
        Merge(l,m,h);
    }
}

function sort() {
    MergeSort(0, arr.length-1);
    displayArr();
}

function displayArr() {
    document.querySelector('#Arr').textContent = arr.toString();
    console.log(arr.toString());
}