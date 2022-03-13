/**
 * @desc promise catch 意味着，无论失败与否都会执行
 */
declare interface Promise<T> {
    myCatch<T = any>(p: any): Promise<T> | any;
}

Promise.prototype.myCatch = function(onRejected) {
    return this.then(null, onRejected);
}
