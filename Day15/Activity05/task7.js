function memoize(func1){
    const mem = { };

    return function(...props){
        const val = JSON.stringify(props);
        if(mem.hasOwnProperty(val)){
            return mem[val];
        }else{
            const ans = func1(...props);
            mem[val] = ans;
            return ans;
        }
    }
}

const fibb1 = memoize(function(n){
    if(n < 2) return n;
    return fibb1(n-1) + fibb1(n-2);
});

console.log(`FibboNaci of 10 is : ${fibb1(10)}`);
console.log(`FibboNaci of 10 is : ${fibb1(20)}`);