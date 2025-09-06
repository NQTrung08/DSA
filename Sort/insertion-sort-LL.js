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
  //   | - This method sorts the linked list using         |
  //   |   insertion sort algorithm.                       |
  //   |                                                   |
  //   | Side Effects:                                     |
  //   | - The list is sorted in place, modifying the      |
  //   |   original list.                                  |
  //   |                                                   |
  //   | Tips:                                             |
  //   | - The list is divided into a sorted and           |
  //   |   unsorted section.                               |
  //   | - Nodes from the unsorted part are moved one      |
  //   |   by one into the sorted part.                    |
  //   | - The position to insert the current node is      |
  //   |   found by traversing the sorted part.   
  //                                                       |
  // 🎯 Mục tiêu
    // Ta cần sắp xếp một danh sách liên kết đơn (singly linked list) theo thứ tự tăng dần bằng giải thuật Insertion Sort, trực tiếp trên danh sách (không tạo mảng phụ).
    // Nguyên lý chung của Insertion Sort:

    // Chia danh sách thành 2 phần:

      // Phần đã sắp xếp (ban đầu chỉ có node đầu tiên).

      // Phần chưa sắp xếp (các node còn lại).

    // Lấy từng node trong phần chưa sắp xếp ra.

    // Chèn node đó vào đúng vị trí trong phần đã sắp xếp.

    // Lặp lại cho đến khi hết phần chưa sắp xếp.

    // Kết thúc, danh sách được sắp xếp đúng, head trỏ vào phần tử đầu tiên, tail trỏ vào phần tử cuối cùng.
  //   +===================================================+
  insertionSort() {
    if(this.length < 2) return
    let sortedListHead = this.head
    let unsortedListHead = this.head.next
    sortedListHead.next = null;
    while(unsortedListHead) {
      let current = unsortedListHead;
      unsortedListHead = unsortedListHead.next;
      if(current.value < sortedListHead.value) {
        current.next = sortedListHead
        sortedListHead = current
      } else {
        let searchPointer = sortedListHead;
        while(searchPointer.next && current.value > searchPointer.next.value) {
          searchPointer = searchPointer.next;
        }
        current.next = searchPointer.next
        searchPointer.next = current
      }

    }
    
    this.head = sortedListHead
    let temp = this.head
    while(temp.next) {
      temp = temp.next
    }
    this.tail = temp
    
  }

}





// ------------------------------------
//  Sort descending list
// ------------------------------------
const list1 = new LinkedList(4);
list1.push(3);
list1.push(2);
list1.push(1);
console.log("Sort descending list:");
list1.printList(); // Should print: 4 -> 3 -> 2 -> 1
list1.insertionSort();
list1.printList(); // Should print: 1 -> 2 -> 3 -> 4
console.log("---------------");

// ------------------------------------
//  Sort already sorted list
// ------------------------------------
const list2 = new LinkedList(1);
list2.push(2);
console.log("Sort already sorted list:");
list2.printList(); // Should print: 1 -> 2
list2.insertionSort();
list2.printList(); // Should print: 1 -> 2
console.log("---------------");

// ------------------------------------
//  Sort list with random elements
// ------------------------------------
const list3 = new LinkedList(3);
list3.push(1);
list3.push(4);
list3.push(2);
console.log("Sort list with random elements:");
list3.printList(); // Should print: 3 -> 1 -> 4 -> 2
list3.insertionSort();
list3.printList(); // Should print: 1 -> 2 -> 3 -> 4
console.log("---------------");

// ------------------------------------
//  Sort list with duplicate elements
// ------------------------------------
const list4 = new LinkedList(3);
list4.push(3);
list4.push(2);
list4.push(2);
console.log("Sort list with duplicate elements:");
list4.printList(); // Should print: 3 -> 3 -> 2 -> 2
list4.insertionSort();
list4.printList(); // Should print: 2 -> 2 -> 3 -> 3
console.log("---------------");

// ------------------------------------
//  Sort single-element list
// ------------------------------------
const list5 = new LinkedList(1);
console.log("Sort single-element list:");
list5.printList(); // Should print: 1
list5.insertionSort();
list5.printList(); // Should print: 1
console.log("---------------");

// ------------------------------------
//  Sort list with negative numbers
// ------------------------------------
const list6 = new LinkedList(-1);
list6.push(-2);
list6.push(1);
console.log("Sort list with negative numbers:");
list6.printList(); // Should print: -1 -> -2 -> 1
list6.insertionSort();
list6.printList(); // Should print: -2 -> -1 -> 1
console.log("---------------");

// ------------------------------------
//  Sort list with zeros
// ------------------------------------
const list7 = new LinkedList(0);
list7.push(0);
list7.push(1);
console.log("Sort list with zeros:");
list7.printList(); // Should print: 0 -> 0 -> 1
list7.insertionSort();
list7.printList(); // Should print: 0 -> 0 -> 1
console.log("---------------");

// ------------------------------------
//  Sort empty list
// ------------------------------------
const list8 = new LinkedList(1);
list8.makeEmpty();
console.log("Sort empty list:");
list8.printList(); // Should print: empty
list8.insertionSort();
list8.printList(); // Should print: empty
console.log("---------------");


