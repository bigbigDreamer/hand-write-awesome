type Reverse<Arr = any[]> = Arr extends [infer First, ...infer Rest] ?
        [...Reverse<Rest>, First] : [1,56565];

type result = Reverse<[1,2,3,4,5]>
