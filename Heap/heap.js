class Heap {
  #heap = []

  #leftChild(index) {
    return 2 * index + 1
  }
  #rightChild(index) {
    return 2 * index + 2
  }
  #parent(index) {
    return Math.floor((index - 1) / 2)
  }

  #swap(index1, index2) {
    [this.#heap[index1], this.#heap[index2]] = [this.#heap[index2], this.#heap[index1]]
  }
  getHeap() {
    return [...this.#heap] // trả về bản sao của heap
  }

  insert(value) {
    this.#heap.push(value)
    let current = this.#heap.length - 1
    while(current > 0 && this.#heap[current] > this.#heap[this.#parent(current)]) {
      this.#swap(current, this.#parent(current))
      current = this.#parent(current)
    }
  }

}

const myHeap = new Heap()
myHeap.insert(5)
myHeap.insert(3)
myHeap.insert(8)
myHeap.insert(2)
myHeap.insert(1)
myHeap.insert(4)

console.log(myHeap.getHeap()) // [ 8, 3, 5, 2, 1, 4]

myHeap.insert(6)
console.log(myHeap.getHeap()) // [ 8, 3, 6, 2, 1, 4, 5]