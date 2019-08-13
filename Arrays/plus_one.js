/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const result = (Number(digits.join('')) + 1).toString()
  for (let i = 0; i < result.length; i++) {
    digits[i] = Number(result[i])
  }
  return digits
}

var plusOneMod = function(digits) {
  let result = 0
  for(let i = 0; i < digits.length; i++) {
    result += digits[i] * Math.pow(10,(digits.length - i - 1))
  }
  result++
  let resultLength = 0
  while(result > 0) {
    div = result / 10
    mod = result % 10
    resultLength++
  }
  return result
}

nums1 = [1,2,3]
nums2 = [4,3,2,1]
a = plusOneMod(nums1)
console.log(a)
// console.log(plusOne(nums2))