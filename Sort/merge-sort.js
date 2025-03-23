// merge sort sử dụng đệ quy
// 1️⃣ Chia (Divide): Chia mảng thành hai nửa bằng nhau.
// 2️⃣ Trị (Conquer): Đệ quy sắp xếp từng nửa.
// 3️⃣ Kết hợp (Merge): Trộn hai mảng đã sắp xếp lại thành một mảng hoàn chỉnh.

function merge(a1, a2) {
  let combined = []
  let i = 0, j = 0;
  while (i < a1.length && j < a2.length) {
    if (a1[i] < a2[j]) {
      combined.push(a1[i])
      i++
    } else {
      combined.push(a2[j])
      j++
    }
  }
  while(i < a1.length) {
    combined.push(a1[i])
    i++
  }
  while(j < a2.length) {
    combined.push(a2[j])
    j++
  }
  return combined
}

console.log(mergeSort([1,3,5], [2,6,9]))


// Merge sort with recursive

// 1. breaks arrays in half
// 2. Chia cho đến khi array.length là 1
// 3. Dùng hàm merge() để đưa các mảng vào với nhau

function mergeSort(array) {
  if (array.length === 1) {
    return array
  }
  let mid = Math.floor(array.length / 2)
  let left = mergeSort(array.slice(0, mid))
  let right = mergeSort(array.slice(mid))

  return merge(left, right)
}


// ĐỘ phức tạp thuật toán


// độ phức tạp không gian
// 1. do từ 1 mảng có n phần tử  tách ra làm n mảng => O(n) không gian
// 2. ta mất O(log n) để chia chúng ra, mất O(n) để  lặp qua và gộp từng mảng vào => O(n logn)


