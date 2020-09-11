function shellSort(arr) {
    let n = arr.length;
    for(let i=Math.floor(n/2); i>0; i=Math.floor(i/2)) {
        for(let j=i; j<n; j++) {
            let temp = arr[j];
            let k;
            for(k=j; k>=j && arr[k-i]>temp; k-=i) {
                arr[k] = arr[k-i];
            }
            arr[k] = temp;
        }
    }
    return arr;
}