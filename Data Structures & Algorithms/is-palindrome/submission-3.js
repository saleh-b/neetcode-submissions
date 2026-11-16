class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
        let rightIdx = s.length - 1
        let leftIdx = 0
        while (leftIdx < rightIdx) {
            const rightChar = s[rightIdx]
            const leftChar = s[leftIdx]
            if (leftChar !== rightChar) {
                return false
            } else {
                leftIdx++
                rightIdx--
            }
        }
        return true
    }
}
