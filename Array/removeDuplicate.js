//   +====================================================+
//   |                 WRITE YOUR CODE HERE               |
//   | Description:                                       |
//   | - This function removes duplicate elements from an |
//   |   array `nums`, and keeps the unique elements      |
//   |   in-place.                                        |
//   |                                                    |
//   | Output:                                            |
//   | - The function returns the new length of the array |
//   |   after duplicates are removed.                    |
//   |                                                    |
//   | Tips:                                              |
//   | - `writePointer` stores where the next unique      |
//   |   element should be placed.                        |
//   | - `readPointer` scans the array for unique         |
//   |   elements.                                        |
//   +====================================================+

function removeDuplicates(nums){
  if (!nums.length) return 0;
  let pointer = 1;
  for(let i = 1; i < nums.length; i++) {
    if(nums[i] !== nums[i - 1]) {
      pointer++;
    }
      
  }
  return pointer;
}



// ------------------------------------
//  Test array with duplicates
// ------------------------------------
let withDups = [1, 1, 1, 1];
console.log("Test array with duplicates:");
console.log("Before:", withDups);
let lenWithDups = removeDuplicates(withDups);
console.log("After:", withDups.slice(0, lenWithDups));
console.log("Length:", lenWithDups);
console.log("---------------");



