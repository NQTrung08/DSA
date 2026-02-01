// Queue Using Stacks: Enqueue ( ** Interview Question)

/**
 Implement a method called enqueue() for a MyQueue class that adds a new element to the end of the queue. 
 The MyQueue class should use two Stack objects to store and manipulate the elements.
 The method should add the given value to the end of the queue.
 
 Constraints:
  The MyQueue class should be implemented using two Stack objects provided in the Stack class.
  You cannot use any other data structures or built-in queue manipulation methods for this task.
**/

class Stack {
  constructor() {
      this.stackList = [];
  }

  isEmpty() {
      return this.stackList.length === 0;
  }

  peek() {
      if (this.isEmpty()) {
          return null;
      } else {
          return this.stackList[this.stackList.length - 1];
      }
  }

  push(value) {
      this.stackList.push(value);
  }

  pop() {
      if (this.isEmpty()) return null;
      return this.stackList.pop();
  }
  
}



class MyQueue {
  constructor() {
      this.stack1 = new Stack();
      this.stack2 = new Stack();
  }
  
  peek() {
      return this.stack1.peek();
  }

  isEmpty() {
      return this.stack1.isEmpty();
  }

  // WRITE THE ENQUEUE METHOD HERE //
  enqueue(value) {
    while(!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop());
    }
    this.stack1.push(value);
    while(!this.stack2.isEmpty()) {
        this.stack1.push(this.stack2.pop());
    }  
  }

  dequeue() {
    if(this.stack1.isEmpty()) return null
    return this.stack1.pop();
  }
  ///////////////////////////////////

}



const queue = new MyQueue();

console.log("Is the queue empty? ", queue.isEmpty());

queue.enqueue(1);
console.log("Peek after enqueueing 1: ", queue.peek());

queue.enqueue(2);
console.log("Peek after enqueueing 2: ", queue.peek());

queue.enqueue(3);
console.log("Peek after enqueueing 3: ", queue.peek());

console.log("Is the queue empty? ", queue.isEmpty());



/*
  EXPECTED OUTPUT:
  ----------------
  Is the queue empty?  true
  Peek after enqueueing 1:  1
  Peek after enqueueing 2:  1
  Peek after enqueueing 3:  1
  Is the queue empty?  false

*/