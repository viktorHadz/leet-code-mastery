class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let wordsString = ''
        for (let i = 0; i < strs.length; i++) {
            let lenPrefixedWord = `${strs[i].length}${strs[i]}`
            wordsString = wordsString + lenPrefixedWord
        }
        console.log(wordsString)
        return wordsString
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // check if el[0] is int 
        // if it is convert to int 
        // remove that el from the string 
        // splice out el[0] number of chars into the answer as a str[] 
        // continue until str is empty 

        let answer = []

        const checkDigits = function (str) {
            let result = ""

            for (let i = 0; i < 3; i++) {
                const c = str[i]
                if (c === undefined || c < "0" || c > "9") break
                result += c
            }

            return result === "" ? NaN : parseInt(result)
        }

        console.log('digits', checkDigits(str))

        // while loop removing word elements from str 
        while (str.length > 0) {
            const digit = checkDigits(str)
            let word
            [...str].splice(0, digit)
            console.log(str)

        }
    }
}
const strs = ["neet", "code", "love", "you"]
const solution = new Solution()
const encode = solution.encode(strs)
const decode = solution.decode(encode)
console.log(encode)
console.log(decode);




/**
 * -- Text Encoding and Decoding  
 * 
    A string is not bytes 
        - a string is a human-readable abstraction built on top of raw bytes 
        - String | Encoding (UTF-8, ASCII) | Bytes 
    1. Encoding = text => bytes  
    2. Decoding = bytes => text 
    
    Binary 
    12.25 to 
        1. Decimal to binary conversion 
            1. 12 = 12%2=0 6%2=0 3%2=1 1%2=1
            2. bin: 0011 <-> 1100
            3. 12 = 1100
        2. Decimal to binary with fractional part 
            1. get integer part ^ 
                => 1100.xxxx
            2. Multiply fractional by 2 until the fractional result = x.01
                => 0.25x2=0.5 
                => 0.5x2=1.0 - fractional result is now 0 
                * we do not swap here (<->) as we read from top to bottom 
            3. ==> 1100.10 
            (12.25)10 = (1010.01)2
        3. Binary to decimal 
            1. write down binary => 1100
            2. multiply each digit by 2 starting from right most and raise to the power of it's position 
            3. Add up the results of these multiplications to get the decimal 
            ----- Example 1100 = 1x2^3 + 1x2^2 + 0x2^1 + 0x2^0 = 8 + 4 + 0 + 0 = 12 
        4. Binary to decimal with fractional 
            1. Write down the binary fraction => 1100.25 
            2. Perform above steps for the integer part 
            3. for the fraction multiply each digit by 2 raised to the nengative power of its position starting from -1 (first digit after the decimal point)
            4. Add up the results of these multiplications 
            ---- Example 1100.01 = 1x2^3 + 1x2^2 + 0x2^1 + 0x2^0 + |. 0x2^-1 + 1x2^-2 = 
            => 8 + 4 + 0 + 0 + 0x1/2 + 1x1/4 = 8 + 4 + 0 + 0 + |. 0 + 0.25 = 12.25 
            => 12.25

    HEX - hexadecimal - used to represent binary more concisely 
        - uses from 0 to 9 then from A to F  
        - a hex digit represents 4 contiguous(one after another in memory) bits - known as a nibble 
        - an 8-bit byte is two hex digits such as 2C 


    ASCII
        - first 32 chars are control characters (for controlling peripherals, file separator )
        - 32-127 
        - 65-90 - uppercase latin alphabet 
        - 97-122 - lowercase alphabet   
    UTF-8 
        - uses ASCII for the first 128 characters - 1 byte for each ASCII character 
        
 */