/**
 * @desc promise finally 意味着，无论失败与否都会执行
 */
declare interface PromiseConstructor {
    myFinally<T = any>(p: any): Promise<T> | any;
}

Promise.myFinally = function (cb) {
    return this.then(data => {
        return Promise.resolve(cb()).then(() => data)

    }, err => {
         return Promise.resolve(cb()).then(() => {
            throw err
        })

    })
}
