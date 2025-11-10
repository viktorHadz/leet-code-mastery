let word1 = 'racecar'
let word2 = 'carrace'

const getArr = (str) => {
    const arr = [...str]
    return arr
}
const wArr1 = getArr(word1)
const wArr2 = getArr(word2)

function isAnagram(s, t) {
    let w1 = [...s].sort()
    let w2 = [...t].sort()
    w1 = w1.join('')
    w2 = w2.join('')
    console.log(w1)
    console.log(w2)
    if (w1 === w2) return true
    else return false
}
console.log(isAnagram(word1, word2))

