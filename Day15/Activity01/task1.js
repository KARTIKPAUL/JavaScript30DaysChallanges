function outerFunction(){
    let a = 5;
    function innerFunction(b){
        return a + b;
    }
    let ans = innerFunction(5);
    return ans;
}

let res = outerFunction();
console.log(res);
