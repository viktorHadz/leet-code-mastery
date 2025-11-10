// using two pointers - O(n log n)
// function pairSumSorted(arr, target) {
//     let i = 0
//     let j = arr.length

//     while (i <= j) {
//         let cur = arr[i] + arr[j]
//         if (cur === target) {
//             return true
//         } else if (cur < target) {
//             i++
//         } else {
//             j--
//         }
//     }
//     return false
// }
// const nums = [1, 2, 3, 9]
// function pairSumSorted(arr, target) {
//     let i = 0
//     let j = arr.length - 1

//     while (i <= j) {
//         let cur = arr[i] + arr[j]
//         console.log(cur)
//         if (cur === target) {
//             console.log(`Target found: ${arr[i]} + ${arr[j]} = ${target}`)
//             return [arr[i], arr[j]]
//         } else if (cur < target) {
//             i++
//         } else {
//             j--
//         }
//     }
//     return console.log('found nothing')
// }


// pairSumSorted(nums, 12)

// function removeDuplicates(arr) {
//     const map = new Map()
//     let answer = []
//     for (let i = 0; i < arr.length; i++) {
//         if (!map.has(arr[i])) {
//             map.set(arr[i], arr[i])
//         }
//     }
//     console.log(map)
//     answer = [...map.values()]
//     console.log(answer)
// }

// with 1 pointer
// function removeDuplicates(arr) {
//     let answer = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== arr[i + 1]) {
//             answer.push(arr[i])
//         }
//     }
//     console.log(answer)
//     return answer
// }


// with 2 pointers - training for 3 sum
// const dupes = [1, 1, 2, 2, 2, 3, 4, 4]
// function removeDuplicates(arr) {
//     if (arr.length === 0) return []
//     let write = 1
//     for (let read = 1; read < arr.length; read++) {
//         if (arr[read] !== arr[read - 1]) {
//             arr[write] = arr[read]
//             write++
//         }
//     }
//     return arr.slice(0, write)
// }
// removeDuplicates(dupes)

// function pairsThatSum(arr, target) {
//     let answer = []
//     for (let i = 0; i <= arr.length; i++) {
//         let left = 0
//         let right = arr.length - 1
//         let sum = arr[left] + arr[right]
//         if (sum === target && arr[left] !== arr[right]) {
//             console.log(`Target found, ${arr[left]} + ${arr[right]} = ${target}`)
//             answer.push([arr[left], arr[right]])
//         } else if (sum < target) {
//             left++
//         } else right--
//     }
//     console.log('Pairs: ', answer)
//     return answer
// }



// function isAnagram(s, t) {
//     let w1 = [...s].sort()
//     let w2 = [...t].sort()
//     w1 = w1.join('')
//     w2 = w2.join('')
//     console.log(w1)
//     console.log(w2)
//     if (w1 === w2) return true
//     else return false

// }


// function countPairs(arr, target) {
//     let answer = []
//     for (let i = 0; i < arr.length; i++) {
//         if (i > 0 && arr[i] === arr[i - 1]) continue

//         let left = i + 1
//         let right = arr.length - 1

//         while (left < right) {
//             const sum = arr[i] + arr[left]

//             if (sum === target) {
//                 answer.push([arr[i], arr[left]])
//                 left++
//                 right--


//                 while (left < right && arr[left] === arr[left - 1]) left++
//                 while (left < right && arr[right] === arr[right + 1]) right--
//             } else if (sum < target) {
//                 left++
//             } else { right-- }
//         }

//     }
//     console.log(answer)
// }
// countPairs([1, 2, 3, 4, 5, 35, 40, 60, 65], 100) 