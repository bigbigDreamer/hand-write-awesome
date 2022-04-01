type MyExclude<O, P> = O extends P ? never : O;

type AASA = "a" | "b" | "c";

type d = MyExclude<AASA, "c">

type e = Exclude<{ name: string; age: number }, "name">

