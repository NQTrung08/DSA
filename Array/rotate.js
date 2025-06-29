










//   +===================================================+
//   |               WRITE YOUR CODE HERE                |
//   | Description:                                      |
//   | - This function rotates an array `nums` to the    |
//   |   right by `k` steps.                             |
//   |                                                   |
//   | Tips:                                             |
//   | - The function uses three reverse operations to   |
//   |   achieve the rotation in place.                  |
//   | - First, we limit `k` to the size of the array.   |
//   | - Then, we reverse the first and second parts of  |
//   |   the array separately.                           |
//   | - Finally, we reverse the whole array.            |
//   +===================================================+


function rotate(nums, k) {
  if(k >= 0) {
    for(let i = nums.length - 1; i > nums.length - 1 - k; i--) {
      nums.unshift(nums[nums.length - 1])
      nums.pop(nums[nums.length - 1])
    }
  } else {
    for(let i = k; i < 0; i++) {
      nums.push(nums[0])
      nums.shift(nums[0])
    }
  }
  return nums
}

// function rotate(nums, k) {
//   // Limit k to the array size
//   k = k % nums.length;

//   // Reverse the first part of the array
//   let start = 0;
//   let end = nums.length - k - 1;
//   while (start < end) {
//       let temp = nums[start];
//       nums[start] = nums[end];
//       nums[end] = temp;
      
//       start++;
//       end--;
//   }

//   // Reverse the second part of the array
//   start = nums.length - k;
//   end = nums.length - 1;
//   while (start < end) {
//       let temp = nums[start];
//       nums[start] = nums[end];
//       nums[end] = temp;
      
//       start++;
//       end--;
//   }

//   // Reverse the whole array
//   start = 0;
//   end = nums.length - 1;
//   while (start < end) {
//       let temp = nums[start];
//       nums[start] = nums[end];
//       nums[end] = temp;
      
//       start++;
//       end--;
//   }
// }
// ------------------------------------
//  Test array rotation by 1
// ------------------------------------
console.log("Rotate by 1:");
let rotate1 = [1, 2, 3, 4, 5];
console.log("Before:         ", rotate1.join(", "));
rotate(rotate1, 1);
console.log("Expected After:  5, 1, 2, 3, 4");
console.log("Actual After:   ", rotate1.join(", "));
console.log("---------------");

// ------------------------------------
//  Test array rotation by array length
// ------------------------------------
console.log("Rotate by array length:");
let rotateLen = [1, 2, 3];
console.log("Before:         ", rotateLen.join(", "));
rotate(rotateLen, 3);
console.log("Expected After:  1, 2, 3");
console.log("Actual After:   ", rotateLen.join(", "));
console.log("---------------");

// ------------------------------------
//  Test array rotation by 0
// ------------------------------------
console.log("Rotate by 0:");
let rotateZero = [4, 3, 2, 1];
console.log("Before:         ", rotateZero.join(", "));
rotate(rotateZero, 0);
console.log("Expected After:  4, 3, 2, 1");
console.log("Actual After:   ", rotateZero.join(", "));
console.log("---------------");

// ------------------------------------
//  Test empty array rotation
// ------------------------------------
console.log("Empty array:");
let rotateEmpty = [];
console.log("Before:         ", rotateEmpty.join(", "));
rotate(rotateEmpty, 1);
console.log("Expected After:  ");
console.log("Actual After:   ", rotateEmpty.join(", "));
console.log("---------------");

// ------------------------------------
//  Test array rotation with negative k
// ------------------------------------
console.log("Negative k value:");
let rotateNeg = [5, 6, 7, 8];
console.log("Before:         ", rotateNeg.join(", "));
rotate(rotateNeg, -1);
console.log("Expected After:  6, 7, 8, 5");
console.log("Actual After:   ", rotateNeg.join(", "));
console.log("---------------");

// ------------------------------------
//  Test array with all same elements
// ------------------------------------
console.log("All same elements:");
let rotateSame = [2, 2, 2, 2];
console.log("Before:         ", rotateSame.join(", "));
rotate(rotateSame, 2);
console.log("Expected After:  2, 2, 2, 2");
console.log("Actual After:   ", rotateSame.join(", "));
console.log("---------------");

// ------------------------------------
//  Test array rotation with k larger than array size
// ------------------------------------
console.log("k larger than array size:");
let rotateLargeK = [1, 2];
console.log("Before:         ", rotateLargeK.join(", "));
rotate(rotateLargeK, 3);
console.log("Expected After:  2, 1");
console.log("Actual After:   ", rotateLargeK.join(", "));
console.log("---------------");


