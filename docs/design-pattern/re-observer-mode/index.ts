class Admin {
    observers = [];

    add(observer) {
        this.observers.push(observer);
    }

    notify() {
        this.observers.forEach(observer => {
            observer.update(this);
        })
    }
}

class Member {
    update(a) {
        // todos
    }
}

class SuperAdmin extends Admin{

    notification = null;

    constructor() {
        super();
    }
    sendAll(notification) {
        this.notification = notification;
        this.notify();
    }
}

class NormalMember extends Member{
    name = null;
    constructor(name) {
        super();
        this.name = name;
    }
    update(observer) {
        console.log(`@${this.name}, ${observer.notification}`);
    }
}

const admin = new SuperAdmin();

const memberA = new NormalMember("张三");
const memberB = new NormalMember("李二狗");

admin.add(memberA);
admin.add(memberB);

admin.sendAll("Hi, 大家好");

