const twoSums = (nums, target) => {
  let numMap = new Map();
  for(let i = 0; i < nums.length; i++) {
    if(numMap.has(target - nums[i])) {
      return [numMap.get(target - nums[i]), i]
    }
    numMap.set(nums[i], i);
  }

  return [];
}


console.log(twoSums([2, 4, 7, 10], 9));