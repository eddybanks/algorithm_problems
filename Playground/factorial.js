function factorialIterative(n) {
  let answer = 1;
  for (let i = n; i >= 1; i--) {
    answer = i * answer;
  }
  return answer;
}

function factorialRecursive(n) {
  if (n < 2) {
    return 1;
  }
  return n * factorialRecursive(n - 1);
}

let number = 1;

console.log(factorialIterative(number));
console.log(factorialRecursive(number));
