// Remove Duplicates from Sorted Array

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]

// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4, _, _, _, _,_ ]


function removeDuplicates(nums) {
    // If the array is empty, return 0
    if (nums.length === 0) return 0;
  
    // i points to the last unique element
    let i = 0;
  
    // Start from the second element and scan the array
    for (let j = 1; j < nums.length; j++) {
      // If current element is not equal to last unique
      if (nums[j] !== nums[i]) {
        i++;               // move i to the next position
        nums[i] = nums[j]; // overwrite with the new unique element
      }
    }
  
    // i + 1 is the count of unique elements
    return i + 1;
  }
  
  // ✅ Example usage:
  let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  
  let k = removeDuplicates(nums);
  
  // Output the result
  console.log("Number of unique elements:", k);
  console.log("Array after removing duplicates:", nums.slice(0, k));
  
