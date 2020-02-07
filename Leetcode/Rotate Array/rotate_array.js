let rotate = function(nums, k) {
  let x = nums.slice(nums.length-k, nums.length).concat(nums.slice(0,nums.length-k))
  return x
}

let rotate_shift = function(nums, k) {
  for(let i = 0; i < k; i++) {
    let tmp = nums[nums.length - 1]
    nums.pop()
    nums.unshift(tmp)
  }
}

let arr = [1,2,3,4,5,6,7]
let arr2 = [-1,-100,3,99]
const k = 3
const l = 2
rotate_shift(arr2, l)
console.log(arr2)