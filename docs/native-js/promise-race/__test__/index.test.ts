import '../index';

test('when there have two successfully cases, should return fast one', () => {
    const p1 = new Promise(function(resolve, reject) {
        setTimeout(resolve, 500, "one");
    });
    const p2 = new Promise(function(resolve, reject) {
        setTimeout(resolve, 100, "two");
    });

    expect(Promise.myRace([p1, p2])).resolves.toBe('two');
});

test('when there have one successfully cases, one error case, should return fast one', () => {
    const p5 = new Promise(function(resolve, reject) {
        setTimeout(resolve, 500, "five");
    });
    const p6 = new Promise(function(resolve, reject) {
        setTimeout(reject, 100, "six");
    });


    expect(Promise.myRace([p5, p6])).rejects.toBe('six');
});

test('when there no cases, should pending', () => {
   expect(Promise.myRace()).resolves.toBe(null);
});
