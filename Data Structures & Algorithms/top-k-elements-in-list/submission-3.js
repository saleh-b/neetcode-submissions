class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const result = []
        const freqMap = new Map()
        const buckets = new Array(nums.length+1)
        for (let i = 0; i < nums.length; i++){
            const num = nums[i]
            if (freqMap.has(num)) {
                freqMap.set(num, freqMap.get(num)+1)
            } else {
                freqMap.set(num, 1)
            }
        }
        for (const [num, freq] of freqMap) {
           if (!buckets[freq]) buckets[freq] = [];
            buckets[freq].push(num);
        }
        for (let i = buckets.length - 1; i >= 0; i--) {
            if (!buckets[i]) continue;
            const bucket = buckets[i]
            for (const num of bucket) {
                result.push(num);
                if (result.length === k) {
                    return result;
                }
            }

        }
        
    }
}
