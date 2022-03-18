/**
 * @desc promise.allSettled
 * 无论失败与否，都会返回结果
 * 成功：status: 'fulfilled', value
 * 失败：status: 'rejected', reason
 */

declare interface PromiseConstructor {
    myAllSettled<T = any>(promises?: Promise<any>[]): Promise<T[]>;
}

enum PStatus {
    fulfilled = 'fulfilled',
    rejected = 'rejected'
}

Promise.myAllSettled = function (promises) {
    if(promises.length === 0) {
        return Promise.resolve([]);
    }

    return new Promise(resolve => {
        const result: { status: PStatus; value?: any; reason?: any }[] = [];
        promises.forEach((item, index) => Promise.resolve(item).then(value => {
            result[index] = {
                status: PStatus.fulfilled,
                value
            };

            if(result.length === promises.length) {
                // @ts-ignore
                resolve(result);
            }
        }, reason => {
            result[index] = {
                status: PStatus.rejected,
                reason
            };
            if(result.length === promises.length) {
                // @ts-ignore
                resolve(result);
            }
        }))
    })
};

const pErr = new Promise((resolve, reject) => {
    reject('Always fails');
});

Promise.myAllSettled([pErr])
    .then(res => {
        console.log(res);
    });
