class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let result = true;
        if (s.length !== t.length) return false;
        const sMap = {};
        for (const char of s) {
            if (sMap[char]) {
                sMap[char]++;
            } else {
                sMap[char] = 1;
            }
        }
        for (const [key, length] of Object.entries(sMap)) {
            if (!t.includes(key)) {
                result = false;
                break;
            }
            const tCharCount = t.split(key).length - 1;
            if (tCharCount !== length) {
                result = false;
                break;
            }
        }
        return result;
    }
}
