/**
 * @desc 实现 call 函数
 *   1. 函数调用
 *   2. 绑定上下文
 *   3. 接收参数
 */

declare interface Function {
    myCall(context?: Record<string, any>, ...rest: unknown[]): unknown;
}

Function.prototype.myCall = function (...rest) {
    const [context, ...args] = rest || [];
    const initialContext = context || {};
    initialContext.fn = this;
    // only mock
    setTimeout(() => {
        delete  initialContext.fn;
    })

    return initialContext.fn(...(args || []));
}
