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
  if (!this.head) {
    this.head = newNode;
  } else {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }
  this.length++;
}

  //   +===================================================+
  //   |               WRITE YOUR CODE HERE                |
  //   | Description:                                      |
  //   | - This method converts a binary number,           |
  //   |   represented as a linked list, to a decimal int. |
  //   |                                                   |
  //   | Return type: int                                  |
  //   | - Returns the decimal equivalent of the binary    |
  //   |   number.                                         |
  //   |                                                   |
  //   | Tips:                                             |
  //   | - We use a while loop to traverse the linked list.|
  //   | - Multiply the current sum by 2 and add the value |
  //   |   at each node to get the decimal number.         |
  //   +===================================================+
  binaryToDecimal() {
    let num = 0;
    let current = this.head
    while(current) {
      if(current.value == 1) {
        num = num * 2 + 1;
      } else {
        num = num * 2 + 0;
      }
      current = current.next
    }
    return num
  }

}





// ---------------
// Convert 1011 to 11
// ---------------
const list1 = new LinkedList(1);
list1.push(0);
list1.push(1);
list1.push(1);
console.log("Convert 1011 to 11:");
console.log("Input: 1 -> 0 -> 1 -> 1");
console.log("Output: ", list1.binaryToDecimal());
console.log("---------------");

// ---------------
// Convert 1100 to 12
// ---------------
const list2 = new LinkedList(1);
list2.push(1);
list2.push(0);
list2.push(0);
console.log("Convert 1100 to 12:");
console.log("Input: 1 -> 1 -> 0 -> 0");
console.log("Output: ", list2.binaryToDecimal());
console.log("---------------");

// ---------------
// Convert 1 to 1
// ---------------
const list3 = new LinkedList(1);
console.log("Convert 1 to 1:");
console.log("Input: 1");
console.log("Output: ", list3.binaryToDecimal());
console.log("---------------");

// ---------------
// Convert empty list to 0
// ---------------
const list4 = new LinkedList(0);
list4.makeEmpty();
console.log("Convert empty list to 0:");
console.log("Input: empty");
console.log("Output: ", list4.binaryToDecimal());
console.log("---------------");


