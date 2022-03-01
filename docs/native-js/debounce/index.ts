import { JSDOM } from 'jsdom';

const { window } = new JSDOM();
/**
 * @desc 防抖的第一要义是，在一定时间阈值内多次触发，只执行最后一次
 */
const debounce = (fn, delay, immediate?: boolean) => {
    let timer, nowCall = null;

    return (...rest) => {
        if(timer) { clearTimeout(timer); }
        if(immediate) {
            nowCall = !timer;
            timer = setTimeout(() => {
                timer = null
            }, delay);
            if(nowCall) {
                fn.apply(this, rest);
            }
            return;
        }
        timer = setTimeout(() => fn.apply(this, rest), delay);
    }
};


export default debounce;
