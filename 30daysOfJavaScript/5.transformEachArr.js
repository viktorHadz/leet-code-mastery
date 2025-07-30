/*
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.
*/
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var map = function (arr, fn) {
  let mutatedArr = [];
  for (let i = 0; i < arr.length; i++) {
    const func = fn(arr[i], i);
    mutatedArr.push(func);
  }
  return mutatedArr;
};

const newArr = map([1, 2, 3, 4, 5], function plusone(n) {
  return n + 1;
});
console.log(newArr);
