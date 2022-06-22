console.clear();


const family = [
    {
        name: 'Petras',
        age: 99,
        children: [
            {
                name: 'Juozas',
                age: 115,
            },
            {
                name: 'Vytka',
                age: 215,
            },
        ],
    },
    {
        name: 'Maryte',
        age: 187,
        children: [],
    },
];

function oldest(list, depth = 0){
    let age = 0;
    let name = ' ';
    for (const person of list){
        if(person.age > age ){
            age = person.age;
            name = person.name;
        }
        if (person.children && person.children.length > 0){
            const oldestChild = oldest(person.children, depth+1); // {name, age}
            if(oldestChild.age > age ){
                age = oldestChild.age; 
                name = oldestChild.name;       
            } 
        }
    }

    return depth === 0 ? `${name} is ${age} years old` : {name, age};
    //return `${name} is ${age} years old`;
}

console.log(oldest(family)); // Styvas is 105 years old