/**
 * @desc 桶排序
 */
const bucketSort = (arr) => {
    if(!Array.isArray(arr)) {
        return arr;
    }
    const bucketMap = [];
    const result= [];
    arr.forEach(item => {
        if(!bucketMap[item]) {
            bucketMap[item] = 1;
        } else {
            bucketMap[item]+=1;
        }
    });

    bucketMap.forEach((item, index) => {
        if(!item) {
            return;
        }
        if(item === 1) {
            result.push(index);
        } else {
            for(let i = 0; i< item; i++) {
                result.push(index);
            }
        }
    })
    return bucketSort;
};


bucketSort([1, 10, 8, 5, 8, 10, 5])
