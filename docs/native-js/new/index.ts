function myNew(...rest: [fn: Function, props: any]) {

    const instance = Object.create(null);
    const [constructor, ...props] = rest || [];

    Object.setPrototypeOf(instance, constructor.prototype);

    const ret = constructor.apply(instance, props);

    /** see https://github.com/jonschlinkert/kind-of/blob/abab085d65f7ee978011da8f135291892fcd97db/index.js#L65 */
    return Object.prototype.toString.call(ret).slice(0, -8).toLowerCase() === 'object' ? ret : instance;
}

function Animal(name: string) {
    // @ts-ignore
    this.name = name
}

Animal.prototype.say = function () {
    console.log("My name is:", this.name);
}

const animal = myNew(Animal, "Dog");

animal.say();


// test extends

function Dog(...rest) {
    // extends __proto__
    Animal.apply(this, rest)
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.constructor = Dog;


const yellowDog = myNew(Dog, "流氓");

yellowDog.say();

// 沿着原型链一直往上找
console.log(
    yellowDog.constructor === Dog,
    yellowDog.__proto__ === Dog.prototype,
    Dog.prototype.__proto__ === Animal.prototype,
    Animal.prototype.__proto__ === Object.prototype,
    // @ts-ignore
    Object.prototype.__proto__ === null,
    Object.prototype.constructor === Object,
    Object.constructor === Function
)

// true true true true true true true
