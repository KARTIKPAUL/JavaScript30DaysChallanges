function binarySearch(arr,target,st,end){
    if(st > end) return -1;

    const mid = Math.floor(st + (end - st)/2);
    let val = arr[mid];
    if(val == target) return mid;
    else if(val > target){
        return binarySearch(arr,target,st,mid-1)
    }else if(val < target){
        return binarySearch(arr,target,mid+1,end)
    }
}

let arr = [1,2,3,4,5,6,7,8,9,10];
let st = 0;
let end = arr.length - 1;
let target1 = 5;
let target2 = 11;
console.log(`Index of ${target1} is : ${binarySearch(arr,target1,st,end)}`);
console.log(`Index of ${target2} is : ${binarySearch(arr,target2,st,end)}`);