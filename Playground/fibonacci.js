function fibonacciIterative(n) {
  for (let i = 1; i < n; i++) {}
}

function fibonacciRecursive(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(6));
