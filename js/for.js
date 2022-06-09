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