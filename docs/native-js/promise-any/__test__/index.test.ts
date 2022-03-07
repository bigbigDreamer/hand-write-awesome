import '../index';
describe('promise.any suit', () => {
    it('should resolve first then promise, when has one resolve', () => {
        const promise1 = Promise.reject(0);
        const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
        const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));
        const promises = [promise1, promise2, promise3];

        expect(Promise.myAny(promises)).resolves.toBe('quick');
    });

    it('should throw err,when all promise are rejected', () => {

        const pErr = new Promise((resolve, reject) => {
            reject('Always fails');
        });

        expect(Promise.myAny([pErr])).rejects.toBe('[AggregateError: All promises were rejected]');
    });
});
