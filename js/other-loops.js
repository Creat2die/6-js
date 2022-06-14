const marks = [10, 2, 8, 4, 6];

console.log('--------------for');
//for
for (let i =0 ; i < marks.length; i++) {
    const mark  = marks[i];
    console.log(marks[i]);
}

console.log('--------------for-of');
//for-of
for (const mark of marks){
    console.log(mark);
}


console.log('--------------while');
// while
let i = 0;
while (i < marks.length) {
    const mark = marks[i];
    console.log(mark);
    i++
}

//do-while
console.log('--------------do-while');

let i2 = 0;
do {
    const mark = marks[i2];
    console.log(mark);
    i2++
} while ( i2 < marks.length)

console.log('--------------foreach');

// foreach  (pats neefektyviausias) (yra 3 kintakieji)

/*
marks.forEach((mark, i, list) => {
    console.log(mark, i ,list);
})
*/
marks.forEach(mark => {
    console.log(mark);
})


// map - kaip modifikuoti kiekviena narį
console.log('--------------map');

const rezMap = marks
    .map(mark => mark * 2)
    .map(mark => mark > 10 ? 10 : mark );

const rezMap2 = marks
    .map(mark => mark * 2 > 10 ? 10 : mark *2)

console.log(marks);
console.log(rezMap);
console.log(rezMap2);

// filter
console.log('--------------filter');

const filterMarks = marks
    .filter(mark => mark > 5 )
    .filter(mark => mark < 7);

    const filterMarks2 = marks.filter(mark => mark > 5 && mark < 7 );

    
console.log(marks);
console.log(filterMarks);
console.log(filterMarks2);


// map & filter combo
console.log('--------------filter and map');

const mapFilter = marks
    .map(mark => mark *2)
    .filter(mark => mark > 5);

console.log(marks);
console.log(mapFilter);


// reduce (subendrinti)
console.log('--------------reduce');
//total yra pirmasis narys jei jis yra nepriskirtas
const sumReduce = marks.reduce((total, mark) => total + mark);
const sumReduce20 = marks.reduce((total, mark) => total + mark, 20);

console.log(sumReduce); 
console.log(sumReduce20); 

const difReduce = marks.reduce((total, mark) => total - mark);
const difReduce20 = marks.reduce((total, mark) => total - mark, 20);

console.log(difReduce); 
console.log(difReduce20); 
