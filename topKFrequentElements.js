// Neetcode top k frequent elements 
const nums = [3, 3, 3, 0, 1, 0], k = 1

/// Doesnt account for negative numbers 
function topKFrequent(nums, k) {
    const count = {}
    for (const num of nums) {
        count[num] = (count[num] || 0) + 1
    }
    console.log(count)

    const arr = Object.entries(count).map(([num, freq]) => [
        freq,
        parseInt(num),
    ])
    console.log(arr)
    arr.sort((a, b) => b[0] - a[0])
    console.log('Sorted: ', arr)

    return arr.slice(0, k).map((pair) => pair[1])
}
console.log(topKFrequent(nums, k))

// function topKFrequent(nums, k) {
//     const freq = new Map()
//     let answer = []
//     for (const n of nums) {
//         freq.set(n, (freq.get(n) || 0) + 1)

//         console.log(freq.entries())

//         if (answer.length === 0) {
//             answer.push(n)
//         }

//         if (freq.get(n) >= Math.max(...answer)) {
//             answer.push(n)
//         }
//     }

//     answer = answer.sort((a, b) => b - a)
//     console.log('sorted', answer)
//     let mySet = new Set(answer)

//     answer = [...mySet]
//     answer.splice(k)

//     return answer
// }
/**
 * 
  topKFrequent(nums, k) {
        const myMap = new Map()
        nums.sort((a, b) => b - a) // descending order 

        for (const num of nums) {
            myMap.set(num, (myMap.get(num) || 0) + 1)
        }

        return [...myMap.keys()].splice(0, k)

    }


     topKFrequent(nums, k) {
           const freq = new Map()
    let answer = []
    nums.forEach(n => freq.set(n, (freq.get(n) || 0) + 1))
    while (k > 0) {
        let max = Math.max(...freq.values())
        const maxFreqKey = freq.get(max)
        console.log('key', maxFreqKey, 'max', max)
        answer.push(max)
        console.log('answer: ', answer)
        freq.delete(maxFreqKey)
        k--
    }
    return answer

    }


    topKFrequent(nums, k) {
        const freq = new Map()
        let answer = []
        for (const n of nums) {
            freq.set(n, (freq.get(n) || 0) + 1)
        }
        console.log(freq)

        for (const [key, val] of freq) {
            console.log('Max: ', Math.max(...freq.values()))
            console.log('answer', answer)
            if (answer.length >= k) {
                return answer
            } else if (val < Math.max(...freq.values())) {
                continue
            } else {
                answer.push(key)
                freq.delete(key)
                console.log(freq)
            }
        }

    }
 */