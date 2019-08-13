// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]:
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]:
// It should return 1

// Given an array = [2,3,4,5]:
// It should return undefined

function first_recurring_character(arr) {
  let hashList = {}
  let iteration = 0
  while(iteration < arr.length){
    if(hashList[arr[iteration]] !== undefined) {
      return arr[iteration]
    } else {
      hashList[arr[iteration]] = iteration
    }
    iteration++
  }
  return undefined
}

a = [2,5,1,2,3,5,1,2,4]
console.log(first_recurring_character(a))
b = [2,1,1,2,3,5,1,2,4]
console.log(first_recurring_character(b))
c = [2,3,4,5]
console.log(first_recurring_character(c))
