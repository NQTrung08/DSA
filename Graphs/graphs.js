class Graph {
  constructor() {
    this.adjacencyList = {}; // danh sách liền kề
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []
      return true
    }
    return false
  }
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2)
      this.adjacencyList[vertex2].push(vertex1)
      return true
    }
    return false
  }
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v!== vertex2)
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v!== vertex1)
      return true
    }
    return false
  }

  removeVertex(vertex) {
    if(!this.adjacencyList[vertex]) return undefined
    while(this.adjacencyList[vertex].length) {
      const temp = this.adjacencyList[vertex].pop()
      this.removeEdge(vertex, temp)
    }
    delete this.adjacencyList[vertex]
    return this
  }
}

let myGraph = new Graph()
myGraph.addVertex('A')
console.log(myGraph)
myGraph.addVertex('B')
myGraph.addEdge('A', 'B')
console.log(myGraph)
myGraph.addVertex('C')
myGraph.addEdge('A', 'C')
myGraph.addVertex('D')
myGraph.addEdge('B', 'D')
myGraph.addEdge('C', 'B')
myGraph.addEdge('C', 'D')
console.log(myGraph)
myGraph.addEdge('B', 'B')
console.log(myGraph)