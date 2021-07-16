function factorialIterative(n) {
  let answer = 1;
  if (n === 2) {
    answer = 2;
  }
  for (let i = 2; i <= number; i++) {
    answer *= i;
  }
  return answer;
}

function factorialRecursive(n) {
  if (n < 2) {
    return 1;
  }
  return factorialRecursive(n - 1) * n;
}

let number = 5;

console.log(factorialIterative(number));
// console.log(factorialRecursive(number));
