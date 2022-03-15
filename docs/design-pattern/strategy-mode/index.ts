/**
 * @desc 策略模式
 */

const getLevel = (level: number) => {
    if(level === 1) {
        return level;
    }

    if(level === 2) {
        return level*2;
    }

    if(level === 3) {
        return level*3;
    }

    return null;
}
