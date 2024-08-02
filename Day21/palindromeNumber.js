function isPalindromeNumber(x){
    let s = x.toString();
    let ans = "";
    let n = s.length;
    for(let i = 0 ; i < n ; i++){
        ans += s.charAt(i);
    }
    if(s === ans.split('').reverse().join('')) return true;
    return false;
}

console.log(isPalindromeNumber(121));
console.log(isPalindromeNumber(-121));
console.log(isPalindromeNumber(10));



