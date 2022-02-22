/**
 * @desc 这里只展示最终版继承，无副作用且使用场景最多
 */

/** Parent class */
function Shape(width: number, height: number) {
    this.width = width;
    this.height = height;
}

/** child class */
function Square(...rest) {
    /** bind this, and injection args */
    Shape.apply(this, rest);
}

/** 绑定 prototype， parent and child */
Object.setPrototypeOf(Square.prototype, Shape.prototype);

/** bind constructor for child */
Square.prototype.constructor = Square;

export {
    Square, Shape
}




