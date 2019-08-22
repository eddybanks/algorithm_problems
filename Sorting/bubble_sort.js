const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  let length =  array.length
  let tmp = array[0]
  while(length > 1) {
    for(i = 1; i < length; i++) {
      if(array[i] < array[i-1]) {
        tmp = array[i]
        array[i] = array[i-1]
        array[i-1] = tmp
      }
    }
    length--
  }
}

bubbleSort(numbers);
console.log(numbers);