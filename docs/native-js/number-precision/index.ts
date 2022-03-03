/**
 * @desc 数字精度关注的问题应该是 0.1 + 0.1 !== 0.2
 * 精度算数总可以理解为 left - right 一定大于 right
 */

const guessEqual = (left, right) => Math.abs(left - right) < Number.EPSILON;


export default guessEqual;
