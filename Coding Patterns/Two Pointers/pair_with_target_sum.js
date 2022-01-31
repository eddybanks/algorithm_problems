const pair_with_targetsum = function (arr, target_sum) {
  // TODO: Write your code here
  let startPointer = 0,
    endPointer = arr.length - 1;
  while (startPointer < endPointer) {
    let arrSum = arr[startPointer] + arr[endPointer];
    if (arrSum > target_sum) {
      endPointer--;
    } else if (arrSum < target_sum) {
      startPointer++;
    } else {
      return [startPointer, endPointer];
    }
  }
  return [-1, -1];
};

const sample_tests = [
  {
    arr: [1, 2, 3, 4, 6],
    target_sum: 6,
    expected_output: [1, 3],
  },
  {
    arr: [2, 5, 9, 11],
    target_sum: 11,
    expected_output: [0, 2],
  },
];

sample_tests.map((test, idx) => {
  if (
    JSON.stringify(test.expected_output) ===
    JSON.stringify(pair_with_targetsum(test.arr, test.target_sum))
  ) {
    console.log(
      "\n-------------Test passed sample",
      idx + 1,
      "-------------\n"
    );
  }
  console.log(
    "The pair with the expected sum of",
    test.target_sum,
    ", from the array: ",
    test.arr,
    " is: ",
    pair_with_targetsum(test.arr, test.target_sum)
  );
});
