// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]:
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]:
// It should return 1

// Given an array = [2,3,4,5]:
// It should return undefined
function first_recurring(arr) {
  let count = 0;
  let arrDict = {};

  if (arr.length < 2) {
    return undefined;
  }

  while (count < arr.length) {
    let currentItem = arr[count];
    if (!arrDict[currentItem]) {
      arrDict[currentItem] = 1;
      count++;
    } else {
      return currentItem;
    }
  }
}

const a = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const b = [2, 1, 1, 2, 3, 5, 1, 2, 4];
const c = [2, 3, 4, 5];
const d = [];

console.log(first_recurring(a));
console.log(first_recurring(b));
console.log(first_recurring(c));
console.log(first_recurring(d));
