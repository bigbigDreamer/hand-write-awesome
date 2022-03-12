/**
 * Promise.any 要义
 * 1. 只要有一个成功，无所谓先后顺序，只返回成功第一个
 * 2. 如果全部失败 抛出 [AggregateError: All promises were rejected]
 */

declare interface PromiseConstructor {
    myResolve<T = any>(p: any): Promise<T> | any;
}

// 参考：https://juejin.cn/post/6844904048991141901
Promise.myResolve = function (p) {
    if(p instanceof Promise) {
        return p;
    }
    if(p.then) {
        return new Promise(((resolve, reject) => p.then(resolve, reject)));
    }

    return new Promise(resolve => resolve(p));
}
