const fib = (n) => {
  if (n < 2) {
    return n
  } else {
    return (n - 2) + (n - 1)
  }
}

console.log(fib(10))