let nums = [3, 4, -45, 5, -1, 6, 54, -231, 30, 2];

function largestSubarray(arr) {
  let startPointer = 0;
  let largestSum = arr[0];
  let currentSum = arr[0];
  let subArray = [];

  for (let i = 1; i < arr.length; i++) {
    currentSum += arr[i];
    
    if (currentSum > largestSum) {
      largestSum = currentSum;
    } else {
      startPointer = i;
    }
  }
  return largestSum;
}

console.log(largestSubarray(nums));
