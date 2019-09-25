const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function selectionSort(array) {
  min = array[0]
  first = 1
  while(first < array.length){
    tmp = first - 1
    min = array[first]
    for(let i = first; i < array.length; i++) {
      if(array[i] < min) {
        min = array[i]
        tmp = i
      }
    }
    for(let j = tmp; j >= first; j--) {
      array[j] = array[j-1]
    }
    array[first-1] = min
    first++
  }
}

selectionSort(numbers)
console.log(numbers)