/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};

const fil = filter([0, 10, 20, 30], function greaterThan10(n) {
  return n > 10;
});
console.log(fil);
// arrr.filter((el) => {
//   if (el > 3) return el;
// });
