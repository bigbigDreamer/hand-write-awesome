type MyInclude<O, P extends any> = O extends P ? O : never;


type List1 = 'a' | 'b'

type aaa = MyInclude<List1, 'a'>

const testStr: aaa = "a";
