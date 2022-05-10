type MyUpperCase<Str extends string> = Str extends `${infer First}${infer Rest}` ?
    `${Uppercase<First>}${Rest}` : Str;

type C<A> = A extends `${infer F}${infer L}` ? L extends '' ? `${Uppercase<F>}` : `${F}${C<L>}` :never;

type st =C<"wangbinlin">;
