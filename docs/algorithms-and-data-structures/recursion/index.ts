/**
 * @desc 递归
 * 以定时计数器，用 setTimeout 实现一个计数器
 */

const countDown = (delay, num = 1) => {
    setTimeout(() => {
        if(num <= delay) {
            console.log(num);
            countDown(delay, num+=1);
        }
    }, 1000);
}

countDown(10)
