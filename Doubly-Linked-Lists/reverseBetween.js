class Node {
  constructor(value){
      this.value = value;
      this.next = null;
      this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
  }

  printList() {
      let temp = this.head;
      let output = "";
      if (temp === null) {
          console.log("empty");
          return;
      }
      while (temp !== null) {
          output += String(temp.value);
          temp = temp.next;
          if (temp !== null) {
              output += " <-> ";
          }
      }
      console.log(output);
  }

  getHead() {
      if (this.head === null) {
          console.log("Head: null");
      } else {
          console.log("Head: " + this.head.value);
      }
  }

  getTail() {
      if (this.tail === null) {
          console.log("Tail: null");
      } else {
          console.log("Tail: " + this.tail.value);
      }
  }

  getLength() {
      console.log("Length: " + this.length);
  }

  makeEmpty() {
      this.head = null;
      this.tail = null;
      this.length = 0;
  }

  push(value){
      const newNode = new Node(value);
      if (this.length === 0) {
          this.head = newNode;
          this.tail = newNode;
      } else {
          this.tail.next = newNode;
          newNode.prev = this.tail;
          this.tail = newNode;
      }
      this.length++;
      return this;
  }

  reverseBetween(startIndex, endIndex) {
      //   +===================================================+
      //   |               WRITE YOUR CODE HERE                |
      //   | Description:                                      |
      //   | - Reverses a portion of a doubly linked list      |
      //   |   between startIndex and endIndex (inclusive).    |
      //   | - Only the specified segment is reversed; the     |
      //   |   rest of the list remains unchanged.             |
      //   |                                                   |
      //   | Behavior:                                         |
      //   | - A dummy node is used to handle edge cases       |
      //   |   where the head might be part of the reversal.   |
      //   | - The `prev` pointer moves to the node before     |
      //   |   the reversal segment.                           |
      //   | - Nodes are extracted and reinserted at the       |
      //   |   front of the sublist to reverse their order.    |
      //   | - Both `.next` and `.prev` pointers are updated   |
      //   |   to maintain valid links.                        |
      //   | - The list's head is updated after reversal.      |
      //   +===================================================+
      if (startIndex < 0 || startIndex >= endIndex || this.length < 2) return;
        const dummyNode = new Node();
        let prev = dummyNode;
        dummyNode.next = this.head;
        this.head.prev = dummyNode;
        for(let i = 0; i < startIndex; i++) {
            prev = prev.next;
        }
        
        let current = prev.next;
        for(let i = 0; i < endIndex - startIndex; i++) {
            let toMove = current.next
            current.next = toMove.next
            if(toMove.next) {
              toMove.next.prev = current;
            }
            toMove.next = prev.next
            prev.next.prev = toMove;
            prev.next = toMove
            toMove.prev = prev;
        }
        
        this.head = dummyNode.next;
        if(this.head) {
            this.head.prev = null
        }
  }
  
}






// ------------------
// 🔍 Test Cases
// ------------------

console.log("Test 1: Reverse middle segment (1 to 4)");
const dll1 = new DoublyLinkedList(3);
[8, 5, 10, 2, 1].forEach(n => dll1.push(n));
console.log("BEFORE:");
dll1.printList();
dll1.reverseBetween(1, 4);
console.log("AFTER:");
dll1.printList();
console.log("-----------------------------------");

console.log("Test 2: Reverse full list");
const dll2 = new DoublyLinkedList(1);
[2, 3, 4, 5].forEach(n => dll2.push(n));
console.log("BEFORE:");
dll2.printList();
dll2.reverseBetween(0, 4);
console.log("AFTER:");
dll2.printList();
console.log("-----------------------------------");

console.log("Test 3: No-op on single node");
const dll3 = new DoublyLinkedList(9);
console.log("BEFORE:");
dll3.printList();
dll3.reverseBetween(0, 0);
console.log("AFTER:");
dll3.printList();
console.log("-----------------------------------");

console.log("Test 4: Reverse first few nodes");
const dll4 = new DoublyLinkedList(7);
[8, 9].forEach(n => dll4.push(n));
console.log("BEFORE:");
dll4.printList();
dll4.reverseBetween(0, 2);
console.log("AFTER:");
dll4.printList();
console.log("-----------------------------------");


