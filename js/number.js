/* 

NUMBERS:

"normalus":
-sveikieji
-desimtainiai

"nenormalus"
- ne skaicius
- negalybes

*/

// sveikasis
const a = 0;

//desimtainiai
const b = 3.14;

// neigiami
const c = -7;

const d = Infinity;
const e = -Infinity;

// neskaicius kuris yra skaicius

const f = NaN; // not-a-number

// kelimas laipsniu
console.log(3 * 3);
console.log(3 ** 3);
console.log(3 ** 4);
console.log(3 ** 5);
console.log(3 ** 6);


console.log(Math.PI);
console.log(Math.E);

console.log(Math.abs(7));
console.log(Math.abs(-7));

//apvalinimas i virsu
console.log(Math.ceil(2.0001));
console.log();

console.log(2.0001, '-> ceil ->', Math.ceil(2.0001)); 


//apvalinimas i apacia
console.log(Math.floor(2.99999));

//apvalinimas
console.log(Math.round(5.45));

//laipsnio kelimas
console.log(Math.pow(2, 4));

// didiziausia reiksme
console.log(Math.max(1, 10, 8));
//maziausia reiksme
console.log(Math.min(1, -10, 8));

//randomas [0..1)
console.log(Math.random());


// skanies traukimo
console.log(Math.sqrt(81));

//ignoruojami skaiciai po kablelio
console.log(Math.trunc(3.47));