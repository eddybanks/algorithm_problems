/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let iteration = 0
  let potentialNoneZero = 0

  while(iteration < nums.length)
  {
    if(nums[iteration] !== 0) {
      nums[potentialNoneZero] = nums[iteration]
      if(iteration !== 0 & iteration !== potentialNoneZero) {
        nums[iteration] = 0
      }
      potentialNoneZero++
    } 
    iteration++
  }
};

let a = [0,1,0,3,12]
let b = [0,0,0,1]
let c = [0,0,0]
let d = [-1,0,-2]
let e = [1,0,2]
let f = [1,3,2]
moveZeroes(a)
console.log(a)
moveZeroes(b)
console.log(b)
moveZeroes(c)
console.log(c)
moveZeroes(d)
console.log(d)
moveZeroes(e)
console.log(e)
moveZeroes(f)
console.log(f)