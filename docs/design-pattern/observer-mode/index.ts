/**
 * @desc 观察者模式
 */
function Observer (who?: string) {
    this.name = who;
}

Observer.prototype.watch = function () {
    console.log("接收通知", this.name);
}

function Subject() {
    this.subQueue = [];

    this.add = (observer) => {
        if(!this.subQueue.includes(observer)) {
            this.subQueue.push(observer);
        }
    };

    this.notify = () => {
        this.subQueue.forEach(item => {
            item.watch();
        })
    }
}

const sb = new Subject();

const ob1 = new Observer("张三");
const ob2 = new Observer("李四");

sb.add(ob1);
sb.add(ob2);

sb.notify();

