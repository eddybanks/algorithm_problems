var containsDuplicate = function(nums) {
  for(let i=0; i<nums.length; i++) {
    for(let j=i; j<nums.length; j++) {
      if(nums[i] === nums[j] & i !== j) {
        return true
      }
    }
  }
  return false
};

let a = [1,2,3,1]
let b = [1,1,1,3,3,4,3,2,4,2]
let c = [1,2,3,4]

console.log(containsDuplicate(a))
console.log(containsDuplicate(b))
console.log(containsDuplicate(c))