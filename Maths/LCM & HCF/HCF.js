function gcd(num1, num2) {
    if(num1==0 || num2==0)
        return 0;
    if(num1==1 || num2==1)
        return 1;
    if(num1==num2)
        return num1;
    return num1<num2 ? gcd(num1, num2-num1) : gcd(num2, num1-num2);
}