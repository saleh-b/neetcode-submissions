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
                const seq = [num];
                let next = num;
                while (set.has(next + 1)) {
                    next = next + 1;
                    seq.push(next);
                }
                if (seq.length > longestSequenceLength)
                    longestSequenceLength = seq.length;
            }
        }
        return longestSequenceLength;
    }
}
