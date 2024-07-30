function selectionSort(arr,n){
    for(let i = 0 ; i < n - 1 ; i++){
        let minIndex = i;
        for(let j = i + 1 ; j < n ; j++){
            if(arr[j] < arr[minIndex]) minIndex = j;
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}

let arr = [6,4,2,2,5,3,7,1];
let n = arr.length;
selectionSort(arr,n);
for(let i = 0 ; i < n ; i++){
    console.log(arr[i]);
}