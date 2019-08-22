const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  const length = array.length
  let start_index = 0
  while(start_index < length) {
    let min = start_index
    let tmp = array[start_index]
    for(let i = start_index; i < array.length; i++) {
      if(array[i] < array[min]) {
        min = i
      }
    }
    array[start_index] = array[min]
    array[min] = tmp
    start_index++
  }
}


// Version from ZTM Algorithms course - using nested for loops
function selectionSortV2(array) {
  const length = array.length
  for(let i = 0; i < length; i++) {
    // set current index as minimum
    let min = i
    let temp = array[i]
    for(let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        // update minimum if current is lower than what we had previously
        min = j
      }
    }
    array[i] = array[min]
    array[min] = temp
  }
  return array
}

// selectionSort(numbers);
selectionSortV2(numbers);
console.log(numbers)