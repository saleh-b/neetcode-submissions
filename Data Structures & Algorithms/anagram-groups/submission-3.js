class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    

    groupAnagrams(strs) {
        const map = {}
        for (const str of strs) {
        const buckets = new Array(26).fill(0)
        for (const char of str) {
          const idx = char.charCodeAt(0) - 'a'.charCodeAt(0)
          buckets[idx]++
        }
        const key = buckets.join('#')
        if (map[key]) {
            map[key].push(str)
        } else {
            map[key] = [str]
        }
        }
        return Object.values(map)
    }
}
