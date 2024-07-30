function rotatearray(arr,k){
    let n = arr.length;
    k = k % n;
    return arr.slice(-k).concat(arr.slice(0,-k));
}

let arr = [1,3,4,5,6,7];
let k = 3;
console.log(`Rotated Array is : ${rotatearray(arr,k)}`);