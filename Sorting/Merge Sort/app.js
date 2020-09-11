let arr = [9,7,1,4,2,5,8,6,3];

function Merge(l, m, h) {
    let i=l, j=m+1, k=0, newArr = [];
    while(i<=m && j<=h) {
        // newArr[k++] = (arr[i]<arr[j]) ? arr[i++] : arr[j++];
        if(arr[i]>arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
        }
        else {
            j++;i++;
        }
    }
    // for(; i<=m; i++) {
    //     newArr[k++] = arr[i];
    // }
    // for(; j<=h; j++) {
    //     newArr[k++] = arr[j];
    // }
    // console.log(l,m,h,newArr);
    // arr = newArr;
}

function MergeSort(l,h) {
    if(l<h) {
        let m = Math.floor((l+h)/2);
        MergeSort(l,m);
        MergeSort(m+1, h);
        Merge(l,m,h);
    }
}

MergeSort(0,8);
console.log(arr);