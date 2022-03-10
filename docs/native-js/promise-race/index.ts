/**
 * @desc promise.race 的定义是什么？https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/race
 */

declare interface PromiseConstructor {
    myRace<T = any>(promises?: Promise<any>[]): Promise<T>;
}

Promise.myRace = function (promises = []) {
    return new Promise((resolve, reject) => {
        let latestSym = false;
        promises.forEach(item => Promise.resolve(item).then(res => {
            if(!latestSym) {
                latestSym = true;
                resolve(res);
            }
        }).catch(err => {
            if(!latestSym) {
                latestSym = true;
                reject(err);
            }
        }))
    })
}



