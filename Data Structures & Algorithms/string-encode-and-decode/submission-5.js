class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = ''
        for (const str of strs) {
            encoded += `${str.length}%${str}`
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
            while (str[j] !== '%') j++;
            const length = Number(str.slice(i, j));
            const orgStr = str.slice(j + 1, j + 1 + length);
            decoded.push(orgStr);
            i = j + length
        }
        return decoded
    }
}
