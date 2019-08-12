const nums1 = [1,1,2]
const nums2 = [0,0,1,1,1,2,2,3,3,4]

// var removeDuplicates = function(nums) {
//   nums = new Set(nums)
//   console.log(nums)
//   return nums.size
// }

var removeDuplicates = function(nums) {
  let i = 0;
  let j = 1;
  while(j < nums.length) {
    if(nums[j] > nums[i]) {
      i++
      nums[i] = nums[j]
      j++
      console.log(nums)
    } else {
      j++
      console.log(nums)
    }
  }
  console.log(nums)
  return i + 1
}

console.log(removeDuplicates(nums1))
console.log(removeDuplicates(nums2))

