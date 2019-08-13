/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let tmpCount = nums[0]
  let arr = { }

  for(let i = 0; i < nums.length; i++) {
    if(arr[nums[i]]) {
      ++arr[nums[i]]
      if(arr[nums[i]] >= arr[tmpCount]) {
        tmpCount = nums[i]
      }
    } else {
      arr[nums[i]] = 1
    }
  }
  return tmpCount
};

nums1 = [3,2,3]
nums2 = [2,2,1,1,1,2,2]
nums3 = [32]
nums4 = [6,5,5]
// majorityElement(nums4)
console.log(majorityElement(nums4))