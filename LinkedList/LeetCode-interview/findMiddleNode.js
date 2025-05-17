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
  
  // WRITE THE FINDMIDDLENODE METHOD HERE // 
  // findMiddleNode() {
  //     if(!this.head) return null
  //     let temp = this.head
  //     let count = 1
  //     while (temp.next != null) {
  //         count++;
  //         temp = temp.next
  //     }
  //     if(count % 2 != 0) {
  //         const index = Math.round(count/2)
  //         let current = this.head
  //         for(let i = 0; i < index - 1; i++) {
  //             current = current.next
  //         }
  //         return current
  //     } else {
  //         const index = Math.round(count/2)
  //         let current = this.head
  //         for(let i = 0; i < index; i++) {
  //             current = current.next
  //         }
  //         return current
  //     }
  // }
  findMiddleNode() {
      if(!this.head) return null
      let slow = this.head
      let fast = this.head
      while( fast != null && fast.next != null) {
          slow = slow.next
          fast = fast.next.next
      }
      return slow
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

const middleNode2 = myLinkedList2.findMiddleNode();
console.log(`\nMiddle node value of list 2: ${middleNode2.value}`);


/*
  EXPECTED OUTPUT:
  ----------------
  Original list:
  1
  2
  3
  4
  5
  Middle node value: 3
  Original list 2:
  1
  2
  3
  4
  5
  6
  Middle node value of list 2: 4
*/
