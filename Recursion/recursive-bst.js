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

  #rInsert(value, currentNode = this.root) {

    if(!currentNode) return new Node(value)
    if( value < currentNode.value) {
      currentNode.left = this.#rInsert(value, currentNode.left)
    } else if (value > currentNode.value) {
      currentNode.right = this.#rInsert(value, currentNode.right)
    }

    return currentNode

  }

  rInsert(value) {
    if(!this.root) {
      this.root = new Node(value)
      return;  
    }
    this.#rInsert(value)
  }

  minValue(currentNode) {
    while(currentNode.left != null) {
      currentNode = currentNode.left
    }

    return currentNode.value
  }
  #deleteNode(value, currentNode) {
    if(currentNode === null) return null

    if(value < currentNode.value) {
      currentNode.left = this.#deleteNode(value, currentNode.left)
    } else if (value > currentNode.value) {
      currentNode.right = this.#deleteNode(value, currentNode.right)
    } else {
      if(currentNode.left == null && currentNode.right == null) {
        return null
      } else if (currentNode.left == null) {
        currentNode = currentNode.right
      } else if(currentNode.right == null) {
        currentNode = currentNode.left
      } else {
        // lấy node con nhỏ nhất bên phải
        // hoặc node con lớn nhất bên trái
        let subTreeMin = this.minValue(currentNode.left) // node con nhỏ nhất bên phải
        currentNode.value = subTreeMin
        currentNode.right = this.#deleteNode(subTreeMin, currentNode.right)
      }
    }

    return currentNode 
  }

  deleteNode(value) {
    this.root = this.#deleteNode(value, this.root)
  }
}

let myBST = new BST();
myBST.insert(10)
myBST.rInsert(9)
myBST.insert(8)
myBST.insert(6)
myBST.insert(4)
myBST.insert(12)
myBST.insert(3)

console.log(myBST.rContains(10))
console.log(myBST)

myBST.rInsert(11)
myBST.rInsert(17)

myBST.deleteNode(12)
console.log(myBST)



