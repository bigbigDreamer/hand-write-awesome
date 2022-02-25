import { composeRight, composeLeft } from '../index';

let res = [];

function A() {
    res.push('A');
}

function B() {
    res.push('B');
}

describe('right compose suit ', () => {
    it('should throw error, when args is include that not a function', () => {
       expect(() => composeRight(() => 0, null, 1, ()=> 7)).toThrow('Compose Error: args include some is not a function');
    });

    it('should return a function, when args is empty', () => {
        expect(typeof composeRight()).toBe('function');
    });

    it('should return truly result, when args number is one', () => {
        expect(composeRight(() => 1)()).toBe(1);
    });

    it('should return truly result, when args is more', () => {
        res = [];

        composeRight(A, B)();

        expect(res).toEqual(['B', 'A']);
    });
})


describe('left compose suit ', () => {
    it('should throw error, when args is include that not a function', () => {
       expect(() => composeLeft(() => 0, null, 1, ()=> 7)).toThrow('Compose Error: args include some is not a function');
    });

    it('should return a function, when args is empty', () => {
        expect(typeof composeLeft()).toBe('function');
    });

    it('should return truly result, when args number is one', () => {
        expect(composeLeft(() => 1)()).toBe(1);
    });

    it('should return truly result, when args is more', () => {
        res = [];

        composeLeft(A, B)();

        expect(res).toEqual(['A', 'B']);
    });
})
