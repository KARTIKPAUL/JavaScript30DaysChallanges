//Liner Search

let arr = [6,3,4,2,1];
let n = arr.length;
let target = 4;
for(let i = 0 ; i < n ; i++){
    if(arr[i] == target){
        console.log(`${target} is present at Index: ${i}`)
    }
}