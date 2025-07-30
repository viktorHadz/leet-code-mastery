/**
 *
 * Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let count = init;
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    reset() {
      count = init;
      return count;
    },
  };
};

const counter = createCounter(5);
console.log("Incremented value: ", counter.increment()); // 6
console.log("Reseting counter: ", counter.reset()); // 5
console.log("Decremented value: ", counter.decrement()); // 4

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
