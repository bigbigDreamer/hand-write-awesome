class Queue {
    private queue: any[];

    constructor() {
        this.queue = [];
    }

    enqueue(value) {
        this.queue.push(value);
    }

    dequeue() {
        if(this.empty()) {
            throw new Error('Queue is Empty');
        }
        this.queue.shift();
    }

    // Return Is queue empty ?
    empty () {
        return this.queue.length === 0
    }

}
