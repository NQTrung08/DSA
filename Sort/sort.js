
function bubbleSort(array) {
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array
}

const nums = [1, 2, 3, 8, 4, 5, 7]
console.log(bubbleSort(nums))
console.log(nums)


/**
  1. Duyệt qua từng phần tử trong mảng.
  2. Tìm phần tử nhỏ nhất trong phần chưa được sắp xếp.
  3. Hoán đổi phần tử nhỏ nhất với phần tử đầu tiên của phần chưa sắp xếp.
  4. Tiếp tục lặp lại cho phần còn lại của mảng cho đến khi mảng được sắp xếp.
 */
function selectionSort(array) {
  let min;
  for (let i = 0; i < array.length; i++) {
    min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (i !== min) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
}


/**
 * 1. Bắt đầu từ phần tử thứ hai (vì phần tử đầu tiên mặc định đã được xem là "đã sắp xếp").
   2. Lấy phần tử hiện tại và so sánh với các phần tử trước đó trong danh sách đã sắp xếp.
   3. Dịch chuyển các phần tử lớn hơn sang bên phải để tạo chỗ trống.
   4. Chèn phần tử hiện tại vào đúng vị trí.
   5. Lặp lại cho đến hết mảng.
 */
function insertSort(array) {
  let temp;
  for (let i = 1; i < array.length; i++) {
    temp = array[i]
    let j = i - 1
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j]
      j--
    }
    array[j + 1] = temp
  }
  return array
}