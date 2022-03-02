/**
 * @desc 节流
 * 在一定时间阈值内，只能调用一次
 */

const throttle = (fn, delay) => {
    let originTime = Date.now();

    return (...rest) => {
        if(Date.now() - originTime > delay) {
            const result =  fn.apply(this, rest);
            originTime = Date.now();
            return result;
        }

    };
};


export default throttle;
