const marks = [ 10, 2 , 8 , 6]

const minMark = Math.min (... marks);

console.log(minMark);

const maxMark = Math.max (... marks);

console.log(maxMark);


const pirmas = [ 10, 7 , 4];

const antras = [ 100, 77 , 44];

const pirmasAntras = [...pirmas, ...antras];
const antrasPirmas = [...antras, ...pirmas];

console.log(pirmasAntras);
console.log(antrasPirmas);


const pirmoKopija = pirmas;

pirmoKopija[0] = 'labas';
console.log(pirmoKopija);
console.log(pirmas);

console.log('--------');
const mokiniai = ['petras', 'maryte', 'jonukas'];
console.log(mokiniai);

//const mokiniuKopija = mokiniai; //gaunu nuoroda į atminti
const mokiniuKopija = [...mokiniai]; //gaunu pirmo lygio kopija
console.log(mokiniuKopija);
console.log('--------');

mokiniai[0] = 111;
console.log(mokiniai);
console.log(mokiniuKopija);