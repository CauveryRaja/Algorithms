/**
 * Binary Search
 * Search elements by finding median and iterating that particular segment
 * Time Complexity - O(logn)
 */

/**
 * This method follows Iterative approach
 * @param {*} arr Source array
 * @param {*} key Element to be searched
 */
function binarySearchIterative(arr, key) {
    let start, end, index;
    start = 0, end = arr.length-1;
    while(start<=end) {
        let mid = Math.floor((start+end)/2);
        // Is Key element at middle position itself
        if(arr[mid] === key) {
            return mid;
        }
        // Is Key element less than middle element
        else if(key < arr[mid]) {
            end = mid-1;
        }
        // Key element will be greater than middle element
        else {
            start = mid+1;
        }
    }
    return -1;
}

/**
 * This method uses Recursion
 * @param {*} arr Source array
 * @param {*} key Element to be searched
 */
function binarySearchRecursive(arr, key) {
    let start, end, index;
    start = 0, end = arr.length;
    index = recursiveSearch(start, end-1);
    return index>=0 ? index : -1;

    /**
     * Searches for key element recursively between start and End indices
     * @param {*} start Position to begin Search
     * @param {*} end Position to end Search
     */
    function recursiveSearch(start, end) {
        if(start<=end) {
            let mid = Math.floor((start+end)/2);
            // Is Key element at middle position itself
            if(arr[mid] === key) {
                return mid;
            }
            // Is Key element less than middle element
            else if(key < arr[mid]) {
                return recursiveSearch(start, mid-1);
            }
            // Key element will be greater than middle element
            else {
                return recursiveSearch(mid+1, end);
            }
        }
    }
}
