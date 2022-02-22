import { Square, Shape } from '../index';

describe('Extend suit', () => {
    const square = new Square(45, 25);
    it('Should can get width and height, when instantiate', () => {
        expect(square.width).toBe(45);
        expect(square.height).toBe(25);
    });

    it('Should can get constructor is itSelf, when instantiate', () => {
        expect(square.constructor).toBe(Square);
    })

    it("Should can get __proto__ is itSelf's constructor's function of prototype", () => {
        expect(square.__proto__).toBe(Square.prototype);
    })

    it("Should can get prototype's __proto__ is it parent's prototype ", () => {
        expect(Square.prototype.__proto__).toBe(Shape.prototype);
    })
})
