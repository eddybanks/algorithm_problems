const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function insertionSort(array) {
  let i = 0
  let tmp = 0
  const len = array.length
  
  for(let j = 1; j < len; j++) {
    i = j - 1
    while(array[j] < array[i] & i >= 0) {
      i--
    }
    tmp = array[j]
    for(let x = j; x > i; x--) {
      array[x] = array[x-1]
    }
    array[i+1] = tmp
  }
}

insertionSort(numbers)
console.log(numbers)