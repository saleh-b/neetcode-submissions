class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    delimiter = '%'
    encode(strs) {
        let encoded = ''
        for (const str of strs) {
            encoded += `${str.length}${this.delimiter}${str}`
        }
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decoded = []
        for (let i = 0; i < str.length; i++) {
            let j = i
            while (str[j] !== this.delimiter) j++
            const length = Number(str.slice(i, j))
            i = j + length
            const orgStr = str.slice(j+1, i+1)
            decoded.push(orgStr)
        }
        return decoded
    }
}
