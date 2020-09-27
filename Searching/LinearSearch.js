/**
 * Linear Search
 * Search elements sequentially
 * Time Complexity - O(n)
 */

/**
 * Returns position of the given element in the array
 * If unavailable, returns -1
 * This approach requires O(n) time in Worst case
 * @param {*} arr Source array
 * @param {*} key Element to be searched
 */
function linearSearch(arr, key) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === key)
            return i;
    }
    return -1;
}
