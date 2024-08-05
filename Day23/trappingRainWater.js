const trap = function(height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = height[left];
    let rightMax = height[right];
    let water = 0;

    while (left < right) {
        if (leftMax < rightMax) {
            left++;
            leftMax = Math.max(leftMax, height[left]);
            water += leftMax - height[left];
        } else {
            right--;
            rightMax = Math.max(rightMax, height[right]);
            water += rightMax - height[right];
        }
    }

    return water;    
};

const arr1 = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap(arr1));

const arr2 = [4,2,0,3,2,5];
console.log(trap(arr2));

