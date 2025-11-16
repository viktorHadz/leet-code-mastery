function euclid(p, q) {
    if (q === 0) return p
    let r = p % q
    console.log('%', r)
    return euclid(q, r)
}
console.log(euclid(10, 5))
// The above implementation uses recursion to solve the problem - "Finding the greateest common divisor of two numbers"
// if q === 0 => p - this is when the recursion finishes 
// 5 % 10 => 0.5 => 5 - main operation 
// use recursion until q is 0 - finding the greatest common divisor" 


/* recursion made easy 
1. one condition - when reached the function returns  
2. second condition - returns the same function 
3. The function must in some way move towards the final condition each itteration. 

*/
