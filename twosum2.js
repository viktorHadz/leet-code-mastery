const nums = [3, 4, 5, 6], target = 7
// brute force O(n^2)
// function twoSum(nums, target) {
//     let answer = []
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 answer.push(i, j)
//                 return answer
//             }
//         }
//     }
// }

// Two pointers algo pattern - O(n log n)
// function twoSum(nums, target) {
//     let A = []
//     for (let i = 0; i < nums.length; i++) {
//         A.push([nums[i], i])
//     }
//     console.log('A unsorted', A)
//     A.sort((a, b) => a[0] - b[0])
//     console.log('A sorted', A)

//     let i = 0,
//         j = nums.length - 1
//     while (i < j) {
//         let cur = A[i][0] + A[j][0]
//         if (cur === target) {
//             return [Math.min(A[i][1], A[j][1]), Math.max(A[i][1], A[j][1])]
//         } else if (cur < target) {
//             i++
//         } else {
//             j--
//         }
//     }
//     return []
// }

// Time - O(n) Space - O(n)
function twoSum(nums, target) {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        const required = target - nums[i]
        if (map.has(required)) {
            console.log(`Found target: ${[map.get(required), i]}`)
            return [map.get(required), i]
        }
        map.set(nums[i], i)
    }
    return []
}
twoSum(nums, target)