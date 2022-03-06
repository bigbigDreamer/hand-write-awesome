declare interface PromiseConstructor {
    myAll<T = any>(promises?: Promise<any>[]): Promise<T[]>;
}

Promise.myAll = (promises) => {
    const result: any[] = [];
    return new Promise(((resolve, reject) => {
        promises.forEach((item, index) => Promise.resolve(item).then(res => {
            result[index] = res;
            if(result.length === promises.length) {
                resolve(result);
            }
        }).catch(reject));
    }))
};

Promise.myAll([Promise.resolve(1), Promise.reject(2), Promise.resolve(3)])
    .then(res => {
        console.log(res, "res");
    });


Promise.all([Promise.resolve(1), Promise.reject(2), Promise.resolve(3)])
    .then(res => {
        console.log(res, "res");
    });


