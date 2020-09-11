// Find all Unique substrings from a string
function uniqueSubstr(str) {
    let n = str.length;
    let substrings = [];
    for(let i=1; i<=n; i++) {
        for(let j=0; j+i<=n; j++) {
            substrings.push(str.substr(j,i));
        }
    }
    console.log(substrings);
    let suffixes = [];
    for(let i=0; i<n; i++) {
        suffixes.push(str.substring(i));
    }
    suffixes.sort();
    console.log(suffixes);
    let lcpArr = [], dupSubs = [];
    for(let i=1; i<n; i++) {
        let minLen = suffixes[i].length < suffixes[i-1].length ? 
                        suffixes[i].length : suffixes[i-1].length;
        for(let j=0; j<minLen; j++) {
            if(suffixes[i].charAt(j) == suffixes[i-1].charAt(j)) {
                if(!lcpArr[i])
                    lcpArr[i]=0;
                lcpArr[i]++;
                dupSubs.push(suffixes[i].substr(0,lcpArr[i]));
            }
            else {
                break;
            }
        }
    }
    console.log(lcpArr);
    console.log(dupSubs);
    let uniqueSubs = dupSubs.slice();
    for(let i=0; i<substrings.length; i++) {
        if(dupSubs.indexOf(substrings[i]) == -1) {
            uniqueSubs.push(substrings[i]);
        }
    }
    return uniqueSubs;
}