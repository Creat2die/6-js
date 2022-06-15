//objektai

/*
const petrasfirstName = "Petras"
const petrasage = 99;
const petrasIsMarries = true;

//masyvas masive duomenu istraukimas
const people = [
    ['Jonas', 88, true, [10, 5, 4, 9]],
    ['Agne', 88, true, [10, 5, 4, 9]],
    ['Petras', 88, true, [10, 5, 4, 9]],
];

const personIndex = 0;
const personName = people[personIndex][0];
const personFirstMark = people[personIndex][3][0];

console.log(personName);
console.log(personFirstMark);

*/

const people = [
    {
        name:'Jonas', 
        age : 88,
        isMarried: true, 
        marks: [10, 5, 4, 9],
    },
    {
        name:'Agne', 
        age : 88,
        isMarried: true, 
        marks: [10, 5, 4, 9],
    },
    {
        name:'Petras', 
        age : 88,
        isMarried: true, 
        marks: [10, 5, 4, 9],
    },
];

const pn = people[1]['name'];
const pa = people[1]['age'];
const pm = people[1]['marks'];

const pn2 = people[1].name;
const pa2 = people[1].age;
const pm2 = people[1].marks;

console.log(pn);
console.log(pa);
console.log(pm);
console.log('----------');
// gender: true = male ; false = female
const students = [
    {
        name: 'Petras',
        dob: 2015,
        marks: [],
        gender: true,
        responsableHumans: [
            {
                name: 'Jonas',
                status: 'parent',
                dob: 1999,
                phone: [
                    865166565,
                    861651651,
                ],
                emeil: [
                    'jonas@jonas.lt',
                    'jonukas@jopta.lt',
                ],
                address: {
                    country: 'LTU',
                    city: 'Vilnius',
                    street: 'Verkiu g.',
                    buildingNr: 1,
                    appartmentNr: 13,

                },
            },
                {
                    name: 'Jogrilisnas',
                    status: 'parent',
                    dob: 1999,
                    phone: [
                        865166565,
                        861651651,
                    ],
                    emeil: [
                        'jonas@jonas.lt',
                        'jonukas@jopta.lt',
                    ],
                    address: {
                        country: 'LTU',
                        city: 'Vilnius',
                        street: 'Verkiu g.',
                        buildingNr: 1,
                        appartmentNr: 13,
    
                    }
                },
            
        ] 
    },
    {
        name: 'Elzbieta',
        dob: 2015,
        marks: [],
        gender: true,
        responsableHumans: [
            {
                name: 'Jonas',
                status: 'parent',
                dob: 1999,
                phone: [
                    865166565,
                    861651651,
                ],
                emeil: [
                    'jonas@jonas.lt',
                    'jonukas@jopta.lt',
                ],
                address: {
                    country: 'LTU',
                    city: 'Vilnius',
                    street: 'Verkiu g.',
                    buildingNr: 1,
                    appartmentNr: 13,

                }
            }
        ] 
    },
    {
        name: 'Valentina',
        dob: 2015,
        marks: [],
        gender: true,
        responsableHumans: [
            {
                name: 'Jonas',
                status: 'parent',
                dob: 1999,
                phone: [
                    865166565,
                    861651651,
                ],
                emeil: [
                    'jonas@jonas.lt',
                    'jonukas@jopta.lt',
                ],
                address: {
                    country: 'LTU',
                    city: 'Vilnius',
                    street: 'Verkiu g.',
                    buildingNr: 1,
                    appartmentNr: 13,

                }
            }
        ] 
    }
];

//const respHumans = students[0]['responsableHumans'];

const respHumans = students[0].responsableHumans;
//console.log(respHumans);

let nr = 0;
for (const human of respHumans){
    console.log(++nr, ')', human.name);

    for (const phone of human.phone){
        console.log('-', phone);
    }
}

console.log('-------');
for (let i = 0; i < respHumans.length; i++){
    const human = respHumans[i];
    console.log(human.name);

    for (let j = 0; j< human.phone.length; j++){
        const phone = human.phone[j];
        console.log('-', phone);
    }
}

console.log('-----------');

console.log(students[0].responsableHumans[1].address.street,
     students[0].responsableHumans[1].address.buildingNr
     );