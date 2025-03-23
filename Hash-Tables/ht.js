class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size)
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.dataMap.length;
    }
    return hash;
  }
  set(key, value) {
    let index = this._hash(key)
    if(!this.dataMap[index]) {
      this.dataMap[index] = []
    }
    this.dataMap[index].push([key, value])
    return this
  }

  get(key) {
    let index = this._hash(key)
    if(this.dataMap[index]) {
      for(let i = 0; i< this.dataMap[index].length; i++) {
        if(this.dataMap[index][i][0] === key) return this.dataMap[index][1]
      }
    }
    return undefined
  }

  keys() {
    let allKeys = []
    for(let i = 0; i < this.dataMap.length; i++) {
      if(this.dataMap[i]) {
        for(let j = 0; j < this.dataMap[i].length; j++) {
          allKeys.push(this.dataMap[i][j][0])
        }
      }
    }
    return allKeys
  }

}

function itemInCommon(array1, array2) {
  let obj = {}
  for(let i = 0; i < array1.length; i++) {
    obj[array1[i]] = true
  }
  for(let j = 0; j < array2.length; j++) {
    if(obj[array2[j]]) {
      console.log(array2[j])
      return true
    }
  }
  return false
}

const hashMap = new HashTable()
hashMap.set('hoa', 10)
hashMap.set('trung', 2)

console.log(hashMap.keys())

