

/* 
Kintamuju inicijavimo budai:
const - kai verte negali keissits (default)
let - kai verte norime, jog galetu keistis
var - senas budas  (nenaudoti, jei nenori PROBLEMU)
*/

const username = 'Petras';

let pinigine = 0;
console.log(username, 'pinigineje turi', pinigine, 'pinigu');

pinigine = 1;
console.log(username, 'pinigineje turi', pinigine, 'pinigu');


pinigine = 2;
console.log(username, 'pinigineje turi', pinigine, 'pinigu');


let skaicius = 10;
skaicius = skaicius +3;
skaicius += 3;
skaicius -= 3;
skaicius *= 3;
skaicius %= 7;  /*liekana*/
console.log('skaicius: ', skaicius)