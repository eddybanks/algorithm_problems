// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]:
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]:
// It should return 1

// Given an array = [2,3,4,5]:
// It should return undefined

function first_recurring_character(arr) {
  let tmpHash = {}
  let num = 0
  let iteration = 0
  while(num < 1){
    if(tmpHash[arr[iteration]]) {
      ++tmpHash[arr[iteration]]
      return arr[iteration]
      ++num
    }
    ++iteration
  }
  return undefined
}

a = [2,5,1,2,3,5,1,2,4]
console.log(a)
b = [2,1,1,2,3,5,1,2,4]
console.log(b)
c = [2,3,4,5]
console.log(c)
