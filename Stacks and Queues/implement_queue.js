class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }

  peek() {
    return this.first
  }

  enqueue(value) {
    const newNode = new Node(value)
    if(this.first === null) {
      this.first = newNode
    } else {
      this.last.next = newNode
    }
    this.last = newNode
    this.length++
    return this
  }

  dequeue() {
    if(!this.first) {
      return null
    } 
    if(this.first === this.last) {
      this.last = null
    }
    const holder = this.first
    this.first = holder.next
    this.length--
    return this
  }
}

const queueList = new Queue()
queueList.enqueue('Joy')
queueList.enqueue('Matt')
queueList.enqueue('Pavel')
queueList.enqueue('Samir')
queueList.dequeue()
queueList.dequeue()
queueList.peek()
console.log(queueList)