import curry from '../index';

describe('Curry Suit', () => {
    it('should throw error, when args is not fn', () => {

       expect(() => curry(null)).toThrow('Curry Error: args should be function');
    });

    it('should return truly result, when fn is called', function () {
        function add(a, b, c) {
            return a+b+c;
        }
        const normalCalledRes = add(1, 2, 3);
        const curryFn = curry(add);
        const curryCalledRes = curryFn(1)(2, 3);

        expect(curryCalledRes).toEqual(normalCalledRes);
    });
});
