const palindrome = str => {
  return str.toLowerCase() === str.split('').reverse().join('').toLowerCase()
}

const a = 'Haha'
const b = 'Apa'

console.log(palindrome(a))
console.log(palindrome(b))