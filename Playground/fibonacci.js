function fibonacciIterative(n) {
  let x = 0
  for(let i = 0; i < n; i++) {
    x = x + i
  }
  return x + n
}

function fibonacciRecursive(n) {
  
}

let number = 4

console.log(fibonacciIterative(number))