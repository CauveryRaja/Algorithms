let arr = [];

function radixSort(arr) {
    let max = 0;
    for(let i=0; i<arr.length; i++) {
        let currLen = arr[i].toString().length;
        if(currLen>max)
            max = currLen;
    }
    console.log('maxLen: ', max)
    let i = 0, count, pSum, result;
    while(i<max) {
        count = [0,0,0,0,0,0,0,0,0,0], pSum = [], result = [];
        for(let j=0; j<arr.length; j++) {
            let digit = Math.floor(arr[j]/10**i)%10;
            console.log(i, arr[j], digit);
            count[digit] ? count[digit]++ : count[digit]=1;
        }
        console.log('Count: ', count);

        pSum[0] = count[0];
        for(let j=1; j<count.length; j++) {
            pSum[j] = count[j] + pSum[j-1];
        }
        console.log('Prefix Sum: ', pSum);

        for(let j=arr.length-1; j>=0; j--) {
            let digit = Math.floor(arr[j]/10**i)%10;
            let sortedIndex = pSum[digit]-1;
            result[sortedIndex] = arr[j];
            pSum[digit]--;
        }
        console.log('Result: ', result);
        arr = result;
        i++;
    }
    return arr;
}