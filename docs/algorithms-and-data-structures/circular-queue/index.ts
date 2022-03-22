/**
 * @desc 循环队列约定了最大内存上限，最快速的 FIFO
 *
 * 理解循环队列就是 两个指针，一个队头，一个队尾，当队头追上队尾的时候，表示满了，当队头追上队尾的时候表示清空了
 */

class CircularQueue {
    private readonly queue: any[];
    private front: number;
    private rear: number;
    private readonly maxLength: any;
    constructor(maxLength) {
        // 队列
        this.queue = [];
        // 队头
        this.front = 0;
        // 队尾
        this.rear = 0;
        // 队列最大长度
        this.maxLength = maxLength;
    }

    // Checks if max capacity of queue has been reached or not
    checkOverflow () {
        if ((this.front === 1 && this.rear === this.maxLength) || (this.front === this.rear + 1)) {
            // CIRCULAR QUEUE OVERFLOW
            return true
        }
    }

    // checks if the queue is empty or not
    checkEmpty () {
        if (this.front === 0 && this.rear === 0) {
            return true
        }
    }

    checkSingleElement () {
        if (this.front === this.rear && this.rear !== 0) {
            this.front = this.rear = 0
            return true
        }
    }

    // ADD ELEMENTS TO QUEUE
    enqueue (value) {
        if (this.checkOverflow()) return
        if (this.checkEmpty()) {
            this.front += 1
            this.rear += 1
        } else {
            if (this.rear === this.maxLength) {
                this.rear = 1
            } else this.rear += 1
        }
        this.queue[this.rear] = value
    }

    // REMOVES ELEMENTS
    dequeue () {
        if (this.checkEmpty()) {
            // UNDERFLOW
            return
        }
        const y = this.queue[this.front]
        this.queue[this.front] = '*'
        if (!this.checkSingleElement()) {
            if (this.front === this.maxLength) this.front = 1
            else {
                this.front += 1
            }
        }

        return y // Returns the removed element and replaces it with a star
    }

    // Prints the entire array ('*' represents blank space)
    display (output = value => console.log(value)) {
        for (let index = 1; index < this.queue.length; index++) {
            output(this.queue[index])
        }
    }
}

const queue = new CircularQueue(4);

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue()

queue.display()
