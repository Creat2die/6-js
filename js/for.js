/*
CIKLAI:
for, for-of, foreach, while, do-while, map, filter, reduce, sort, ...

sablonas
for () {}
*/

const kupiuros = [20, 5, 50, 100, 20, 10];

let pinigine = 0;

for (let i=0; i< kupiuros.length; i++){
    const kupiura = kupiuros[i];
    pinigine += kupiura;
    console.log(i, '|', kupiuros[i], '->', pinigine);
}
console.log('END');
console.log(pinigine);


console.log('-------');
console.log([].length);
console.log(['a'].length);
console.log(['a', 'b'].length);
console.log(['a', 'b', 'labas'].length);

const word = 'Karšta vasara';
for (let i = 0; i< word.length; i++){
    const letter = word[i];
    console.log(i, ')', letter);
}

console.clear();

for (let i = 10; i > 0 ; i--){
    console.log(i);
}

console.log('--------------');
for (let i = 10; i > 0 ; i--){
    console.log(i);
    if (i === 5 ) {
        break;
    }
}
console.log('--------------');

const money = [5, 10, 20, 50, 100, 5, 10, 20];
const minTarget = 80;
const hand = [];
let handTotal = 0;

for (let i = 0; i < money.length; i++) {
    const value = money[i];
    handTotal += value;
    hand.push(value)
    console.log(` ${i}) ${value} -> total: ${handTotal};`, hand);
    if (handTotal >= minTarget) {
        break;
    }
}
const graza = handTotal - minTarget;
if(graza > 0) {
    console.log(`Graza: ${graza}`);
    console.log(' duotos kupiuros', hand);
} else if (graza === 0 ){
    console.log('duota lygiai kiek reikia');
    console.log('duotos kupiuros', hand);
} else {
    console.log(`tu skoloje dar: ${graza * -1}`);
}
