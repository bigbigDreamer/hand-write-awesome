import myNew from "../index";


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

describe("New Constructor test suit", () => {
    it('should get truly result, when gen a factory, return void', () => {
        function Animal(name: string) {
            // @ts-ignore
            this.name = name
        }

        const animal = myNew(Animal, "Yellow Dog");

        expect(animal.name).toEqual("Yellow Dog");
    });

    it('should get truly result, when gen a factory, return not object', function () {
        function Animal(name: string) {
            // @ts-ignore
            this.name = name

            return null;
        }

        const animal = myNew(Animal, "Yellow Dog");

        expect(Object.keys(animal).length).toBe(1);
    });

    it('should get truly result, when gen a factory, return object', function () {
        function Animal(name: string) {
            // @ts-ignore
            this.name = name

            return {};
        }

        const animal = myNew(Animal, "Yellow Dog");

        expect(Object.keys(animal).length).toBe(0);
    });

});
