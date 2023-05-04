function isPalindrome(s) {
  let first_char = 0
  let last_char = s.length - 1

  while (last_char > first_char) {
    console.log('first: ', s[first_char], ' last: ', s[last_char])
    if(s[first_char] !== s[last_char]) {
      return false;
    }
    first_char++;
    last_char--;
  }
  return true;
}

console.log(isPalindrome("abab"))