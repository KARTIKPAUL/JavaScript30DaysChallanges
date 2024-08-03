let maxArea = function(height){
    let left = 0;
    let right = height.length-1
    let maxArea = 0
    while(left<right){
        let area =Math.min(height[left],height[right]) * (right-left)
        maxArea = Math.max(maxArea,area)
        if(height[left]<height[right]){
            left++
        }else{
            right--
        }
    }
    return maxArea
}

let arr1 = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(arr1));

let arr2 = [1,1];
console.log(maxArea(arr2));

