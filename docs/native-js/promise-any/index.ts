/**
 * Promise.any 要义
 * 1. 只要有一个成功，无所谓先后顺序，只返回成功第一个
 * 2. 如果全部失败 抛出 [AggregateError: All promises were rejected]
 */

declare interface PromiseConstructor {
    myAny<T = any>(promises?: Promise<any>[]): Promise<T[]>;
}

Promise.myAny= (promises) =>  {
    return new Promise((resolve, reject) => {
        let errTimes = 0;
        promises.forEach(item => Promise.resolve(item).then(resolve).catch(()=> {
            errTimes+=1;
            if(errTimes === promises.length) {
                reject('[AggregateError: All promises were rejected]');
            }
        }))
    });
}
