/**
 * @desc 函数缓存
 *  函数记忆是指将上次的计算结果缓存起来，当下次调用时，如果遇到相同的参数，就直接返回缓存中的数据。
 */
const cacheFn = (fn) => {
    const cache = {};

    return (...rest) => {
        const cacheKey = `${rest.length}_${JSON.stringify(rest)}`;

        if(!cache[cacheKey]) {
            return cache[cacheKey] = fn.apply(this, rest);
        }
        return cache[cacheKey];
    }
};

export default cacheFn;
