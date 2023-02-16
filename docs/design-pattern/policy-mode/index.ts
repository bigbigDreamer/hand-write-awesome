/**
 * @desc 背景 双十一售卖，现货，旧货堆积，预售
 */

const goodsSale = {
    saleCurrent() {
        // todos
    },
    saleOld() {
        // todos exist value
    },
    salePre() {
        // todos
    }
};

const sale = (type) => {
    return goodsSale[type]();
}



