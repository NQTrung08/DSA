function findKthFromEnd(k) {
  let slow = this.head
  let fast = this.head
  for(let i = 0; i <= k - 1; i++ ) {
      if(fast === null) return null
      fast = fast.next
  }
  while(fast !== null) {
      slow = slow.next
      fast = fast.next
  }
  return slow
  
  
}