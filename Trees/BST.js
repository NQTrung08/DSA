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
    if (!this.root) {
      this.root = newNode;
      return this
    }
    let temp = this.root
    while (true) {
      if (newNode.value === temp.value) return undefined
      if (newNode.value < temp.value) {
        if (!temp.left) {
          temp.left = newNode
          return this
        }
        temp = temp.left
      } else {
        if (!temp.right) {
          temp.right = newNode
          return this
        }
        temp = temp.right
      }
    }
  }

  contains(value) {
    if(!this.root) return false
    let temp = this.root
    while(temp) {
      if(value === temp.value) return true
      if(value < temp.value) temp = temp.left
      else temp = temp.right
    }
    return false
  }
}

const bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(13);
console.log(bst.contains(7)) // true
console.log(bst)