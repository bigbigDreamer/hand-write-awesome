function pExtend(childConstructor, parentConstructor) {
    Object.setPrototypeOf(childConstructor.prototype, parentConstructor.prototype);
    // childConstructor.prototype = Object.create(parentConstructor.prototype);
}

function Parent() {

}

Parent.prototype.say = function () {
    console.log("我是父亲")
}

function Child(...rest) {
    Parent.apply(this, rest);
}
pExtend(Child, Parent);
const child = new Child("张三");
child.say();

console.log(Child.prototype.constructor)

