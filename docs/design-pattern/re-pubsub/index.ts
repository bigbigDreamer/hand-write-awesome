class PubSub1 {
    eventQueue: Record<string, {
        preIndex: number;
        queue: { token: string; call: ((topic?: string, data?: unknown) => void) }[];
    }> = {}
    subscribe(topic: string, fn) {
        if(!this.eventQueue[topic]) {
            this.eventQueue[topic] = {
                preIndex: -1,
                queue: []
            }
        }
        this.eventQueue[topic].preIndex+=1;
        const token = `${topic}_${this.eventQueue[topic].preIndex}`;
        this.eventQueue[topic].queue.push({
            token,
            call: fn
        });
        this.notifyInsideInfo();
        return token;
    }

    publish(topic, ...data) {
        this.eventQueue[topic]?.queue?.forEach(item => {
            item?.call.apply(this, data);
        })
    };

    private delTokenSubscriber(token: string) {
        const [topic] = token?.split('_');
        const index = this.eventQueue[topic]?.queue?.findIndex(item => item.token === token);
        this.eventQueue[topic]?.queue?.splice(index, 1);
    }

    unsubscribe(token: string) {
        this.delTokenSubscriber(token);
    }
    subscribeOnce(topic, fn) {
        if(!this.eventQueue[topic]) {
            this.eventQueue[topic].queue = []
        }
        this.eventQueue[topic].preIndex+=1;
        const token = `${topic}_${this.eventQueue[topic].preIndex}`;
        this.eventQueue[topic].queue.push({
            token,
            call: (...rest) => {
                fn.apply(this, rest);
                this.delTokenSubscriber(token);
            }
        });
        this.notifyInsideInfo();
    }

    notifyInsideInfo() {
        console.log(this.eventQueue);
    }
}

const pubsub = new PubSub1();

const token = pubsub.subscribe("Hello", (topic, data) => {
    console.log(topic, "我是持久定订阅者");
})
pubsub.subscribeOnce("Hello", (topic, data) => {
    console.log(topic, "我订阅了一次");
});

pubsub.subscribe("H5", (topic) => {
    console.log(topic, "H5 订阅")
})

pubsub.publish("Hello", "你好呀");
pubsub.publish("Hello", "你好呀");
pubsub.unsubscribe(token);
console.log("这个时候已经没有订阅者了");
pubsub.publish("Hello", "你好呀");
pubsub.publish("H5", "H5订阅");
