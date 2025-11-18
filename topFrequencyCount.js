// Neetcode top k frequent elements 
const nums = [3, 3, 3, 0, 1, 0], k = 2

/// Doesnt account for negative numbers 
function topKFrequent(nums, k) {
    nums.sort((a, b) => a - b)
    console.log('Nums sorted: ', nums)

    let count = new Map()
    for (const num of nums) {
        count.set(num, (count.get(num) || 0) + 1)
    }

    let buckets = [...count].map(([val, freq]) => {
        return [freq, val]
    })

    let sortedBuckets = buckets.sort((a, b) => a[0] - b[0]) // sort by ascending frequency  

    console.log('buckets', buckets)
    console.log('sortedBuckets', sortedBuckets)

    let answer = []

    // Iterate from the arr end to get the highest freq
    for (let i = sortedBuckets.length - 1; i >= 0; i--) {
        if (answer.length - 1 === k - 1) return answer
        else answer.push(buckets[i][1])
        console.log(answer.length, k)
    }
    return answer
    // k most frequent els ex: k=2 [1,1,1,2,2,3] => 3 - 1s, 2 - 2s, 1 - 3s => [1,2] 
}
console.log(topKFrequent(nums, k))
// tak thee array and return the k most frequent elements 