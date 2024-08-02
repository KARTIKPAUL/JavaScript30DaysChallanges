function twoSum(arr,target){
    let ans = [-1];
    let map = new Map();
    let n = arr.length;
    for(let i = 0 ; i < n ; i++){
        let val = arr[i];
        if(map.has(target - val)){
            ans = [val,target - val];
            return ans;
        }map.set(arr[i],i);
    }
    return ans;
}

let arr1 = [1,0,3,4];
let target1 = 5;
console.log(`If We Add ${twoSum(arr1,target1)} We Get ${target1}`);

let arr2 = [3,2,4];
let target2 = 6;
console.log(`If We Add ${twoSum(arr2,target2)} We Get ${target2}`);

let arr3 = [3,3];
let target3 = 6;
console.log(`If We Add ${twoSum(arr3,target3)} We Get ${target3}`);
