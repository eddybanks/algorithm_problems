class Stack {
  constructor() {
    this.array = []
    this.top = null
    this.bottom = null
    this.length = 0
  }

  push(value) {
    this.array.push(value)
    this.top = this.array[this.array.length - 1]
    this.bottom = this.array[0]
    this.length++
    return this
  }

  pop() {
    if(this.top === this.bottom) {
      this.bottom = null
    }
    this.array.pop()
    this.top = this.array[this.array.length - 1]
    this.length--
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