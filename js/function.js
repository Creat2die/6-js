/*
FUNCTION:
logikos gabalas, kuri galim/ norim perpanaudoti

- gali gauti parametrus (pradines sąlygas)
- visada grazina svo rezultata:
    - mes galim nurodyti koki rezultata grazinti
    - jei nenurodysime tai jbus grazintas "defoultinis" rezultatas
        - defoultinis rezultas yra undefined
*/

function sumavimas(a, b){
    return a + b;
}

const n1 = 4;
const n2 = 5;
const rez1 = sumavimas(n1, n2);
console.log(rez1);