import throttle from "../index";
import debounce from "../../debounce";

const sleepCall = (fn, delay = 100) => new Promise((resolve => setTimeout(() => resolve(fn()), delay)))

describe('throttle suit', () => {
    it('should called truly times, when use throttle', (done) => {
        const myMock = jest.fn(() => true);
        const debounceFn = throttle(myMock, 100);
        sleepCall(debounceFn, 100)
            .then(() => sleepCall(debounceFn, 100))
            .then(() => {
                expect(myMock).toBeCalledTimes(2);
                done();
            })

    });
});
