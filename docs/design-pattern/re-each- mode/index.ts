//

const nums = [1, 2, 3];

const iterator = nums[Symbol.iterator]()

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


function *iteratar() {
    yield 1;
    yield 2;
}

const i = iteratar();

console.log(i.next());
console.log(i.next());
console.log(i.next());


const generatorIterator = (list) => {
    let idx = 0;
    const len = list.length;
      return {
          next() {
              return {
                  done: idx>=len,
                  value: list[idx++]
              }
          }
      }
};

const u = generatorIterator(nums);

console.log(u.next())
console.log(u.next())
console.log(u.next())
console.log(u.next())
