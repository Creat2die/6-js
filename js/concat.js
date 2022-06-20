//concat sujungia masyvus

const a = [1, 2, 3];
const b = [4, 5, 6];
const e = [7, 8, 9];

console.log('a: ', a);
console.log('b: ', b);


console.log('---------');
const c1 = a.concat(b);
const c = a.concat(b, e);
const d = [...a, ...b, ...e];



console.log('c: ', c);
console.log('d: ', d);

