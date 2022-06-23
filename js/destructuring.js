console.clear();

const person = {
    name: 'Petras',
    age: 99,
    isMarried: true,
    children: [
        {
            name: 'Bart',
            age: 50,
        },
        {
            name: 'Liza',
            age: 60,
        },
    ]
}
/*
const name = person.name;
const isMarried = person.isMarried;
const age = person.age;
*/

const {age, name, children} = person;

const [bart, liza] = children;
console.log(name);
console.log(children);
console.log(bart);
console.log(liza);



const {age: bartAge} = bart;
const {age: lizaAge} = liza;
console.log('bartage: ', bartAge);
console.log('Liza age: ', lizaAge);

const marks = [1, 2, 3, 4, 5];
/*
const first = marks[0];
const second = marks[1];
*/

const [first, second, ...other] = marks;

console.log(first);
console.log(second);
console.log(other);