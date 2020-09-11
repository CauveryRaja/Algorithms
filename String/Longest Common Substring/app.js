// Find the Longest Common Substring from a list of strings

/**
 * Returns the Longest Common Substring from a array of strings
 * @param {*} arr Array of Strings
 * @param {*} k Denotes minimum of strings that a substring must be available
 */
function commonSubstr(arr, k) {
    let symbols = ['@', '#', '$', '%', '^', '&'];
    let n = arr.length;
    let str = '';
    for(let i=0; i<n; i++) {
        if(i>0)
            str += symbols[i-1];
        str += arr[i];
    }
    console.log(str);
    let suffixes = [];
    for(let i=0; i<str.length; i++) {
        suffixes.push(str.substr(i));
    }
    suffixes.sort();
    console.log(suffixes);
    let lcp = [];
    for(let i=1; i<suffixes.length; i++) {
        let j=0
        for(; j<suffixes[i].length; j++) {
            if(suffixes[i].charAt(j) != suffixes[i-1].charAt(j)) {
                break;
            }
        }
        lcp[i] = j;
    }
    console.log(lcp);
}