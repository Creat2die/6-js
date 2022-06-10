/* Sprendžiam pono Rimanto užduotis*/


/*
Kintamųjų inicijavimas

Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
Sukurti 3 kintamuosius su teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
*/
/*
//1-1
const a = 5;
console.log(a);

const b = 6;
console.log(b);

const c = 7;
console.log(c);

//1-2
const text1 = 'Labas';
console.log(text1);

const text2 = 'vakaras';
console.log(text2);

const text3 = 'Pone';
console.log(text3);

//1-3
const mas1 = [2, 5, 8, 11, 201];
console.log(mas1);

const mas2 = [2, 22, 8, 11, 201];
console.log(mas2);

const mas3 = [2, 555, 8, 11, 201];
console.log(mas3);

//1-4
const mar1 = ['as', 'tu', 'jis', 'ji', 'jam'];
console.log(mar1);

const mar2 = ['as', 'tavo', 'jis', 'ji', 'jam'];
console.log(mar2);

const mar3 = ['as', 'jusu', 'jis', 'ji', 'jam'];
console.log(mar3);
*/
/*
Veiksmai su kintamaisiais

Susumuoti visus skaičiaus tipo kintamuosius
Rezultatą išvesti į console
Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
Rezultatą išvesti į console
Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
1-2+3-4+5
Rezultatą išvesti į console
Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas
*/
/*
//2-1
const skaicius = 5;
const skaicius2 = 6;
console.log(skaicius + skaicius2);

//2-2
const zodis1 = 'labas ';
const zodis2 = 'vakaras';
console.log(zodis1+zodis2);

//2-3
const a = 1;
const b = 2;
const c = 3;
const d = 4;
const e = 5;
console.log(a-b+c-d+e);

//2-4
const a1 = 'labas, ';
const b1 = 'vakaras, ';
const c1 = 'petraiti';
console.log(a1+b1+c1);
*/

/*
Kintamųjų palyginimas
Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

Tarpusavyje palyginti skaičiaus tipo kintamuosius:
kuris didesnis
kuris mažesnis
ar jie lygūs
ar jie nelygūs
kuris didesnis arba lygus
kuris mažesnis arba lygus
Išvesti teksto tipo kintamųjų ilgius
Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
kuris didesnis
kuris mažesnis
ar jie lygūs
ar jie nelygūs
kuris didesnis arba lygus
kuris mažesnis arba lygus
Išvesti sąrašo tipo kintamųjų ilgius
Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
kuris didesnis
kuris mažesnis
ar jie lygūs
ar jie nelygūs
kuris didesnis arba lygus
kuris mažesnis arba lygus
*/
/*
//3-1
const a = 5;
const b = 8;

if(a > b){
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}
if(a < b){
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}
if(a === b){
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

if(a !== b){
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}
if(a >= b){
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}
if(a <= b){
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}
//3-2
const c = 'zuikis';
const d = 'Petriukas';
console.log( c.length);
console.log( d.length);

//3-3
if(c > d){
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}
if(c < d){
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}
if(c === d){
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}
if(c !== d){
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}
if(c <= d){
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}
if(c >= d){
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

//3-4
const masyvas = [8, 5, 6];
const masyvas2 = [11, 25, 36, 152];

console.log(masyvas.length);
console.log(masyvas2.length);

// 3-5
if(masyvas > masyvas2){
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}
if(masyvas < masyvas2){
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}
if(masyvas === masyvas2){
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}
if(masyvas !== masyvas2){
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}
if(masyvas >= masyvas2){
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}
if(masyvas <= masyvas2){
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}
*/

/*
Ciklo for panaudojimas
Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
0 … 0
0 … 4
0 … 100
574 … 815
-50 … 50
-70 … 30
panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
pvz.: “abcdef” -> “fedcba”
Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
0 - 11
8 - 31
-18 - 18
rezultatą pateikti tokiu formatu:
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.
*/

//4-1 
let kintamasis = null;
for (i = 0; i <= 0; i++){
    kintamasis += i;
}
console.log(kintamasis);

let kintamasis1 = null;
for (i = 0; i <= 4; i++){
    kintamasis1 += i;
}
console.log(kintamasis1);

let kintamasis2 = null;
for (i = 0; i <= 100; i++){
    kintamasis2 += i;
}
console.log(kintamasis2);

let kintamasis3 = null;
for (i = 574; i <= 815; i++){
    kintamasis3 += i;
}
console.log(kintamasis3);

let kintamasis4 = null;
for (i = -50; i <= 50; i++){
    kintamasis4 += i;
}
console.log(kintamasis4);

let kintamasis5 = null;
for (i = -70; i <= 30; i++){
    kintamasis5 += i;
}
console.log(kintamasis5);


//4-2

const skaiciai =  "abcdef"


let atsakymas='';
for (i = skaiciai.length - 1; i >= 0 ; i--){
 
    atsakymas += skaiciai[i];

}
console.log(atsakymas);

//5-2
let sk = null;
for (i= 0; i <=11; i++){
    if (i / 3 === 1 || i / 5 === 1 || i / 7 === 1 ){
        sk += 1;
    }
}
console.log(sk);

let sk1 = null;
for (i= 8; i <=31; i++){
    if (i / 3 === 1 || i / 5 === 1 || i / 7 === 1  ){
        sk1 += 1;
    }
}
console.log(sk1);

let sk2 = null;
for (i= -18; i <=18; i++){
    if (i / 3 === 1 || i / 5 === 1 || i / 7 === 1 ){
        sk2 += 1;
    }
}
console.log(sk2);