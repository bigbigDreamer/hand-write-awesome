/**
 * @desc 函数组合
 * 直接模拟 redux 实现, 支持洋葱模型方向变更
 */

const composeRight = (...fns) => {
    if (fns.length === 0) {
        return arg => arg
    }

    fns.forEach(item => {
        if(typeof item !== 'function') {
            throw new Error('Compose Error: args include some is not a function')
        }
    })

    if (fns.length === 1) {
        return fns[0]
    }

    return fns.reduce((a, b) => (...args) => a(b(...args)))

}

const composeLeft = (...fns) => {
    if (fns.length === 0) {
        return arg => arg
    }

    fns.forEach(item => {
        if(typeof item !== 'function') {
            throw new Error('Compose Error: args include some is not a function')
        }
    })

    if (fns.length === 1) {
        return fns[0]
    }

    return fns.reduceRight((a, b) => (...args) => a(b(...args)))

}

export {
    composeLeft,
    composeRight
}
