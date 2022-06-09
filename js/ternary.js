/* 
TERNARY operator
supaprastintas if/else'as

null - neegzituojanti reiksme (einamuoju metu), kuria planuojam gauti
*/


let ats = null;
const a = 4;

const b = 2;

if (a > b){
    ats = 'daugiau';
} else {
    ats = 'Ne daugiau';
}

console.log(ats);

const tern = a > b ? 'daugiau' : ' Ne daugiau';
console.log(tern);

const egz = 1 ? 2 ? 3 : 4 : 5;
console.log(egz);


/*
REIKŠMIŲ POZITYVYMAS/ NEGATYVUMAS
skaiciai -> Viskas Taip išskyrus (0)
null -> Negatyvas
undefined -> negatyvus
boolean
*/

if (8) {
    console.log('Taip');
} else {
    console.log('Ne');
}