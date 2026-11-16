class MinStack {
    constructor() {}
    minStack = []
    stack = []

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        val = Math.min(val, this.minStack.length? this.minStack[this.minStack.length - 1]: val)
        this.minStack.push(val)
    } 

    /**
     * @return {void}
     */
    pop() {
    this.minStack.pop()
    this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1]
    }
}
