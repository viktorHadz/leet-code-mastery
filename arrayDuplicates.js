class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  removeDuplicates(nums) {
    const duplicates = nums.filter((el, index) => {
      return nums.indexOf(el) === index;
    });
    return duplicates;
  }
}
new Set();
const solution = new Solution();
const nums1 = [1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 5];

console.log(solution.removeDuplicates(nums1));

class SolutionWithSets {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  removeDuplicates(nums) {
    const dupes = new Set(nums);
    return [...dupes];
  }
}

const solution2 = new SolutionWithSets();
console.log(solution2.removeDuplicates(nums1));

console.log("The speed of each: ");
console.log("");

console.log("=== Basic Performance Timing ===");

let start = performance.now();
const result1 = solution.removeDuplicates(nums1);
let end = performance.now();
console.log(`Filter method: ${end - start} milliseconds`);
console.log("Result:", result1);

start = performance.now();
const result2 = solution2.removeDuplicates(nums1);
end = performance.now();
console.log(`Set method: ${end - start} milliseconds`);
console.log("Result:", result2);
