// Count the no. of ways to reach n-th step in Staircase

// Note: ways(n) = fib(n+1)
function countWays(n) {
    return fib(n+1);
}

/* Approach 1: Recursive method
Criteria: Max number of steps allowed is 2 */
function fib(n) {
    if(n<=1)
        return n;
    return fib(n-1) + fib(n-2);
}

// Criteria: k steps to reach n-th step
function countWays(n, k) {
    return fib(n+1, k);
}

function fib(n, k) {
    if(n<=1)
        return n;
    let total = 0;
    for(let i=1; i<=k && n-i>=0; i++) {
        total += fib(n-i,k);
    }
    return total;
}

/* Approach 2: Dynamic Programming
Using Bottom Up approach with res table by 
using formula "res[i] = res[i]+ res[i-j]"" */

function countWays(n, k) {
    return fib(n+1, k);
}

function fib(n, k) {
    let res = [];
    res[0] = 1;
    res[1] = 1;
    
    for(let i=2; i<n; i++) {
        res[i] = 0;
        for(let j=1; j<=k && j<=i; j++) {
            res[i] += res[i-j];
        }
    }
    return res[n-1];
}

/* Approach 3: Using Sliding Window technique
Efficient implementation of Dynamic Programming using Sliding Window */

function countWays(n, k) {
    let res = [], temp = 0;
    res[0] = 1;
    for(let i=1; i<=n; i++) {
        let s = i-k-1;
        let e = i-1;
        if(s>=0) {
            temp -= res[s];
        }
        temp += res[e];
        res[i] = temp;
    }
    return res[n];
}