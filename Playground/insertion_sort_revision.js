const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  let tmp = array[0]
  let j = 0
  for(let i = 1; i < array.length; i++) {
    while(array[i] < array[j]) {
      j++
    }
  }
}

insertionSort(numbers);
console.log(numbers);