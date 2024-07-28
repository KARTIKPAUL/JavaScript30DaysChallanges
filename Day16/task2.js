function fibbonacci(n){
    if(n < 2){
        return n;
    }
    return fibbonacci(n-1) + fibbonacci(n-2);
}

console.log(`Fibbonacci of 5 is is : ${fibbonacci(5)}`);

console.log(`Fibbonacci of 6 is is : ${fibbonacci(6)}`);