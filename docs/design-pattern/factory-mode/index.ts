class Animal {
    name?: string;
    constructor(name) {
        this.name = name;
    }
}

enum Animals {
    Dog = 'Dog',
    Pig = 'Pig',
    Duck = 'Duck'
}

class AnimalFactory extends Animal{
    constructor(...rest) {
        super(rest);
    }

    create(name) {
        switch (name) {
            case Animals.Dog:
                return new Animal(Animals.Dog);
            case Animals.Pig:
                return  new Animal(Animals.Pig);
            case Animals.Duck:
                return new Animal(Animals.Duck);
        }
    }
}

const factory = new AnimalFactory()

const pig = factory.create("Pig");
const dog = factory.create("Dog");
const duck = factory.create("Duck");

console.log(pig.name, dog.name, duck.name);
