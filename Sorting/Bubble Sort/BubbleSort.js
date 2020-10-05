/**
 * Bubble Sort
 * This algorithm pushes next Maximum element to the last on each iteration
 * Time Complexity in all cases - O(n2)
 */

/**
 * Returns array elements in sorted order
 * @param {*} arr Source array
 */
function bubbleSort(arr) {
  let n = arr.length;
  for(let i=1; i<n; i++) {
    for(let j=0; j<n-1; j++) {
      if(arr[j]>arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
}

/**
 * Set as Custom function to Array prototype constructor
 */
Array.prototype.bubbleSort = function() {
  let n = this.length;
  for(let i=1; i<n; i++) {
    for(let j=0; j<n-1; j++) {
      if(this[j]>this[j+1]) {
        [this[j], this[j+1]] = [this[j+1], this[j]];
      }
    }
  }
};
