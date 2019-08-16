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
    return this.top
  }

  push(value) {
    const newNode = new Node(value)
    if(this.length === 0) {
      this.top = newNode
      this.bottom = newNode
    } else {
      const holder = this.top
      this.top = newNode
      this.top.next = holder
    }
    this.length++
    return this
  }

  pop() {
    if(!this.top) {
      return null
    }
    const holder = this.top
    this.top = this.top.next
    this.length--
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
myStack.push('Google')
myStack.push('Udemy')
console.log(myStack.peek())