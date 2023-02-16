/**
 * 懒汉式
 */
class LazySingle {
    private static instance: LazySingle = null;
    static getInstance() {
        if(!LazySingle.instance) {
            LazySingle.instance = new LazySingle();
        }

        return LazySingle.instance;
    }
}

/**
 * 饿汉式
 */

class PreSingle {
    private static instance: PreSingle = new PreSingle();

    static getInstance() {
        return PreSingle.instance;
    }

    show() {
        console.log("show your time");
    }
}

const pre1 = PreSingle.getInstance();
const pre2 = PreSingle.getInstance();

pre1.show();

console.log(pre1, pre2, pre1 === pre2)
