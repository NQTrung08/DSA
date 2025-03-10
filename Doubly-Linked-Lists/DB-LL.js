class Node {
  constructor(value) {
    this.value = value
    this.next = null;
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value)
    this.head = newNode
    this.tail = this.head
    this.length = 1;
  }
  push(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++;
  }

  pop() {
    // TODO: xóa node cuối thì
    // phải xét TH có  1 node 
    // tail và head trỏ prev và next tới null
    // mà nếu ta xét this.tail = this.tail.prev => this.tail = null
    // this.tail.next = null => lỗi null.next?? 
    // ===> phải check TH 1 node trước
    if (!this.head) return undefined
    let temp = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = this.tail.prev
      this.tail.next = null
      temp.prev = null
    }
    this.length--;
    return temp
  }

  unshift(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }
    this.length++;
  }
  shift() {
    // TODO: xóa node đầu thì
    // ta dùng temp = this.head
    // this.head = this.head.next
    // this.head.prev = null
    // temp.next = null

    if (!this.head) return undefined
    let temp = this.head
    this.head = this.head.next
    this.head.prev = null
    temp.next = null
    if (this.length === 1) {
      this.head = null
      this.tail = null
    }
    this.length--;
    return temp

  }
  get(index) {
    // do là có con trỏ prev lên ta có thể duyệt từ tail ngược trở lại
    if (index < 0 || index >= this.length) return undefined
    let temp = this.head
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next
      }
    } else {
      temp = this.tail
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev
      }
    }
    return temp
  }

  set(index, value) {
    let temp = this.get(index)
    if (temp) {
      temp.value = value
      return true
    }
    return false
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return false
    if (index === 0) return this.unshift(value)
    if (index === this.length) return this.push(value)
    const newNode = new Node(value)
    let before = this.get(index - 1)
    let after = before.next
    before.next = newNode
    newNode.prev = before
    newNode.next = after
    after.prev = newNode
    this.length++;
    return true
  }
  remove(index) {
    // xóa node ở vị trí bất kỳ
    // thì case 0 và length vẫn thế
    // giờ sẽ có chút khác với ll đơn thì ta cần prev và temp để xác định trước sau
    // nhưng với doub ll thì ta chỉ cần temp
    // temp.prev.next = temp.next
    // temp.next.prev = temp.prev
    // temp.next = null
    // temp.prev = null
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()
    let temp = this.get(index)
    temp.prev.next = temp.next
    temp.next.prev = temp.prev
    temp.next = null
    temp.prev = null
    this.length--;
    return temp
  }

  print() {
    let temp = this.head
    while (temp) {
      console.log(temp.value)
      temp = temp.next
    }
    console.log('---------')
    temp = this.tail
    while (temp) {
      console.log(temp.value)
      temp = temp.prev
    }
  }
}

let myDoubly = new DoublyLinkedList(6);
myDoubly.push(7)
myDoubly.push(8)
myDoubly.push(9)
myDoubly.insert(4, 10)
console.log(myDoubly)
myDoubly.print()