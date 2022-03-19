/**
 * @desc cache 意味着将高昂的计算结果缓存下来，如果有的话，下次可以继续使用
 */

const memorize = func => {

    const cache = new Map();

    const _replaceArgs = (_, value: Set<any> | Map<any, any>) => {
        if(value instanceof Set) {
            return [...Array.from(value)];
        }

        if(value instanceof Map) {
            return Object.fromEntries(value);
        }

        return value;
    }

    return (...rest) => {
        const argsKey = JSON.stringify(rest, _replaceArgs);

        if(cache.has(argsKey)) {
            return cache.get(argsKey);
        }

        const result = func.apply(this, rest);

        cache.set(argsKey, result);

        return result;
    };
}
