/**
 * @desc 单例模式
 */
function SingleMode() {

}

SingleMode.getInstance = function () {
    // @ts-ignore
    if(!SingleMode.instance) {
        console.log("只执行一次")
        // @ts-ignore
        SingleMode.instance = new SingleMode();
    }

    // @ts-ignore
    return SingleMode.instance;
}

SingleMode.getInstance()
SingleMode.getInstance()
SingleMode.getInstance()
