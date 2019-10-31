const person = {
    firstName: 'Emil',
    lastName: 'Zhelyazkov',
    age: 39,
    email: 'emilt@gmail.com',
    hobbies: ['music', 'sports'],
    address: {
        country: 'Bulgaria',
        city: 'Sofia',
        street: 'Stefan Stambolov 1'
    },
    getBirthYear: function () {
        return 2019 - this.age;
    }
}

let val;

val = person;

// Get specific value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address;
val = person.address.country;
val = person.address['street'];
val = person.getBirthYear();


console.log(val);

const people = [{
        name: 'John',
        age: 35
    },
    {
        name: 'Mike',
        age: 31
    }
];

for (let i = 0; i < people.length; i++) {
    console.log(people[i].name);

}