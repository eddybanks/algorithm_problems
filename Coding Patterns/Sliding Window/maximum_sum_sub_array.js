// Given an array of positive numbers and a positive number ‘k,’
// find the maximum sum of any contiguous subarray of size ‘k’.

// Brute force approach
const max_sub_array_of_size_k_brute = function (k, arr) {
  // TODO: Write your code here
  let maxSum = 0;
  for (let i = 0; i < arr.length - k + 1; i++) {
    let innerSum = 0;
    for (let j = i; j < i + k; j++) {
      innerSum += arr[j];
    }
    if (maxSum < innerSum) maxSum = innerSum;
    // maxSum = Math.max(maxSum, innerSum) makes use of js Math function
  }
  return maxSum;
};

// The above algorithm’s time complexity will be O(N*K), where ‘N’ is the total number of elements in the given array

// Optimized method
const max_sub_array_of_size_k_optimized = function (k, arr) {
  // TODO: Write your code here
  let windowSum = 0,
    maxSum = 0;
  let startPoint = 0;
  for (let i = 0; i < arr.length; i++) {
    windowSum += arr[i];

    if (i >= k - 1) {
      maxSum = Math.max(windowSum, maxSum);
      windowSum -= arr[startPoint];
      startPoint++;
    }
  }
  return maxSum;
};

// Tests
const sample_tests = [
  {
    arr: [2, 1, 5, 1, 3, 2],
    k: 3,
  },
  {
    arr: [2, 3, 4, 1, 5],
    k: 2,
  },
];

sample_tests.map((test) =>
  console.log(
    `Maximum sum of a subarray of size K with brute method: ${max_sub_array_of_size_k_brute(
      test.k,
      test.arr
    )}`
  )
);

sample_tests.map((test) =>
  console.log(
    `Maximum sum of a subarray of size K with optimal method: ${max_sub_array_of_size_k_brute(
      test.k,
      test.arr
    )}`
  )
);
