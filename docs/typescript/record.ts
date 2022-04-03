/**
 * 实现 record
 */

type MyRecord<K extends keyof any, V extends any> = {
    [key in K]: V;
};

type uiu = MyRecord<number, any>
