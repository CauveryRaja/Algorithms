function sortArr(arr) {
    let n = arr.length;
    for(let i=0; i<n-1; i++) {
        for(let j=0; j<n-i; j++) {
            if(arr[j] > arr[j+1]) {
                swap(j,j+1);
            }
        }
    }

    function swap(i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}