class Node {
  constructor(value){
      this.value = value;
      this.next = null;
  }
}

class LinkedList {
  constructor(value) {
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = this.head;
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

  getTail() {
      if (this.tail === null) {
          console.log("Tail: null");
      } else {
          console.log("Tail: " + this.tail.value);
      }
  }

  makeEmpty() {
      this.head = null;
      this.tail = null;
      this.length = 0;
  }

  push(value) {
      const newNode = new Node(value);
      if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
      } else {
          this.tail.next = newNode;
          this.tail = newNode;
      }
  }
  
  // kiểm tra 1 linked list có vòng lặp (chu kỳ)
  // tức là node cuối được liên kết với 1 node trong cùng danh sách
  hasLoop(){
    if(!this.head) return false
    let snow = this.head
    let fast = this.head
    while(fast != null && fast.next != null) {
      snow = snow.next
      fast = fast.next.next

      if(snow == fast) return true
    }

    return false

  }
  //////////////////////////////////////////

}


// Create a new list with an even number of elements
let myLinkedList2 = new LinkedList(1);
myLinkedList2.push(2);
myLinkedList2.push(3);
myLinkedList2.push(4);
myLinkedList2.push(5);
myLinkedList2.push(6);

console.log("\nOriginal list 2:");
myLinkedList2.printList();

const hasLoopResult = myLinkedList2.hasLoop();
console.log(`\nHas loop? ${hasLoopResult}`);


// Create a loop for testing purposes
myLinkedList2.tail.next = myLinkedList2.head.next; // Create a loop by linking tail to the second node

const hasLoopResultAfterLoop = myLinkedList2.hasLoop();
console.log(`\nHas loop after creating a loop? ${hasLoopResultAfterLoop}`);


/*
  EXPECTED OUTPUT:
  ----------------
  Has loop? false
 Has loop after creating a loop? true
*/
