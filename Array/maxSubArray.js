// Kỹ thuật sliding window

/// 1.Các loại sliding window:
/// // Fixed-size window: cửa sổ có kích thước cố định, ví dụ độ dài k
/// // Variable-size window: kích thước cửa sổ thay đổi dựa trên điều kiện nào đó (thường dùng trong các bài toán tìm đoạn con thoả mãn ràng buộc)

/**
 * 🔍 Ý tưởng chính:
Thay vì tính toán lại từ đầu cho mỗi đoạn con (subarray hoặc substring), sliding window sẽ:

Bắt đầu với một cửa sổ ban đầu (ví dụ từ chỉ số left = 0 đến right = k - 1)

Trượt cửa sổ sang phải từng bước (dịch right và left)

Cập nhật kết quả dựa trên thay đổi nhỏ (ví dụ chỉ cần thêm 1 phần tử mới và loại bỏ 1 phần tử cũ)
 */


//   +===================================================+
//   |               WRITE YOUR CODE HERE                |
//   | Description:                                      |
//   | - This function finds the maximum sum of any      |
//   |   contiguous subarray in a given array `nums`.    |
//   |                                                   |
//   | Tips:                                             |
//   | - It uses the Kadane's algorithm.                 |
//   | - The `currentSum` keeps track of the sum of the  |
//   |   subarray ending at the current index.           |
//   | - The `maxSum` keeps the maximum sum found so far.|
//   | - For each number, `currentSum` is either the     |
//   |   number itself or `currentSum + nums[i]`.        |
//   +===================================================+


function maxSubarray (nums) {
  if(!nums.length) return 0;

  let maxSum = nums[0];
  let currentSum = nums[0]

  for(let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i])
    
    maxSum = Math.max(maxSum, currentSum)
  }

  return maxSum

}

/**
 * Basic Example

const result = maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
// The function should return 6 because [4, -1, 2, 1] has the largest sum
Single-Element Array

const result = maxSubarray([1]);
// The function should return 1 because the single element is the largest sum
All Negative Numbers

const result = maxSubarray([-1, -2, -3]);
// The function should return -1 because it is the largest sum in the array
Empty Array

const result = maxSubarray([]);
// The function should return 0 because the array is empty
Array with Zero

const result = maxSubarray([0, -1, -2]);
// The function should return 0 because it is the largest sum in the array

 */

// ------------------------------------
//  Test array with both negative and positive numbers
// ------------------------------------
console.log("Mixed numbers:");
let mixedNums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("Array:", mixedNums);
let maxSumMixed = maxSubarray(mixedNums);
console.log("Expected Max Subarray Sum: 6");
console.log("Actual Max Subarray Sum:", maxSumMixed);
console.log("---------------");

// ------------------------------------
//  Test array with all positive numbers
// ------------------------------------
console.log("All positive numbers:");
let allPositive = [1, 2, 3, 4, 5];
console.log("Array:", allPositive);
let maxSumPositive = maxSubarray(allPositive);
console.log("Expected Max Subarray Sum: 15");
console.log("Actual Max Subarray Sum:", maxSumPositive);
console.log("---------------");

// ------------------------------------
//  Test array with all negative numbers
// ------------------------------------
console.log("All negative numbers:");
let allNegative = [-1, -2, -3, -4, -5];
console.log("Array:", allNegative);
let maxSumNegative = maxSubarray(allNegative);
console.log("Expected Max Subarray Sum: -1");
console.log("Actual Max Subarray Sum:", maxSumNegative);
console.log("---------------");

// ------------------------------------
//  Test empty array
// ------------------------------------
console.log("Empty array:");
let emptyNums = [];
console.log("Array:", emptyNums);
let maxSumEmpty = maxSubarray(emptyNums);
console.log("Expected Max Subarray Sum: 0");
console.log("Actual Max Subarray Sum:", maxSumEmpty);
console.log("---------------");

// ------------------------------------
//  Test array with single element
// ------------------------------------
console.log("Single element:");
let singleElement = [3];
console.log("Array:", singleElement);
let maxSumSingle = maxSubarray(singleElement);
console.log("Expected Max Subarray Sum: 3");
console.log("Actual Max Subarray Sum:", maxSumSingle);
console.log("---------------");

// ------------------------------------
//  Test array with zeros
// ------------------------------------
console.log("Array with zeros:");
let withZeros = [0, 0, 0, 0];
console.log("Array:", withZeros);
let maxSumZeros = maxSubarray(withZeros);
console.log("Expected Max Subarray Sum: 0");
console.log("Actual Max Subarray Sum:", maxSumZeros);
console.log("---------------");

// ------------------------------------
//  Test array with one positive and one negative number
// ------------------------------------
console.log("One positive and one negative number:");
let posNeg = [1, -1];
console.log("Array:", posNeg);
let maxSumPosNeg = maxSubarray(posNeg);
console.log("Expected Max Subarray Sum: 1");
console.log("Actual Max Subarray Sum:", maxSumPosNeg);
console.log("---------------");


