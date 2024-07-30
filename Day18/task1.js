function bubbleSort(arr1,n){
    for(let i = 0 ; i < n - 1 ; i++){
    let flag = false;
    for(let j = 0 ; j < n - i - 1 ; j++){
        if(arr1[j] > arr1[j+1]){
            let temp = arr1[j];
            arr1[j] = arr1[j+1];
            arr1[j+1] = temp;
            flag = true;
        }
    }
    if(flag == false) return;
  }
}

let arr1 = [6,4,2,2,5,3,7,1];
let n = arr1.length;
bubbleSort(arr1,n);
for(let i = 0 ; i < n ; i++){
    console.log(arr1[i]);
}