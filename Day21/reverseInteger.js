function reverseInteger(num){
    let finalNum = 0;
    while(num != 0){
    let lastDigit = num % 10;
    finalNum = lastDigit + finalNum;
    finalNum = finalNum * 10;
    num = Math.trunc(num / 10);
   }
   finalNum = finalNum / 10;

   if(finalNum > 2147483647 || finalNum < -2147483648) return 0;
   if(num < 0) return -finalNum;
   return finalNum;
}

console.log(reverseInteger(123));
console.log(reverseInteger(-123));
console.log(reverseInteger(120));
