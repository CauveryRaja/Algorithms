function mergeSort(l, r) {
    if(l<r) {
        let mid = Math.floor((l+r)/2);
        mergeSort(l, mid);
        mergeSort(mid+1, r);
        merge(l, mid ,r);
    }
};

function merge(l, mid, r) {
    const sorted = [];
    let i=l, j=mid+1;
    while(i<= mid && j<=r) {
        if(arr[i]<arr[j]) {
            sorted.push(arr[i++]);
        }
        else {
            sorted.push(arr[j++]);
        }
    }
    while(i<=mid) {
        sorted.push(arr[i++]);
    }
    while(j<=r) {
        sorted.push(arr[j++]);
    }

    let k = l;
    sorted.forEach(elm => {
        arr[k++] = elm;
    });
}
