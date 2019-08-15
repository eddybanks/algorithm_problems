class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }

  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    this.length++
    return this
  }

  printList() {
    const array = []
    let currentNode = this.head
    while(currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array;
  }

  insert(index, value) {
    // check params
    if (index >= this.length) {
      return this.append(value)
    }

    const newNode = new Node(value)
    const leadNode = this.traverseToIndex(index-1)
    const endNode = leadNode.next
    leadNode.next = newNode
    newNode.next = endNode
    this.length++
    return this
  }

  traverseToIndex(index) {
    let counter = 0
    let currentNode = this.head
    while(counter !== index) {
      currentNode = currentNode.next
      counter++
    }
    return currentNode
  }

  remove(index) {
    // Check params
    if(index === 0) {
      this.head = this.head.next
      this.length--
      return this
    }
    if(index > this.length) {
      console.log("Index out of range! Try again!!")
      return this
    }
    const deleteNode = this.traverseToIndex(index-1)
    deleteNode.next = deleteNode.next.next
    this.length --
    return this
  }

  reverse() {
    if(!this.head.next) { // also if this.length === 1
      return this.head
    }
    let first = this.head
    this.tail = this.head
    let second = first.next
    while(second) {
      const temp = second.next
      second.next = first
      first = second
      second = temp
    }
    this.head.next = null
    this.head = first
    return this
  }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(2, 99)
myLinkedList.insert(200, 909)
myLinkedList.remove(2)
console.log(myLinkedList.printList())
myLinkedList.reverse()
console.log(myLinkedList.printList())