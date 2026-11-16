class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let rightIdx = numbers.length - 1
        let leftIdx = 0
        while (leftIdx < rightIdx) {
           const currSum = numbers[leftIdx] + numbers[rightIdx]
            if (currSum > target) rightIdx--
            if (currSum < target) leftIdx++
            if (currSum === target) return [leftIdx + 1, rightIdx + 1]
        }
    }
}
