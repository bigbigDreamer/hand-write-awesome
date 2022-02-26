/** @care: This file is target for object, don't support non objet value */

/**
 * @desc 浅拷贝
 */
const cloneShallow = (target: any) => {
    if(typeof target !== 'object' || !target) {
        throw new Error('cloneShallow Error: only can clone object target');
    }
    return Array.isArray(target) ? [...target] : { ...target };
};


/**
 * @desc 深拷贝
 */

const cloneDeep = (target: any) => {
    if(typeof target!== 'object' || !target) {
        throw new Error('cloneDeep Error: only can clone object target');
    }
    const receiveObj = Array.isArray(target) ? [] : {};

    for (const key in target) {
        // 避免原型链的属性加进去
        if (target.hasOwnProperty(key)) {
            // 不要用精确类型检查
            receiveObj[key] = typeof target[key] === 'object' ? cloneDeep(target[key]) : target[key];
        }
    }

    return receiveObj;
};

export { cloneShallow, cloneDeep }


