/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let j = 0
  let tmp = nums[j]
  for(let i = 1; i < nums.length; i++) {
    if(nums[i] > nums[j]) {
      

    }
  }

};

const number = [0,0,1,1,1,2,2,3,3,4]
let len = removeDuplicates(number)
console.log("The length is", len)
for(let i = 0; i < len; i++) {
  print(nums[i])
}