class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    const holdingPointer = this.top;
    if (this.length === 1) {
      this.bottom = null;
      this.top = null;
    } else {
      this.top = this.top.next;
    }
    this.length--;
    return holdingPointer;
  }

  isEmpty() {
    if (this.length === 0) {
      return true;
    }
  }
}

const myStack = new Stack();
myStack.push("Google");
myStack.push("Udemy");
myStack.pop();
myStack.push("Discord");
console.log(myStack);
console.log(myStack.peek());
// console.log(myStack.printList());
// console.log(myStack.peek())
