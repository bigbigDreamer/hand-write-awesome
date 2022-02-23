import '../index';

describe("Call function suit", () => {
    it("Should return truly result, when call function", () => {
        function test(a, b) {
            return a+b;
        }

        const result = test.myCall(null, 2, 3);

        expect(result).toBe(5);
    });

    it("Should return truly context, when call function", () => {
        function test() {
            return this;
        }

        const context = {};

        const returnThis = test.myCall(context);

        // setTimeout 宏任务队列 第二次执行，一定不包含 fn 属性
        setTimeout(() => {
            expect(returnThis).toEqual(context);
        });
    })
})
