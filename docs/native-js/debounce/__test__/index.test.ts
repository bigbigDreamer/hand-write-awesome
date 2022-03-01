import debounce from "../index";

const sleepCall = (fn, delay = 100) => new Promise((resolve => setTimeout(() => resolve(fn()), delay)))


describe('debounce suit', () => {

    it('should record truly call times, when use debounce', (done) => {
        const myMock = jest.fn(() => console.log("调用"));
        const debounceFn = debounce(myMock, 100);
        sleepCall(debounceFn, 100)
            .then(() => sleepCall(debounceFn, 100))
            .then(() => {
                expect(myMock).toBeCalledTimes(1);
                done();
            })
    });

    it('should record truly call times, when use debounce', (done) => {
        const myMock = jest.fn(() => console.log("调用"));
        const debounceFn = debounce(myMock, 0);
        sleepCall(debounceFn, 0)
            .then(() => sleepCall(debounceFn, 100))
            .then(() => {
                expect(myMock).toBeCalledTimes(1);
                done();
            })
    });

    it('should record truly call times, when use debounce with immediate', (done) => {
        const myMock = jest.fn(() => console.log("调用"));
        const debounceFn = debounce(myMock, 100, true);
        sleepCall(debounceFn, 100)
            .then(() => sleepCall(debounceFn, 100))
            .then(() => {
                expect(myMock).toBeCalledTimes(2);
                done();
            })
    });

    it('should record truly call times, when use debounce with immediate', (done) => {
        const myMock = jest.fn(() => console.log("调用"));
        const debounceFn = debounce(myMock, 0, true);
        sleepCall(debounceFn, 100)
            .then(() => sleepCall(debounceFn, 100))
            .then(() => {
                expect(myMock).toBeCalledTimes(2);
                done();
            })
    });
});
