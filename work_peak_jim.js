function findAllPeakElements(nums) {
    let arrpeak = [];

    if (nums.length === 1) {
        return [0];
    }
    
    if (nums.length === 2) {
        return nums[0] > nums[1] ? [0] : [1];
    }

    if (nums[0] > nums[1]) {
        arrpeak.push(0);
    }

    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
            arrpeak.push(i);
        }
    }

    if (nums[nums.length - 1] > nums[nums.length - 2]) {
        arrpeak.push(nums.length - 1);
    }

    return arrpeak;
}

// Test the function
const nums1 = [3, 2, 3, 1];
const nums2 = [1, 2, 1, 3, 5, 6, 4];
const nums3 = [1, 2, 1, 4, 5, 6, 4, 7];

console.log(`Peak element index of : ${nums1} -> ${findAllPeakElements(nums1)}`);
console.log(`Peak element index of : ${nums2} -> ${findAllPeakElements(nums2)}`);
console.log(`Peak element index of : ${nums3} -> ${findAllPeakElements(nums3)}`);