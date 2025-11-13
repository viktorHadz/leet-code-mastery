const strs = ["act", "pots", "tops", "cat", "stop", "hat"]

function groupAnagrams(strs) {
    const map = new Map()
    const answer = []
    for (const word of strs) {
        const key = [...word].sort().join('')

        if (!map.has(key)) {
            map.set(key, [])
        }

        map.get(key).push(word)
    }

    for (const value of map.values()) {
        answer.push(value)
    }

    console.log(answer)
    return answer
}
groupAnagrams(strs)





/**
 * 
  let result = []
    const map = new Map([...strs])
    for (let i = 0; i < strs.length; i++) {
        const active = strs[i]
        let pair = []

        for (let j = 0; j < strs.length; j++) {
            const checking = strs[j]

            if (isAnagram(active, checking)) {
                pair.push(checking)
            }
        }
        result.push(pair)
    }
    console.log(result)
 */