class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const buckets = new Array(nums.length + 1);
        const result = [];
        const freqMap = new Map();
        for (const num of nums) {
            if (freqMap.has(num)) {
                freqMap.set(num, freqMap.get(num) + 1);
            } else {
                freqMap.set(num, 1);
            }
        }
        for (const [num, freq] of freqMap) {
            if (!buckets[freq]) buckets[freq] = [];
            buckets[freq].push(num);
        }
        for (let i = buckets.length - 1; i >= 0; i--) {
            if (!buckets[i]) continue;
            for (const num of buckets[i]) {
                result.push(num);
                if (result.length === k) {
                    return result;
                }
            }
        }
        return result;
    }
}
