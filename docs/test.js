/**
 * @desc 跳出 forEach 循环
 */
const arr = [1, 2, 3, 4, 5];
const log = (...rest) => console.log.apply(this, rest);
const logErr = (...rest) => console.error.apply(this, rest);

// 传统 for 循环
for (let i = 0; i<arr.length; i++) {
    if(arr[i] === 2) {
        log("item--for-loop", arr[i]);
        break;
    }
}

// forEach
try {
    arr.forEach(item => {
        if(item === 2) {
            log("item--for-loop", item);
            throw new Error('item is 2');
        }
    });
} catch (e) {
    logErr(e.toString());
}
