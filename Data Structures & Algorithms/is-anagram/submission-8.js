class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false
        const countMap = {}
        for (let i = 0; i < s.length; i++) {
            const char = s[i]
            if (countMap[char]){
                countMap[char]++
            } else {
                countMap[char] = 1
            }
        }
        for (const char of t) {
            if (!countMap[char]) {
                return false;
            } else {
                countMap[char]--;
            }
        }
        return true;
    }
}
