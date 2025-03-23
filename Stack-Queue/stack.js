class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }
  add(value) { // TODO: gọi là push nhưng đó là với array do thêm vào cuối
              // TODO: linkedlist thì nó ngược lại thêm vào đầu linkedlist
    const newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this
  }
  remove() { // TODO: gọi là pop đối với array do xóa ở cuối
            // đối với linked list nó xóa đầu nên đặt khác lúc học lý thuyết đỡ nhầm
    if (!this.top) return null;
    let temp = this.top
    this.top = this.top.next
    temp.next = null
    this.length--
    return temp
  }
}

const stack = new Stack(1);
stack.add(2);
stack.add(3);
console.log(stack); // Stack { top: Node { value: 3, next: Node { value: 2, next: Node { value: 1, next: null } } }, length: 3 }
console.log(stack.remove()); // 3
console.log(stack);

// =============== TRIỂN KHAI VỚI MẢNG ==============
class StackArray {
  constructor() {
    this.stack = []
  }
  push(value) {
    // thêm phần tử cuối mảng
    return this.stack.push(value);
  }
  pop() {
    // xóa phần tử cuối mảng
    return this.stack.pop()
  }
  get length() {
    return this.stack.length
  }
  get(index) {
    return this.stack[index]
  }

  set(index, value) {
    if (index >= 0 && index < this.length) {
      this.stack[index] = value;
      return true;
    }
    return false;
  }
}

const stackArray = new StackArray();
stackArray.push(1);
stackArray.push(2);
stackArray.push(3);
console.log(stackArray); // StackArray { stack: [ 1, 2, 3 ], length: 3 }
console.log(stackArray.pop()); // 3
console.log(stackArray);