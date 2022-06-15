console.clear();


const operations = [
    [(a, b) => a + b, '+'],
    [(a, b) => a - b, '-'],
    [(a, b) => a * b, '+'],
];



const userN1 = 7;
const userN2 = 5;
const userAction = 0;


const answer = operations[userAction](userN1, userN2);

console.log(answer );

//nepabaita