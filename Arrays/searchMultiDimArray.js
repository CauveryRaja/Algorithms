// Search for the given character in the Multi-dimensional array of characters
// Sample Input : ['a',['b',['c'],'d','e'],'f']

function search(arr, key) {
    let n = arr.length;
    for(let i=0; i<n; i++) {
        if(arr[i]==key)
            return true;
        else if(arr[i] instanceof Array) {
            if(search(arr[i], key))
                return true;
        }
    }
    return false;
}