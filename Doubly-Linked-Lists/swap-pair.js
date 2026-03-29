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
      this.length = 1;
  }

  printList() {
      let temp = this.head;
      while (temp !== null) {
          console.log(temp.value);
          temp = temp.next;
      }
  }

  getHead() {
      if (this.head === null) {
          console.log("Head: null");
      } else {
          console.log("Head: " + this.head.value);
      }
  }

  getLength() {
      console.log("Length: " + this.length);
  }

  makeEmpty() {
      this.head = null;
      this.length = 0;
  }

  push(value) {
      const newNode = new Node(value);
      if (this.length === 0) {
          this.head = newNode;
      } else {
          let currentNode = this.head;
          while (currentNode.next !== null) {
              currentNode = currentNode.next;
          }
          currentNode.next = newNode;
          newNode.prev = currentNode;
      }
      this.length++;
  }

  // WRITE THE SWAPPAIRS METHOD HERE //
  swapPairs(){
    if(!this.head || !this.head.next) return null;
    let dummy = new Node();
    dummy.next = this.head;
    let previous = dummy;
    let current = this.head;

    while(current && current.next) {
      let f = current;
      let s = current.next;

      // swap
      previous.next = s
      f.next = s.next;
      f.prev = s;
      s.next = f;
      s.prev = previous;

      // re-position
      previous = f
      current = f.next;
    }

    this.head = dummy.next;
    this.head.prev = null;
    this.tail = previous;

  }
  /////////////////////////////////////

}



let myDoublyLinkedList = new DoublyLinkedList(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);
myDoublyLinkedList.push(4);
myDoublyLinkedList.push(5);

console.log("Original List 1:");
myDoublyLinkedList.printList();

myDoublyLinkedList.swapPairs();
console.log("\nList 1 after swapping pairs:");
myDoublyLinkedList.printList();

let myDoublyLinkedList2 = new DoublyLinkedList(1);
myDoublyLinkedList2.push(2);
myDoublyLinkedList2.push(3);
myDoublyLinkedList2.push(4);
myDoublyLinkedList2.push(5);
myDoublyLinkedList2.push(6);

console.log("\nOriginal List 2:");
myDoublyLinkedList2.printList();

myDoublyLinkedList2.swapPairs();
console.log("\nList 2 after swapping pairs:");
myDoublyLinkedList2.printList();

/*
  EXPECTED OUTPUT:
  ----------------
  Original List 1:
  1
  2
  3
  4
  5

  List 1 after swapping pairs:
  2
  1
  4
  3
  5

  Original List 2:
  1
  2
  3
  4
  5
  6

  List 2 after swapping pairs:
  2
  1
  4
  3
  6
  5
*/
