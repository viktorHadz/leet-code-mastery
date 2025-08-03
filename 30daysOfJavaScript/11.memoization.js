/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  let cache = {}
  return function (...args) {
    if (args.toString() in cache) {
      console.log('Returning cached! ', cache)
      return cache[args.toString()]
    }
    const func = fn(...args)
    cache[args.toString()] = func
    return func
  }
}

let callCount = 0
const memoizedFn = memoize(function (a, b) {
  console.log('FUNCTION CALL \n----------------')
  callCount += 1
  return a + b
})
memoizedFn(2, 3) // 5
memoizedFn(2, 3) // 5
console.log('Calls to memoizedFn: ', callCount) // 1
