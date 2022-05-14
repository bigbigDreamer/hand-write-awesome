type UniqTypes = 'a' | 'b' | 'c';

type UpperCaseUniqTypes = Uppercase<UniqTypes>;

type A = 'a' | 'b';

type B = 'b' | 'a';

type ADemo = [B]  extends [A] ? true : false;
