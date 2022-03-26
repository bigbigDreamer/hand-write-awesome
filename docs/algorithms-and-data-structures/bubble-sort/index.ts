/**
 * @desc 冒泡排序
 */

const bubbleSort = (arr: any[]) => {
    try {
        arr.forEach((item, index) => {
            if(index<arr.length - 1 ) {
                let flag = true;
                for (let j = 0; j < arr.length -1-index; j ++) {
                    if(arr[j] > arr[j+1]) {
                        let middle = arr[j];
                        arr[j] = arr[j+1];
                        arr[j+1] = middle;
                        flag = false;
                    }
                }
                if(flag) {
                    throw arr;
                }
            }
        })
    } catch (arr) {
        console.log(arr);
        return arr;
    }

}

bubbleSort([3,2,1,5,4,8,7, 90, 1, 45])
