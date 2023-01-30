/**
 * 背景：员工作为基类，分为 BOSS 层、管理层、普工 层
 */
interface IEmployee {
    toString?(): string;
}

abstract class BaseEmployee implements IEmployee{
    name: string;
    age: number;
    position: 'boss' | 'manage' | 'normal';

    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    toString(): string {
        return `
            我叫${this.name}，今年 ${this.age}，我的职位是 ${this.position}
        `;
    }
}

abstract class BOSSEmployee extends BaseEmployee{
    abstract ownBossRole(): void;
}
abstract class ManageEmployee extends BaseEmployee{
    abstract ownManageRole(): void;
}
abstract class NormalEmployee extends BaseEmployee{
    abstract ownNormalRole(): void;
}
class BEmployee extends BOSSEmployee {
    constructor(name, age, position) {
        super(name, age, position);
    }
    ownBossRole(): void {
        console.log(this.toString());
    }
}

const boss1 = new BEmployee('张三', 58, "COO");

boss1.ownBossRole()
