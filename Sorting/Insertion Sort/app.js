function insertionSort(arr) {
    let n = arr.length;
    for(let i=1; i<n; i++) {
        let key = arr[i], j;
        for(j=i; j>=0; j--) {
            if(key>arr[j])
                break;
        }
        let sortedPos = j+1;
        for(let k=i; k>sortedPos; k--) {
            arr[k] = arr[k-1];
        }
        arr[sortedPos] = key;
    }
    return arr;
}