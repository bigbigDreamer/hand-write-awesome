/**
 * @desc 发布订阅模式
 *  1. 可以简单理解为 先订阅报纸，等待发版后送到
 */

class PubSub {
    private readonly eventQueue: Record<string, Function[]>;
    constructor() {
        this.eventQueue = {};
    }

    subscribe(topic: string, fn: (data: any) => boolean) {
        if(!this.eventQueue[topic]) {
            this.eventQueue[topic] = [];
        }

        this.eventQueue[topic].push(fn);
    }

    publish(topic: string, data: any) {
        if(!this.eventQueue[topic]) {
            throw new Error(`Topic is not found`);
        }

        this.eventQueue[topic].forEach(item => item.call(this, data));
    }
}

const ps = new PubSub();

ps.subscribe('Test', data => {
    console.log(data, "data")
    return true;
});

ps.publish('Test', "I love U");
