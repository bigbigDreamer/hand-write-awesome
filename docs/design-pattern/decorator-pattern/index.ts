function Enhance(Parent) {
    console.log(Parent)
    return class SuperPerson extends Parent {
        constructor(name: any) {
            super(name);
        }

        say() {
            console.log(this.name);
        }
    }
}

// @ts-ignore
@Enhance
class Person {
    public name?: any;
    constructor(name) {
        this.name = name;
    }
}

const p = new Person("张三");

// @ts-ignore˙˙
p.say();
