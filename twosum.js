/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Firstly loop over all of the numbers
// Then loop over the nubmers and their pair of the numbers
var twoSum = function (nums, target) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        arr.push(i, j);
        return arr;
      }
    }
  }
};
console.log(twoSum([2, 3, 4, 7], 9));
