
class Node {
  constructor(value) {
    this.value = value
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

  // delete Node
  // 3 th nút lá ( k con) => xóa trực tiếp
  // nút 1 con => gán thằng con của nó thay nó
  // nút 2 con => tìm node lớn nhất trong phía trái của nó và gán thay nó thay nó


  preOrder(node = this.root, result = []) {
    if (!node) return result
    result.push(node.value)
    this.preOrder(node.left, result)
    this.preOrder(node.right, result)
    return result
  }
  inOrder(node = this.root, result = []) {
    if (!node) return result
    this.inOrder(node.left, result)
    result.push(node.value)
    this.inOrder(node.right, result)
    return result
  }
  postOrder(node = this.root, result = []) {
    if (!node) return result
    this.postOrder(node.left, result)
    this.postOrder(node.right, result)
    result.push(node.value)
    return result
  }
}

const bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(13);

//      10
//   5     15
//3    7  13
console.log(bst.preOrder()); // [ 10, 5, 3, 7, 15, 13 ]


console.log(bst.inOrder()); // [ 3, 5, 7, 10, 13, 15 ]


console.log(bst.postOrder()); // [ 3, 7, 5, 13, 15, 10 ]