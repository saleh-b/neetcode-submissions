class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const result = []
        const map = new Map()
        for (let i = 0; i < nums.length; i++) {
            const currNum = nums[i]
            const matchNum = target - currNum
            if (map.has(matchNum)) {
                 return [map.get(matchNum), i]

            } else {
                map.set(currNum, i)
            }
        }
        return result
    }
}
