import cacheFn from "../index";

describe('cacheFn suit', () => {
   it('should get truly result, when use cacheFn args with not object', () => {
       function add(a,b) {
           return a+b;
       }

       const cFn = cacheFn(add);

       expect(cFn(1,2)).toEqual(3)
       expect(cFn(3,2)).toEqual(5)
       expect(cFn(1,2)).toEqual(3)
   });

   it('should get truly result, when use cacheFn args with object', () => {
       function add(a, { b }) {
           return a+b;
       }

       const cFn = cacheFn(add);

       expect(cFn(1,{ b: 2 })).toEqual(3)
       expect(cFn(3,{ b: 2 })).toEqual(5)
       expect(cFn(1,{ b: 2 })).toEqual(3)
   });
});
