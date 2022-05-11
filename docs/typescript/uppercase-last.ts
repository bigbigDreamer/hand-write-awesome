/**
 * @desc 递归，upperCase 尾字母
 */

type UppercaseLast<Str> = Str extends `${infer First}${infer Rest}` ?
    Rest extends '' ? `${Uppercase<First>}` : `${First}${UppercaseLast<Rest>}`
    : Str;

type test = UppercaseLast<"wangbinlin">
