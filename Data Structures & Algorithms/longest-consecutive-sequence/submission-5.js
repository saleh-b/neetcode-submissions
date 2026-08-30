class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longestSequenceLength = 0;
        const set = new Set(nums);
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            const hasLeftNeigbour = set.has(num - 1);
            // if hasLeftNeigbour is false this number is a start of a sequence
            if (!hasLeftNeigbour) {
                let seqLength = 0;
                while (set.has(num + seqLength)) {
                    seqLength++;
                }
                if (seqLength > longestSequenceLength)
                    longestSequenceLength = seqLength;
            }
        }
        return longestSequenceLength;
    }
}