/**
 * @desc quick sort
 */
const quickSort = (arr: any[]) => {
    if (arr.length <= 1) {
        return arr;
    }

    const right = [];
    const left = [];

    const king = arr.shift();

    arr.forEach(item => {
        if(item < king) {
            left.push(item);
        } else {
            right.push(item);
        }
    })

    return quickSort(left).concat(king, quickSort(right));
}

console.log(quickSort([1, 5, 2, 9, 5,3,1]))
