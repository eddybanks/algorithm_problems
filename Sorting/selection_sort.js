const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  let min_index = 0
  let min = array[min_index]
  let start_index = 0
  let tmp = 0
  while(start_index < array.length) {
    for(let i = start_index; i < array.length; i++) {
      if(array[i] < min) {
        min_index = i
        min = array[min_index]
      }
    }
    tmp = array[start_index]
    array[start_index] = min
    array[min_index] = tmp
    start_index ++
    min_index = start_index
    min = array[start_index]
  }
}

selectionSort(numbers);
console.log(numbers)