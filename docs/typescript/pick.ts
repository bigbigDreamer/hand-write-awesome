type MyPick<O extends Record<string, unknown>, S extends keyof O> = {
    [P in S]: O[S];
}

type obj = {
    name: string;
    age: number;
}

type a = MyPick<obj, "name">

const aa: a = {
    name: "sss"
}
