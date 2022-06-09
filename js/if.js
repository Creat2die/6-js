/* 
SALYGOS SAKINYS

sablonai
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} .... else if () {}

Playginimo operatoriai:
visi: >, <, >=, <=, ==, !=, ===, !===
naudotini: >, <, >=, <=, ===, !===
nenaudotini: ==, !=

Loginiai operatoriai:
&& (and) -turi tenkinti visos salygos
|| (or) + turi tenkinti bent viena salyga


*/

const a =7;
const b = 5;

if (a > b) {
    console.log('Pirmas daugiau un antra');
} else {
    console.log('Pirmas nera daugiau uz antra');
}

if ( '5' === 5) {
    console.log('Taip');
} else {
    console.log('Ne');
}

const diena = 31;
if(diena === 1){
    console.log('Pirmadienis');
} else {
    if (diena === 2) {
        console.log('Antradienis');
    } else {
        if (diena === 3) {
            console.log('Trečiadienis');
        } else
        if (diena === 4) {
            console.log('Ketvirtadienis');
        } else
        if (diena === 5) {
            console.log('Penktadienis');
        } else
        if (diena === 6) {
            console.log('Šeštadienis');
        } else
        if (diena === 7) {
            console.log('Sekmadienis');
        } else {
            console.log('Prastai pasirinkta diena');
        }
}}


console.log('----------------------------');
const day = 6;
if (day === 1 ){
    console.log('pirmadienis');
} else if (day === 2 ){
    console.log('antradienis');
} else if (day === 3 ){
    console.log('treciadienis');
} else if (day === 4 ){
    console.log('ketvirtadienis');
} else if (day === 5 ){
    console.log('penktadienis');
} else if (day === 6 ){
    console.log('sestadienis');
} else if (day === 7 ){
    console.log('sekmadienis');
} else {
    console.log('neegzistuoja');
}


console.log('----------------------------');

const temp = 18;
const lietus = false;
const nuoKadaSilta = 12;

if (lietus === true){
    if (temp > nuoKadaSilta){
        console.log('varom nuogi');
    } else {
        console.log('paimk palta ir sketi');
    } 
}
    else {
    if (temp > nuoKadaSilta){
        console.log('gali eiti su maike');
    } else {
        console.log('pasiimk striuke');
    }
}   

console.log('----------------------------');


if (lietus === true && temp >= nuoKadaSilta){
    console.log('varom nuogi');
} else if (lietus === true && temp < nuoKadaSilta ) {
    console.log('pasiimk palta ir sketi');
} else if (lietus === false && temp >= nuoKadaSilta) {
    console.log('galim eit su maike');
} else if (lietus === false && temp < nuoKadaSilta) {
    console.log('pasiim striukes');
} else {
    console.log('Nesamone :X');
}

