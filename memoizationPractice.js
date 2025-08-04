// EXERCISE 0
function memoize(fn) {
  let cache = {}
  return function (...args) {
    if (args.toString() in cache) {
      console.log('Cached return: ', cache)
      return cache[args.toString()]
    }
    const func = fn(...args)
    cache[args.toString()] = func
    return func
  }
}

const memoizedText = memoize(function (text) {
  console.log('Processing:', text)
  return text.toLowerCase().trim().replace(/\s+/g, ' ')
})

console.log(memoizedText('HELLO WORLD1'))
console.log(memoizedText('HELLO WORLD1'))
console.log(memoizedText('HELLO WORLD1'))

// Exercise 1: Create a function that returns a function that adds a fixed number
function makeAdder(x) {
  // Your code here
  return function (num) {
    return x + num
  }
  // Should work like: const add5 = makeAdder(5); add5(3) // returns 8
}
const add5 = makeAdder(5)
console.log(add5(3))

// Exercise 2: Create a function that limits how many times another function can be called
function limitCalls(fn, maxCalls) {
  // Your code here
  let callCount = 0

  return function (...args) {
    if (callCount >= maxCalls) {
      console.log('Max-call count exceeded stopping execution')
      return undefined
    }
    callCount++
    console.log('current call count: ', callCount)
    return fn(...args)
  }
  // After maxCalls, it should return undefined
}

const log = function (logMsg) {
  return `Log: ${logMsg}`
}
const limitedLogger1 = limitCalls(log, 2)
console.log(limitedLogger1('Log1'))
limitedLogger1('Log2')
limitedLogger1('Log3')
