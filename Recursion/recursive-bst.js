class Node { 
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


class BST {

  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value)
    if(!this.root) {
      this.root = newNode
      return this
    }
    let temp = this.root
    while(true) {
      if(temp.value == newNode.value) return undefined
      if(value < temp.value) {
        if(!temp.left) {
          temp.left = newNode
          return this
        }
        temp = temp.left;
      }
      if(value > temp.value) {
        if(!temp.right) {
          temp.right = newNode
          return this
        }
        temp = temp.right
      }
    }
  }

  rContains (value, currentNode = this.root) {
    if(!currentNode) return false
    if(value == currentNode.value) return true
    if(value < currentNode.value) {
      return this.rContains(value, currentNode.left)
    } 
    if(value > currentNode.value) {
      return this.rContains(value, currentNode.right)
    }
  }
}

let myBST = new BST();
myBST.insert(10)
myBST.insert(8)
myBST.insert(6)
myBST.insert(4)
myBST.insert(12)
myBST.insert(3)

console.log(myBST.rContains(10))
console.log(myBST)