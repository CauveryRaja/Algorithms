// Find the Longest Repeated Substring of a given string
// Naive approach
function displayLRS(str) {
    let n = str.length;
    let lrs = '', lrsSize = 0, subStrings;
    for(let i=n-1; i>0; i--) {
        subStrings = [];
        for(let j=0; i+j<=n; j++) {
            subStrings.push(str.substr(j,i));
        }
        console.log(subStrings);
        subStrings.sort();
        let count = 0;
        for(let j=1; j<n; j++) {
            if(subStrings[j]==subStrings[j-1]) {
                count++;
            }
        }
    }
}

// Using LCP array
// !Important: Revisit Count logic in line 46
function displayLRS2(str) {
    let suffixStrings, sortedSuffixes, suffixArr, lcpArr;
    suffixStrings = [];
    for(let i=0; i<str.length; i++) {
        suffixStrings.push(str.substr(i));
    }
    sortedSuffixes = suffixStrings.slice();
    sortedSuffixes.sort();
    suffixArr = [];
    for(let i=0; i<str.length; i++) {
        suffixArr[i] = suffixStrings.indexOf(sortedSuffixes[i]);
    }
    console.log(suffixArr);
    lcpArr = [];
    let repLen = 0, repStr = '';
    for(let i=1; i<str.length; i++) {
        let currStr = str.substr(suffixArr[i]);
        let prevStr = str.substr(suffixArr[i-1]);
        let minLen = currStr.length < prevStr.length ? currStr.length : prevStr.length;
        let count = 0, sub = '';
        for(let j=0;j < minLen; j++) {
            if(currStr.charAt(j)==prevStr.charAt(j)) {
                count++;
                sub += currStr.charAt(j);
            }
            else {
                break;
            }
        }
        if(count > repLen) {
            repLen = count;
            repStr = sub;
        }
    }
    console.log(repStr, repLen);
}