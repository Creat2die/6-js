//split (karpymas)

console.clear();
const str = 'labas rytas Lietuva';
const words = str.split(' ');
const wordCount = words.length;
console.log(words);
console.log(wordCount);

const str2 = "Vasara";
const words2 = str2.split('a');
console.log(words2);

const person = "Vardenis Paverdenis";
const parts = person.split(' ').map(s => s[0]);

console.log(parts);

const inicialai = parts.join('. ') + '.';
console.log(inicialai);

/*
const person = "Vardenis Paverdenis";
const inicialai = person;
const parts = person.split(' ')
.map(s => s[0])
.join('. ') + '.';
console.log(inicialai);
*/

let inicialai2 = person[0];
for (let i = 0; i<person.length; i++){
    const letter = person [i];
    if (person[i-1] === " "){
        inicialai2 += '.' + letter;
    }
}
inicialai2 += '.';
console.log(inicialai2);