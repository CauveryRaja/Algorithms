// Refer previous implementation where sorted is done without using third variable
function bubbleSort(arr) {
    for(let i=0; i<arr.length; i++) {
        let maxIndex = 0, j = 1;
        for(; j<arr.length-i; j++) {
            if(arr[j] > arr[maxIndex]) {
                maxIndex = j;
            }
        }
        [arr[maxIndex], arr[j-1]] = [arr[j-1], arr[maxIndex]];
    }
    return arr;
}