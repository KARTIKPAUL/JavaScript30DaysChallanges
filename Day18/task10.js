function fibb(n,memo = {}){
    if(n in memo) return memo[n];

    if(n <= 1) return n;
    memo[n] = fibb(n-1,memo) + fibb(n-2,memo);

    return memo[n];
}

let n = 10;
console.log(`Fibonacci number at position ${n} is: ${fibb(n)}`);

