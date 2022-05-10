// 斐波那契额数列

const memo = {
    1: 1,
    2: 1,
}

let value;

const fibonacci = (n) => {
    if(!memo[n]) {
        memo[n] = fibonacci(n-1) + fibonacci(n-2);
    }

    value = memo[n];
    console.log(value, memo[n], n, "递归行为")

    return memo[n];
};

console.log(fibonacci(15), memo, value)


