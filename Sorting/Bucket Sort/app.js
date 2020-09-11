function bucketSort(arr) {
    let max, bSize, nBuckets, buckets;
    // Find maximum element in the given array
    max = arr[0];
    for(let i=1; i<arr.length; i++) {
        if(arr[i]>max)
            max = arr[i];
    }
    bSize = 5; // Element Range for each bucket
    nBuckets = max/bSize +1;
    buckets = [];
    
    // Initialize all buckets
    for(let i=0; i<nBuckets; i++) {
        buckets[i] = [];
    }

    // Place elements in respective buckets
    for(let i=0; i<arr.length; i++) {
        let index = Math.floor(arr[i]/bSize);
        console.log(arr[i], 'index: ', index);
        buckets[index].push(arr[i]);
    }

    // Sort elements in each buckets
    for(let i=0; i<nBuckets; i++) {
        buckets[i].sort();
    }

    let result = [];
    for(let i=0; i<nBuckets; i++) {
        if(buckets[i].length>0)
            result = result.concat(buckets[i]);
    }
    return result;
}