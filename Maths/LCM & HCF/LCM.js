/** Recursive approach to find GCD of two numbers */
function gcd(num1, num2) {
    if(num1==0 || num2==0)
        return 0;
    if(num1==1 || num2==1)
        return 1;
    if(num1==num2)
        return num1;
    return num1<num2 ? gcd(num1, num2-num1) : gcd(num2, num1-num2);
}

/** Finding LCM using GCD */
function lcm(num1, num2) {
    return (num1*num2)/gcd(num1, num2);
}

/** Finding LCM without using GCD */
function lcm(num1, num2) {
    let max, min;
    if(num1 < num2) {
        max = num2;
        min = num1;
    }
    else {
        max = num1;
        min = num2; 
    }
    let num = max;
    for(let i=1; i<=max; i++) {
        if(num%min==0)
            return num;
        num = max*i;
    }
}