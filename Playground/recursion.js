function findFactorialRecursive(number) {
  if(number === 2) {
    return 2
  }
  return number * findFactorialRecursive(number - 1) 
}

function findFactorialIterative(number) {
  let result = 1
  for(let x = 2; x <= number; x++) {
    result = result * x
  }
  return result
}
x = 5
console.log(findFactorialRecursive(x))
console.log(findFactorialIterative(x))