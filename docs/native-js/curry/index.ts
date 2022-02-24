/**
 * @desc 函数柯里化
 *
 * @target fn(1,2,3...n)  fn(1,2)(3)(...n)
 *
 * @step
 * 1. 闭包记录参数初始长度
 * 2. 内部收集参数
 * 3. 注意 this 指向
 */

const curry = (...rest) => {
    const [fn] = rest;
    if(typeof fn !== 'function') {
        throw new Error(`Curry Error: args should be function`);
    }

    const argsLen = fn.length;
    const stack = [];

    return function collectArgs(...rest) {
        stack.push(...rest);
        if(stack.length < argsLen) {
            return (...args) => collectArgs(...args);
        } else {
            return fn.apply(this, stack);
        }
    }
};

export default curry;



