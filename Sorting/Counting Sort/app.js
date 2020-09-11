// Naive approach
function sortArr(arr) {
    let n = arr.length;
    let auxArr = [];
    for(let i=0; i<n; i++) {
        if(!auxArr[arr[i]])
            auxArr[arr[i]]=0;
        auxArr[arr[i]]++;
    }
    let sortedArr = [], k=0;
    for(let i=0; i<auxArr.length; i++) {
        for(let j=1; auxArr[i] && j<=auxArr[i]; j++) {
            sortedArr[k++] = i;
        }
    }
    return sortedArr;
}

// Using Prefix sum array
function sortArr2(arr) {
    let n = arr.length;
    let count, pos, sortedArr;
    count = [], pos = [], sortedArr = [];
    for(let i=0; i<n; i++) {
        if(!count[arr[i]])
            count[arr[i]]=0;
        count[arr[i]]++;
    }
    // Prepare position array
    pos[0] = count[0];
    for(let i=1,j=1; i<count.length; i++) {
        if(count[i]) {
            pos.push(count[i] + (pos[j-1] ? pos[j-1]: 0));
            j++;
        }
    }
    // Construct Sorted output array
    for(let i=0; i<n; i++) {
        console.log(arr[i],pos[arr[i]]);
        sortedArr[pos[arr[i]]-1] = arr[i];
        pos[arr[i]]--;
    }
    return sortedArr;
}