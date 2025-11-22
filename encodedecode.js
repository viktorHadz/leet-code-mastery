class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = ""
        for (const str of strs) {
            const len = str.length
            encoded += len + "#" + str
        }
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let answer = []
        let p1 = 0
        while (p1 < str.length) {
            let p2 = p1
            console.log('pointer1: ', p1)

            while (str[p2] !== '#') p2++ // now p2 is at index str[#]
            console.log('pointer2: ', p2, 'str[p2]', str[p2]) // identifies pos #  

            const len = parseInt(str.slice(p1, p2))
            console.log('Len: ', len)

            const wStart = p2 + 1
            const wEnd = wStart + len

            console.log('start:', wStart, ', end:', wEnd)

            const word = str.slice(wStart, wEnd)

            answer.push(word)

            p1 = p2 + 1 + len
        }
        return answer
    }
}

const strs = ["neet", "code", "love", "you"]
const solution = new Solution()
const encoded = solution.encode(strs)
const decoded = solution.decode(encoded)

console.log(encoded)
console.log(decoded)


