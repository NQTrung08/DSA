

// đệ quy thông thường

const fib = (n) => {
  if (n == 0 || n == 1) {
    return n

  }
  return fib(n - 1) + fib(n - 2)
}

console.log(fib(7))
// => O(2^n)

// sử dụng memoization để tối ưu

let memo = []
const fibMemo = (n) => {
  if (memo[n] !== undefined) {
    return memo[n]
  }
  if( n === 0 || n === 1) {
    return n
  }
  memo[n] = fibMemo(n - 1) + fibMemo(n - 2)
  return memo[n]
}

console.log(fibMemo(5))
console.log(memo)

// => O(2n-1)

// bottom up: sử dụng mảng và tính toán từ dưới lên trên

const fibBottomUp = (n) => {
  let fib = [];
  fib[0] = 0
  fib[1] = 1
  for(let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
  }
  return fib[n]
}

console.log(fibBottomUp(7))
