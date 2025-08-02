/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    return functions.reduceRight((accumulator, currentValue) => {
      const fn = currentValue
      const arg = accumulator

      return fn(arg)
    }, x)
  }
}

const composed = compose([(x) => x + 1, (x) => 2 * x])
console.log(composed(5))

/**
 EXAMPLE OF COMPOSITION 
 */
// let double = (a) => {
//   console.log(`DOUBLE: ${a}`)
//   return a * 2
// }
// let tripple = (a) => {
//   console.log(`TRIPLE: ${a}`)
//   return a * 3
// }
// let divideByTwo = (a) => {
//   return a / 2
// }

// var composition = function (fn1, fn2, fn3) {
//   return function (val) {
//     console.log(`ARG: ${val}`)
//     return fn1(fn2(fn3(val)))
//   }
// }

// const composeAddSquare = composition(tripple, double, divideByTwo)
// console.log(composeAddSquare(2))
