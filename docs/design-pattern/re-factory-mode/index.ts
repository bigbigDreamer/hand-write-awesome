/**
 * 背景：员工管理系统中需要录入若干个员工
 */

class Employee {
    name: string;
    career: string;
    work: string[];
    constructor(name, career, work) {
        this.name = name;
        this.career = career;
        this.work = work;
    }
}

class EmployeeEntrySys {
    careerWorkMap: Record<string, string[]> = {};
    employeeStore: Employee[] = [];
    entryCareer(career: string, work: string[]) {
        this.careerWorkMap[career] = work;
    }

    entry(name, career) {
        const employee = new Employee(name, career, this.careerWorkMap[career]);

        this.employeeStore.push(employee);

        return this.employeeStore;
    }
}

const emSys = new EmployeeEntrySys();

emSys.entryCareer("coder", ["写代码", "做设计"]);
emSys.entryCareer("product manager", ["做调研", "写PRD"]);

emSys.entry('张三', 'coder');
const result = emSys.entry('李四', 'product manager');

console.log(result);
