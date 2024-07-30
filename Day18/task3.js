function swap(arr,st,end){
    let temp = arr[st];
    arr[st] = arr[end];
    arr[end] = temp;
}

function partition(arr,st,end){
    let pivot = arr[st];
    let count = 0;
    for(let i = st + 1 ; i <= end ; i++){
        if(arr[i] <= pivot) count++;
    }
        let pivotIndex = st + count;
        swap(arr,st,pivotIndex);

        let i = st;
        let j = end;

        while(i < pivotIndex && j > pivotIndex){
            while(arr[i] <= pivot) i++;
            while(arr[j] > pivot) j--;

            if(i < pivotIndex && j > pivotIndex){
                swap(arr,i,j);
                i++;
                j--;
            }
        }
    return pivotIndex;
}

function quickSort(arr,st,end){
    if(st >= end) return;
    let pi = partition(arr,st,end);
    quickSort(arr,st,pi-1);
    quickSort(arr,pi+1,end);
}

let arr = [6,4,2,2,5,3,7,1];
let n = arr.length;
quickSort(arr,0,n-1);
for(let i = 0 ; i < n ; i++){
    console.log(arr[i]);
}