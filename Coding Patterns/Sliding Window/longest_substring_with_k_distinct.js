const longest_substring_with_k_distinct = function (str, k) {
  // TODO: Write your code here
  let maxLength = 0,
    windowStart = 0,
    distinctCount = 0,
    charCount = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let currentChar = str[windowEnd];
    if (charCount[currentChar]) {
      charCount[currentChar] += 1;
    } else {
      charCount[currentChar] = 1;
      distinctCount += 1;
    }

    while (distinctCount > k) {
      charCount[str[windowStart]] -= 1;
      if (charCount[str[windowStart]] === 0) {
        distinctCount -= 1;
      }
      windowStart++;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
};

// Tests
const sample_tests = [
  {
    str: "araaci",
    k: 2,
  },
  {
    str: "araaci",
    k: 1,
  },
  {
    str: "cbbebi",
    k: 3,
  },
  {
    str: "cbbebi",
    k: 10,
  },
];

sample_tests.map((test) =>
  console.log(
    `Longest substring: ${longest_substring_with_k_distinct(test.str, test.k)}`
  )
);
