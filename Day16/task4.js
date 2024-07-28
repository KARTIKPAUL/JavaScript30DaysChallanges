function maxElement(arr){
    if(arr.length === 0) return -Infinity;
    return Math.max(arr[0],maxElement(arr.slice(1)));
}


let arr1 = [100,1,2,3,4,5];
let arr2 = [6,700,8,9,10];
console.log(`Max Element in Array 1 is : ${maxElement(arr1)}`);
console.log(`Max lement in Array 2 is : ${maxElement(arr2)}`);