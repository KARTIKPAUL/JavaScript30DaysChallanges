function mergeArray(arr1,arr2){
    let ans = [];
    let i = 0;
    let j = 0;
    let n1 = arr1.length;
    let n2 = arr2.length;
    while(i < n1 && j < n2){
        if(arr1[i] < arr2[j]){
            ans.push(arr1[i]);
            i++;
        }else{
            ans.push(arr2[j]);
            j++;
        }
    }
        while(i < n1){
            ans.push(arr1[i]);
            i++;
        }
        while(j < n2){
            ans.push(arr2[j]);
            j++;
        }
    return ans;
}

let arr1 = [1,2,4,7];
let arr2 = [2,3,5,8];

console.log(`Sorted Meerged Array is : ${mergeArray(arr1,arr2)}`);