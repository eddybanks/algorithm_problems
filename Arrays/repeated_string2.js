function repeatedString(s,n) {
  let counter = 0
  let remaining = 0
  if(s.length <= 0) {
    return 0
  } else if(s.length > n) {
    s = s.substring(0,n)
  } 

  for(let i = 0; i < s.length; i++) {
    if(s[i] === 'a') {
      counter++
    }
  }

  if(s.length < n) {
    for(let j = 0; j < n % s.length; j++) {
      if(s[j] === 'a') {
        remaining++
      }
    }

    counter = counter * Math.floor((n / s.length)) + remaining
  }

  return counter
}


let a = 'ababa'
let b = 'a'
let c = 'ceebbcb'
let d = 'bsdfsdfsdf' 
let e = 'ojowrdcpavatfacuunxycyrmpbkvaxyrsgquwehhurnicgicmrpmgegftjszgvsgqavcrvdtsxlkxjpqtlnkjuyraknwxmnthfpt'
console.log(repeatedString(a, 10))
console.log(repeatedString(a, 3))
console.log(repeatedString(b, 1000000000000))
console.log(repeatedString(c, 817723))
console.log(repeatedString(d, 3))
console.log(repeatedString(e, 685118368975))