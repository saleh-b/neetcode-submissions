class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let result = true;
        if (s.length !== t.length) return false;
        const counts = {};
        for (const char of s) {
            if (counts[char]) {
                counts[char]++;
            } else {
                counts[char] = 1;
            }
        }
        for (const char of t) {
            if (!counts[char]) {
                result = false;
                break;
            } else {
                counts[char]--;
            }
        }
        return result;
    }
}
