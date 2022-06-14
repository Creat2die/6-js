/* 
SWICH
salygu palyginimas, beveik kaip if () {}

*/
console.clear();

const day = 2;

switch(day) {
    case 1:
        console.log('pirmadienis');
        break;
    case 2:
        console.log('antradienis');
        break;
    case 3:
        console.log('treciadienis');
        break;
    case 4:
        console.log('ketvirtadienis');
        break;
    case 5:
        console.log('penktadienis');
        break;
    case 6:
        console.log('sestadienis');
        break;
    case 7:
        console.log('sekmadienis');
        break;
    default:
        console.log('netinkama');
        break;
}


const weekday = 2 ;

switch (weekday) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('darbodiena');
        break;
    case 6:
    case 7:
        console.log('savaitgalis');
        break;
    default:
        console.log('tokios dienos savaiteje nera');
        break;
}

if (weekday === 1 || weekday === 2 || weekday === 3 || weekday === 4 || weekday === 5 ){
    console.log('darbo diena');
} else if (weekday === 6 || weekday === 7 ){
    console.log('savaitgalis');
} else {
    console.log('savaites dienos nera tokios');
}

console.log('----------------------------------------');

const stotele = 'Lvovo'

switch (stotele){
    case 'Parko':
        console.log('Parko');
    case 'Geniu':
        console.log('Geniu');
    case 'Tremtiniu':
        console.log('Tremtiniu');
    case 'Rudens':
        console.log('Rudens');
    case 'Mindaugo':
        console.log('Mindaugo');
    case 'Zalias tiltas':
        console.log('Zalias tiltas');
        break;
    case 'Lvovo':
        console.log('Lvovo');
    case 'Vasara':
        console.log('Vasara');
    case 'Rudens':
        console.log('Rudens');
    case 'Tremtiniu 2':
        console.log('Tremtiniu');
    case 'Parko 2':
        console.log('Parko');
}