//Binary Search

function binarySearch(arr,target){
    let n = arr.length;
    let st = 0 ; 
    let end = n - 1;
    while(st <= end){
        let mid = Math.floor(st + (end-st) / 2);

        if(arr[mid] == target) return mid;
        if(arr[mid] > target){
            end = mid - 1;
        }else{
            st = mid + 1;
        }
    }
    return -1;
}


let arr = [1,2,3,4,5,6,7,8];
let n = arr.length;
let target = 4;
console.log(`${target} is present at Index: ${binarySearch(arr,target)}`)