let p = 28;
console.log(p);

const a = 28;
console.log(a);

let mul = (p,q) => q * p;
console.log(sum(6, 7));

let arry1 = [1,2,3,4,5,6,7];
console.log(...arry1);

for (let i of arry1) {
  console.log(i);
}

let map = new Map();
map.set('name', 'prisha faldu');
map.set('age', 20);
console.log(map);

let set = new Set();
set.add(5);
set.add(7);
set.add(6);
set.delete(7);
console.log(set);


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
let person = new Person('prisha faldu', 20);
console.log(person);


let promise = new Promise((resolve, reject) => {
  resolve('done');
  reject('error');
});
promise.then((value) => {
  console.log(value);
});


let hi = Symbol('hi');
console.log(hi);


function sum(a = 1, b = 9) {
  return a + b;
}
console.log(sum());


function sub(...args) {
  let sub = 0;
  for (let i of args) {
    sub= sub-i;
  }
  return sub;
}
console.log(sub(1,2,3,4,4,5,6));