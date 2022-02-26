/**
 * @desc 对于深拷贝和浅拷贝的概念应当做以区分
 *  1. 当目标对象属性为一级时，浅拷贝 === 深拷贝，深和浅的区分仅仅是拷贝一级属性
 */

import { cloneDeep, cloneShallow } from "../index";

describe('cloneDeep suit',() => {
    it('should throw error, when args is not object', () => {
        expect(() => cloneDeep(() => true)).toThrow('cloneDeep Error: only can clone object target');
    });

    it('should has truly behavior, when deepClone', () => {
        const baseObj = {
            userInfo: {
                name: '张三'
            }
        };

        const cloneObj: any= cloneDeep(baseObj);

        const modifyValue = cloneObj.userInfo.name = "李四";

        expect(modifyValue).toBe('李四');
        expect(baseObj.userInfo.name).toBe('张三');
    });
});

describe('cloneShallow suit',() => {
    it('should throw error, when args is not object', () => {
        expect(() => cloneShallow(() => true)).toThrow('cloneShallow Error: only can clone object target');
    });

    it('should has truly behavior, when deepClone', () => {
        const baseObj = {
            userInfo: {
                name: '张三'
            }
        };

        const cloneObj: any= cloneShallow(baseObj);

        const modifyValue = cloneObj.userInfo.name = "李四";

        expect(modifyValue).toBe('李四');
        expect(baseObj.userInfo.name).toBe('李四');
    });
});
