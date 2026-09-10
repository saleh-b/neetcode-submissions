class MinStack {
    stack = [];
    minStack = [];
    constructor() {}

    updateMin(val) {
        if (this.stack.length)
            return Math.min(val, this.minStack[this.minStack.length - 1]);
        return val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const min = this.updateMin(val);
        this.minStack.push(min);
        this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.minStack.pop();
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
