/**
 * @desc 阶乘
 * n!=(n-1)!×n
 */

const factorial = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    }

    return factorial(n-1) * n;
}


const res = factorial(4);

console.log(res)
