function targetOccuerence(arr,target){
    if(arr.length === 0) return 0;
    const count = arr[0] === target ? 1 : 0;
    return count + targetOccuerence(arr.slice(1),target);
}

const arr = [1,2,2,3,4,2,5];
const target =2 ;
console.log(`Occurence of ${target} is: ${targetOccuerence(arr,target)}`);