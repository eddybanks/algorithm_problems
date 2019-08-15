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
    this.head.prev = newNode
    newNode.next = this.head
    newNode.prev = null
    this.head = newNode
    this.length++
    return this
  }

  append(value) {
    let newNode = new Node(value)
    this.tail.next = newNode
    newNode.prev = this.tail
    newNode.next = null
    this.tail = newNode
    this.length++
    return this
  }

  traverseForwardToIndex(index) {
    let counter = 0;
    let currentNode = this.head
    while (counter < index) {
      currentNode = currentNode.next
      counter++
    }
  }

  traverseBackwardByIndex(index) {
    let counter = this.length;
    let currentNode = this.tail
    while (counter > index) {
      currentNode = currentNode.prev
      counter--
    }
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
a.prepend(752)
a.append(1332)
console.log(a.printList())