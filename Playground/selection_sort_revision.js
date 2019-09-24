const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function selectionSort(array) {
  let j = 0
  let len = array.length
  while(j < len) {
    let min = j
    for(let i = j+1; i < len; i++) {
      if(array[i] < min) {
        min = i
      }
    }
    for(let k = j; k < min; k++) {
      
    }
    j++
  }
}

selectionSort(numbers)
console.log(numbers)