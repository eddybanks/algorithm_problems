// Given an array of positive numbers and a positive number ‘S’,
// find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’.
// Return 0 if no such subarray exists.

const smallest_subarray_with_given_sum = function (s, arr) {
  // TODO: Write your code here
  let windowSum = 0,
    minLength = Infinity,
    windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    while (windowSum >= s) {
      minLength = Math.min(minLength, windowEnd + 1 - windowStart);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }

  if (minLength === Infinity) return 0;

  return minLength;
};

// Tests
const sample_tests = [
  {
    arr: [2, 1, 5, 2, 3, 2],
    s: 7,
  },
  {
    arr: [2, 1, 5, 2, 8],
    s: 7,
  },
  {
    arr: [3, 4, 1, 1, 6],
    s: 8,
  },
];

sample_tests.map((test) =>
  console.log(
    `Smallest subarray: ${smallest_subarray_with_given_sum(test.s, test.arr)}`
  )
);
