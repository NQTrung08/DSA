class Node {
  // tạo ra lớp này nhằm mục đích không phải viết lại logic tạo Node 
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null
    this.length = 0;
  }
  push(value) {
    // create new Node
    const newNode = new Node(value);
    // add Node to end
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  pop() {
    // remove Node from end ( 3 case: k node, 1 node, nhieu node)
    if (!this.head) return undefined
    let temp = this.head
    let prev = this.head
    while (temp.next != null) {
      prev = temp
      temp = temp.next
    }
    this.tail = prev
    this.tail.next = null
    if (this.length === 1) {
      this.tail = null
    }
    this.length--;
  }
  unshift(value) {
    // create new Node
    const newNode = new Node(value)
    // add Node to start ( 2 case: k node và nhieu node)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++;
  }
  shift() {
    // remove node first
    if (!this.head) return undefined
    let temp = this.head // để xác định node xóa nếu muốn trả về
    this.head = this.head.next
    temp.next = null
    if (this.length === 1) {
      this.head = null
      this.tail = null
    }
    this.length--;
    return temp
  }

  get(index) {
    // chỉ số phải lớn hơn 0 và nhở hơn kích thước của danh sách
    if (index < 0 || index > this.length) {
      return undefined
    }
    let temp = this.head
    for (let i = 0; i < index; i++) {
      temp = temp.next
    }
    return temp
  }

  set(index, value) {
    // ta dùng logic của get để lấy ra node cần set
    let temp = this.get(index) // return undefined or node
    if (temp) {
      temp.value = value
      return true
    }
    return false

  }
  insert(index, value) {
    // create new Node
    const newNode = new Node(value)
    // find correct position to insert Node
    // 3 case ( chèn đầu (unshift), chèn cuối (pop), chèn giữa)
    if (index < 0 || index > this.length) return false
    if (index === 0) {
      if (!this.head) {
        this.head = newNode
        this.tail = newNode
      } else {
        newNode.next = this.head
        this.head = newNode
      }
    }
    if (index === this.length) {
      if (!this.head) {
        this.head = newNode
        this.tail = newNode
      } else {
        this.tail.next = newNode
        this.tail = newNode
      }
    }
    // trường hợp chèn giữa thì
    // cần phải lấy node ở phải trước node cần chèn (gọi là temp)
    // gán temp.next = newNode.next
    // gán temp.next = newNode
    if (index > 0 && index < this.length) {
      // -----
      let temp = this.head
      for (let i = 0; i < index - 1; i++) {
        temp = temp.next
      }
      // --- có thể thay thành get(index-1)
      newNode.next = temp.next
      temp.next = newNode

    }
    this.length++
    return true
  }

  remove(index) {
    // có 3 case (xóa đầu (shift), xóa cuối (pop), xóa giữa)
    // lấy node phía trước node tại index gọi là prev
    // node tại index là temp
    // prev.next = temp.next
    // temp.next = null
    if (index < 0 || index > this.length - 1) return undefined

    // case 1: shift
    if (index === 0) {
      if (!this.head) return undefined
      let temp = this.head
      this.head = this.head.next
      if (this.length == 0) {
        this.tail = null
      }
      temp.next = null
      this.length--;
      return temp
    }
    // case 2: pop
    if (index === this.length - 1) {
      if (!this.head) return undefined
      let temp = this.head
      let prev = this.head
      while (temp.next != null) {
        prev = temp
        temp = temp.next
      }
      this.tail = prev
      this.tail.next = null
      if(this.length == 1) {
        this.tail = null
      }
      this.length--;
      return temp
    }
    // case 3 remove by index
    if (index > 0 && index < this.length) {
      let temp = this.head
      let prev = this.head
      for (let i = 0; i < index; i++) {
        prev = temp
        temp = temp.next
      }
      prev.next = temp.next
      temp.next = null
      this.length--;
      return temp
    }
  }

  reverse() {
    // đảo ngược thì số phần tử phải > 1
    // ta sẽ đảo head = tail và tail = head với temp
    // sau đó ta thêm 2 biết next = temp.next và prev = null(đứng trước temp)
    // ta sẽ lặp với 3 biến prev, temp, next 
    // thì next = temp.next
    // tiếp theo temp.next = prev
    // tiếp theo prev = temp // luôn là giá trị sau temp
    // tiếp đến temp = next // để tiếp tục duyệt
    let temp = this.head
    this.head = this.tail
    this.tail = temp
    let next = temp.next
    let prev = null
    for(let i = 0; i < this.length; i++) {
      next = temp.next
      temp.next = prev
      prev = temp
      temp = next // tiếp tục duyệt
    }
    return this
  }

  print(){
    let temp = this.head
    while(temp!== null){
      console.log(temp.value)
      temp = temp.next
    }
  }
}

const nodeOne = new LinkedList()
nodeOne.push(1)
console.log(nodeOne)
nodeOne.push(4)
console.log(nodeOne)
nodeOne.push(2)
console.log(nodeOne)
nodeOne.push(7)
console.log(nodeOne)
nodeOne.push(9)
nodeOne.print()
nodeOne.reverse()
nodeOne.print()
nodeOne.insert(5, 5)
nodeOne.print()