class MyArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  push(data) {
    this.data[this.length] = data;
    this.length++;
    return this.data;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    this.shiftItems(index);
    return this.data;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

let newArray = new MyArray();
newArray.push(9);
console.log(newArray);
newArray.push(54);
console.log(newArray);
newArray.push(-9);
console.log(newArray);
newArray.pop();
console.log(newArray);
newArray.delete(0);
console.log(newArray);
