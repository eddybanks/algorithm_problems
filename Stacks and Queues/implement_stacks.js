class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null
    this.bottom = null
    this.length = 0
  }

  peek() {
    if(this.top === null) {
      return null
    } else {
      return this.top
    }
  }

  push(value) {
    const newNode = new Node(value)
    if(this.isEmpty()) {
      this.top = newNode
      this.bottom = newNode
    } else {
      this.top.next = newNode
      this.top = newNode
    }
    this.length++
    return this
  }

  pop() {
    let poppedNode = this.top
    if(!this.isEmpty()) {
      delete this.top
      this.length--
      return poppedNode
    }
  }

  isEmpty() {
    if(this.top === null) {
      return 'Empty Stack!!'
    }
  }

  printList() {
    const arrList = []
    let currentNode = this.bottom
    while(currentNode !== null) {
      arrList.push(this.currentNode.value)
      currentNode = currentNode.next
    }
    return arrList
  }
}

const myStack = new Stack()
myStack.push('Discord')
myStack.push('Udemy')
myStack.push('Google')
console.log(myStack)
myStack.pop()
console.log(myStack)
// myStack.pop()
console.log(myStack)
// myStack.pop()
console.log(myStack)