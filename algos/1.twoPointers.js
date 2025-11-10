// 1. Is there a pair that sums to the target 
const sums = [1, 3, 4, 6, 8, 10]
const target = 9

function twoSum(arr, target) {
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        const sum = arr[left] + arr[right]
        if (sum === target) {
            return true
        } else if (sum < target) {
            left++
        } else {
            right--
        }
    }
    return false
}
// console.log(twoSum(sums, target))

// 2. Reverse string in place return new arr length
function reverseString(str) {
    let result = ''
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return result
}
// console.log(reverseString('hello'))

// 3. Sorted array remove duplicates from arr in place and return new arr.length 
// The below is not in place
// function removeDupes(arr) {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === arr[i + 1]) continue
//         result.push(arr[i])
//     }
//     console.log(result)
//     return result.length
// }
// removeDupes([1, 1, 2, 3, 3, 4])
// In place - the idea is to mutate the array in place so no dupes remain in the starting portion of the array. Next we slice from 0 to 'write' so from  [1, 1, 2, 3, 3, 4] --> [1,2,3,4 | 3,4] --> [1,2,3,4]
// is as long as the write variable and we slice the array from 0 to write places 
function removeDupes(arr) {
    let write = 1
    for (let read = 1; read < arr.length; read++) {
        if (arr[read] !== arr[read - 1]) {
            arr[write] = arr[read]
            write++
        }
    }
    return arr.slice(0, write)
}

let arr = [1, 1, 2, 3, 3, 4]
let length = removeDupes(arr)
// console.log(length, arr) // 4 [1, 2, 3, 4]

// 4. Reverse an arrray in place using two pointers 
let unreversedArray = [10, 20, 30, 40, 50, 60]
function arrReversal(arr) {
    let left = 0
    let right = arr.length - 1
    while (left < right) {
        let temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
        left++
        right--
    }
    console.log(arr)
    return arr
}
console.log(arrReversal(unreversedArray))

