/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let result = []
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > result[result.length-1])
            result.append(nums[i])
            console.log(result, nums[i])
    }
    return result
};

const number = [0,0,1,1,1,2,2,3,3,4]
let x = removeDuplicates(number)
console.log(x)