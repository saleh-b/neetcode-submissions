class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const groups = new Map<string, string[]>();
        for (const str of strs) {
            const count = new Array(26).fill(0);
            for (let i = 0; i < str.length; i++) {
                const index = str.charCodeAt(i) - 'a'.charCodeAt(0);
                count[index]++;
            }
            const key = count.join('#');

            if (!groups.has(key)) {
                groups.set(key, []);
            }

            groups.get(key)!.push(str);
        }
        return [...groups.values()];
    }
}
