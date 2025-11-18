const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 1, 1, 1, 1, 1, 1, 1, 19, 20,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 30,
    31, 33, 4, 35, 36, 37, 38, 39, 40,
    41, 43, 4, 45, 46, 47, 48, 49, 50,
    51, 53, 4, 55, 56, 57, 58, 59, 60,
    61, 63, 4, 65, 66, 67, 68, 69, 70,
    71, 2, 73, 4, 75, 76, 77, 78, 79, 80,
    81, 2, 83, 4, 85, 86, 87, 88, 89, 90,
    91, 2, 93, 4, 95, 96, 97, 98, 99, 100,
    1, 2, 103, 4, 15, 16, 107, 108, 109, 110,
    1, 2, 103, 4, 15, 16, 107, 108, 109, 110,
    1, 2, 103, 4, 15, 16, 107, 108, 109, 110,
    1, 2, 103, 4, 15, 16, 107, 108, 109, 110,
    1, 2, 113, 4, 15, 16, 117, 118, 119, 120,
    1, 2, 123, 4, 15, 16, 127, 128, 129, 130,
    1, 2, 133, 4, 15, 16, 137, 138, 139, 140,
    1, 2, 143, 4, 15, 16, 147, 148, 149, 150,
    1, 2, 153, 4, 15, 16, 157, 158, 159, 160,
    1, 2, 163, 4, 15, 16, 167, 168, 169, 170,
    1, 2, 173, 4, 15, 16, 177, 178, 179, 180,
    1, 2, 183, 4, 15, 16, 187, 188, 189, 190,
    1, 2, 193, 4, 15, 16, 197, 198, 199, 200
]
// Find k the most frequent numbers
function countFrequency(nums, k) {
    let answer = []
    // 1. Hash map O(n)
    const myMap = new Map()
    for (const num of nums) {
        myMap.set(num, (myMap.get(num) || 0) + 1) // Notice the pattern here
    }
    console.log('mapreversed', myMap)
    // 2. Swap | O(n) as it maps over each el 
    const mapArr = [...myMap].map(([val, freq]) => {
        return [freq, val]
    })

    // 3. Sort O(n log n)
    const sortedBuckets = mapArr.sort((a, b) => a[0] - b[0])
    console.log(sortedBuckets)

    // 4. loop backwards (or sort descending) - O(k)
    for (let i = sortedBuckets.length - 1; i >= 0; i--) {
        if (answer.length === k) return answer
        else answer.push(sortedBuckets[i][1])
    }
}

console.log(countFrequency(numbers, 2))
/**
 * implementation 
    1. Array to HashMap 
    2. Swap key value pairs - Array.map() => [val,freq] => [freq,val] 
    3. Sort by the key of the swapped array 
    4. loop array until you get k items 
 */