/*console.clear();

const points = [19, 11, 47, 79, 227, 131, 3, 57, 9, 0, 236, 99, 132, 39, 150];

function avarange(list) {
    
}


function mediana(list){
    const sortedList = list.sort((a,b) => a - b );
    const size = list.length;
    if (size % 2 === 0){
        const second = sortedList[size / 2];
        const first = sortedList [size / 2 -1];
        return (first + second) / 2
    } else {
        return sortedList[ Math.floor(size / 2)];
    }
}

console.log('Mediana: ', mediana(points));
*/


const vienas = [2, 5];
const du = [15, 32];
const s = [vienas, du];

let didelis = [];/*
let zing = 0;

for(i =0; i< stairs.length; i++){
    console.log(stairs[i]);
    console.log('----');
    didelis = [...didelis, ...stairs[i]];
}
for (i=0; i<didelis.length; i++){
    zing += didelis[i];
    console.log(zing);
}
*/
let zing = 0;
  
for(i =0; i<s.length; i++){
  for (n=0; n<s[i].length; n++){
    zing += s[i][n];    
  }
}



/*console.log(stairs);*/
console.log(zing);
