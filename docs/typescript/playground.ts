/**
 * @desc 本文件仅作为日常练习使用
 */

// 数组反转

type ArrayReverse<Arr = any[]> = Arr extends [infer First, ...infer Rest] ?
    [...ArrayReverse<Rest>, First] : Arr;

type Demo = ArrayReverse<[1, 2, 3]>
