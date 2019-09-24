const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function bubbleSort(array) {
  let len = array.length
  while(len > 1) {
    let tmp = array[0]
    for(let i = 1; i < len; i++) {
      if(array[i-1] > array[i]) {
        tmp = array[i-1]
        array[i-1] = array[i]
        array[i] = tmp
      }
    }
    len--
  }
}

bubbleSort(numbers)
console.log(numbers)