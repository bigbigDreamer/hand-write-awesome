import guessEqual from "../index";

describe('number-precision suit', () => {
   it('should pass, when 0.1 + 0.2 = 0.3', () => {
       expect(guessEqual(0.1+0.2, 0.3)).toBeTruthy();
   });

    it('should nopass, when 0.2 + 0.2 = 0.5', () => {
        expect(guessEqual(0.2+0.2, 0.5)).toBeFalsy();
    });
});
