/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const result = Number(digits.join('')) + 1
  console.log(result)
  for(let i = 0; i < result.length; i++) {
    digits[i] = result[i]
    console.log(result[i])
  }
  return digits
}

nums1 = [1,2,3]
nums2 = [4,3,2,1]
plusOne(nums1)
// console.log(plusOne(nums1))
// console.log(plusOne(nums2))