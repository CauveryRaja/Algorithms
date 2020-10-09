/**
 * Insertion Sort
 * In this algorithm, all elements at indices before the current index are checked
 * until an element is lesser than the considered element. If found, the element
 * is placed next, others are shifted right.
 * Time Complexity in all cases - O(n2)
 */

/**
* Returns array elements in sorted order
* @param {*} arr Source array
*/
function insertionSort(arr) {
  let n = arr.length;
  for(let i=0; i<n; i++) {
    let j = i;
    // Start from current index until an element is less than current element
    for(; j>=0; j--) {
      if(arr[j]<arr[i]) {
        break;
      }
    }
    let elm = arr[i];
    // Shift Right all elements next to the found index
    for(let k=i; k>j; k--) {
      arr[k] = arr[k-1];
    }
    // Place the element just next to the found index
    arr[j+1] = elm;
  }
}

/**
 * Set as Custom function to Array prototype constructor
 */
Array.prototype.insertionSort = function() {
  let n = this.length;
  for(let i=0; i<n; i++) {
    let j = i;
    // Start from current index until an element is less than current element
    for(; j>=0; j--) {
      if(this[j]<this[i]) {
        break;
      }
    }
    let elm = this[i];
    // Shift Right all elements next to the found index
    for(let k=i; k>j; k--) {
      this[k] = this[k-1];
    }
    // Place the element just next to the found index
    this[j+1] = elm;
  }
}
