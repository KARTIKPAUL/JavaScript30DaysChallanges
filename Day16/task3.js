function sum(arr){
   if(arr.length === 0) return 0;
   return arr[0] + sum(arr.slice(1));
}

let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];
console.log(`Sum of All Element in Array 1 is : ${sum(arr1)}`);
console.log(`Sum of All Element in Array 2 is : ${sum(arr2)}`);