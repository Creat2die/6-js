


console.clear();

const texts = [
    '',
    'labas',
    'labas rytas',
    'labas rytas Lietuva',
    '    labas',
    'labas    ',
    '    labas         labas '

];

function wordtCount(str) {
        ///.trim  - valo tarpus gale ir priekyje
    const words = str.trim().split(' ').filter(w => w !== '');

 /*   let count = 0;
    for (const word of words){
        if (word !== ''){
            count++;
        }
    }
*/
    return words.length;
}
for ( const text of texts){
    const count = wordtCount(text);
    console.log(count, `"${text}"`);
}
