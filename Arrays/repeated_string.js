// Complete the repeatedString function below.
function repeatedString(s, n) {
	let str = [] // I created this string to contain a substring of the string 
	let counter = 0 // this counter just counts the number of times a appears in the substring

	if(n <= 0) { // if s is empty, a naturally doesn't exist.
		return "'a' doesn't exist"
	} else if (s.length > n) { // if the length of s is greater than n, then we just create a substring of s to work with
		str = s.substring(1,n) //is there substring inbuilt function?? you can use a for loop as an alternative too
	} else { // else create the substring to work with which should have a length close to n
		str = s.repeat( n/s.length + 1)
	}

	for (let j = 0; j < n; j++) {
		if(str[j] === 'a') { // increment the count for every appearance of 'a'
			counter++
		}
	}
	if(counter === 0) {
		return "'a' doesn't exist"
	}
	return counter 
}

let test1 = 'aba'
let test2 = 'a'
let test3 = 'aaaaaaaaaaaaaa'
let test4 = 'bsdfsdfsdf' 
console.log(repeatedString(test1, 10))
console.log(repeatedString(test2, 100))
console.log(repeatedString(test3, 56))
console.log(repeatedString(test4, 3))
console.log(repeatedString(test1, -10))