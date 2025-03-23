// quicksort

// 1. có 1 pivot (có thể tạo pivot bằng bất kỳ index nào, a[0], a[mid], a[end])
//2. chia mảng (nhỏ hơn pivot nằm bên trái, lớn hơn pivot nằm bên phải)
// 3. gọi vị trí mới của pivot là p
// đệ quy sắp xếp hai phần còn lại (bên trái và phải của pivot)

// ở đây về cơ bản

// TH1: pivot ở đầu

// người ta dùng biến i lặp qua từng ptu và so sánh với pivot

// ta có biến swag bắt đầu từ vị trí pivot

// nếu có ptu nhỏ hơn pivot => ta sẽ di chuyển swag + 1 vị trí => sau đó đổi chỗ swag với ptu đó

// sau khi đã duyệt hết mảng => ta sẽ đổi vị trí của pivot và swag

function swag(array, fristIndex, secondIndex) {
  let temp = array[fristIndex];
  array[fristIndex] = array[secondIndex]
  array[secondIndex] = temp
}
function pivot(array, pivotIndex = 0, endIndex=array.length - 1) {
  let swagIndex = pivotIndex
  for (let i = pivotIndex + 1; i <= endIndex; i++) {
    if (array[i] < array[pivotIndex]) {
      swagIndex++
      swag(array, swagIndex, i)
    }
  }
  swag(array, pivotIndex, swagIndex)

  return swagIndex
}

function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(array, left, right)
    quickSort(array, left, pivotIndex - 1)
    quickSort(array, pivotIndex + 1, right)
  }
  return array
}

