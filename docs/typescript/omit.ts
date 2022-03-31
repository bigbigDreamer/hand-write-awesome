type MyExtract<T, U> = T extends U ? never : T;

type MyOmit<O, P extends keyof any> = Pick<O, MyExtract<keyof O, P>>

type ObjInfo = {
    name: string;
    age: number;
}

type CC = MyOmit<ObjInfo, "name">

const uiu: CC = {
    age: 12
}
