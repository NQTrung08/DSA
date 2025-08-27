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
              output += " -> ";
          }
      }
      console.log(output);
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
      this.length++;
      return this;
  }
  
  //   +===================================================+
  //   |               WRITE YOUR CODE HERE                |
  //   | Description:                                      |
  //   | - This method sorts the linked list using the     |
  //   |   bubble sort algorithm.                          |
  //   |                                                   |
  //   | Side Effects:                                     |
  //   | - The list will be sorted in place, so the        |
  //   |   original list gets modified.                    |
  //   |                                                   |
  //   | Tips:                                             |
  //   | - The method uses two nested while loops.         |
  //   | - It swaps adjacent nodes if they are out of      |
  //   |   order.                                          |
  //   | - It repeats until the list is sorted.            |
  //   | - The sortedUntil variable helps to reduce the    |
  //   |   number of comparisons.                          |
  //   +===================================================+

  bubbleSort() {
    if(this.length < 2) return;
    let sortedUntil = null;
    while(sortedUntil !== this.head.next) {
        let current = this.head;
        while(current.next !== sortedUntil) {
            let nextNode = current.next
            if(current.value > nextNode.value) {
                let temp = nextNode.value
                nextNode.value = current.value
                current.value = temp
            }
            current = current.next
        }
        sortedUntil = current
    }

  }
}



// ------------------------------------
//  Sort list with random elements
// ------------------------------------
const list3 = new LinkedList(3);
list3.push(2);
list3.push(6);
list3.push(4);
console.log("Sort list with random elements:");
list3.printList(); // Should print: 3 -> 1 -> 4 -> 2
list3.bubbleSort();
list3.printList(); // Should print: 1 -> 2 -> 3 -> 4
console.log("---------------");
