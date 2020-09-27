/**
 * Merge Sort
 * This algorithm follows Divide & Conquer Strategy
 * Time Complexity in all cases - O(nlogn)
 */

/**
 * Returns array elements in sorted order
 * @param {*} arr Source array
 */
function sort(arr) {
    let start, end;
    start = 0, end = arr.length-1;
    mergeSort(start, end);
    return arr;

    /**
     * Recursive function that partitions the array upto 2 elements
     * @param {*} start Start index
     * @param {*} end End index
     */
    function mergeSort(start, end) {
        if(start<end) {
            let mid = Math.floor((start+end)/2);
            mergeSort(start, mid);
            mergeSort(mid+1, end);
            merge(start, mid, end);
        }

    }

    /**
     * Merges two lists in sorted order
     * @param {*} start Start index
     * @param {*} mid Middle index
     * @param {*} end End index
     */
    function merge(start, mid, end) {
        let i, j, k, temp;
        i = start, j = mid+1, k = 0, temp = [];
        while(i <= mid && j <= end) {
            if(arr[i] < arr[j])
                temp[k++] = arr[i++];
            else
                temp[k++] = arr[j++];
        }
        for(; i<=mid; i++)
            temp[k++] = arr[i];
        for(; j<=end; j++)
            temp[k++] = arr[j];

        for(let x=start, y=0; x<=end; x++, y++) {
            arr[x] = temp[y]
        }
    }
}

/**
 * Set as Custom function to Array prototype constructor
 * @param {*} start Start index
 * @param {*} end End index
 */
Array.prototype.mergeSort = function (start, end) {
    if(start<end) {
        let mid = Math.floor((start+end)/2);
        this.mergeSort(start, mid);
        this.mergeSort(mid+1, end);
        merge.call(this, start, mid, end);
    }

    /**
     * Merges two lists in sorted order
     * @param {*} start Start index
     * @param {*} mid Middle index
     * @param {*} end End index
     */
    function merge(start, mid, end) {
        let i, j, k, temp;
        i = start, j = mid+1, k = 0, temp = [];
        while(i <= mid && j <= end) {
            if(this[i] < this[j])
                temp[k++] = this[i++];
            else
                temp[k++] = this[j++];
        }
        for(; i<=mid; i++)
            temp[k++] = this[i];
        for(; j<=end; j++)
            temp[k++] = this[j];

        for(let x=start, y=0; x<=end; x++, y++) {
            this[x] = temp[y]
        }
    }
}
