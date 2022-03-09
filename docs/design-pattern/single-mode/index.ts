/**
 * @desc 单例模式
 */
function SingleMode() {

}

SingleMode.getInstance = function () {
    if(!this.instance) {
        this.instance = new SingleMode();
    }

    return this.instance;
}
