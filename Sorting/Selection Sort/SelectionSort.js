/**
 * Selection Sort
 * This algorithm selects next Minimum element on each iteration
 * and swaps it with the first unordered element
 * Time Complexity in all cases - O(n2)
 */

/**
 * Returns array elements in sorted order
 * @param {*} arr Source array
 */
function selectionSort(arr) {
  let n = arr.length;
  for(let i=0; i<n; i++) {
    let min = i;
    for(let j=i+1; j<n; j++) {
      if(arr[j]<arr[min]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
}

/**
 * Set as Custom function to Array prototype constructor
 */
Array.prototype.selectionSort = function() {
  let n = this.length;
  for(let i=0; i<n; i++) {
    let min = i;
    for(let j=i+1; j<n; j++) {
      if(this[j]<this[min]) {
        min = j;
      }
    }
    [this[i], this[min]] = [this[min], this[i]];
  }
}
