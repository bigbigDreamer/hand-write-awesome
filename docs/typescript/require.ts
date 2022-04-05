type MyRequired<O extends Record<string, any>> = {
    [P in keyof O]-?: O[P];
}



type DataStrut = {
    name: string;
    age?: number;
}

type NewDataStrut = MyRequired<DataStrut>;


