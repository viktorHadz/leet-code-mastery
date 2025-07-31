/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

var reduce = function (nums, fn, init) {
  if (init === undefined) init = nums[0]
  if (nums.length === 0) return init

  let result

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      result = fn(init, nums[0])
    } else {
      result = fn(result, nums[i])
    }
  }
  return result
}

const newReduce = reduce(
  [1, 2, 3, 4],
  function sum(accum, curr) {
    return accum + curr
  },
  0
)
console.log(newReduce)
