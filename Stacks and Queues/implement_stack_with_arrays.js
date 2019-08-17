class Stack {
  constructor() {
    this.array = []
  }

  push(value) {
    this.array.push(value)
    return this
  }

  pop() {
    this.array.pop()
    return this
  }

  peek() {
    return array[this.length - 1]
  }
}
const myStack = new Stack()
myStack.push('Google')
console.log(myStack)
myStack.push('Udemy')
console.log(myStack)
myStack.pop()
console.log(myStack)
myStack.push('Discord')
console.log(myStack)
myStack.pop()
console.log(myStack)
myStack.pop()
console.log(myStack)
// console.log(myStack.peek())