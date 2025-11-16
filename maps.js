let word1 = 'racecar'
let word2 = 'carrace'

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
// console.log(isAnagram(word1, word2))

// 1. Count frequenncy in a string with Map 
let word3 = "banana"
function countFrequency(word) {
    const myMap = new Map()
    for (const c of word) {
        if (!myMap.has(c)) {
            myMap.set(c, 0)
        }
        myMap.set(c, myMap.get(c) + 1)
        // The above two can be expressed in 1 line via 
        // myMap.set(c, (myMap.get(c) || 0) + 1);
    }
    return myMap
}
console.log(countFrequency(word3))
// 2. Duplicates removal via set
function dupeRemove(arr) {
    const mySet = new Set(arr)
    return [...mySet]
}
console.log(dupeRemove([1, 2, 2, 3, 3, 3, 4]))

// 3. Obj to map 
function objectToMap(obj) {
    const myMap = new Map(Object.entries(obj))
    return myMap
}
console.log(objectToMap({ name: "Alice", age: 30 }))

// 4. Map to Obj 
let myMap = new Map()
myMap.set('banana', 1)
myMap.set('orange', 2)
myMap.set('meat', 4)
function mapToObj(map) {
    const myObj = Object.fromEntries(map)
    return myObj
}
console.log(mapToObj(myMap))

// 5. Group numbers by even/odd - solved super quick 
function oddEvenGroup(arr) {
    const myMap = new Map()
    myMap.set('even', [])
    myMap.set('odd', [])
    for (const el of arr) {
        if (el % 2 === 0) { myMap.get('even').push(el) } else myMap.get('odd').push(el)

    }
    return myMap
}
console.log(oddEvenGroup([1, 2, 3, 4, 5, 6]))

// 6. Track first appearance index of each word - solved under 5 mins pretty good woop
function trackIndexAppearance(word) {
    const myMap = new Map()
    let letterArr = word.split('')
    // indexOf is O(n) and you run it inside a loop → O(n²)
    // It will overwrite on repeated chars 
    // for (const char of wordArray) {
    //     myMap.set(char, (wordArray.indexOf(char)))
    // }

    // O(n) solution is with traditional for loop and a if(!map.has(arr[i])) 
    console.log(typeof letterArr)
    for (let i = 0; i < letterArr.length; i++) {
        if (!myMap.has(letterArr[i])) {
            myMap.set(letterArr[i], i)
        }
    }
    console.log(letterArr)
    return myMap
}
console.log(trackIndexAppearance(word1))

// 7. Count unique vals using a Set 
function countUniqueVals(arr) {
    const mySet = new Set(arr)
    return mySet.size
}
console.log(countUniqueVals(["cat", "dog", "cat", "bird", "dog"]))

// 8. Adjacency list 
const adjacencyList = new Map()
myMap.set()
function adjacentList(map) { }




