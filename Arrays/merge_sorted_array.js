/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = 0
    let j = 0
    let merged = []

    if (m === 0) {
      merged = nums2
    }
    
    if (n === 0) {
      merged = nums1
    }

    while(i < m) {
      if(nums1[i] < nums2[j]) {
        merged.push(nums1[i])
        i++
      } else {
        merged.push(nums2[j])
        j++
      }
    }
    
    while(j < n) {
      merged.push(nums2[j])
      j++
    }

    nums1 = merged
    return nums1
}

var merge2 = function(nums1, m, nums2, n) {

  if(m === 0) {
    nums1 = nums2
  } else {
    m--
    n--
  
    for(let i = nums1.length - 1; i >= 0; i--) {
      if(nums2[n] > nums1[m]) {
        nums1[i] = nums2[n]
        n--
      } else {
        nums1[i] = nums1[m]
        m--
      }
    }
  }
  return nums1
}

const nums1 = [1,2,3,0,0,0]
const m = 3
const nums2 = [2,5,6]
const n = 3

console.log(merge2([0], 0, [1], 1))
