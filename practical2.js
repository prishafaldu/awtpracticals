let num = [1, 2, 'prisha',true, false];
console.log('length',num.length);
for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}

num.push(6);
console.log('push',num);
num.pop();
console.log('pop', num);
num.shift();
console.log(' left shift', num);
num.unshift(1);
console.log('unshift', num);
num.join();
console.log('join', num);
delete num[3];
console.log('delete', num);
num = num.concat([1, false, 'hi']);
console.log('concat', num);
num = num.flat();
console.log('flat', num);
num.splice(0, 2);
console.log('splice', num);
num = num.slice(1,3 );
console.log('slice', num);


let person = {name: 'prisha faldu',
  age: 20,
  gender: 'female'};

function show(person) {
  console.log('person information :', person.name + ' ' +'of age '+ ' '+ person.age+ ' ' +'having gender '+ ' '+ person.gender);
  
}

show(person);