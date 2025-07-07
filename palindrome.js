/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const xStr = x.toString();
  let xArr = [];
  for (const el of xStr) {
    xArr.push(el);
  }
  xArr.reverse();
  let xStrRev = "";
  for (const el of xArr) {
    xStrRev += el;
  }
  console.log("Non reversed str: ", xStr);
  console.log("Reversed string: ", xStrRev);

  const intConv = parseInt(xStrRev);
  console.log("Str conversion to number ", intConv);
  console.log("Int to compare: ", x);
  if (isNaN(intConv)) {
    throw new Error("Couldnt compute there was an error in the conversion");
  }
  if (intConv === x) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(121));
