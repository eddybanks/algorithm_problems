class Node {
  constructor(value) {
    this.value = value
    this.prev = null
    this.next = null
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value)
    this.tail = this.head
    this.length = 1
  }

  prepend(value) {
    let newNode = new Node(value) 
    newNode.next = this.head
    this.head.prev = newNode
    this.head = newNode
    this.length++
    return this
  }

  append(value) {
    const newNode = new Node(value)
    newNode.prev = this.tail
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }

  insert(index, value) {
    if(index >= this.length) {
      return this.append(value)
    }
    const newNode = new Node(value)
    const leader = this.traverseForwardToIndex(index-1)
    const follower = leader.next
    leader.next = newNode
    newNode.prev = leader
    newNode.next = follower
    follower.prev = newNode
    this.length++
    return this
  }

  remove(index) {
    let leader = this.traverseForwardToIndex(index - 1)
    let unwantedNode = leader.next
    leader.next = unwantedNode.next
    leader.next.prev = leader
    this.length--
    return this
  }

  traverseForwardToIndex(index) {
    let counter = 0;
    let currentNode = this.head
    while (counter < index) {
      currentNode = currentNode.next
      counter++
    }
    return currentNode
  }

  traverseBackwardByIndex(index) {
    let counter = this.length;
    let currentNode = this.tail
    while (counter > index) {
      currentNode = currentNode.prev
      counter--
    }
    return currentNode
  }

  printList() {
    const arrayList = []
    let currentNode = this.head
    while(currentNode !== null) {
      arrayList.push(currentNode.value)
      currentNode = currentNode.next
    }
    return arrayList
  }
}


let a = new DoublyLinkedList(10)
a.append(5)
a.append(15)
a.append(12)
console.log(a.printList())
a.prepend(752)
console.log(a.printList())
a.append(1332)
console.log(a.printList())
a.remove(3)
console.log(a.printList())
a.remove(1)
console.log(a.printList())
a.insert(1, 32)
console.log(a.printList())
console.log(a)