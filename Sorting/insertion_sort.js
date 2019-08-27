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

// ZTM Version of insertion sort
function ztmInsertionSort(array) {
  const length = array.length
  for(let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      // move number to the first position
      array.unshift(array.splice(i,1)[0])
    } else {
      // find where number should go
      for(let j = 1; j < i; j++) {
        if(array[i] > array[j-1] && array[i] < array[j]) {
          array.splice(j,0,array.splice(i,1)[0])
        }
      }
    }
  }
}

// insertionSort(numbers)
ztmInsertionSort(numbers)
console.log(numbers)