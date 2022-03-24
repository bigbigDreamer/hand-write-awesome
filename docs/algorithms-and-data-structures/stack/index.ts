/**
 * @desc stack
 */

class Stack {
    private stack: any[];
    private size: number;
    constructor() {
        this.stack = [];
        this.size = 0;
    }

    pop() {
        if(this.empty()) {
            throw new Error("Stack is empty");
        }
        this.stack.pop();
        this.size-=1;
    }

    push(value) {
        this.stack.push(value);
        this.size+=1;
    }

    empty() {
        return this.size === 0;
    }
}
