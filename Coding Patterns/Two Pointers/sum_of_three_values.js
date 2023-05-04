const testValues = [
  { nums: [2, 3, 1], target: 6 },
  { nums: [1, -1, 1], target: 2 },
  { nums: [1, 2, 4, 6, 8, 20], target: 31 },
]

function findSumOfThree(nums, target) {
  let high = nums.length - 1;

  nums.sort((a, b) => a - b);
  let low, sum;

  for(let current = 0; current < nums.length - 2; current++) {
    low = current + 1;
    while(low < high) {
      sum = nums[current] + nums[low] + nums[high];
      if (sum === target) {
        return true;
      } else if (sum < target) {
        low++;
      } else {
        high--;
      }
    }
  }
  return false;
}

// testValues.map(({nums, target}) => console.log(findSumOfThree(nums, target)))
function main() {
  let numsLists = [
      [3, 7, 1, 2, 8, 4, 5],
      [-1, 2, 1, -4, 5, -3],
      [2, 3, 4, 1, 7, 9],
      [1, -1, 0],
      [2, 4, 2, 7, 6, 3, 1],
  ];

  let testLists = [10, 7, 20, -1, 8];

  numsLists.map((numList, i) => {
      console.log(i + 1 + ".\tInput array:", numsLists[i]);

      if (findSumOfThree(numsLists[i], testLists[i]))
          console.log("\tSum for", testLists[i], "exists");
      else console.log("\tSum for", testLists[i], "does not exist");

      console.log("-".repeat(100));
  });
}

main();