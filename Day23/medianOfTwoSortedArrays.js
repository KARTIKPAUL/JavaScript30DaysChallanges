function findMedianSortedArrays(nums1, nums2) {
    let a1 = nums1.length;
    let b1 = nums2.length;
    let c1 = a1 + b1;
    let c = new Array(c1);
    
    for (let i = 0; i < a1; i++) {
        c[i] = nums1[i];
    }
    for (let i = 0; i < b1; i++) {
        c[a1 + i] = nums2[i];
    }

    c.sort((x, y) => x - y);
    let mid = Math.floor(c1 / 2);
    let ans = 0;
    
    if (c1 % 2 === 0) {
        ans = (c[mid] + c[mid - 1]) / 2;
    } else {
        ans = c[mid];
    }
    
    return ans;
}

console.log(findMedianSortedArrays([1, 3], [2]));  
console.log(findMedianSortedArrays([1, 2], [3, 4])); 
