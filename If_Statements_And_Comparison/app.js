const id = '100';

// Equal To
if (id == 100) {
  console.log('Correct');
} else {
  console.log('Incorrect');
}

// Not Equal To
if (id != 101) {
  console.log('Correct');
} else {
  console.log('Incorrect');
}

// Equal To Value & Type
if (id === 100) {
  console.log('Correct');
} else {
  console.log('Incorrect');
}

// Not Equal To Value & Type
if (id !== 100) {
  console.log('Correct');
} else {
  console.log('Incorrect');
}

// Test if undefined
if (id) {
  console.log(`The ID is ${id}`);
} else {
  console.log('No ID');
}

// Greater Or Less Than
if (id >= 200) {
  console.log('Correct');
} else {
  console.log('Incorrect');
}

// IF ELSE
const color = 'red';

if (color === 'red') {
  console.log('Color is red');
} else if (color === 'blue') {
  console.log('Color is blue');
} else {
  console.log('Color is not red or blue');
}

const name = 'Steve';
const age = 20;

if (age > 0 && age < 12) {
  console.log(`${name} is child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR ||
if (age < 16 || age > 65) {
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

// TERNRY OPERATOR
console.log(id === 100 ? 'Correct' : 'Incorect');
