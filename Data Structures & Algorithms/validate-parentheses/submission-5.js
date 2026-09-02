class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
    const stack = [];
    const closeToOpen = {
        ']': '[',
        '}': '{',
        ')': '(',
    };
    for (const char of s) {
        const isClosing = closeToOpen[char];
        if (isClosing) {
            const topChar = stack[stack.length - 1];
            if (stack.length && closeToOpen[char] === topChar) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}
}
