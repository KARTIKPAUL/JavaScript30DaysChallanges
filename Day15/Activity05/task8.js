function memoize(func2){
    const mem = { };
    return function(...props){
        const val = JSON.stringify(props);
        if(mem.hasOwnProperty(val)){
            return mem[val];
        }else{
            const ans = func2(...props);
            mem[val] = ans;
            return ans;
        }
    }
}

const factorial = memoize(function(n){
    if(n <= 1) return 1;
    return n * factorial(n-1);
});

console.log(`factorial of 5 is ${factorial(5)}`);
console.log(`factorial of 10 is ${factorial(6)}`);


