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

const solution = new Solution();
const nums1 = [1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 5];

console.log(solution.removeDuplicates(nums1));
