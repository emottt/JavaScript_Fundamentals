// var, let, const

var name = 'Emil Zhelyazkov';
console.log(name);
name = 'Steve Jobs';
console.log(name);

// Init var
var greeting;
console.log(greeting);
greeting = 'Hi';
console.log(greeting);

// LET
let name1 = 'Emil Zhelyazkov';
console.log(name1);
name1 = 'Steve Jobs';
console.log(name1);

// CONST
const name2 = 'Emil Zhelyazkov';
console.log(name2);
// name2 = 'Steve Jobs';
// console.log(name2);

const person = {
    name3: 'Emil',
    age: 39
}

person.name3 = 'Sara';

console.log(person);

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);

console.log(numbers);