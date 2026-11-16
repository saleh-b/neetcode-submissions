class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const closeToOpen = {
            "]": "[",
            ")": "(",
            "}": "{"
        }
        const stack = []
        for (const char of s) {
            const isClosing = Boolean(closeToOpen[char])
            if (isClosing) {
                const stackTop = stack[stack.length - 1]
                if (stackTop === closeToOpen[char]) {
                    // pop the lastest element at the stack to move comparing the next bracket
                    stack.pop()
                } else {
                    return false
                }
            } else {
                // push the opening bracket to the stack
                stack.push(char)
            }
        }
        // if there is any remaining character, it mean are not closed correctly
        return stack.length === 0

    }
}
