class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let longestSequenceLength = 0;
        for (let i = 0; i < nums.length; i++) {
         const currNum = nums[i]
        const hasLeftNeigbour = set.has(currNum -1)
        if (!hasLeftNeigbour){
            let seqLength = 0
            while (set.has(currNum+ seqLength)) seqLength++
            if (seqLength> longestSequenceLength) longestSequenceLength = seqLength
        }
        }
        return longestSequenceLength
    }
}
